// /src/pages/FragrancePage/components/RatingStars/index.tsx
import * as S from './styles';

interface RatingStarsProps {
    rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
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
    
    return <S.StarsContainer>{stars}</S.StarsContainer>;
};

export default RatingStars;