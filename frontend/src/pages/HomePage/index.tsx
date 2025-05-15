
import * as S from "./styles";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FindMyFragLogo from "/assets/findmyfrag.png";
import { useFetchFragrance } from "../../hooks/useFragranceQueries";
import LoadingSpinner from "../../components/LoadingSpinner";


const HomePage = () => {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const [isInputValid, setIsInputValid] = useState(true);
    const {mutate, isPending, error} = useFetchFragrance(url);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
        setIsInputValid(true); 
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) {
            setIsInputValid(false);
            return;
        }

        localStorage.setItem('fragranceUrl', url);

        mutate(undefined, {
            onSuccess: (data) => {
                const encoded = encodeURIComponent(JSON.stringify(data));
                navigate(`/fragrance?data=${encoded}`);
                setUrl('')
            }
        });
    };

    return (
       <S.Container>
            <S.FindMyFragImgWrapper>
                 <img src={FindMyFragLogo} alt="" />
            </S.FindMyFragImgWrapper>
 
             <S.Tagline>
                Paste your Fragrantica URL below to get an organized fragrance breakdown and AI-powered analysis!            
            </S.Tagline>

            <S.Form onSubmit={handleSubmit}>
                <S.FormGroup>
                    
                    <S.Input
                        type="url"
                        id="url"
                        value={url}
                        onChange={handleChange}
                        placeholder="https://www.fragrantica.com/perfume/..."
                        required
                        $isInvalid={!isInputValid}
                    />
                    {!isInputValid && <S.ErrorText>Please enter a valid Fragrantica URL</S.ErrorText>}
                </S.FormGroup>

                    <S.SubmitButton
                        type="submit"
                        disabled={isPending}
                        $isLoading={isPending}
                        >
                        {isPending ? 'Generating...' : "Generate Fragrance Breakdown"}
                    </S.SubmitButton> 
                
                {error && <S.ErrorText>{error.message}</S.ErrorText>}
                 {isPending && (
                <S.LoadingContainer>
                    <LoadingSpinner />
                    <S.LoadingText>Please wait while we generate your fragrance profile...</S.LoadingText>
                </S.LoadingContainer>

                )}
            </S.Form>

        </S.Container>
    );
};

export default HomePage;