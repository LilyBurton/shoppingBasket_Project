const Candy = require('./candy.js');

describe('candy', () => {

    const candy = new Candy('Mars', 4.99);
    it('get the name of the candy', () => {
        
        expect(candy.getName()).toBe('Mars');
    });

    it('get the price of the candy', () => {
        expect(candy.getPrice()).toBe(4.99);
    });
});

// describe('add', () => {
//     it('adds 2 and 2', () => {
//         expect(add(2, 2)).toBe(4);
//       });
//     });