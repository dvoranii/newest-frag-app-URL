import { styled } from "styled-components";

export const StarsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Star = styled.span<{ $empty?: boolean }>`
  color: ${props => props.$empty ? '#e2e8f0' : '#f59e0b'};
  font-size: 1.25rem;
`;
