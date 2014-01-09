---
title: My preferred RequireJS syntax 
author: kstreith 
date: 2014-01-08
template: article.jade
---

I've been working with Durandal lately, which means I'm using RequireJS. Almost all of the RequireJS module definition examples will look like this:

```javascript
define(['durandal/app', 'durandal/system'], function(app, system) {
  app.trigger('myEvent');
  system.log('myMessage');
});

```

Let me introduce you to my preferred RequireJS syntax...
<span class="more" />
```javascript
define(function(require) {
  var app = require('durandal/app');
  var system = require('durandal/system');

  app.trigger('myEvent');
  system.log('myMessage');
});
```

So, why do I prefer this syntax? I avoid the need to match up argument orders, between the dependencies array and the callback function. Or more specifically, I avoid the incomprehensible errors that would other occur when i later add, remove, re-order a dependency in one list but forget to do it in the other list. Yes, my syntax has more lines of code, but no more than you'd see in other languages that have built-in modules (e.g. import statement in Python, C#, Java, #include in C++). I don't see this syntax mentioned enough, so I thought it worthwhile to blog about it.

### Warning: Deep Dive Ahead
---
Some of you may wonder how that second syntax is able to work, since RequireJS isn't supposed to execute your callback function until all of your dependencies have been loaded. How's it supposed to do that, if your dependencies are retrieved by calling the require function only when your callback is executed? *Is a time machine involved?*

No, this syntax is known as Sugar syntax in RequireJS parlance. What happens in the define function is that it will ask for the string version of your callback function and it then runs regular expressions against that string looking for require('[module name here]') and then it simply assumes you had passed it a dependencies array *(e.g. the first argument to define in my first example)* containing those matches. On JsFiddle, I've created [proof that you can ask for any function as a string](http://jsfiddle.net/M2LcB/). And that is that.

