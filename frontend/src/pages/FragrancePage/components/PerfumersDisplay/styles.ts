import { styled } from "styled-components";
import { SectionTitle } from "../AccordsDisplay/styles";

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
  width: 6rem;
  height: 6rem;
  filter: grayscale(100%);
  border-radius: 9999px;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const PerfumerName = styled.span`
  font-size: 0.75rem;
  font-family: sans-serif;
  margin-top: 0.5rem;
  color: #475569;
  text-align: center;
`;