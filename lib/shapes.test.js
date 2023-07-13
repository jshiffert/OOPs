const { describe } = require('node:test');
const shapes = require('./shapes');

// triangle test
describe('Shapes', () => {
    describe('triangle', () => {
        it('should set the color to red and render', () => {
            const shape = new shapes.Triangle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<polygon points="80, 10 150, 110 5, 110"  fill="red"/>');
        });
    });
});

// square test
describe('Shapes', () => {
    describe('square', () => {
        it('should set the color to blue and render', () => {
            const shape = new shapes.Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="10" y="10" width ="160" height="160"  fill="blue"/>');
        });
    });
});

// circle test
describe('Shapes', () => {
    describe('square', () => {
        it('should set the color to pink and render', () => {
            const shape = new shapes.Circle();
            shape.setColor("pink");
            expect(shape.render()).toEqual('<circle cx="80" cy="80" r="70"  fill="pink"/>');
        });
    });
});