/**
* A jquery inViewport plugin. supports full/partial and vertical/horizontal/both detection.
* @created 2013-3-24
* @author Xakiru
* @see https://github.com/Xakiru/inViewport
* @example $("#element").inViewport('vertical',false);
*/


$.fn.inViewport = function(dir, full){
//  config
var defaultDirection = 'both';  //both,vertical,horizontal
var defaultFull = false ;       // true, false

//  
dir = (dir || defaultDirection); 
full = (full || defaultFull);

var v = (dir == 'vertical' || dir == 'both') ? true : false;
var h = (dir == 'horizontal' || dir == 'both') ? true : false;

var win = $(window);
var wtop = win.scrollTop() ;
var wleft = win.scrollLeft() ;
var wbuttom = win.scrollTop() + win.height() ;
var wright = win.scrollLeft() + win.width() ;
if(full){
    var etop = this.offset().top;
    var eleft = this.offset().left;
    var ebuttom = this.offset().top +  this.outerHeight();
    var eright = this.offset().left + this.outerWidth();
}
else{
    var etop =  this.offset().top +  this.outerHeight();
    var eleft =  this.offset().left + this.outerWidth();
    var ebuttom = this.offset().top;
    var eright =  this.offset().left;
}
var in_h = ( (((eright<wright) && (eleft>wleft))    )  );
var in_v = ( (((etop>wtop)     && (ebuttom<wbuttom)) ) );
return (((v && in_v) || (h && in_h)) && !(v && h))||(((v && in_v) && (h && in_h) )&& (v && h))
};