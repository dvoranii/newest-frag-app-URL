import { styled } from "styled-components";

interface SummaryTextProps {
  $variant?: 'reviews' | 'fragrance';
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

export const SummaryTitle = styled.h3`
    margin: 0 0 1rem 0;
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