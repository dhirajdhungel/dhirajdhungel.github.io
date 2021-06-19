const navSlide = function(){
  var burger = document.querySelector(".burger"),
      nav = document.querySelector('.nav-bar');

      burger.addEventListener("click", function(){
      nav.classList.toggle('active');
      burger.classList.toggle('toggle'); 
  });
}
navSlide();