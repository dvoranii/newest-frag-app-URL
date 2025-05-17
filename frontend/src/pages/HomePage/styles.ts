import styled from 'styled-components';

export const Container = styled.div`
  max-width: 33rem;
  margin: 120px auto;
  padding: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tagline = styled.p`
    margin: 1rem 0 0.5rem;
    color: black;
    font-size: 1.2rem;
    font-family: Montserrat, sans-serif;
    text-align: center;
`;

export const Input = styled.input<{$isInvalid?:boolean}>`
  max-width: 33rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ $isInvalid }) => ($isInvalid ? '#ef4444' : '#d1d5db')};
  font-size: 0.9rem;
  margin-top: 1rem;
  font-family: Inter, sans-serif;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`;

export const FindMyFragImgWrapper = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 1rem;
    justify-content: center;

    img {
        max-width: 550px;
    }
`;

export const ErrorText = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
`;

export const SubmitButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const SubmitButton = styled.button<{ $isLoading: boolean }>`
  position: relative;
  z-index:1;
  cursor: pointer;
  width: 70%;
  padding: 1rem;
  background: transparent;
  border: none;
  border-radius: 0.475rem;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: Montserrat, sans-serif;
  background-color: #2563eb;
  color: #ffffff;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
  7px 7px 20px 0px rgba(0,0,0,.1),
  4px 4px 5px 0px rgba(0,0,0,.1);
  transition: all 0.3s ease;


  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #64d7d6;

    background-image: linear-gradient(315deg, #64d7d6 0%,rgb(117, 234, 232));
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5);
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    transition: all 0.3s ease;
  }

  &:hover {
    color: #333;


    &:after {
      top: auto;
      bottom: 0;
      height: 100%;
    }

    &:active {
      top: 2px;
    }

  }

    &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background-color: #cccccc; 
    pointer-events: none;
  }


`;




export const LoadingSpinnerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;  
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

export const LoadingText = styled.p`
  color: black;
  font-size: 0.9rem;
  text-align: center;
  margin: 0;
  opacity: 0.8;
  max-width: 80%;
`;