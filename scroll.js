
// reading page
$(document).on('scroll', function () {

var pixels = $(document).scrollTop()

$('div.exercises').css('left' , -0.75 * pixels)

})

// readings page
$(document).on('scroll', function () {

var pixels = $(document).scrollTop()

$('div.responses').css('left' , -0.75 * pixels)

})


//projects page

$(document).on('scroll', function () {

var pixels = $(document).scrollTop()

$('div.projects').css('left' , -0.75 * pixels)

})

//process page

$(document).on('scroll', function () {

var pixels = $(document).scrollTop()

$('div.processes').css('left' , -0.75 * pixels)

})
