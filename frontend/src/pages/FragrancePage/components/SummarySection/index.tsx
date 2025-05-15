import * as S from './styles';

interface SummarySectionProps {
    title: string;
    onGenerate: () => void;
    isLoading: boolean;
    content: string | null;
    variant: 'fragrance' | 'reviews';
}

const SummarySection = ({ 
    title, 
    onGenerate, 
    isLoading, 
    content, 
    variant 
}: SummarySectionProps) => {
    const getButtonText = () => {
        if (isLoading) return variant === 'fragrance' ? "Generating..." : "Analyzing...";
        if (content) return variant === 'fragrance' ? "Summary Generated" : "Analysis Complete";
        return variant === 'fragrance' ? "Generate Fragrance Summary" : "Summarize Reviews";
    };

    return (
        <S.SummarySection>
            <S.SummaryTitle>{title}</S.SummaryTitle>
            <S.GenerateSummaryButton 
                onClick={onGenerate} 
                disabled={isLoading || content !== null}
                $variant={variant}
            >
                {getButtonText()}
            </S.GenerateSummaryButton>
            {content && <S.SummaryText $variant={variant}>{content}</S.SummaryText>}
        </S.SummarySection>
    );
};

export default SummarySection;