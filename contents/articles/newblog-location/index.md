---
title: From Wordpress to Wintersmith 
author: kstreith 
date: 2014-01-07
template: article.jade
---

I've always wanted to be able to write my blog entries in Markdown, instead of using the Wordpress editor. What can I say, I really like Markdown. I had considered writing my own small blog engine that converted Markdown to HTML. But then there goes any free time I might have had. Plus, I would have to find a hosting provider. So, there my blog was stuck on Wordpress. Or so, I thought until I read a post by Phil Haack about [converting his blog](http://haacked.com/archive/2013/12/02/dr-jekyll-and-mr-haack/) to run on GitHub pages.

<span class="more">

After reading his post, I was pretty excited. The ability to write posts in Markdown. Using GitHub pages for free hosting. The whole site is statically generated, so if I needed to move to a paid hosting provider down the road, that would be easy. But then, I started reading up on both Jekyll and Octopress. They looked like they might be a pain to run on Windows *(repeat, looked like, I didn't try it, I'm probably wrong)*. They are written in Ruby, which I don't have a ton of experience in. But I do a ton of JS development. So, I thought maybe there's an equivalent to Jekyll and Octopress written in JS, using nodejs.  So, I went searching...

Turns out there are a couple static site generators written using nodejs. *(I won't list them, I'm sure more will be created, such is the current state of the Node community)* I found one I liked called [Wintersmith](http://wintersmith.io/). And you can see, my blog is now running on GitHub pages and was generated using Wintersmith. I'm quite happy with the results and quite enjoyed writing this post in [MarkdownPad2](http://markdownpad.com). Also, enjoyed previewing my entire blog on my local machine using 
> wintersmith preview

I did not convert my old posts on Wordpress over to Wintersmith. Something for the next brave convert to Wintersmith, maybe. You can find my old posts at http://itsnull.wordpress.com/