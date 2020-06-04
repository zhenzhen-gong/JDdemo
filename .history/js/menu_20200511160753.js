class Menu{
    constructor(id){
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector("ul")
        this.lis = this.box.querySelectorAll("li")
        this.menucontents = this.box.querySelectorAll(".menucontent")
    
        this.timer1 = null
        this.init()
    }
    init(){
        console.log("menu")
        this.lis.forEach((item) => {
            item.addEventListener("mouseenter",(e) => {
                let li = e.target
                this. timer1 = setTimeout(() => {
                    this.menucontents.forEach((item)=>{
                        item.classList.remove("active")
                    })
                    li.children[1].classList.add("active")
                },200)
                
            })
        });

        this.lis.forEach((item) => {
            item.addEventListener("mouseleave",(e) => {
                let li = e.target
                
            })
        });
    }
}