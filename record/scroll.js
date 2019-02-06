const scrollTag = document.querySelector("div.percentage")
const bodyTag = document.querySelector('body')
const progressTag = document.querySelector('div.progress')
const sections = document.querySelectorAll("section")
const colorTag = document.querySelector("div.color")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")

// update percentage tag to show how far we've scrolled

document.addEventListener("scroll" , function () {

  const pixels = Math.floor((window.pageYOffset / 5000) * 100)

  console.log(pixels)

  scrollTag.innerHTML = pixels + "%"

})

// progress bar

document.addEventListener('scroll' , function () {

const pixels = window.pageYOffset
const pageHeight = bodyTag.getBoundingClientRect().height

const totalScrollableDistance = pageHeight - window.innerHeight

const percentage = pixels / totalScrollableDistance

progressTag.style.width = `${100 * percentage}%`

})

// h1 text

document.addEventListener("scroll" , function () {
  const pixels = window.pageYOffset

  sections.forEach(section => {

    if (section.offsetTop - 50 <= pixels) {
      colorTag.innerHTML = section.getAttribute("data-color")
      pageTag.innerHTML = section.getAttribute("data-page")

    if (section.hasAttribute('data-dark')) {
      headerTag.classList.add('white')
      progressTag.classList.add('white')

    } else {
        headerTag.classList.remove('white')
        progressTag.classList.add('white')
    }

    }

  })

})


document.addEventListener('scroll' , function () {

  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    const distanceToSection = midViewport - midSection

    const parallaxTags = section.querySelectorAll(`[data-parallax]`)

    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute("data-parallax"))
      tag.style.transform = `translate(0,${distanceToSection * speed}px)`
    })


  })

})
