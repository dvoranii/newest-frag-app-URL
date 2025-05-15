import * as S from './styles';
import type { Accord } from '../../../../types/fragrance';

interface AccordsDisplayProps {
    accords?: Accord[];
}

const AccordsDisplay = ({ accords }: AccordsDisplayProps) => {
    if (!accords || accords.length === 0) return null;

    return (
        <S.AccordsColumn>
            <S.SectionTitle>Accords</S.SectionTitle>
            <S.AccordsGrid>
                {accords.map((accord, index) => (
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
    );
};

export default AccordsDisplay;