import * as S from './styles';
import RatingStars from '../RatingStars/index';
import type { FragranceData } from '../../../../types/fragrance';

interface FragranceHeaderProps {
    fragranceData: FragranceData;
}

const FragranceHeader = ({ fragranceData }: FragranceHeaderProps) => {
    return (
        <S.NameBrandGenderContainerOuter>
            <S.NameBrandGenderContainerInner>
                <S.Brand>{fragranceData.brand}</S.Brand>
                <S.NameGenderContainer>
                    <S.Name>{fragranceData.name}</S.Name>
                    {fragranceData.gender && (
                        <S.GenderIndicator 
                            $type={fragranceData.gender}
                            title={fragranceData.gender === 'men' ? 'For Men' : 
                                   fragranceData.gender === 'women' ? 'For Women' : 'Unisex'}    
                        >
                            {fragranceData.gender === 'men' ? 'M' : 
                             fragranceData.gender === 'women' ? 'W' : 'U'}
                        </S.GenderIndicator>
                    )}
                </S.NameGenderContainer>

                {fragranceData.rating && (
                    <S.RatingContainer>
                        <S.RatingValue>{fragranceData.rating.value.toFixed(1)}</S.RatingValue>
                        <RatingStars rating={fragranceData.rating.value} />
                        <S.RatingCount>({fragranceData.rating.count.toLocaleString()} ratings)</S.RatingCount>
                    </S.RatingContainer>
                )}
            </S.NameBrandGenderContainerInner>
        </S.NameBrandGenderContainerOuter>
    );
};

export default FragranceHeader;