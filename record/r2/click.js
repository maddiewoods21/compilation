const images = [
  'png/red-sweater.png',
  'png/orange-card.png',
  'png/yellow-gloves.png',
  'png/green-socks.png',
  'png/blue-sponge.png',
  'png/purple-blanket.png',
  'png/pink-beanie.png',
  'png/red-matches.png',
  'png/orange-bra.png',
  'png/yellow-pencil.png',
  'png/green-yoga.png',
  'png/blue-tshirt-crop.png',
  'png/purple-sweater.png',
  'png/red-puffer.png',
  'png/orange-tshirt-tyedye.png',
  'png/orange-winestopper.png',
  'png/green-matches.png',
  'png/blue-book1.png',
  'png/purple-sportsbra.png',
  'png/pink-salt.png',
  'png/pink-scarf.png',
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]

  const img = document.createElement('img')
  img.setAttribute('src', nextSrc)
  img.setAttribute('draggable', 'true')

  img.style.left = x + 'px'
  img.style.top = y + 'px'
  img.style.transform =
    'translate(-50%, -50%) scale(0.5) rotate(' + (Math.random() * 20 - 10) + 'deg)'

  document.body.appendChild(img)

  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}

document.addEventListener('click', function(event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})

document.addEventListener('touchend', function(event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
})
