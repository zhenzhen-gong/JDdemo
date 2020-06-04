var a = []
for(let i = 0;i<=2;i++){
   a[i]=function(){
      return i*2
   }
}
console.table([
    a[0](),
    a[1](),
    a[2]()
])
