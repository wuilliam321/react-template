/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import GreetMessage from './GreetMessage';

describe('Greeting', () => {
    test('it should render greet message component for guess', () => {
        render(<GreetMessage />);
        expect(screen.getByText('Welcome GUESS')).toBeInTheDocument();
    });
    test('it should render greet message component for user', () => {
        render(<GreetMessage name="User" />);
        expect(screen.getByText('Welcome USER')).toBeInTheDocument();
    });
});  
