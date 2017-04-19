# jquery.onFullyAppear.js

Just a dirty jquery extension that execute your scripts when specific elements has been scrolled to visible on screen.

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
