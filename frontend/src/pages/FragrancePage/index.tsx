import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as S from "./styles";
import type { FragranceData } from '../../types/fragrance';
import { getCachedFragrance, cacheFragrance } from '../../services/cache.service';
import FindMyFragLogo from '/assets/findmyfrag.png';
import { useFragranceSummary } from '../../hooks/useFragranceSummaries';
import FragranceHeader from './components/FragranceHeader';
import FragranceImage from './components/FragranceImage';
import AccordsDisplay from './components/AccordsDisplay';
import NotesDisplay from './components/NoteDisplay';
import PerfumersDisplay from './components/PerfumersDisplay';
import SummarySection from './components/SummarySection';


const FragrancePage = () => {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [fragranceData, setFragranceData] = useState<FragranceData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const navigate = useNavigate();

      const {
        
        isSummaryLoading,
        aiSummary,
        handleGenerateSummary,
        isReviewsLoading,
        reviewsSummary,
        handleSummarizeReviews,

        } = useFragranceSummary();

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
                        <FragranceHeader fragranceData={fragranceData} />
                        <S.DetailsColumn>
                            <S.ImageAndAccordsContainer>
                                <FragranceImage 
                                    image={fragranceData.image} 
                                    name={fragranceData.name}
                                    brandLogo={fragranceData.brandLogo}
                                    brand={fragranceData.brand}
                                />
                            <AccordsDisplay accords={fragranceData.accords} />
                            </S.ImageAndAccordsContainer>
                            <NotesDisplay notes={fragranceData.notes}/>
                               
                            
                        </S.DetailsColumn> 
                        
                    </S.MainContentContainer>

                    <PerfumersDisplay perfumers={fragranceData.perfumers} />

                    <S.DualSummaryContainer>
                        <SummarySection
                                title="AI Fragrance Summary"
                                onGenerate={() => handleGenerateSummary(fragranceData.brand, fragranceData.name)}
                                isLoading={isSummaryLoading}
                                content={aiSummary}
                                variant="fragrance"
                            />
                            <SummarySection
                                title="AI Reviews Analysis"
                                onGenerate={handleSummarizeReviews}
                                isLoading={isReviewsLoading}
                                content={reviewsSummary}
                                variant="reviews"
                            />
                    </S.DualSummaryContainer>
                </S.CardContent>
            </S.Card>
        </S.Container>
        </>
    );
};

export default FragrancePage;