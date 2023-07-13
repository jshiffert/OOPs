// var svgBase = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg">'

//color check credit: https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
function isValidColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
  
    // return 'false' if color wasn't assigned
    return s.color == strColor.toLowerCase();
}

//circle
var circleBase = 'circle cx="80" cy="80" r="70" '
class Circle {
    constructor(color) {
        if (!isValidColor(color)) {
            throw new Error('`color` must be a valid CSS color.')
        }

        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<${circleBase} fill = "${color}"/>`;
    }
}

//triangle
var triBase = 'polygon points="80, 10 150, 110 5, 110" '
class Triangle {
    constructor(color) {
        if (!isValidColor(color)) {
            throw new Error('`color` must be a valid CSS color.')
        }

        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<${triBase} fill = "${color}"/>`;
    }
}

//square
var squareBase = 'rect x="10" y="10" width ="160" height="160" '
class Square {
    constructor(color) {
        if (!isValidColor(color)) {
            throw new Error('`color` must be a valid CSS color.')
        }

        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<${squareBase} fill = "${color}"/>`;
    }
}

module.exports = Circle;
module.exports = Triangle;
module.exports = Square;