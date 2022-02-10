let dead = document.getElementById('dead');
let lost = document.getElementById('lost');



for(let index = 1; index <= 9; index++){
   function getHole(index){
      let mainHole = document.getElementById(`hole${index}`);
      return mainHole;
   }
   let hole = getHole(index);

hole.onclick = function(){
   if(hole.classList.contains('hole_has-mole')){
      dead.textContent++
      if(dead.textContent >= 10){
         alert('Вы победили');
      }
   }else{
   lost.textContent++
   if(lost.textContent >= 5){
      alert('Вы проиграли');
   }
}
}
}
