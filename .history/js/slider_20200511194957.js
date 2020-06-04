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
        const num = this.picBox.children.length
        console.log(num)

        let frg = document.createDocumentFragment()
        console.log(frg)
        for(let i = 0; i<num; i++){
            let li = document.createElement("li")
            console.log(li)
        }
    }
}