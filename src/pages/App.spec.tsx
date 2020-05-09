/* eslint-env jest */
import App from '@pages/App';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('App', () => {
    test('Should render index component', () => {
        render(<App />);
        expect(screen.getByRole('heading').textContent).toBe('Hello, world!');
    });
});  
