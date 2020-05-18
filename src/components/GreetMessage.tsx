import React from 'react';
import greet from '@core/greet';

interface GreetMessageProps {
    name?: string;
}

export default function GreetMessage(props: GreetMessageProps) {
    const { name = 'Guess' } = props;
    return (
        <p>
            Welcome {greet.prepareName(name)}
        </p>
    );
}