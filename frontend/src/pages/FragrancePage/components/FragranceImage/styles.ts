import { styled } from "styled-components";

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