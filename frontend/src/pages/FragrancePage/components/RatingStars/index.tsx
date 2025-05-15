import * as S from './styles';

interface RatingStarsProps {
    rating: number;
}

const RatingStars = ({ rating }: RatingStarsProps) => {
  return (
    <S.StarsContainer>
      {[...Array(5)].map((_, i) => {
        const fillPercentage = Math.min(Math.max(rating - i, 0), 1) * 100;
        return (
          <S.StarContainer key={i}>
            <S.StarEmpty>☆</S.StarEmpty>
            <S.StarFill $fillPercentage={fillPercentage}>★</S.StarFill>
          </S.StarContainer>
        );
      })}
    </S.StarsContainer>
  );
};

export default RatingStars;