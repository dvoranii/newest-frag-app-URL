import { styled } from "styled-components";

interface SummaryTextProps {
  $variant?: 'reviews' | 'fragrance';
  $isTyping?: boolean;
}

interface GenerateSummaryButtonProps {
  $variant?: 'reviews' | 'fragrance';
  disabled?: boolean;
}

export const SummarySection = styled.div`
    padding: 1.5rem;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 1rem 0;
  height: 20px;
`;

export const SummaryTitle = styled.h3`
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: sans-serif;
`;

export const SummaryText = styled.div<SummaryTextProps>`
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 5px;
  border-left: 3px solid ${props => 
    props.$variant === 'reviews' ? '#2196F3' : '#4CAF50'};
  font-family: sans-serif;
  line-height: 1.6;
  white-space: pre-line;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  min-height: 100px; /* Prevent layout shift */

`;

export const GenerateSummaryButton = styled.button<GenerateSummaryButtonProps>`
  padding: 0.75rem 1.5rem;
  background-color: ${props => 
    props.$variant === 'reviews' ? '#2196F3' : '#4CAF50'};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: ${props => 
      props.$variant === 'reviews' ? '#0b7dda' : '#367c39'};
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`;

export const LoadingText = styled.p`
  color: black;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
`;

export const Disclaimer = styled.small`
  color: grey;
  font-size: 0.8rem;
  line-height: 1.4;
  margin: 4px 0 12px 0;
  font-style: italic;
  max-width: 100%;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;