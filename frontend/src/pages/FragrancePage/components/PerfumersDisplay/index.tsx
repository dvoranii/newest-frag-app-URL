import * as S from './styles';
import type { Perfumer } from '../../../../types/fragrance';

interface PerfumersDisplayProps {
    perfumers?: Perfumer[];
}

const PerfumersDisplay = ({ perfumers }: PerfumersDisplayProps) => {
    if (!perfumers || perfumers.length === 0) return null;

    return (
        <S.PerfumersContainer>
            <S.PerfumersContainerInner>
                <S.PerfumerTitleBG>
                    <S.PerfumerSectionTitle>Perfumers</S.PerfumerSectionTitle>
                </S.PerfumerTitleBG>   
                <S.PerfumersGrid>
                    {perfumers.map((perfumer, index) => (
                        <S.PerfumerItem key={index}>
                            <S.PerfumerImage src={perfumer.image} alt={perfumer.name} />
                            <S.PerfumerName>{perfumer.name}</S.PerfumerName>
                        </S.PerfumerItem>
                    ))}
                </S.PerfumersGrid>
            </S.PerfumersContainerInner>
        </S.PerfumersContainer>
    );
};

export default PerfumersDisplay;