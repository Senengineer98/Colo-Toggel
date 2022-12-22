const colors=['red','green','rgba(133,122,200)','yellow']
const btn=document.getElementById('btn');
const color=document.querySelector('.color')

btn.addEventListener("click",function(){
    const randomNumber=getRandomnumber();
    console.log(randomNumber);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber]
})
 function getRandomnumber(){
    
     return  Math.floor( Math.random()*colors.length);
 }