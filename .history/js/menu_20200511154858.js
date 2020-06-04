class Menu{
    constructor(id){
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector("ul")
        this.lis = this.box.querySelectorAll("li")
        this.menucontents = this.box.querySelectorAll(".menucontent")
    
        this.init()
    }
    init(){
        console.log("menu")
        this.lis.forEach((item) => {
            item.addEventListener("mouseenter",(e) => {
                let li = e.target
                console.log(li)
            })
        });
    }
}