/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import RomanDisplay from './RomanDisplay';

describe('RomanDisplay', () => {
    test('Should render a result when valid arabic is given', () => {
        render(<RomanDisplay arabic={1} />);
        const result = screen.getByTestId('result');
        expect(result.textContent).toBe('Arabic: 1, Roman: I');
    });
    test('Should render invalid result when invalid arabic is given', () => {
        render(<RomanDisplay arabic={999999} />);
        const result = screen.getByTestId('result');
        expect(result.textContent).toBe('Arabic: 999999, Roman: Invalid');
    });
});  
