import { useState } from 'react';
import { generateFragranceSummary, summarizeFragranceReviews } from '../services/api.service';
import { getSavedFragranceUrl } from '../utils/urlStorage';

export const useFragranceSummary = () => {
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  
  const [isReviewsLoading, setIsReviewsLoading] = useState(false);
  const [reviewsSummary, setReviewsSummary] = useState<string | null>(null);

  const handleGenerateSummary = async (brand: string, name: string) => {
    setIsSummaryLoading(true);
    try {
      const summary = await generateFragranceSummary(brand, name);
      setAiSummary(summary);
    } catch (error: any) {
      console.error("Error generating summary:", error.message);
      setAiSummary("Failed to generate summary.");
    } finally {
      setIsSummaryLoading(false);
    }
  };

  const handleSummarizeReviews = async () => {
    setIsReviewsLoading(true);
    try {
      const url = getSavedFragranceUrl();
      if (!url) throw new Error("Original URL not available");
      const data = await summarizeFragranceReviews(url);
      setReviewsSummary(data.summary);
    } catch (error: any) {
      console.error("Error summarizing reviews", error);
      setReviewsSummary("Failed to generate reviews summary.");
    } finally {
      setIsReviewsLoading(false);
    }
  };

  return {
    isSummaryLoading,
    aiSummary,
    handleGenerateSummary,
    isReviewsLoading,
    reviewsSummary,
    handleSummarizeReviews,
  };
};