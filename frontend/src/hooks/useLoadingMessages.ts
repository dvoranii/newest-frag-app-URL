import { useState, useEffect } from 'react';

export const useLoadingMessages = (
     messages: string[], 
     interval: number = 3000, 
     isProcessing: boolean) => {

     const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
        if (!isProcessing) {
            setCurrentIndex(0);
            return;
        }

        if (messages.length === 0 || currentIndex >= messages.length - 1) return;

        const timerId = setTimeout(() => {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, interval);

        return () => {
            clearTimeout(timerId)
        }
     }, [isProcessing, currentIndex, messages, interval]);

     useEffect(() => {
        if (isProcessing) {
            setCurrentIndex(0);
        }
     }, [isProcessing]);

     if (!isProcessing || messages.length === 0) return messages[currentIndex];
     return messages[currentIndex];
}

export default useLoadingMessages;