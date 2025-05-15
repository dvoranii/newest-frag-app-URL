import { styled } from "styled-components";

export const StarsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const StarContainer = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  width: 1.5rem;
  height: 2.25rem;
  margin-top: -6px;
`;

export const StarEmpty = styled.span`
  position: absolute;
  color: #e2e8f0;
  font-size: 2.25rem;
`;

export const StarFill = styled.span<{ $fillPercentage: number }>`
  position: absolute;
  color: #f59e0b;
  font-size: 2.25rem;
  clip-path: inset(0 ${props => 100 - props.$fillPercentage}% 0 0);
`;