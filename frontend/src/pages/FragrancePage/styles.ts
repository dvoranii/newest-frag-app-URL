import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem 2rem 2rem;
`;

export const HomeLinkContainer = styled.div`
    width: fit-content;
    padding-bottom: 1rem;
    
    & > a {
        display: inline-block;
        color: #2563eb;
        text-decoration: none;

        & > img {
            padding: 1rem 0 0 1rem;
            max-width: 250px;
            transition: all 150ms ease;

            &:hover {
                filter: brightness(1.1);
            }
        }
    }
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
  font-family: sans-serif;
  font-size: 1.2rem;
  color: #64748b;
`;


export const Card = styled.div`
  background-color: #ffffff;
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

export const DetailsColumn = styled.div`
  display: flex;
  gap: 2rem;
  min-width: 250px;

  @media screen and (max-width: 1111px) {
    flex-direction: column;
  }
`;


export const ImageAndAccordsContainer = styled.div`
  display:flex;

  @media screen and (max-width: 670px) {
  flex-direction: column;
  }
`;

export const DualSummaryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
