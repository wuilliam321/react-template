/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Romans from './Romans';

describe('Romans', () => {
    test('Should render input component', () => {
        render(<Romans />);
        const input = screen.getByTestId('roman-input');
        expect(input).toBeInTheDocument();
    });
    test('Should change when new value is given', () => {
        render(<Romans />);
        const input = screen.getByTestId('roman-input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 1 } });

        expect(input.value).toBe('1');
    });
});  
