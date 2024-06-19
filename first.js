let a=document.querySelectorAll('.dd1')
let trn='0';
trn=prompt('enter turn of player : X or 0');
let cmb=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],
[2,4,6]]
let drw=0;

a.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.innerText==''){
         if (trn=='0') element.style.color='yellow';
         else element.style.color='green';
         
             element.innerText=trn;
             drw+=1;
             

             if(trn=='0'){
                trn='X'
             }

             else if(trn=='X'){
                trn='0'
             }
            }
    for(i of cmb){
      let cnt=0;
      let df=0;
      
      i.forEach(element => {
         
         if (a[element].innerText==''){
            df+=1;
         }
         
      })
      if(df==0){
         
         if((a[i[0]].innerText==a[i[1]].innerText)) {
            if ((a[i[1]].innerText==a[i[2]].innerText)) {
               document.querySelector('h1').innerHTML='you win'
            console.log(a[i[0]].innerText,a[i[1]].innerText,a[i[2]].innerText)
            console.log("you win")
            }
            if(drw==9 && document.querySelector('h1').innerHTML!='you win') document.querySelector('h1').innerHTML='match draw';
            
         }
      }
        
      }//for loop end
      
   
   })
});







 