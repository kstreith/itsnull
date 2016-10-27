"use strict";

/**
 * (c) 2016 Kip Streithorst
 * License: MIT
 */

var getClosestStore = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(zipCode) {
    var storeIds;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getNearbyStores(zipCode);

          case 2:
            storeIds = _context.sent;

            if (!storeIds.length) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", getStoreDetails(storeIds[0]));

          case 5:
            return _context.abrupt("return", null);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getClosestStore(_x) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

$(function () {
  $("#search").on("click", function () {
    $("#results").hide();
    $("#noResults").hide();
    var zip = $("#zipCode").val();
    getClosestStore(zip).then(function (details) {
      showDetails(details);
    });
    //.catch(function (e) {
    //  alert('error occurred - used .catch');
    //});
  });

  /*
  $("#search").on("click", async function () {
    //try {
    $("#results").hide();
    $("#noResults").hide();
    var zip = $("#zipCode").val();
    var details = await getClosestStore(zip);  
    showDetails(details);
    //} catch (e) {
    //  alert('error occurred - used try/catch');
    //}
  });*/
});
function showDetails(details) {
  if (details) {
    $("#address").text(details.address);
    $("#hours").text(details.hours);
    $("#results").show();
  } else {
    $("#noResults").show();
  }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7dURBS0EsaUJBQStCLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ3VCLGdCQUFnQixPQUFoQixDQUR2Qjs7QUFBQTtBQUNNLG9CQUROOztBQUFBLGlCQUVNLFNBQVMsTUFGZjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FHVyxnQkFBZ0IsU0FBUyxDQUFULENBQWhCLENBSFg7O0FBQUE7QUFBQSw2Q0FLUyxJQUxUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLGU7Ozs7Ozs7QUFRZixFQUFFLFlBQVk7QUFDWixJQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFlBQVk7QUFDbkMsTUFBRSxVQUFGLEVBQWMsSUFBZDtBQUNBLE1BQUUsWUFBRixFQUFnQixJQUFoQjtBQUNBLFFBQUksTUFBTSxFQUFFLFVBQUYsRUFBYyxHQUFkLEVBQVY7QUFDQSxvQkFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsQ0FBMEIsVUFBVSxPQUFWLEVBQW1CO0FBQzNDLGtCQUFZLE9BQVo7QUFDRCxLQUZEO0FBR0E7QUFDQTtBQUNBO0FBQ0QsR0FWRDs7QUFZQTs7Ozs7Ozs7Ozs7O0FBWUQsQ0F6QkQ7QUEwQkEsU0FBUyxXQUFULENBQXFCLE9BQXJCLEVBQThCO0FBQzVCLE1BQUksT0FBSixFQUFhO0FBQ1gsTUFBRSxVQUFGLEVBQWMsSUFBZCxDQUFtQixRQUFRLE9BQTNCO0FBQ0EsTUFBRSxRQUFGLEVBQVksSUFBWixDQUFpQixRQUFRLEtBQXpCO0FBQ0EsTUFBRSxVQUFGLEVBQWMsSUFBZDtBQUNELEdBSkQsTUFJTztBQUNMLE1BQUUsWUFBRixFQUFnQixJQUFoQjtBQUNEO0FBQ0YiLCJmaWxlIjoiYXBwLWNvbnZlcnRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogKGMpIDIwMTYgS2lwIFN0cmVpdGhvcnN0XG4gKiBMaWNlbnNlOiBNSVRcbiAqL1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDbG9zZXN0U3RvcmUoemlwQ29kZSkge1xuICB2YXIgc3RvcmVJZHMgPSBhd2FpdCBnZXROZWFyYnlTdG9yZXMoemlwQ29kZSk7XG4gIGlmIChzdG9yZUlkcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZ2V0U3RvcmVEZXRhaWxzKHN0b3JlSWRzWzBdKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuJChmdW5jdGlvbiAoKSB7XG4gICQoXCIjc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICQoXCIjcmVzdWx0c1wiKS5oaWRlKCk7XG4gICAgJChcIiNub1Jlc3VsdHNcIikuaGlkZSgpO1xuICAgIHZhciB6aXAgPSAkKFwiI3ppcENvZGVcIikudmFsKCk7XG4gICAgZ2V0Q2xvc2VzdFN0b3JlKHppcCkudGhlbihmdW5jdGlvbiAoZGV0YWlscykge1xuICAgICAgc2hvd0RldGFpbHMoZGV0YWlscyk7ICAgICAgXG4gICAgfSlcbiAgICAvLy5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgIC8vICBhbGVydCgnZXJyb3Igb2NjdXJyZWQgLSB1c2VkIC5jYXRjaCcpO1xuICAgIC8vfSk7XG4gIH0pO1xuICBcbiAgLypcbiAgJChcIiNzZWFyY2hcIikub24oXCJjbGlja1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy90cnkge1xuICAgICQoXCIjcmVzdWx0c1wiKS5oaWRlKCk7XG4gICAgJChcIiNub1Jlc3VsdHNcIikuaGlkZSgpO1xuICAgIHZhciB6aXAgPSAkKFwiI3ppcENvZGVcIikudmFsKCk7XG4gICAgdmFyIGRldGFpbHMgPSBhd2FpdCBnZXRDbG9zZXN0U3RvcmUoemlwKTsgIFxuICAgIHNob3dEZXRhaWxzKGRldGFpbHMpO1xuICAgIC8vfSBjYXRjaCAoZSkge1xuICAgIC8vICBhbGVydCgnZXJyb3Igb2NjdXJyZWQgLSB1c2VkIHRyeS9jYXRjaCcpO1xuICAgIC8vfVxuICB9KTsqL1xufSk7XG5mdW5jdGlvbiBzaG93RGV0YWlscyhkZXRhaWxzKSB7XG4gIGlmIChkZXRhaWxzKSB7XG4gICAgJChcIiNhZGRyZXNzXCIpLnRleHQoZGV0YWlscy5hZGRyZXNzKTtcbiAgICAkKFwiI2hvdXJzXCIpLnRleHQoZGV0YWlscy5ob3Vycyk7XG4gICAgJChcIiNyZXN1bHRzXCIpLnNob3coKTsgICAgICBcbiAgfSBlbHNlIHtcbiAgICAkKFwiI25vUmVzdWx0c1wiKS5zaG93KCk7XG4gIH0gIFxufSJdfQ==