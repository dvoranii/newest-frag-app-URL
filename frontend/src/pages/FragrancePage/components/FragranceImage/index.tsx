import * as S from './styles';

interface FragranceImageProps {
    image: string;
    name: string;
    brandLogo?: string;
    brand?: string;
}

const FragranceImage = ({ image, name, brandLogo, brand }: FragranceImageProps) => {
    return (
        <S.ImageColumn>
            <S.Image src={image} alt={name} />
            {brandLogo && (
                <S.BrandLogo 
                    src={brandLogo} 
                    alt={brand}
                />
            )}
        </S.ImageColumn>
    );
};

export default FragranceImage;