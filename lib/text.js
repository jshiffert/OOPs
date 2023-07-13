/// text

function isValidColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
  
    // return 'false' if color wasn't assigned
    return s.color == strColor.toLowerCase();
}

textBase = 'text x="80" y="100" font-size="50" text-anchor="middle" fill='

class TextClass {
    constructor(text, textColor) {
        if (text.length > 3) {
            throw new Error('`text` cannot contain more than 3 characters.');
        }

        if (text.length < 1) {
            throw new Error('`text` must contain at least one character.');
        }

        if (!isValidColor(textColor)) {
            throw new Error('`color` must be a valid CSS color.')
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
        return `<${textBase} "${textColor}">${text}</text>`
    }

}