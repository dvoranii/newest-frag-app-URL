import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

export const ErrorTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #dc2626;
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  color: #475569;
`;

export const Loading = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #64748b;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  overflow: hidden;
`;

export const CardContent = styled.div`
  padding: 2rem;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageColumn = styled.div`
  flex: 0 0 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    flex: 0 0 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 275px;
  height: auto;
  object-fit: cover;
`;

export const BrandLogo = styled.img`
  max-width: 150px;
  margin: 0 auto;
`;

export const DetailsColumn = styled.div`
  display: flex;
  gap: 2rem;
  min-width: 250px;
`;

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

export const StarsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Star = styled.span<{ $empty?: boolean }>`
  color: ${props => props.$empty ? '#e2e8f0' : '#f59e0b'};
  font-size: 1.25rem;
`;

export const RatingCount = styled.span`
  color: #64748b;
  font-size: 0.875rem;
  font-family: sans-serif;
`;

export const AccordsColumn = styled.div`
  flex: 1;
  min-width: 250px;
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

export const NotesColumn = styled.div`
  flex: 1;
  min-width: 300px;
  background-color:rgb(247, 247, 247);
  padding: 1rem;
  border-radius: 20px;
`;

export const NotesSectionTitle = styled(SectionTitle)`
  text-align: center;
`

export const NoteType = styled.h3`
  font-size: 1rem;
  font-family: sans-serif;
  font-weight: 600;
  color: #334155;
  margin: 1.5rem 0 0.75rem 0;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid grey;
`;

export const NotesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const NoteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

export const NoteImage = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const NoteName = styled.span`
  font-size: 0.75rem;
  font-family: sans-serif;
  margin-top: 0.5rem;
  color: #475569;
  text-align: center;
`;

export const PerfumersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding-top: 2rem;
`;

export const PerfumersContainerInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PerfumersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    justify-content: center;
  }
`;

export const PerfumerSectionTitle = styled(SectionTitle)`
  position: relative;
  text-align: center;
  background-color: white;
  padding: 0 0.5rem;
  }
`;

export const PerfumerTitleBG = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    z-index: 9; 

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        height: 1px;
        background: #000000;
        width: 100vw;
        transform: translateX(-48%);
        z-index: -1;
  }

`;

export const PerfumerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
`;

export const PerfumerImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const PerfumerName = styled.span`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: #475569;
  text-align: center;
`;