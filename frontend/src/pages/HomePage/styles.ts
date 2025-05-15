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

export const SubmitButton = styled.button<{ $isLoading: boolean }>`
  width: 100%;
  padding: 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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