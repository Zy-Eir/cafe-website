const menuBreakfastContainer = document.querySelector(".menu-breakfast-container"); 
const menuLunchContainer = document.querySelector(".menu-lunch-container"); 
const menuDinnerContainer = document.querySelector(".menu-dinner-container"); 
const menuCoffeeContainer = document.querySelector(".menu-coffee-container"); 
const menuSoftDrinksContainer = document.querySelector(".menu-softdrinks-container"); 
const menuBtnStylings = document.querySelector(".menu-btn-stylings"); 
const menuContainer = document.querySelector(".nav-backdrop"); 
 


const breakfastBtn = document.querySelector(".breakfast-btn"); 
const lunchBtn = document.querySelector(".lunch-btn"); 
const dinnerBtn = document.querySelector(".dinner-btn"); 
const coffeeBtn = document.querySelector(".coffee-btn"); 
const softdrinksBtn = document.querySelector(".softdrinks-btn"); 


function breakfastItems(){
    breakfastBtn.classList.toggle("menu-btn-active");

    lunchBtn.classList.remove("menu-btn-active");
    dinnerBtn.classList.remove("menu-btn-active");
    coffeeBtn.classList.remove("menu-btn-active");
    softdrinksBtn.classList.remove("menu-btn-active");

    menuBreakfastContainer.classList.toggle("menu-hidden");
    menuLunchContainer.classList.add("menu-hidden");
    menuDinnerContainer.classList.add("menu-hidden");
    menuCoffeeContainer.classList.add("menu-hidden");
    menuSoftDrinksContainer.classList.add("menu-hidden");
    
    


  };
  breakfastBtn.addEventListener("click", breakfastItems);

  
  function LunchItems(){
    lunchBtn.classList.toggle("menu-btn-active");

    breakfastBtn.classList.remove("menu-btn-active");
    dinnerBtn.classList.remove("menu-btn-active");
    coffeeBtn.classList.remove("menu-btn-active");
    softdrinksBtn.classList.remove("menu-btn-active");

    menuBreakfastContainer.classList.add("menu-hidden");
    menuLunchContainer.classList.toggle("menu-hidden");
    menuDinnerContainer.classList.add("menu-hidden");
    menuCoffeeContainer.classList.add("menu-hidden");
    menuSoftDrinksContainer.classList.add("menu-hidden");
    
    


  };
  lunchBtn.addEventListener("click", LunchItems);
  

  function DinnerItems(){
    dinnerBtn.classList.toggle("menu-btn-active");

    breakfastBtn.classList.remove("menu-btn-active");
    lunchBtn.classList.remove("menu-btn-active");
    coffeeBtn.classList.remove("menu-btn-active");
    softdrinksBtn.classList.remove("menu-btn-active");

    menuBreakfastContainer.classList.add("menu-hidden");
    menuLunchContainer.classList.add("menu-hidden");
    menuDinnerContainer.classList.toggle("menu-hidden");
    menuCoffeeContainer.classList.add("menu-hidden");
    menuSoftDrinksContainer.classList.add("menu-hidden");
    
    


  };
  dinnerBtn.addEventListener("click", DinnerItems);
  

 
  

  function coffeeItems(){
    coffeeBtn.classList.toggle("menu-btn-active");

    breakfastBtn.classList.remove("menu-btn-active");
    lunchBtn.classList.remove("menu-btn-active");
    dinnerBtn.classList.remove("menu-btn-active");
    softdrinksBtn.classList.remove("menu-btn-active");

    menuBreakfastContainer.classList.add("menu-hidden");
    menuLunchContainer.classList.add("menu-hidden");
    menuDinnerContainer.classList.add("menu-hidden");
    menuCoffeeContainer.classList.toggle("menu-hidden");
    menuSoftDrinksContainer.classList.add("menu-hidden");
    
    


  };
  coffeeBtn.addEventListener("click", coffeeItems);

  function softdrinksItems(){
    softdrinksBtn.classList.toggle("menu-btn-active");

    breakfastBtn.classList.remove("menu-btn-active");
    lunchBtn.classList.remove("menu-btn-active");
    dinnerBtn.classList.remove("menu-btn-active");
    coffeeBtn.classList.remove("menu-btn-active");

    menuBreakfastContainer.classList.add("menu-hidden");
    menuLunchContainer.classList.add("menu-hidden");
    menuDinnerContainer.classList.add("menu-hidden");
    menuCoffeeContainer.classList.add("menu-hidden");

    menuSoftDrinksContainer.classList.toggle("menu-hidden");
    
    


  };
  softdrinksBtn.addEventListener("click", softdrinksItems);