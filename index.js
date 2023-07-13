// main logic
const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./lib/shapes');
const Triangle = require('./lib/shapes');
const Circle = require('./lib/shapes');
const TextClass = require('./lib/text');

function Logo(type,shapeColor,text,textColor) {
    this.type = type;
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
};

function init() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'type',
                message: 'Choose a shape for the logo:',
                choices: ['square','circle','triangle'],
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter a color for the logo shape:',
            },
            {
                type: 'input',
                name: 'text',
                message: 'Enter one to three characters of text for the logo:',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter a color for the logo text:',
            },
        ])
        .then((data) => {
            const shape = new Logo(
                data.type,
                data.shapeColor,
                data.text,
                data.textColor
            );

            if (shape.type == 'triangle') {
                const triangle = new Triangle(shape.shapeColor);
                svgShape = triangle.render();
            } else if (shape.type == 'square') {
                const square = new Square(shape.shapeColor);
                svgShape = square.render();
            } else if (shape.type == 'circle') {
                const circle = new Circle(shape.shapeColor);
                svgShape = circle.render();
            };

            const text = new TextClass(shape.text,shape.textColor);
            svgText = text.render();
        })
        .catch((error) => {
            console.log(error);
            console.log('Something went wrong!')
        })
};

// run app
init();
console.log(svgShape);
console.log(svgText);