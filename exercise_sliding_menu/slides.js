// pick all the images and layer based on z-index

const slideArea = document.querySelector('div.slideshow')
const images = slideArea.querySelectorAll('img')

// keep track of 1. slide and 2. z-index

let currentSlide = 0
let z = 1

// on click, change slide with transition based on z-index

slideArea.addEventListener('click', function() {
  currentSlide = currentSlide + 1

  if (currentSlide > images.length - 1) {
    currentSlide = 0
  }

  z = z + 1

  images.forEach(image => {
    image.style.animation = ''
  })

  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = 'fade 0.5s'
})

// on mouseover, place images in random places

slideArea.addEventListener('mouseover', function() {
  images.forEach(image => {
//     const x = 100 * Math.random() - 50
//     const y = 100 * Math.random() - 50

    const x = 25 * (Math.floor(Math.random() * 5)) - 50
    const y = 25 * (Math.floor(Math.random() * 5)) - 50

    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

// on mouse out, place images back in original position

slideArea.addEventListener('mouseout', function() {

  images.forEach(image => {
    image.style.transform = ''

  })

})
