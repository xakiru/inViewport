$(selector).inViewport()
==========

Lightweight function writen in javascript that add the function inViewport to jquery.



## Usage

Just take an exemple for this element that have an `item` id.
```html
<div id="item">Item 1</div>
```
 To test if the is visible on the screen use `$("#element").inViewport();` : 
```html
<script>
$(function () {
	if($('#items').inViewport()){
		// code if the element is visible
		console.log('items is visible');
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

or we can specify the direction and the testing region [full|partial] of an element when you're using the function:
```javascript
$('#selector').inViewport('vertical',false); 	//(['vertical'|'both'|'horizontal'],[false|true])
```

## Require

```html
<script src="js/jquery.js"></script>
<script src="js/inviewport.min.js"></script>
```

