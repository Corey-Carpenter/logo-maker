const { Circle, Triangle, Square } = require('./shapes.js')

describe('Test Triangle', () => {
    test('color should match input', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        exportAllDeclaration(shape.render()).toEqual('<polygon points="150, 18 244, 182" fill =blue />')
    })
})