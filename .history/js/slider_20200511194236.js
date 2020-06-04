class Slider{
    constructor(id){
        this.box = document.querySelector(id)
        this.picBox =  this.box.querySelector("ul")
        this.indexBox =  this.box.querySelector(".img-nav")

        this.init()
    }
    init(){
        console.log(this.picBox)

        this.initPoint()
    }
    initPoint(){
        const num = this.picBox.children.lenght
        console.log(num)
    }
}