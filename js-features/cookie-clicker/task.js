 
 let count = 0;
 let cookie = document.getElementById("cookie");
 let clicker__counter = document.getElementById("clicker__counter")

 function imgClick(){
      if(document.onclick = cookie){
         count ++;
         clicker__counter.textContent = count;
         if(count % 2 == 0){
            cookie.width = 200;
         }else{
            cookie.width = 180;
         }
       }
       
 }

 