import { styled } from "styled-components";

export const Brand = styled.div`
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
  color: #4f46e5;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Name = styled.h1`
  font-size: 1.75rem;
  font-family: sans-serif;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;

export const NameBrandGenderContainerOuter = styled.div`
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid grey;
`;
export const NameBrandGenderContainerInner = styled.div`
    width: fit-content;
`;

export const NameGenderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const GenderIndicator = styled.span<{ $type: 'men' | 'women' | 'unisex' }>`
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  margin-left: 1.2rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-family: sans-serif;
  
  ${({ $type }) => 
    $type === 'men' ? `
      color: #3b82f6;
      background-color: #dbeafe;
    ` : $type === 'women' ? `
      color: #ec4899;
      background-color: #fce7f3;
    ` : `
      color: #eab308;
      background-color: #fef9c3;
    `
  }
`;


export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;

export const RatingValue = styled.span`
  font-size: 1.5rem;
  font-family: sans-serif;
  font-weight: bold;
  color: #1e293b;
`;

export const RatingCount = styled.span`
  color: #64748b;
  font-size: 0.875rem;
  font-family: sans-serif;
`;