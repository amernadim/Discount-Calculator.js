document.getElementById('btn-apply').addEventListener('click',function(){
  const inputField = document.getElementById('text-field');
  const inputFieldtext = inputField.value;
  const price = document.getElementById('price');
  const priceString = price.innerText;
  const priceNumber = parseFloat(priceString);

  if(inputField.value === 'DOM'){
  const discount = priceNumber * (30/100);
  const totalPrice = priceNumber - discount;

  const discounts = document.getElementById('discount-price');
  const discountString = discounts.innerText;
  const discuntNumber = parseFloat(discountString);
  discounts.innerText = totalPrice;
  }
  else{
  const discounts = document.getElementById('discount-price');
  // const discountString = discounts.innerText;
  // const discuntNumber = parseFloat(discountString);
  discounts.innerText = "No Discount";
  }
  inputField.value = "";


})