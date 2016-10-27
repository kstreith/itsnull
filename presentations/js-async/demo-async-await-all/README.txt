Convert app.js, services.js which async/await to work in IE11
-------------------------------------------------------------

Install babel
  npm install babel-cli
  npm install babel-preset-stage-3
  npm install babel-preset-es2015

Run babel on app.js to create app-converted.js
  .\node_modules\.bin\babel app.js -o app-converted.js --source-maps inline --presets babel-preset-es2015,babel-preset-stage-3

Run babel on services.js to create services-converted.js
  .\node_modules\.bin\babel services.js -o services-converted.js --source-maps inline --presets babel-preset-es2015,babel-preset-stage-3

Update index.html
  Make sure that app-converted.js and services-converted.js are being used.
  Include a Promise polyfill, I used bluebird.js
  Include Facebook Regenerator runtime, downloaded from here: 
      https://raw.githubusercontent.com/facebook/regenerator/master/packages/regenerator-runtime/runtime.js
    Renamed to regenerator-runtime.js
  Instead of Promise polyfill and Facebook regenerator, might be able to use babel-polyfill.js. Give it a try.