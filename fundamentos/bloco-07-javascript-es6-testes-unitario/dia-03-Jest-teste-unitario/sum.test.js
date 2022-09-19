const {sum} = require('./sum');

test('1. add 4 + 5 to equal 9', () =>{
    expect(sum(4,5)).toBe(9);
});

test('2. add 0 + 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0);
});
test("3. Sum('') must throw an error", () => {
    expect(() => sum(4,'5')).toThrow(Error);
})