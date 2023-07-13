
//circle
var circleBase = 'circle cx="80" cy="80" r="70" '
class Circle {
    constructor(color) {

        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<${circleBase} fill="${this.color}"/>`;
    }
}

//triangle
var triBase = 'polygon points="80, 10 150, 110 5, 110" '
class Triangle {
    constructor(color) {

        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<${triBase} fill="${this.color}"/>`;
    }
}

//square
var squareBase = 'rect x="10" y="10" width ="160" height="160" '
class Square {
    constructor(color) {

        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<${squareBase} fill="${this.color}"/>`;
    }
}

module.exports = {
    Circle : Circle,
    Square : Square,
    Triangle : Triangle
}