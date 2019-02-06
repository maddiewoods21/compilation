const scrollTag = document.querySelector("div.percentage")
const bodyTag = document.querySelector('body')
const progressTag = document.querySelector('div.progress')
// update percentage tag to show how far we've scrolled

document.addEventListener("scroll" , function () {

  const pixels = Math.floor((window.pageYOffset / 5420) * 101.5)

  console.log(pixels)

  scrollTag.innerHTML = pixels + " %"

})

// progress bar

document.addEventListener('scroll' , function () {

const pixels = window.pageYOffset
const pageHeight = bodyTag.getBoundingClientRect().height

const totalScrollableDistance = pageHeight - window.innerHeight

const percentage = pixels / totalScrollableDistance

progressTag.style.width = `${100 * percentage}%`

})
