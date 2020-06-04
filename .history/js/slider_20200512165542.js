class Slider{
    constructor(id){
        this.box = document.querySelector(id)
        this.picBox =  this.box.querySelector("ul")
        this.indexBox =  this.box.querySelector(".img-nav")
        this.sliderWidth = this.box.clientWidth
        this.index = 1

        this.init()
    }
    init(){

        this.initPoint()
        this.copyPic()
        this.leftRight()
    }
    initPoint(){
        const num = this.picBox.children.length

        let frg = document.createDocumentFragment()
        console.log(frg)

        for(let i = 0; i<num; i++){
            let li = document.createElement("li")
            li.setAttribute("index",i+1)
            if(i == 0) {li.className = "active"}
            frg.appendChild(li)
        }
        this.indexBox.children[0].style.width = num*10*2+"px"
        this.indexBox.children[0].appendChild(frg)

        this.indexBox.children[0].addEventListener("click",(e)=>{
            let pointIndex = (e.target).getAttribute("index")
            let offset = (pointIndex - this.index)*this.sliderWidth
            this.index = pointIndex
            this.move(offset)
        })
    }
    copyPic(){
          const first = this.picBox.firstElementChild.cloneNode(true)
          const last = this.picBox.lastElementChild.cloneNode(true)

          this.picBox.appendChild(first)
          this.picBox.insertBefore(last, this.picBox.firstElementChild)

          this.picBox.style.width = this.picBox.children.length*this.sliderWidth+"px"
          this.picBox.style.left = -1*this.sliderWidth+"px"

    }
    move(offset){
        this.animate(offset)
        
        const num = this.indexBox.children[0].children.length
        for(let i=0;i<num;i++){
            this.indexBox.children[0].children[i].className=""
        }
        this.indexBox.children[0].children[this.index-1].className="active"
    }
    animate(offset){ //offset是一次移动的距离
        let time = 1000 //运动的时间
        let rate = 100 //速率 
        let speed =offset / (time/rate) //移动一次的距离
        let goal = parseFloat(this.picBox.style.left)-offset //目标距离
      
        let animate = setInterval(() => {
            if(this.picBox.style.left == goal || Math.abs(Math.abs(parseFloat(this.picBox.style.left))- Math.abs(goal)) < Math.abs(speed)){
                this.picBox.style.left == goal
                clearInterval(animate)
            }else{
                this.picBox.style.left = parseFloat(this.picBox.style.left) - speed +"px"
            }
         }, rate);
    }
    leftRight(){
        this.box.querySelector(".left-btn").addEventListener("click",()=>{
            console.log("left")
            this.move(-this.sliderWidth)
        })
        this.box.querySelector(".right-btn").addEventListener("click",()=>{
            console.log("right")
            this.move(this.sliderWidth)
        })
    }
}