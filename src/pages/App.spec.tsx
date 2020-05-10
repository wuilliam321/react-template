/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
    test('Should render index component', () => {
        render(<App />);
        expect(screen.getByTestId('title').textContent).toBe('Hello, world!');
    });
});  
