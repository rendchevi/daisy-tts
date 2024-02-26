var width_scale = 0.45
var height_scale = 0.7
var canvas_width = document.getElementById('title_h1').offsetWidth * width_scale
var canvas_height = canvas_width * height_scale
var radius = 50


function sketch(p) {


    p.setup = function() {
        
        p.createCanvas(canvas_width, canvas_height)
        p.background(0,0,0)

        p.circle(canvas_width/2,canvas_height/2,radius)

        //let img_anger = p.createImg("emotion-simulation/assets/embedding-space/space-anger-v2.png")
        //img_anger.style("width", 100)
        //img.position(0,0)  // Img("assets/embedding-space/space-joy-v2.png", "space-joy")
        // img.position(canvas_width/2,canvas_height/2)
      }

    p.re_draw = function() {
        p.setup()
    }

    p.windowResized = function() {
        canvas_width = document.getElementById('title_h1').offsetWidth * width_scale
        canvas_height = canvas_width * height_scale
        
        p.re_draw()
    }
}

new p5(sketch, "emotion-interface-sketch")