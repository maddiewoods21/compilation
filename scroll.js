$(document).on('scroll', function () {

var pixels = $(document).scrollTop()

$('div.exercises').css('left' , -0.75 * pixels)

})

$(document).on('scroll', function () {

var pixels = $(document).scrollTop()

$('div.responses').css('left' , -0.75 * pixels)

})
