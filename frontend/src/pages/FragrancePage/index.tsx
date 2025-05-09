
import { useLocation } from 'react-router-dom';
import * as S from "./styles";

interface FragranceData {
    name: string;
    brand: string;
    image: string;
    gender?: string;
    rating?: {
        value: number;
        count: number;
    };
    accords?: {
        name: string;
        width: string;
        background: string;
        color: string;
    }[];
    brandLogo?: string;
    notes?: {
        top: { name: string; image: string }[];
        middle: { name: string; image: string }[];
        base: { name: string; image: string }[];
    };
    perfumers?: { name: string; image: string }[];
}

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
    const fragranceData = location.state?.fragranceData as FragranceData;

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
                    <S.ImageContainer>
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
                    </S.ImageContainer>
                    <S.DetailsContainer>
                        <S.Brand>{fragranceData.brand}</S.Brand>
                        <S.Name>{fragranceData.name}</S.Name>
                        {fragranceData.gender && (
                            <S.Gender>For {fragranceData.gender}</S.Gender>
                        )}

                        {fragranceData.rating && (
                            <S.RatingContainer>
                                <S.RatingValue>{fragranceData.rating.value.toFixed(1)}</S.RatingValue>
                                <S.StarsContainer>
                                    {renderRatingStars(fragranceData.rating.value)}
                                </S.StarsContainer>
                                <S.RatingCount>({fragranceData.rating.count.toLocaleString()} ratings)</S.RatingCount>
                            </S.RatingContainer>
                        )}

                           
                        {fragranceData.accords && fragranceData.accords.length > 0 && (
                            <S.AccordsContainer>
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
                            </S.AccordsContainer>
                        )}

                        {fragranceData.notes && (
                            <S.NotesContainer>
                                <S.SectionTitle>Note Breakdown</S.SectionTitle>
                                
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

                                {fragranceData.notes?.middle && fragranceData.notes.middle.length > 0 && (
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

                                {fragranceData.notes?.base && fragranceData.notes.base.length > 0 && (
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
                            </S.NotesContainer>
                        )}

                        

                        {fragranceData.perfumers && fragranceData.perfumers.length > 0 && (
                            <S.PerfumersContainer>
                                <S.SectionTitle>Perfumers</S.SectionTitle>
                                <S.PerfumersGrid>
                                    {fragranceData.perfumers.map((perfumer, index) => (
                                        <S.PerfumerItem key={index}>
                                            <S.PerfumerImage src={perfumer.image} alt={perfumer.name} />
                                            <S.PerfumerName>{perfumer.name}</S.PerfumerName>
                                        </S.PerfumerItem>
                                    ))}
                                </S.PerfumersGrid>
                            </S.PerfumersContainer>
                        )}
                    </S.DetailsContainer>
                </S.CardContent>
            </S.Card>
        </S.Container>
    );
};

export default FragrancePage;