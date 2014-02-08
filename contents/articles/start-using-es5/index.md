---
title: It's time to start using ES5 in your javascript code, actually it's past time
author: kstreith 
date: 2014-02-08
template: article.jade
---

If you don't know, ES5 is the EcmaScript5 specification, otherwise known as version 5 of the Javascript specification. Why should you use it? Because the spec has been out long enough (*since 2009*) to be very well supported across a wide swath of browsers and browser versions.


Let's look at some code you can write now with ES5 that you probably used third-party libraries for in the past.

<span class="more" />

**Built-in Map function**

```javascript
  var arr = [{id: 2, name: 'cat'}, {id: 3, name: 'dog'}];
//REPLACE THIS JQuery
  var names = $.map(arr, function(item) { return arr.name; });
//OR, REPLACE THIS Underscore/LoDash
  var names = _.map(arr, function (item) { return arr.name; });

//WITH
  var names = arr.map(function(item) { return arr.name; });
```

**Built-in Filter function**

```javascript
  var arr = [{id: 2, name: 'cat'}, {id: 3, name: 'dog'}];
//REPLACE THIS JQuery
  var startsWithC = $.map(arr, function(item) { return (arr.name.indexOf("C") === 0) ? arr : null; });
//OR, REPLACE THIS Underscore/LoDash
  var startsWithC = _.filter(arr, function (item) { return !!(arr.name.indexOf("C") === 0); });

//WITH
  var startsWithC = arr.filter(function(item) { return !!(arr.name.indexOf("C") === 0); });
```

**Built-in Iteration**

```javascript
  var arr = [2,5,10];
//REPLACE THIS JQuery
  $.each(arr, function(item) { if (item > 5) { process(item); } });
//OR, REPLACE THIS Underscore/LoDash
  _.each(arr, function(item) { if (item > 5) { process(item); } });

//WITH
  arr.forEach(function (item) { if (item > 5) { process(item); } });
```

Or, my two personal favorites:

**Function binding**


```javascript
  var person = {
     likeCount: 0,
     like: function() { this.like = this.like + 1; }
  };
//REPLACE THIS JQuery
  var boundLike = $.proxy(person.like, person);
//OR, REPLACE THIS Underscore/LoDash
  var boundLike = _.bind(person.like, person);

//WITH
  var boundLike = person.like.bind(person);

```

**Iterating the keys of an object**


```javascript
//REPLACE THIS
  var observablesOnObject = [];
  for (var key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      if (ko.isObservable(myObj[key])) {
        observablesOnObject.push(key);
      }
    }
  } 
//OR THIS Underscore/LoDash
  var observablesOnObject = _.filter(_.keys(myObj), function (item) { return ko.isObservable(myObj(item)); });

//WITH
  var observablesOnObject = Object.keys(myObj).filter(function (item) { return ko.isObservable(myObj(item)); });
```

Now, you might say, that didn't change much. And that's true. Those functions are so useful that can find them in quite a few JS libraries or hand-written into application code-bases. And that my friend is why those functions got added to the EcmaScript5 specification and therefore built into the language. So, now you can use these functions without adding a third-party dependency. Very helpful if you like to re-use code between projects. And if someone reads your code, they don't have to go look up the documentation for the third-party library. Sounds good so far, right...

But... But...

**But, I have to support an old browser**

So, you checked the [ES5 compat table](http://kangax.github.io/es5-compat-table/) and noticed the browser you have to support is missing these functions *(I'm looking at you IE8)*.

We can solve that problem, go get the [ES5-shim library](https://github.com/es-shims/es5-shim). For those who say, but now I have JQuery and ES5 shim. Well, that's true. But in the future when you stop supporting that old browser, just drop ES5 shim. 

**But, the ES5 function doesn't work the same as the function in my favorite library**

Well, that's a very keen eye or some great unit tests. Nobody says you have to stop using your favorite library, nobody says you have to stop using your favorite function. You are writing the code, not me, you have lots of options. This is just another option, pick the best option for your code.

**In closing** 

Go read the [list of newly available functions](http://kangax.github.io/es5-compat-table/) *(and [shim support](https://github.com/es-shims/es5-shim) for those supporting old browers)* and see if any will work for you and your projects.
