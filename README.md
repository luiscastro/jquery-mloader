jQuery Media Loader
============

This plugin is very useful when you want load files dynamically from you javascript
code.

Support stylesheets, javascript and images.

How it works
--------------

When you want load stylesheets or javascript you just need send path by argument,
like this ``$.fn.mloader("load", "/my/style.css");`` on case you want load a
image you need set the wrapper for plugin know where it will load image or just
send image element.

```
<div>
  <img id="dynamic_image" src="/my/image.png"/>
  <div id="dynamic_image_wrapper">

  </div>
</div>
```

```
$("#dynamic_image").mloader("load", "/my/dynamic_image.png");

$("#dynamic_image_wrapper").mloader("load", "/my/dynamic_image.png");
```
