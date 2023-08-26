const { Circle, Triangle, Square } = require('./shapes.js')

describe('Test Triangle', () => {
    test('color should match input', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />')
    })
})
