let body=document.body;

let section = document.createElement("article");

// red,orange,yellow,green,blue,indigo,violet
let red=document.createElement("article");
let orange=document.createElement("article");
let yellow=document.createElement("article");
let green=document.createElement("article");
let blue=document.createElement("article");
let indigo=document.createElement("article");
let violet=document.createElement("article");

body.append(section);
section.append(red,orange,yellow,green,blue,indigo,violet);

section.style.cssText = height:100vh; display:flex;

red.style.cssText = background-Color:white; flex:1;;
orange.style.cssText = background-Color:white; flex:1;;
yellow.style.cssText = background-Color:white; flex:1;;
green.style.cssText = background-Color:white; flex:1;;
blue.style.cssText = background-Color:white; flex:1;;
indigo.style.cssText = background-Color:white; flex:1;;
violet.style.cssText = background-Color:white; flex:1;;

red.addEventListener("mouseover",()=>{
 red.style.cssText = background-color:red; flex:1;
})
red.addEventListener("mouseout",()=>{
 red.style.cssText = background-color:white; flex:1;
})

orange.addEventListener("mouseover",()=>{
 orange.style.cssText = background-color:orange; flex:1;
})
orange.addEventListener("mouseout",()=>{
 orange.style.cssText = background-color:white; flex:1;
})

yellow.addEventListener("mouseover",()=>{
 yellow.style.cssText = background-color:yellow; flex:1;
})
yellow.addEventListener("mouseout",()=>{
 yellow.style.cssText = background-color:white; flex:1;
})

green.addEventListener("mouseover",()=>{
 green.style.cssText = background-color:green; flex:1;
})
green.addEventListener("mouseout",()=>{
 green.style.cssText = background-color:white; flex:1;
})

blue.addEventListener("mouseover",()=>{
 blue.style.cssText = background-color:blue; flex:1;
})
blue.addEventListener("mouseout",()=>{
 blue.style.cssText = background-color:white; flex:1;
})

indigo.addEventListener("mouseover",()=>{
 indigo.style.cssText = background-color:indigo; flex:1;
})
indigo.addEventListener("mouseout",()=>{
 indigo.style.cssText = background-color:white; flex:1;
})

violet.addEventListener("mouseover",()=>{
 violet.style.cssText = background-color:violet; flex:1;
})
violet.addEventListener("mouseout",()=>{
 violet.style.cssText = background-color:white; flex:1;
})