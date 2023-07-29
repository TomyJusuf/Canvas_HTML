const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const particlesArray = []

window.addEventListener('resize', function (params) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

const mouse = {
  x: undefined,
  x: undefined,
}

canvas.addEventListener('click', function (e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawCircle()
  //
})
canvas.addEventListener('mousemove', function (e) {
  mouse.x = e.x
  mouse.y = e.y
})

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 6
    this.speedX = Math.random() * 3 - 1.5
    this.speedY = Math.random() * 3 - 1.5
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
  }
  draw() {
    ctx.fillStyle = 'red'
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.arc(this.x, this.y, 20, 0, Math.PI * 2)
    ctx.fill()
  }
}
function init(params) {
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle())
  }
}
init()

function handleParticles(params) {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
    particlesArray[i].draw()
  }
}

function animate(params) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  handleParticles()
  requestAnimationFrame(animate)
}
animate()
