import { styled } from "styled-components";

export const AccordsColumn = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 620px;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  font-family: sans-serif;
  width: 100%;
  color:rgb(38, 50, 70);
  margin-bottom: 1rem;
`;

export const AccordsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AccordItem = styled.div<{ $width: string; $background: string; $color: string }>`
  padding: 0.375rem 0.75rem;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  font-size: 0.75rem;
  font-family: sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  width: ${props => props.$width};
  background: ${props => props.$background};
  color: ${props => props.$color};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;