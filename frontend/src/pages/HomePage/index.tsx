
import * as S from "./styles";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrapeFragrance } from '../../services/api.service';
import { cacheFragrance } from "../../services/cache.service";
import FindMyFragLogo from "/assets/findmyfrag.png";


const HomePage = () => {
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {

        const fragranceData = await scrapeFragrance(url);
        cacheFragrance(fragranceData);     
        navigate('/fragrance', { state: { fragranceData } });

    } catch (err) {
        const message = err instanceof Error 
        ? err.message 
        : 'Failed to scrape fragrance';
        setError(message);
    } finally {
        setIsLoading(false);
    }
    };

    return (
       <S.Container>
            <S.FindMyFragImgWrapper>
                 <img src={FindMyFragLogo} alt="" />
            </S.FindMyFragImgWrapper>
           
            <S.Form onSubmit={handleSubmit}>
                <S.FormGroup>
                    <S.Label htmlFor="url">Enter a Fragrantica perfume URL:</S.Label>
                    <S.Input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://www.fragrantica.com/perfume/..."
                        required
                    />
                </S.FormGroup>
                {error && <S.ErrorText>{error}</S.ErrorText>}
                <S.SubmitButton
                    type="submit"
                    disabled={isLoading}
                    $isLoading={isLoading}
                >
                    {isLoading ? 'Generating...' : 'Fetch Fragrance'}
                </S.SubmitButton>
            </S.Form>
        </S.Container>
    );
};

export default HomePage;