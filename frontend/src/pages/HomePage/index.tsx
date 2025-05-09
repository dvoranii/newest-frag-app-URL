
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrapeFragrance } from '../../services/api.service';
import * as S from "./styles";

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
        // This now makes an identical request to your curl example
        const fragranceData = await scrapeFragrance(url);
        
        // Debug log to verify identical response
        console.log('Received:', fragranceData);
        
        navigate('/fragrance', { state: { fragranceData } });
    } catch (err) {
        const message = err instanceof Error 
        ? err.message 
        : 'Failed to scrape fragrance';
        setError(message);
        
        // Debug log for errors
        console.error('Scraping error:', err);
    } finally {
        setIsLoading(false);
    }
    };

    return (
       <S.Container>
            <S.Title>Fragrance Scraper</S.Title>
            <S.Form onSubmit={handleSubmit}>
                <S.FormGroup>
                    <S.Label htmlFor="url">Fragrantica Perfume URL</S.Label>
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
                    {isLoading ? 'Generating...' : 'Generate'}
                </S.SubmitButton>
            </S.Form>
        </S.Container>
    );
};

export default HomePage;