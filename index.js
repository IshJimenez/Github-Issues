const canvas = document.querySelector('canvas')


const playerhold = canvas.getContext('2d')

    //When using a windows property can put innerWidth
    // instead of windows.innerWidth

    canvas.width = innerWidth
    canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        playerhold.beginPath()
    //    (var).arc(x: Int, y: Int, r: Int, startAngle: Float, endAngle: Float,
    //    drawCounterClockwise: Bool (false));
        playerhold.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    //Will need to  be created to change player color
        playerhold.fillStyle = this.color
    //Will need to  be created to see player part 1
        playerhold.fill()
    }
}

class shoots {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    
    draw() {
        playerhold.beginPath()
        playerhold.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        playerhold.fillStyle = this.color
        playerhold.fill()
    }
    //To add velocity to our attacks
    update() {
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

    //Set up location of player 
const x = canvas.width / 2
const y = canvas.height / 2

    // When you make a new player can be put in new locations, new colors, etc
const playerR1 = new Player(x, y, 30, 'blue')
    //Will need to  be created to see player part 2
playerR1.draw()

const projectile = new shoots(
    canvas.width / 2, canvas.height / 2, 5, 'purple', 
// Diffrent x and y values so projectiles can go somewhere
    {
            x: 1, y: 1
    }
)
    
    function animate() {
        requestAnimationFrame(animate)
        //Animate the weapon
        projectile.draw()
        //To add velocity to our attacks
        projectile.update()
}

    //Allows us to create the shooting function
    addEventListener('click', (event) => { })
    
    animate()