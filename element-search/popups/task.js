 let mainModal = document.getElementById("modal_main");
 let successModal = document.getElementById("modal_success");
 let modalClose = Array.from(document.getElementsByClassName("modal__close"));
 let classSuccsse = document.querySelector(".show-success");

 popUpStart = setTimeout( 'startPopUp()', 1000);
 function startPopUp(){
    mainModal.classList.add("modal_active");
 }

 modalClose.forEach(item => item.onclick = function(){
    mainModal.classList.remove("modal_active");
    successModal.classList.remove("modal_active");
 })

 classSuccsse.onclick = function(){
    successModal.classList.add("modal_active");
 }



