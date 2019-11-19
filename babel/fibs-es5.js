"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fibs);

function fibs() {
  var a, b, _ref;

  return regeneratorRuntime.wrap(function fibs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          a = 0, b = 1;

        case 1:
          if (!true) {
            _context.next = 9;
            break;
          }

          _context.next = 4;
          return a;

        case 4:
          _ref = [b, a + b];
          a = _ref[0];
          b = _ref[1];
          _context.next = 1;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
