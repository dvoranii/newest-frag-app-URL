// src/pages/FragrancePage/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 1rem;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const ErrorTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 33.3333%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 375px;
  height: auto;
  object-fit: cover;
  border-radius: 0.375rem;
`;

export const BrandLogo = styled.img`
  max-width: 150px;
  margin-top: 1rem;
`;

export const DetailsContainer = styled.div`
  padding: 1.5rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 66.6667%;
  }
`;

export const Brand = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
  color: #4f46e5;
  font-weight: 600;
  margin: 0;
`;

export const Name = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  color: #000;
  margin: 0.25rem 0 0 0;
  line-height: 1.25;
`;

export const Gender = styled.p`
  color: #6b7280;
  margin: 0.5rem 0 0 0;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

export const RatingValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const StarsContainer = styled.div`
  display: flex;
  margin-right: 0.5rem;
`;

export const Star = styled.span<{ $empty?: boolean }>`
  color: ${props => props.$empty ? '#d1d5db' : '#f59e0b'};
  font-size: 1.2rem;
`;

export const RatingCount = styled.span`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 1.5rem 0 0.5rem 0;
`;

export const AccordsContainer = styled.div`
  margin: 1rem 0;
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const AccordsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const AccordItem = styled.div<{ $width: string; $background: string; $color: string }>`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  width: ${props => props.$width};
  background: ${props => props.$background};
  color: ${props => props.$color};
  text-align: center;
`;

export const NotesContainer = styled.div`
  margin: 1rem 0;
`;

export const NoteType = styled.h5`
  font-size: 0.875rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem 0;
`;

export const NotesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const NoteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoteImage = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 0.25rem;
`;

export const NoteName = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const PerfumersContainer = styled.div`
  margin: 1rem 0;
`;

export const PerfumersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PerfumerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PerfumerImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const PerfumerName = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;