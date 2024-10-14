const navBackdrop = document.querySelector(".nav-backdrop"); 
const navBar = document.querySelector(".nav-bar"); 
const navMenu = document.querySelector(".nav-menu"); 
const logo = document.querySelector(".logo"); 
const shopButtonContainer = document.querySelector(".shop-button-container"); 
const menuButton = document.querySelector(".menu-button"); 
 

// const addToCart = document.querySelector(".add-to-cart"); 

//let shoppingCart = document.querySelector(".shopping-cart"); 
//shoppingCart.textContent = 0;





 
 function openMenu(){
  const visibility = navMenu.getAttribute('data-visible');


    if(visibility === "false"){
      navMenu.setAttribute('data-visible', true);
       navBar.classList.add("navbar-z-index");
       menuButton.style.marginLeft= "1rem";
       shopButtonContainer.style.marginRight= "1rem";
     //  navBar.style.padding="1rem 0rem 1rem 0rem";
      
      //navBackdrop.classList.add("nav-backdrop-full-height")
 
    } else if (visibility === "true"){
      navMenu.setAttribute('data-visible', false);
      //navBackdrop.classList.remove("nav-backdrop-full-height")
      navBar.classList.remove("navbar-z-index");
      menuButton.style.marginLeft= "0rem";
      shopButtonContainer.style.marginRight= "0rem";
    }
  
  };
  menuButton.addEventListener("click", openMenu);
  



  function generateProductPage(){
    /* 
    let doc = document.implementation.createHTMLDocument("Product-detail page");
    let testParagraph = doc.createElement("p")
    testParagraph.textContent = "yo yo yo";

    doc.body.append(testParagraph);

    window.location.assign(doc);

    console.log("success");
*/
  };
 // menuButton.addEventListener("click", generateProductPage);



 

 


// carousel practice down below

 document.querySelectorAll(".carousel-container").forEach(carousel => {

  const items = carousel.querySelectorAll(".carousel-item");

  const carouselBtnsHtml = Array.from(items, () => {
    return `<span class="carousel-btn">
    
            </span>`;
  });

  carousel.insertAdjacentHTML("beforeend", `
      <div class="carousel-nav">
      ${carouselBtnsHtml.join("")}
      </div>
    `);


    const buttons = carousel.querySelectorAll(".carousel-btn");

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all items
        items.forEach(item => item.classList.remove("carousel-item-active"));
        buttons.forEach(button => button.classList.remove("carousel-btn-active"));


        items[i].classList.add("carousel-item-active");
        button.classList.add("carousel-btn-active");
      });
    });

    // Selects the first item in the index on page load
    items[0].classList.add("carousel-item-active");
    buttons[0].classList.add("carousel-btn-active");


  // console.log(carouselBtns); 
 });

 