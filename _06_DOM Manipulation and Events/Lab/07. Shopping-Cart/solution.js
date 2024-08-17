function solve() {
   const addBtns = document.querySelectorAll(".add-product");
   let addBtnArr = Array.from(addBtns);
   const textarea = document.querySelector("textarea");
   let totalPrice = 0;
   const products = [];
   const checkout = document.querySelector(".checkout");
   checkout.addEventListener("click", bougthProducts);

   function bougthProducts() {
      textarea.textContent += `You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`;
      checkout.disabled = true;

      addBtnArr.forEach((btn) => {
         btn.disabled = true;
      });
   }

   addBtnArr.forEach((btn) => {
      btn.addEventListener("click", addProduct);
   });

   function addProduct(e) {
      const productDiv = e.target.parentNode.parentNode;
      const productName = productDiv.querySelector(".product-title").textContent;
      const productPriceString = productDiv.querySelector(
         ".product-line-price"
      ).textContent;
      const price = Number(productPriceString);
      textarea.textContent += `Added ${productName} for ${price.toFixed(
         2
      )} to the cart.\n`;
      totalPrice += price;
      if (!products.includes(productName)) {
         products.push(productName);
      }
   }
}

// const addButtons = Array.from(document.querySelectorAll('button.add-product'));

// let products = [];
// let totalPrice = 0;

// const textarea = document.querySelector('textarea');

// const checkoutBtn = document.querySelector('button.checkout');
// checkoutBtn.addEventListener('click', () => {
//    textarea.value += `You bought ${products.join(', ')} for ${totalPrice.toFixed(2)}.`
//    checkoutBtn.disabled = true;
//    addButtons.forEach(btn => {
//       btn.disabled = true;
//    })
// });

// addButtons.forEach(btn => {
//    btn.addEventListener('click', addElementInTheCard);
// });

// function addElementInTheCard(event) {
//    const currentElement = event.currentTarget.parentNode.parentNode;
//    const productName = currentElement.querySelector('.product-title').textContent;
//    const productPrice = Number(currentElement.querySelector('.product-line-price').textContent);

//    if(!products.includes(productName)) {
//       products.push(productName);
//    }

//    totalPrice += productPrice;

//    textarea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
// }
