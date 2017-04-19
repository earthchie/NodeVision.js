# jquery.onFullyAppear.js

Just a dirty jQuery extension that execute your scripts when specific elements has been scrolled to visible on screen.

Most out there on the internet, I found none of it suit my use. So I decided to write it myself.
Those are just detect if part of elements is visible then boom! fire the onAppear event, but what I really need is only fire when all parts of your element are FULLY visible, and also tell you when that element is go out of viewport too.

# DISCLAIMER
I haven't done any proper test on this project, both functional and cross-browser compat.

Pull requests are always welcome.

# How to use

```javascript

if ( $('.myItem').isFullyVisible() ) {
  console.log('myItem is fully visible on viewport')
} else {
  console.log('myItem is not fully visible on viewport')
}

$('.myItem').onFullyAppear(function(){
  console.log(this, 'are fully appeared on viewport');
});
$('.myItem').onFullyDisappear(function(){
  console.log(this, 'are just disappeared from viewport');
});

```

## License
WTFPL 2.0 http://www.wtfpl.net/
