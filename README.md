$(selector).inViewport()
==========

# inViewport function for jQuery

Lightweight function writen in javascript that add the function inViewport to jquery.

## Usage

Just take an exemple for this element that have an id `item` .
```html
<div id="item">Item 1</div>
```
 To test if the is visible on the screen use `$("#element").inViewport();` : 
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
$('#selector').inViewport('vertical',false); 	//(['vertical'|'both'|'horizontal'],[false|true])
```

Enjoy.