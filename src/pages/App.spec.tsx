/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
    test('it should render index component', () => {
        render(<App />);
        const result = screen.getByText('React Template');
        expect(result).toBeInTheDocument();
    });
});  
