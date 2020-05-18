/* eslint-env jest */
import greet from './greet';

describe('greet', () => {
    test('it should prepare name', () => {
        const name = 'Test';
        const result = greet.prepareName(name);
        expect(result).toBe('TEST');
    });
});  
