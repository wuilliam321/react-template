import RomanDisplay from '@components/RomanDisplay';
import React, { useState } from 'react';

export default function Romans() {
    const [arabic, setArabic] = useState(0);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArabic(Number(e.target.value));
    };

    return (
        <div>
            <input data-testid='roman-input'
                value={arabic}
                onChange={changeHandler} />
            <RomanDisplay arabic={arabic} />
        </div>
    );
}
