import * as S from './styles';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import ToolTip from '../../../../components/Tooltip';
import { useTypewriter } from '../../../../hooks/useTypewriter';

interface SummarySectionProps {
  title: string;
  onGenerate: () => Promise<void>; 
  isLoading: boolean;
  content: string | null;
  variant: 'fragrance' | 'reviews';
  fragranceData?: { 
    brand?: string;
    name?: string;
  };
}

const SummarySection = ({ 
    title, 
    onGenerate, 
    isLoading, 
    content, 
    variant 
}: SummarySectionProps) => {

    const {displayedText, isTyping} = useTypewriter(content || '', 15);

    const getButtonText = () => {
        if (isLoading) return variant === 'fragrance' ? "Generating..." : "Analyzing...";
        if (content) return variant === 'fragrance' ? "Summary Generated" : "Analysis Complete";
        return variant === 'fragrance' ? "Generate Fragrance Summary" : "Summarize Reviews";
    };

    return (
        <S.SummarySection>
            <S.TitleContainer>
                <S.SummaryTitle>{title}</S.SummaryTitle>
                {variant === 'reviews' && (
                    <ToolTip
                        content="We analyze the 10 most recent reviews to identify common themes and sentiments.This may take a few seconds."
                        position="right"
                    />
                )}
            </S.TitleContainer>
                {variant === 'reviews' && (
                    <S.Disclaimer as="small" role="note">
                        Note: Fragrance preferences are highly personal. For the most accurate impression, we recommend testing the scent yourself.
                    </S.Disclaimer>
                )} 
                {variant === 'fragrance' && (
                    <S.Disclaimer as="small" role="note">
                         This AI generated summary analyzes how the notes combine, the mood they create, and ideal wearing occasions. Remember: Your personal experience may vary
                    </S.Disclaimer>
                )} 
          
            <S.GenerateSummaryButton 
                onClick={onGenerate} 
                disabled={isLoading || content !== null}
                $variant={variant}
            >
                {getButtonText()}
            </S.GenerateSummaryButton>

            {isLoading && (
                <S.LoadingContainer>
                    <LoadingSpinner/>
                    {variant === 'reviews' && (
                        <S.LoadingText>Gathering the 10 most recent reviews...</S.LoadingText>
                    )}
                </S.LoadingContainer>
            )}
            {content && (
            <S.SummaryText 
                $variant={variant}
                $isTyping={isTyping} // Pass the typing state
            >
                {displayedText}
            </S.SummaryText>
            )}
        </S.SummarySection>
    );
};

export default SummarySection;