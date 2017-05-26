# NodeVision

Just a dirty scripts that fire event when specific elements has been scrolled to visible on screen.

Most out there on the internet, I found none of it suit my use. So I decided to write it myself.

Those I found are just scripts to detect if parts of your element is visible then fire the event, but what I really need is only fire when all parts of your element are FULLY visible, and also tell you when that element is not anymore fully visible too.

Then at some point I ask myself. Why to made it only detect fully visible when you can replace "fully" with percentage?
Fully visible means 100% of it is visible right? Here we go!

# How to use

For example: trigger event when ``#myDiv`` is visible more than 30%

```javascript
NodeVision('#myDiv')
.ifVisible('30%')
.then(function () {

  console.log(this, 'is just visible more that 30% of it on viewport');
  
}).else(function () {

  console.log(this, 'is not anymore visible more that 30% of it on viewport');
  
});
```

Sound cool eh? Star this project if you like it to support me :)

# DISCLAIMER
I haven't done any proper test on this project, both performance and cross-browser compat.

Pull requests are always welcome.

# How to use

## Visibility check

```javascript
NodeVision('#myDiv').isVisible(); // true or false
```

or

```javascript
var myDiv = document.getElementById('myDiv')
NodeVision(myDiv).isVisible(); // true or false
```

more examples

```javascript
NodeVision('#myDiv').isVisible('20%'); // return true if #myDiv visible >= 20% of it on viewport
NodeVision('#myDiv').isVisible('top 20%'); // return true if #myDiv visible >= 20% of it from the top on viewport
NodeVision('#myDiv').isVisible('bottom 20%'); // return true if #myDiv visible >= 20% of it from the bottom on viewport
```

## Raise event when user scroll into it

```javascript
NodeVision('#myDiv')
.ifVisible()
.then(function () {

  console.log(this, 'is just visible on viewport');
  
}).else(function () {

  console.log(this, 'is not anymore visible on viewport');
  
})
```

```javascript
NodeVision('#myDiv')
.ifVisible('30%')
.then(function () {

  console.log(this, 'is just visible more that 30% of it on viewport');
  
}).else(function () {

  console.log(this, 'is not anymore visible more that 30% of it on viewport');
  
});
```

```javascript
NodeVision('#myDiv')
.ifVisible('top 30%')
.then(function () {

  console.log(this, 'is just visible more that 30% of it from the top on viewport');
  
}).else(function () {

  console.log(this, 'is not anymore visible more that 30% of it from the top on viewport');
  
});
```

```javascript
// more verbal-like
NodeVision('#myDiv')
.ifVisible('30%')
.fromTop()
.then(function () {

  console.log(this, 'is just visible more that 30% of it from the top on viewport');
  
}).else(function () {

  console.log(this, 'is not anymore visible more that 30% of it from the top on viewport');
  
});
```

```javascript
NodeVision('#myDiv')
.ifVisible('bottom 30%')
.then(function () {

  console.log(this, 'is just visible more that 30% of it from the bottom on viewport');
  
}).else(function () {

  console.log(this, 'is not anymore visible more that 30% of it from the bottom on viewport');
  
});
```

```javascript
// more verbal-like
NodeVision('#myDiv')
.ifVisible('30%')
.fromBottom()
.then(function () {

  console.log(this, 'is just visible more that 30% of it from the bottom on viewport');
  
}).else(function () {

  console.log(this, 'is not anymore visible more that 30% of it from the bottom on viewport');
  
});

```

## License
WTFPL 2.0 http://www.wtfpl.net/
