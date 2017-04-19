# jquery.onFullyVisible.js

Just a dirty jQuery extension that execute your scripts when specific elements has been scrolled to visible on screen.

Most out there on the internet, I found none of it suit my use. So I decided to write it myself.

Those I found are just scripts to detect if parts of your element is visible then fire the event, but what I really need is only fire when all parts of your element are FULLY visible, and also tell you when that element is go out of viewport too.

# DISCLAIMER
I haven't done any proper test on this project, both performance and cross-browser compat.

Pull requests are always welcome.

# How to use

```javascript

if ($('.myItem').isFullyVisible()) {
  console.log('myItem is fully visible on viewport')
} else {
  console.log('myItem is not fully visible on viewport')
}

$('.myItem').onFullyVisible( function() {
  console.log(this, 'are just fully visible on viewport');
});

$('.myItem').onNotFullyVisible( function() {
  console.log(this, 'are not fully visible from viewport just now');
});

```

Due to performance reasons, this script will wait for some amount of time to make sure scroll has been finished before evaluate the state of elements. Default value is 200ms. You can change this value by passing it through a second parameter.

```javascript

$('.myItem').onFullyVisible( function() {
  console.log(this, 'are just fully visible on viewport');
}, 1000); // wait 1000ms after scroll finished

$('.myItem').onNotFullyVisible( function() {
  console.log(this, 'are not fully visible from viewport just now');
}, 1000); // wait 1000ms after scroll finished

```

## License
WTFPL 2.0 http://www.wtfpl.net/
