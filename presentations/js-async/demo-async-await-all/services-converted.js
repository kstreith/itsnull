'use strict';

/**
 * (c) 2016 Kip Streithorst
 * License: MIT
 */
var getNearbyStores = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(zipCode) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              setTimeout(function () {
                if (zipCode == 12121) {
                  resolve([1, 2]);
                } else if (zipCode == 34343) {
                  resolve([3, 4]);
                } else if (zipCode == 56565) {
                  reject(new Error("Fake exception!!"));
                } else {
                  resolve([]);
                }
              }, 2 * 1000);
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getNearbyStores(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getStoreDetails = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(storeId) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', new Promise(function (resolve, reject) {
              setTimeout(function () {
                if (storeId === 1) {
                  resolve({
                    address: '100 Main St. Raleigh, NC',
                    hours: '8am - 8pm'
                  });
                }
                if (storeId === 3) {
                  resolve({
                    address: '424 Washington Ave. Washington, DC',
                    hours: '11am - 11pm'
                  });
                }
              }, 1 * 1000);
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getStoreDetails(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7O3VEQUlBLGlCQUErQixPQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ1MsSUFBSSxPQUFKLENBQVksVUFBVSxPQUFWLEVBQW1CLE1BQW5CLEVBQTJCO0FBQzVDLHlCQUFXLFlBQVk7QUFDckIsb0JBQUksV0FBVyxLQUFmLEVBQXNCO0FBQ3BCLDBCQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUjtBQUNELGlCQUZELE1BRU8sSUFBSSxXQUFXLEtBQWYsRUFBc0I7QUFDM0IsMEJBQVEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFSO0FBQ0QsaUJBRk0sTUFFQSxJQUFJLFdBQVcsS0FBZixFQUFzQjtBQUMzQix5QkFBTyxJQUFJLEtBQUosQ0FBVSxrQkFBVixDQUFQO0FBQ0QsaUJBRk0sTUFFQTtBQUNMLDBCQUFRLEVBQVI7QUFDRDtBQUNGLGVBVkQsRUFVRyxJQUFJLElBVlA7QUFXRCxhQVpNLENBRFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsZTs7Ozs7O3dEQWdCZixrQkFBK0IsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNTLElBQUksT0FBSixDQUFZLFVBQVUsT0FBVixFQUFtQixNQUFuQixFQUEyQjtBQUM1Qyx5QkFBVyxZQUFZO0FBQ3JCLG9CQUFJLFlBQVksQ0FBaEIsRUFBbUI7QUFDakIsMEJBQVE7QUFDTiw2QkFBUywwQkFESDtBQUVOLDJCQUFPO0FBRkQsbUJBQVI7QUFJRDtBQUNELG9CQUFJLFlBQVksQ0FBaEIsRUFBbUI7QUFDakIsMEJBQVE7QUFDTiw2QkFBUyxvQ0FESDtBQUVOLDJCQUFPO0FBRkQsbUJBQVI7QUFJRDtBQUNGLGVBYkQsRUFhRyxJQUFJLElBYlA7QUFjRCxhQWZNLENBRFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsZSIsImZpbGUiOiJzZXJ2aWNlcy1jb252ZXJ0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogKGMpIDIwMTYgS2lwIFN0cmVpdGhvcnN0XHJcbiAqIExpY2Vuc2U6IE1JVFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TmVhcmJ5U3RvcmVzKHppcENvZGUpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh6aXBDb2RlID09IDEyMTIxKSB7XHJcbiAgICAgICAgcmVzb2x2ZShbMSwgMl0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHppcENvZGUgPT0gMzQzNDMpIHtcclxuICAgICAgICByZXNvbHZlKFszLCA0XSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoemlwQ29kZSA9PSA1NjU2NSkge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJGYWtlIGV4Y2VwdGlvbiEhXCIpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXNvbHZlKFtdKTtcclxuICAgICAgfVxyXG4gICAgfSwgMiAqIDEwMDApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRTdG9yZURldGFpbHMoc3RvcmVJZCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHN0b3JlSWQgPT09IDEpIHtcclxuICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgIGFkZHJlc3M6ICcxMDAgTWFpbiBTdC4gUmFsZWlnaCwgTkMnLFxyXG4gICAgICAgICAgaG91cnM6ICc4YW0gLSA4cG0nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN0b3JlSWQgPT09IDMpIHtcclxuICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgIGFkZHJlc3M6ICc0MjQgV2FzaGluZ3RvbiBBdmUuIFdhc2hpbmd0b24sIERDJyxcclxuICAgICAgICAgIGhvdXJzOiAnMTFhbSAtIDExcG0nXHJcbiAgICAgICAgfSkgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LCAxICogMTAwMCk7XHJcbiAgfSk7XHJcbn1cclxuIl19