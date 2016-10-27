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
      showDetails(details);      
    })
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