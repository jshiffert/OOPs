const Triangle = require('./shapes');
const Circle = require('./shapes');
const Square = require('./shapes');

// triangle test
const shape = new Triangle();
shape.setColor("blue");
hasUncaughtExceptionCaptureCallback(shape.render()).toEqual()