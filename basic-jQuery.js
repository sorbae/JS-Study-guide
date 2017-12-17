<script src="jquery.min.js"></script>
// placed in your HTML script before </body> tag
<script src="application.js"></script>
// your psuedo JS file where you use jquery
// placed AFTER the link to framework
jQuery(document).ready(function() {
  <code>
});

$('h1' .randomClass).text('change to this text')

$('selector').children('li');
$('selector' > li)
// element's direct children

$('selector').parent();
// element's parent

%(this).closest('.randomClass')
// searches up through ancestors
$(this).find('.randomClass')
// searches down through children

$('selector li').first();
$('selector li').last();
$('selector li').even();
$('selector li').odd();
$('.class').filter('.another-class')
// finds elements with a class of .class and .another-class

var price = $('<p>Added new price</p>');
$('.vacation').before(price)
price.insertBefore($('.vacation'));
// puts the price node BEFORE .vacation class
$('.vacation').after(price)
price.insertAfter($('.vacation'));
// puts the price node after .vacation
$('.vacation').prepend(price)
price.prependTo($('.vacation'));
// adds the node to the TOP of .vacation
$('.vacation').append(price)
price.appendTo($('.vacation'));
// puts the price node to the BOTTOM of .vacation

$('button').remove();
// removes <button> from the DOM

$('button').on('click', function() {
  // runs when any button is clicked
})
$('.button-class-name').on('click', 'button', function() {
  // this is more specific than the previous
  // only targets buttons inside .button-class-name
})
// .on(event, event handler)

$(this).after(price);
// Adds the price as a SIBLING after the button
$(this).remove()
// refers to the button that was clicked

$(this).closest('.vacation').append(price);
// walks up the DOM to find the ancestor with the class of 'vacation'
// and appends price to the end of the class node

.data(name) //grabs data value
.data(name, value)
// HTML5 - Data attribute
// All data attributes begin with 'data-'
// Added to any elements to provide additional information about the object
// Ex: <li class="vacation onsale" data-price="399.99">
// Ex: $('.vacation').first().data('price') //$399.99

.val(newValue) //set newValue
.val() //get value

// Class Manipulation
element.addClass(.newClassName)
element.removeClass(.newClassName)
element.toggleClass()
element.hasClass(class)
//checks if the element has a class name of .class

// jQuery object methods
element.slideDown()
element.slideUp()
element.slideToggle()
element.fadeIn()
element.fadeOut()
element.fadeToggle()
element.show()
element.hide()

element.animate({'top': '-10px'})
element.css({'top': '-10px'}, speed)
// animates the element from current to set position
// speed arguments:
// 400 (default), 'fast' (200), 'slow' (600), 'slideToggle()', 'fadeToggle()'

// Mouse Events:
// click
// focusin
// dlblclick
// mousedown
// mousemove
// mouseup
// mousedown
// mouseout
// mouseover
// mouseleave
// mouseeneter

// Keyboard Events:
// keypress
// keydown
// keyup // when user releases key press

// Form Events:
// blur
// select
// focus
// submit
// change

$(element).on('click', 'expand', function(event) {
  event.stopPropagation()
  // when the event happens and tries to bubble up
  // stopPropagation stops it from doing so at the event

  event.preventDefault();
  // prevents default behavior of browers
  // stops the webpage from returning to the top (bubbling up)
})

$(this).css('background-color', '#fff');
$(this).css({'background-color': '#fff'});

$(this).find('.price').css('display', 'block');
$(this).find('price').show()
