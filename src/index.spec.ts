import type { $string } from './index.d';

describe('testing types', () => {
    it('should handle $string type correctly', () => {
        const nullVar: $string = null;
        const strVar: $string = 'Hello, world!';
        const numVar = 123;
        expect(nullVar).toBeNull();
        expect(strVar).toEqual('Hello, world!');
        expect(typeof numVar).not.toEqual(typeof strVar);
        // expect(typeof nullVar).toEqual(typeof strVar);
    });
});
