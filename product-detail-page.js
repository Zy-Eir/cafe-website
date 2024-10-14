const increase = document.querySelector(".increase"); 
const decrease = document.querySelector(".decrease"); 


let quantityDisplay = document.querySelector(".quantity-display"); 
quantityDisplay.textContent = 1;

let price = document.querySelector(".product-detail-cost");
price.textContent = price.dataset.price;


console.log(price.dataset.price);



const sizeOptions = document.querySelectorAll('[data-size]');


/* 
sizeOptions.forEach(sizeOption => {

  function priceOptions(){
    if(sizeOption.dataset.size === '12 oz') {
      price.dataset.price = '$20.00';
      price.textContent = price.dataset.price;
      
      
      sizeOption.dataset.sizeSelected = true;
      
      console.log(price.dataset.price);
    } else if (sizeOption.dataset.size === '5 lb') {
      price.dataset.price = '$35.00';
      price.textContent= price.dataset.price;
      sizeOption.dataset.sizeSelected = true;
      console.log(price.dataset.price);
    }
   };
   sizeOption.addEventListener("click", priceOptions);

 

});
*/



const addToCartButton =  document.querySelector(".add-to-cart");



const grindOption = document.querySelector(".grind-option");

const shoppingCartContainer = document.querySelector(".shopping-cart-container");
//grindOption.dataset.grind;

//console.log(grindOption.dataset.grind); 


function quantityIncrement(){
  
    quantityDisplay.textContent++;
    console.log("quantity added");
   };
   increase.addEventListener("click", quantityIncrement);
  
  
  
   function quantityDecrement(){
    
    if(quantityDisplay.textContent == 1){
      quantityDisplay.textContent;
      console.log("minimum quantity required is 1");
    } else{
      quantityDisplay.textContent--;
      console.log("quantity subtracted");
    }
    
   };
   decrease.addEventListener("click", quantityDecrement);
  
  

   function addToCart(){
    

    const product = ["item-name", 'coffee']
    localStorage.setItem('product', JSON.stringify(product));

    const cart = JSON.parse(localStorage.getItem('product'));
    console.log(cart);

   

    shoppingCartContainer.innerHTML = `
      <div class="item">
            <div>
                <img src="placeholder.webp" alt="" class="img-stylings">
            </div>
            
            <div data-price="$20.00" class="each-price">
                  ${price}
            </div>

            <div class="quantity">
                
            </div>

            <div class="total-item-price">

            </div>
            
            <div class="delete">

            </div>
        </div>`


  };
  addToCartButton.addEventListener("click", addToCart);



