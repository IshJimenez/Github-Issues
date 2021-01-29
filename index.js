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
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class mrFreeze {
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
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}


    //Set up location of player 
const x = canvas.width / 2
const y = canvas.height / 2

    // When you make a new player can be put in new locations, new colors, etc
const playerR1 = new Player(x, y, 30, 'blue')   
    
playerR1.draw()      //Will need to  be created to see player part 2

const projectile = new shoots(
        canvas.width / 2, 
        canvas.height / 2, 
        5, 
        'purple', 
        {
        x: 1, y: 1 // Diffrent x and y values so projectiles can go somewhere
        }
)

const projectile2 = new shoots(
        canvas.width / 2, 
        canvas.height / 2, 
        5, 
        'green', 
        {
        x: -1, y: -1    
        }
)
    
const projectiles = []   
const legiondoom = []                

    function  spawnMrFreeze() {     //To render on the screen and move them at the same time
        setInterval(() => {         //call back function then time between iterirations
            const radius = 30

        let x
        let y

        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius   //Spwan from everywhere    
            y = Math.random() * canvas.height   
        } else {  
            x = Math.random() * canvas.width
            y = ath.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
            const color = 'orange'
            const angle = Math.atan2(canvas.height/ 2 - y,   //subtract from destination
                canvas.width / 2 - x)                             
          
            const velocity = {              //Lets you see shots
        x: Math.cos(angle),         //cos x ajacent axis, return any -1 to 1
        y: Math.sin(angle)          // Same will return -1 to 1
        }  
        
        
            legiondoom.push(new mrFreeze(x, y, radius, color, velocity));      //Adds values to mrFreezes
        }, 1000)                    
    }
    
    function animate() {
        requestAnimationFrame(animate)
        playerhold.clearRect(0, 0, canvas.width, canvas.height)     //See dots w/o lines
        playerR1.draw()                                             //See player
        projectiles.forEach(projectile => {
            projectile.update ()
    })

        legiondoom.forEach((mrFreeze) => {                          //We see enemies
            mrFreeze.update()
        })
}

    
    addEventListener('click', (event) => {                  
        const angle = Math.atan2(event.clientY - canvas.height/ 2,   //radius gives you pie
                                 event.clientX - canvas.width / 2)  //Shooting function                              
                           
        const velocity = {              //Lets you see shots
            x: Math.cos(angle),         //cos x ajacent axis, return any -1 to 1
            y: Math.sin(angle)          // Same will return -1 to 1
        }                 
            projectiles.push(new shoots(canvas.width / 2,               // shoots only when we click
            canvas.height / 2, 
            5, 
            'blue', 
            velocity)
        )
    })

    animate()
    spawnMrFreeze()