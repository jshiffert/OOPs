// text

var textBase = 'text x="80" y="100" font-size="50" text-anchor="middle" fill=';

class TextClass {
    constructor(text, textColor) {
        if (text.length > 3) {
            throw new Error('`text` cannot contain more than 3 characters.');
        }

        if (text.length < 1) {
            throw new Error('`text` must contain at least one character.');
        }

        this.text = text;
        this.textColor = textColor;

    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    render() {
        return `<${textBase}"${this.textColor}">${this.text}</text>`
    }
};

module.exports = TextClass;