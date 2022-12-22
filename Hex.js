const hex=['0','1','2','3','4','5','7','8','9','A','B','C','D','F']

const btn=document.getElementById('btn');
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    let hexcolor='#';
    for(i=0;i<6;i++)
    {
        hexcolor +=hex[randomNumber()];
    }
    color.textContent=hexcolor;
    document.body.style.backgroundColor=hexcolor;
});
 function randomNumber(){
    return Math.floor(Math.random()*hex.length);
 }


