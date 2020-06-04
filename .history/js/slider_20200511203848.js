class Slider{
    constructor(id){
        this.box = document.querySelector(id)
        this.picBox =  this.box.querySelector("ul")
        this.indexBox =  this.box.querySelector(".img-nav")
        this.index = 1

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
            li.setAttribute("index",i+1)
            if(i == 0) {li.className = "active"}
            frg.appendChild(li)
        }
        this.indexBox.children[0].style.width = num*10*2+"px"
        this.indexBox.children[0].appendChild(frg)

        this.indexBox.children[0].addEventListener("mouseover",(e)=>{
            let pointIndex = (e.target).getAttribute("index")
            this.index = pointIndex
            console.log(this.index)
        })
    }
}