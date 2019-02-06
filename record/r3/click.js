const images = [
  'assets/red-sweater.png',
  'assets/orange-card.png',
  'assets/yellow-gloves.png',
  'assets/green-socks.png',
  'assets/blue-sponge.png',
  'assets/purple-blanket.png',
  'assets/pink-beanie.png',
  'assets/red-matches.png',
  'assets/orange-bra.png',
  'assets/yellow-pencil.png',
  'assets/green-book1.png',
  'assets/green-yoga.png',
  'assets/blue-advil.png',
  'assets/blue-tshirt-crop.png',
  'assets/purple-sweater.png',
  'assets/pink-scarf.png',
  'assets/red-puffer.png',
  'assets/orange-tshirt-tyedye.png',
  'assets/orange-winestopper.png',
  'assets/green-matches.png',
  'assets/blue-book1.png',
  'assets/purple-sportsbra.png',
  'assets/pink-salt.png',
  'assets/red-lighter.png',
  'assets/red-tape1.png',
  'assets/orange-sweater.png',
  'assets/yellow-pills.png',
  'assets/green-leggings.png',
  'assets/blue-jeans.png',
  'assets/purple-candle.png',
  'assets/pink-vibrator.png',
  'assets/red-book1.png',
  'assets/orange-pot.png',
  'assets/yellow-sunscreen.png',
  'assets/green-croppants.png',
  'assets/blue-pills.png',
  'assets/blue-passport.png',
  'assets/blue-beanie.png',
  'assets/purple-yogatowel.png',
  'assets/pink-book1.png'
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]

  const img = document.createElement('img')
  img.setAttribute('src', nextSrc)
  img.setAttribute('draggable', 'false')

  img.style.left = x + 'px'
  img.style.top = y + 'px'
  img.style.transform =
    'translate(-50%, -50%) scale(0.5) rotate(' + (Math.random() * 20 - 10) + 'deg)'

  document.querySelector("section.collage").appendChild(img)

  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

document.querySelector("section.collage").addEventListener("click", function () {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)


})

document.querySelector("section.collage").addEventListener("click", function () {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)


})
