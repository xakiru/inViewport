$(selector).inViewport()
==========

# inViewport function for jQuery

Lightweight function (700 octets) that add the function inViewport to javascript.

## Usage

Just make class `.waterfall` on container and that’s all.
```html
<div id="item">Item 1</div>
```
 It's simple to use $("#element").inViewport();  is a simple jquery plugin to test if an element is visible on the screen: 
```html
<script>
$(function () {

	if($('#items').inViewport()){
		// code if the element is visible
		alert('items is visible');
	}

});
</script>
```

## Options

Options could be either configured in the library :
```javascript
var defaultDirection = 'both';  //both,vertical,horizontal
var defaultFull = false ;       // true, false
```

or we can specify the direction and the parametre for testing the full element or just part of it:
```javascript
$('#selector').inViewport('vertical',false)
```
