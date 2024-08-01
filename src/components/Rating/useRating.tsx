import { useState } from 'react';

export const useRating = () => {
    const [rating, setRating] = useState(Math.random() * 10);

    return { rating, setRating };
};