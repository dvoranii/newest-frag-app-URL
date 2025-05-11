import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as S from "./styles";
import type { FragranceData } from '../../types/fragrance';
import { getCachedFragrance, cacheFragrance } from '../../services/cache.service';
import { generateFragranceSummary } from '../../services/api.service';
import FindMyFragLogo from '/assets/findmyfrag.png';

const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<S.Star key={i}>★</S.Star>);
        } else if (i === fullStars && hasHalfStar) {
            stars.push(<S.Star key={i}>½</S.Star>);
        } else {
            stars.push(<S.Star key={i} $empty>☆</S.Star>);
        }
    }
    
    return stars;
};

const FragrancePage = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [fragranceData, setFragranceData] = useState<FragranceData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const [isSummaryLoading, setIsSummaryLoading] = useState(false);
    const [aiSummary, setAiSummary] = useState<string | null>(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        const cachedData = getCachedFragrance();
        if (cachedData) {
            setFragranceData(cachedData);
            setIsLoading(false);
            return;
        } 
        const encoded = searchParams.get('data');
        if (encoded) {
            try {
                const decodedData: FragranceData = JSON.parse(decodeURIComponent(encoded));
                setFragranceData(decodedData);
                cacheFragrance(decodedData);
                setIsLoading(false);
            } catch (error) {
                console.error("Error decoding fragrance data from URL:", error);
                navigate('/');

            }
        } else if (location.state?.fragranceData){
            setFragranceData(location.state.fragranceData);
            cacheFragrance(location.state.fragranceData);
            setIsLoading(false);
        } else {
            setIsLoading(false);
            navigate('/');
        }
    }, [searchParams, navigate, location.state]);

    const handleGenerateSummary = async () => {
        if (fragranceData?.brand && fragranceData?.name) {
            setIsSummaryLoading(true);
            try {
                const summary = await generateFragranceSummary(fragranceData.brand, fragranceData.name);
                setAiSummary(summary);
            } catch (error: any) {
                console.error("Error generating summary:", error.message);
                setAiSummary("Failed to generate summary.");
            } finally {
                setIsSummaryLoading(false);
            }
        }
    };

    if (isLoading) {
        return (
            <S.Container>
                <S.Loading>Loading fragrance data...</S.Loading>
            </S.Container>
        );
    }

    if (!fragranceData) {
        return (
            <S.ErrorContainer>
                <S.ErrorTitle>No fragrance data found</S.ErrorTitle>
                <S.ErrorMessage>Please go back and enter a valid Fragrantica URL</S.ErrorMessage>
            </S.ErrorContainer>
        );
    }

    return (
        <>
        <S.HomeLinkContainer>
            <Link to="/">
                <img src={FindMyFragLogo} alt="" />
            </Link>
        </S.HomeLinkContainer>

        <S.Container>

            
            <S.Card>
                <S.CardContent>
                    <S.MainContentContainer>
                        <S.NameBrandGenderContainerOuter>
                            <S.NameBrandGenderContainerInner>
                            <S.Brand>{fragranceData.brand}</S.Brand>
                            <S.NameGenderContainer>
                                <S.Name>{fragranceData.name}</S.Name>
                                {fragranceData.gender && (
                                    <S.GenderIndicator 
                                    $type={fragranceData.gender}
                                    title={fragranceData.gender === 'men' ? 'For Men' : fragranceData.gender === 'women' ? 'For Women' : 'Unisex'}    
                                    >
                                        {fragranceData.gender === 'men' ? 'M' : 
                                        fragranceData.gender === 'women' ? 'W' : 'U'}
                                    </S.GenderIndicator>
                                )}
                            </S.NameGenderContainer>

                            {fragranceData.rating && (
                                <S.RatingContainer>
                                    <S.RatingValue>{fragranceData.rating.value.toFixed(1)}</S.RatingValue>
                                    <S.StarsContainer>
                                        {renderRatingStars(fragranceData.rating.value)}
                                    </S.StarsContainer>
                                    <S.RatingCount>({fragranceData.rating.count.toLocaleString()} ratings)</S.RatingCount>
                                </S.RatingContainer>
                            )}
                        </S.NameBrandGenderContainerInner>
                        </S.NameBrandGenderContainerOuter>
                        <S.DetailsColumn>
                            <S.ImageAndAccordsContainer>
                                <S.ImageColumn>
                                    <S.Image 
                                        src={fragranceData.image} 
                                        alt={fragranceData.name}
                                    />
                                    {fragranceData.brandLogo && (
                                        <S.BrandLogo 
                                            src={fragranceData.brandLogo} 
                                            alt={fragranceData.brand}
                                        />
                                    )}
                                </S.ImageColumn>

                                {fragranceData.accords && fragranceData.accords.length > 0 && (
                                    <S.AccordsColumn>
                                        <S.SectionTitle>Accords</S.SectionTitle>
                                        <S.AccordsGrid>
                                            {fragranceData.accords.map((accord, index) => (
                                                <S.AccordItem 
                                                    key={index}
                                                    $width={accord.width}
                                                    $background={accord.background}
                                                    $color={accord.color}
                                                >
                                                    {accord.name}
                                                </S.AccordItem>
                                            ))}
                                        </S.AccordsGrid>
                                    </S.AccordsColumn>
                                )}
                            </S.ImageAndAccordsContainer>

                                {fragranceData.notes && (
                                    <S.NotesColumn>
                                        <S.NotesSectionTitle >Note Breakdown</S.NotesSectionTitle >
                                        
                                        {fragranceData.notes.top.length > 0 && (
                                            <>
                                                <S.NoteType>Top Notes</S.NoteType>
                                                <S.NotesGrid>
                                                    {fragranceData.notes.top.map((note, index) => (
                                                        <S.NoteItem key={`top-${index}`}>
                                                            <S.NoteImage src={note.image} alt={note.name} />
                                                            <S.NoteName>{note.name}</S.NoteName>
                                                        </S.NoteItem>
                                                    ))}
                                                </S.NotesGrid>
                                            </>
                                        )}

                                {fragranceData.notes.middle && fragranceData.notes.middle.length > 0 && (
                                    <>
                                        <S.NoteType>Middle Notes</S.NoteType>
                                        <S.NotesGrid>
                                            {fragranceData.notes.middle.map((note, index) => (
                                                <S.NoteItem key={`middle-${index}`}>
                                                    <S.NoteImage src={note.image} alt={note.name} />
                                                    <S.NoteName>{note.name}</S.NoteName>
                                                </S.NoteItem>
                                            ))}
                                        </S.NotesGrid>
                                    </>
                                )}

                                {fragranceData.notes.base && fragranceData.notes.base.length > 0 && (
                                    <>
                                        <S.NoteType>Base Notes</S.NoteType>
                                        <S.NotesGrid>
                                            {fragranceData.notes.base.map((note, index) => (
                                                <S.NoteItem key={`base-${index}`}>
                                                    <S.NoteImage src={note.image} alt={note.name} />
                                                    <S.NoteName>{note.name}</S.NoteName>
                                                </S.NoteItem>
                                            ))}
                                        </S.NotesGrid>
                                    </> 
                                )}
                            </S.NotesColumn>
                            )}
                        </S.DetailsColumn> 
                        
                    </S.MainContentContainer>

                    {fragranceData.perfumers && fragranceData.perfumers.length > 0 && (
                        <S.PerfumersContainer>
                            <S.PerfumersContainerInner>
                            <S.PerfumerTitleBG>
                                <S.PerfumerSectionTitle>Perfumers</S.PerfumerSectionTitle>
                            </S.PerfumerTitleBG>   
                                <S.PerfumersGrid>
                                    {fragranceData.perfumers.map((perfumer, index) => (
                                        <S.PerfumerItem key={index}>
                                            <S.PerfumerImage src={perfumer.image} alt={perfumer.name} />
                                            <S.PerfumerName>{perfumer.name}</S.PerfumerName>
                                        </S.PerfumerItem>
                                    ))}
                                </S.PerfumersGrid>
                            </S.PerfumersContainerInner>
                        </S.PerfumersContainer>
                    )}

                    <S.SummarySection>
                        <S.GenerateSummaryButton onClick={handleGenerateSummary} disabled={isSummaryLoading || aiSummary !== null}>
                           {isSummaryLoading ? "Generating Summary..." : aiSummary ? "Summary Generated" : "Generate Fragrance Summary"} 
                        </S.GenerateSummaryButton>
                        {aiSummary && <S.SummaryText>{aiSummary}</S.SummaryText>}
                    </S.SummarySection>
                </S.CardContent>
            </S.Card>
        </S.Container>
        </>
    );
};

export default FragrancePage;