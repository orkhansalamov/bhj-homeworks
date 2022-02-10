//уровень сложности #0

// let count = 59;
// let counter = setInterval("timer()", 1000);
// function timer (){
//    if(count < 0){
//       clearInterval(counter);
//       return alert("«Вы победили в конкурсе!»");
//    }
//    document.getElementById("timer").innerHTML=count;
//    count--;
// }


//уровень сложности #1


//let counter = setInterval("timer()", 1000);

//function timer(){
//   let datePromo = new Date(`2022-02-09 20:55:00`);
//   let now = new Date();
//   let leftUnit = datePromo - now;
   
//   now --;

//if ( leftUnit <= 0){
//   clearInterval(counter);
//   return alert("«Акция завершенад»");
//}
//   let hours = Math.floor(leftUnit / 1000 / 60 / 60) % 24;
//   hours = hours < 10 ? "0" + hours : hours;
//   let minutes = Math.floor(leftUnit / 1000 / 60 ) %60;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   let seconds = Math.floor(leftUnit / 1000) %60;
//   seconds = seconds < 10 ? "0" + seconds : seconds;
   
//   document.getElementById("timer").innerHTML= `${hours}:${minutes}:${seconds}`;
//}


//уровень сложности #2

let counter = setInterval("timer()", 1000);

function timer(){
   let datePromo = new Date(`2022-02-09 20:11:00`);
   let now = new Date();
   let leftUnit = datePromo - now;
   
   now --;

if ( leftUnit <= 0){
   clearInterval(counter);
   return downloadFileLink.click();
}
   let hours = Math.floor(leftUnit / 1000 / 60 / 60) % 24;
   hours = hours < 10 ? "0" + hours : hours;
   let minutes = Math.floor(leftUnit / 1000 / 60 ) %60;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   let seconds = Math.floor(leftUnit / 1000) %60;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   
   document.getElementById("timer").innerHTML= `${hours}:${minutes}:${seconds}`;
}
