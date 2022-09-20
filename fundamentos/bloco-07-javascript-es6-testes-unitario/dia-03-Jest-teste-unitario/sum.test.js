const {sum, myRemove, myFizzBuzz} = require('./sum');

test('1. add 4 + 5 to equal 9', () =>{
    expect(sum(4,5)).toBe(9);
});

test('2. add 0 + 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0);
});
test("3. Sum('') must throw an error", () => {
    expect(() => sum(4,'5')).toThrow(Error);
});

describe('The function myRemove', () => {
    test('1. remove item array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    test('2. return not expect', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('3. return expect array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})

describe('The function myFizzBuzz', () => {
    test('1. número divisivel por 3 e 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    test('2. número divisível por 3', () => {
        expect(myFizzBuzz(3)).toBe('fizz');
    });
    test('3. número divisível por 5', () => {
        expect(myFizzBuzz(5)).toBe('buzz');
    });
    test('4. número não divisível por 3 e por 5', () => {
        expect(myFizzBuzz(1)).toBe(1);
    })
    test('5. parâmetro que não seja número', () => {
        expect(myFizzBuzz('2')).toBe(false);
    })
})
