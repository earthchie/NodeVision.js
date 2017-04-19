# jquery.onFullyVisible.js

Just a dirty jQuery extension that execute your scripts when specific elements has been scrolled to visible on screen.

Most out there on the internet, I found none of it suit my use. So I decided to write it myself.

Those I found are just scripts to detect if parts of your element is visible then fire the event, but what I really need is only fire when all parts of your element are FULLY visible, and also tell you when that element is not anymore fully visible too.

# DISCLAIMER
I haven't done any proper test on this project, both performance and cross-browser compat.

Pull requests are always welcome.

# How to use

## Visibility check

```javascript

if ($('.myItem').isFullVisible()) {
  console.log('myItem is fully visible on viewport')
} else {
  console.log('myItem is not fully visible on viewport')
}

if ($('.myItem').isHalfVisible()) {
  console.log('myItem is visible more than half of it on viewport')
} else {
  console.log('myItem is not visible more than half of it on viewport')
}

if ($('.myItem').isVisible('25%')) {
  console.log('myItem is visible more than 25% of it on viewport')
} else {
  console.log('myItem is visible less than 25% of it on viewport')
}

if ($('.myItem').isVisible('25%', 'top')) {
  console.log("myItem's top half is visible more than 25% of it on viewport")
} else {
  console.log("myItem's top half is visible less than 25% of it on viewport")
}

if ($('.myItem').isVisible('25%', 'bottom')) {
  console.log("myItem's bottom half is visible more than 25% of it on viewport")
} else {
  console.log("myItem's bottom half is visible less than 25% of it on viewport")
}
```

## execute script on visible and also when it not fullfill conditions too

```javascript

$('.myItem').onFullVisible( function() {
  console.log(this, 'are just fully visible on viewport');
});

$('.myItem').onFullVisible( function() {
  console.log(this, 'are just fully visible on viewport');
}, function () {
  console.log(this, 'are not anymore fully visible on viewport');
});

$('.myItem').onHalfVisible( function() {
  console.log(this, 'are just visible more than half of it on viewport');
}, function () {
  console.log(this, 'are not anymore visible more than half of it on viewport');
});

$('.myItem').onVisible('25%', function() {
  console.log(this, 'are just visible more than 25% of it on viewport');
}, function () {
  console.log(this, 'are not anymore visible more than 25% of it on viewport');
});

$('.myItem').onHalfVisible(function() {
  console.log(this, "'s top half are just visible on viewport");
}, function () {
  console.log(this, "'s top half are not anymore visible on viewport");
}, 'top'); // top or bottom

$('.myItem').onVisible('25%', function() {
  console.log(this, "'s bottom half just visible more than 25% of it on viewport");
}, function () {
  console.log(this, "'s bottom half are not anymore visible more than 25% of it on viewport");
}, 'bottom'); // top or bottom

```

Due to performance reasons, this script will wait for some amount of time to make sure scroll has been finished before evaluate the state of elements. Default value is 200ms. You can change this value by passing it through a parameter - e.g.

```javascript

$('.myItem').onFullVisible( function() {
  console.log(this, 'are just fully visible on viewport');
}, function () {
  console.log(this, 'are not anymore fully visible on viewport');
}, 1000); // wait 1000ms after scroll finished

$('.myItem').onVisible('25%', function() {
  console.log(this, "'s bottom half just visible more than 25% of it on viewport");
}, function () {
  console.log(this, "'s bottom half are not anymore visible more than 25% of it on viewport");
}, 'bottom', 2000); // wait 2000ms after scroll finished

```

## License
WTFPL 2.0 http://www.wtfpl.net/
