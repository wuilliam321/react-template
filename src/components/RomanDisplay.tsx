import React, { useEffect, useState } from 'react';
import { convert } from '../core/romans';

interface RomanDisplayProps {
    arabic: number;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RomanDisplay(props: RomanDisplayProps) {
    const { arabic } = props;
    const [roman, setRoman] = useState('');

    useEffect(() => {
        try {
            setRoman(convert(arabic));
        } catch (error) {
            // console.error(error);
            setRoman('Invalid');
        }
    }, [arabic]);

    return (
        <div>
            <p data-testid='result'>
                Arabic: {arabic}, Roman: {roman}
            </p>
        </div>
    );
}