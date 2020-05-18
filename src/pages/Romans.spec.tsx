/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
        userEvent.type(input, '1');

        expect(input.value).toBe('1');
    });
});  
