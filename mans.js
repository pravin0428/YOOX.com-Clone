 import { navbar, footer } from "./navbar.js";  

  document.getElementById("nav").innerHTML = navbar()

  document.querySelector(".lastSection").innerHTML = footer()

//   document.querySelector(".shirtsIn3").addEventListnerAll("click" , cartSection)
// let s = document.querySelectorAll(".shirtsIn3")
// console.log(s)
// let cat = document.getElementById("cardsIn3").children
//   console.log(cat)

 
// click and go to cart

// section3

let arrObj = [
    {
        img: "https://www.yoox.com/images/items/12/12802961WT_14_f.jpg?impolicy=crop&width=306&height=390",
        h4:"MARNI",
        p1:"T-shirt",
        p2:`${484.00}` ,
    },

    {img:"https://www.yoox.com/images/items/17/17263807VJ_14_f.jpg?impolicy=crop&width=306&height=390",
    h4:"ROBERTO_CAVALLI",
    p1:"snekers",
    p2:`${681.00}`
    },

    {
    img:"https://www.yoox.com/images/items/13/13787644SE_14_f.jpg?impolicy=crop&width=306&height=390",
    h4:"PRADA",
    p1:"Denim_pants",
    p2:`${749.00}`},

   ]

    //  console.log(arrObj[0])
    // let dataToCart = JSON.parse(localStorage.getItem("next"))||[]
    display(arrObj)

    function  display(arrObj){

        let cont = document.getElementById("cardsIn3")
    arrObj.forEach(function(elem , index){
        let div = document.createElement("div")
        let image = document.createElement("img")  
        image.src = elem.img
        let head = document.createElement("h4") 
        head.innerText = elem.h4 
        let para1 = document.createElement("p") 
        para1.innerText = elem.p1
        let para2 = document.createElement("p")
        para2.innerText = elem.p2
        let btn = document.createElement("button")
        btn.id = "aba"
         btn.innerText = "ADD CART"
         btn.addEventListener("click" , function(){
            cartSection(elem)
         })
        
        div.append(image,head,para1,para2,btn)
          cont.append(div)
    })  
    }

   let cart = JSON.parse(localStorage.getItem("Cart")) || [] ;
  var  count = 0
function cartSection(elem){
       
        cart.push(elem)
        count++
        localStorage.setItem("count" , JSON.stringify(count))
        localStorage.setItem("Cart",JSON.stringify(cart))
        window.location.href = "cartmen.html"
     }
 
 
 
 

 function addFun(){
          
let variable = document.querySelector(".fifthDiv")
    let div =  document.createElement(div)

    let bt = document.createElement("button")
    bt.innerText = "Add Cart"
    bt.addEventListener("click" , nextDivFive)

    div.append(bt)
    variable.append(div)
 }

 //first section

 document.getElementById("backGroundPoster").addEventListener("click" , posterImg)

function posterImg(){
    window.location.href = "index.html"
}

// section4 js

document.getElementById("img1").addEventListener("click" , storyOne)

function storyOne(){
    window.location.href = "storyOne.html"
}

document.getElementById("img2").addEventListener("click" , storyTwo)

function storyTwo(){
    window.location.href = "shoping.html"
}

document.getElementById("img3").addEventListener("click" , storyThree)

function storyThree(){
    window.location.href = "storyOne.html"
}
 
//added some finctionality in section2 img1

document.getElementById("c1").addEventListener("click" ,shopNow)

function shopNow(){
    window.location.href = "shoping.html"
}


// for fifth section

let arrObj2 = [
    {
        img : "https://www.yoox.com/images/items/14/14223307PX_14_f.jpg?impolicy=crop&width=306&height=390",
        h4:"PRADA",
        p1:"Sweter",
        p2:`${793.00}`
    
    
        
       },
       {
        img:"https://www.yoox.com/images/items/17/17237668GW_14_f.jpg?impolicy=crop&width=306&height=390",
         h4: "ETRO", 
         p1:"white Shoe",
         p2:586.00 
        } ,
       {
        img:"https://www.yoox.com/images/items/12/12715867JP_14_f.jpg?impolicy=crop&width=306&height=390",
         h4:"VETEMENTS" ,
         p1:"T-shirt",
         p2:`${678.31}`
        }
     
]

displayTwo(arrObj2)
function  displayTwo(arrObj2){

    let cont2 = document.getElementById("cardsIn5")
arrObj2.forEach(function(elem , index){
    let div = document.createElement("div")
    let image = document.createElement("img")  
    image.src = elem.img
    let head = document.createElement("h4") 
    head.innerText = elem.h4 
    let para1 = document.createElement("p") 
    para1.innerText = elem.p1
    let para2 = document.createElement("p")
    para2.innerText = elem.p2
    let btn = document.createElement("button") 
    btn.id = "abc"
     btn.innerText = "ADD CART"
     btn.addEventListener("click" , function(){
        cartSection(elem)
     })
    
    div.append(image,head,para1,para2,btn)
      cont2.append(div)
})  
}



let arrObj3 = [
    {
        img : "https://www.yoox.com/images/items/39/39879768LO_14_f.jpg?impolicy=crop&width=306&height=390",
        h4:"STELLA McCARTNEY",
        p1:"Turtleneck",
        p2:`${306.00}`
    
    
        
       },
       {
        img:"https://www.yoox.com/images/items/16/16084199VK_14_f.jpg?impolicy=crop&width=306&height=390",
         h4: "ROY ROGER'S", 
         p1:"Sartorial jacket",
         p2:`${297.00}` 
        } ,
       {
        img:"https://www.yoox.com/images/items/14/14189338EF_14_f.jpg?impolicy=crop&width=306&height=390",
         h4:"PS PAUL SMITH" ,
         p1:"Sweater",
         p2:`${678.31}`
        }
     
]


displayThree(arrObj3)
function  displayThree(arrObj3){

    let cont3 = document.querySelector(".in-pic6")
arrObj3.forEach(function(elem , index){
    let div = document.createElement("div")
    let image = document.createElement("img")  
    image.src = elem.img
    let head = document.createElement("h4") 
    head.innerText = elem.h4 
    let para1 = document.createElement("p") 
    para1.innerText = elem.p1
    let para2 = document.createElement("p")
    para2.innerText = elem.p2
    let btn = document.createElement("button") 
    btn.id = "abd"
     btn.innerText = "ADD CART"
     btn.addEventListener("click" , function(){
        cartSection(elem)
     })
    
    div.append(image,head,para1,para2,btn)
      cont3.append(div)
})  
}

 