window.presentation = window.presentation || {};
(function () {
    "use strict";

    var person = { FirstName: 'Katherine', LastName: 'Johnson'};
    var requestDurations = [ 20, 5, 15, 68, 4, 33 ];
    var currentCityName = "Raleigh";               
    var cityTemps = [ {Name: 'Raleigh', High: 72, Low: 60}, {Name: 'New York', High: 68, Low: 62}, {Name: 'Seattle', High: 66, Low: 48}, {Name: 'Los Angeles', High: 88, Low: 63} ];
    document.querySelector("#consoleLog").addEventListener("click", function () {
        console.log('Hello, log');
    });
    document.querySelector("#consoleInfo").addEventListener("click", function () {
        console.info('Some info');
    });
    document.querySelector("#consoleWarn").addEventListener("click", function () {
        console.warn('Are you sure?');
    });
    document.querySelector("#consoleError").addEventListener("click", function () {
        console.error('Oh, no!');
    });
    document.querySelector("#consoleTableObj").addEventListener("click", function () {
        console.table(person);
    });    
    document.querySelector("#consoleTableArray").addEventListener("click", function () {
        console.table(requestDurations);
    });    
    document.querySelector("#consoleTableObjArray").addEventListener("click", function () {
        console.table(cityTemps);
    });    
    document.querySelector("#consoleCountClick").addEventListener("click", function () {
        console.count("my-label");
    });            
    document.querySelector("#consoleCountTemp").addEventListener("click", function () {
        var tempInput = document.querySelector("#userTemp");
        console.count(tempInput.value);
        tempInput.value = "";
    });            
    document.querySelector("#consoleTime").addEventListener("click", function () {
        console.time("custom-timer-name");
    });            
    document.querySelector("#consoleTimeEnd").addEventListener("click", function () {
        console.timeEnd("custom-timer-name");
    });            
    function lookupValidValues() {
        console.trace();
    }
    function validate(n) {
        lookupValidValues();
    }
    function genericImpl(n) {
        validate(n)
    }
    function executeStuff(n) {
        genericImpl(n);
    }
    document.querySelector("#consoleTrace").addEventListener("click", function () {
        executeStuff(20);
    });            
    document.querySelector("#enterTemp").addEventListener("click", function () {
        var tempInput = document.querySelector("#userTempDebug");
        var newTemp = parseInt(tempInput.value, 10);
        updateCurrentTemp(newTemp);
    }); 
    document.querySelector("#hideControl").addEventListener("click", function () {
        document.querySelector("#tempControl").classList.remove("shown");        
    });
    function updateCurrentTemp(newTemp) {
        //use ES6 features, will throw on older browsers
        var currentCity = cityTemps.find(function (item) { return item.Name === currentCityName }) || {High: 0, Low: 0};
        if (newTemp > currentCity.High) {
            currentCity.High = newTemp;
        }
        if (newTemp < currentCity.Low) {
            currentCity.Low = newTemp;
        }
        updateUiBasedOnTemp(newTemp);
    }
    function updateUiBasedOnTemp(currentTemp) {
        document.querySelector(".tempLabel").classList.remove("cold");
        document.querySelector(".tempLabel").classList.remove("hot");
        if (currentTemp < 32) {
            document.querySelector(".tempLabel").classList.add("cold");
        }
        if (currentTemp > 99) {
            document.querySelector(".tempLabel").classList.add("hot");
        }
    }
    Reveal.addEventListener( 'showTempControl', function() {
        document.querySelector("#tempControl").classList.add("shown");
    }, false );    
    presentation.updateCurrentTemp = updateCurrentTemp;
    presentation.updateUiBasedOnTemp = updateUiBasedOnTemp;
    presentation.cityTemps = cityTemps;
})();