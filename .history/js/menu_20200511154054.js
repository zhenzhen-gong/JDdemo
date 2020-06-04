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
    }
}