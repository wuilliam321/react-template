/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Greeting from './Greeting';

describe('Greeting', () => {
    test('it should render greet message component', () => {
        render(<Greeting />);
        const result = screen.getByRole('heading');
        expect(result).toHaveTextContent('Greeting');
    });
});  
