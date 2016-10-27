/**
 * (c) 2016 Kip Streithorst
 * License: MIT
 */

async function getClosestStore(zipCode) {
  var storeIds = await getNearbyStores(zipCode);
  if (storeIds.length) {
    return getStoreDetails(storeIds[0]);
  }
  return null;
}

$(function () {
  $("#search").on("click", function () {
    $("#results").hide();
    $("#noResults").hide();
    var zip = $("#zipCode").val();
    getClosestStore(zip).then(function (details) {
      if (details) {
        $("#address").text(details.address);
        $("#hours").text(details.hours);
        $("#results").show();      
      } else {
        $("#noResults").show();
      }
    }).catch(function (e) {
      alert('error occurred');
    });
  });
});