import { Request, Response, NextFunction, RequestHandler} from 'express';

export const validateFragranticaUrl: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const {url} = req.body;

    if (!url) {
        res.status(400).json({error: 'URL is required'});
        return;
    }

    try {
        const parsedUrl = new URL(url);
        const isValid = parsedUrl.hostname.includes('fragrantica.com') && parsedUrl.pathname.includes('/perfume');

        if (!isValid) {
            res.status(400).json({
                error: 'Invalid Fragrantica perfume URL. Example: https://www.fragrantica.com/perfume/Chanel/No-5-123.html' 
             });
             return;
        }
    
        next();

    } catch (error) {
        res.status(400).json({
        error: 'Invalid URL format',
        details: error instanceof Error ? error.message: "unknown error"
        })
        return;
    }
}