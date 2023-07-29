const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let number = 0
let scale = 10
let hue = Math.random() * 360

function drawFlower(params) {
  let angle = number * 5 //change the number for more different animations
  let radius = scale * Math.sqrt(number)
  let positionX = radius * Math.sin(angle) + canvas.width / 2
  let positionY = radius * Math.cos(angle) + canvas.height / 2
  ctx.fillStyle = `hsl(${hue}, 100%, 50%)`
  ctx.strokeStyle = 'blue'
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.arc(positionX, positionY, 15, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
  hue++
  number++
}

function animation(params) {
  //draw each frame
  //   ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawFlower()
  if (number > 650) return //change the number inside for more longer animation
  requestAnimationFrame(animation) //call over and over
}
animation()
