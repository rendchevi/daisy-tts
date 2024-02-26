var opacity_clicked = "1.0"
var opacity_outed = "0.5"

function CustomImage(img_path, img_width, opacity, input_id, pos_x, pos_y) {

    this.obj = createDiv()

    this.obj.img = createImg(img_path)
    this.obj.img.id(input_id)
    this.obj.img.style("width", img_width)
    this.obj.img.position(pos_x, pos_y)
    this.obj.img.style("width", img_width + "px")
    this.obj.img.style("opacity", opacity)
}