import React from 'react';
import GreetMessage from '@components/GreetMessage';

export default function GreetContainer() {
    return (
        <div>
            <h2>Greeting</h2>
            <GreetMessage name="User" />
        </div>
    );
}
