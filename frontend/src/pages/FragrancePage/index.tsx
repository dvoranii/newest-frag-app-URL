import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as S from "./styles";
import type { FragranceData } from '../../types/fragrance';
import LoadingSpinner from '../../components/LoadingSpinner';

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
    const [fragranceData, setFragranceData] = useState<FragranceData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (location.state?.fragranceData) {
            setFragranceData(location.state.fragranceData);
        }
        setIsLoading(false);
    }, [location.state]);

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

                        

                        {/* Notes Column */}
                        
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
                </S.CardContent>
            </S.Card>
        </S.Container>
    );
};

export default FragrancePage;