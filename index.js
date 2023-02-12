console.log("Hello world")
var element=document.getElementsByTagName('*')
for(let i=0;i<element.length;i++){
    let val=element[i]
    console.log(val)
    console.log(val.parentNode)
    console.log(val.childNodes)
}