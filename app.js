document.getElementById('phone-increase').addEventListener('click', function () {
    const phonePrice = document.getElementById('phone-price');
    const phonePriceText = phonePrice.innerText;
    const phonePriceTextValue = parseInt(phonePriceText);
    
    const phonePriceValue = document.getElementById('price-value');
    let priceValue = phonePriceValue.value;
    priceValue = parseInt(priceValue) + 1; 
    phonePriceValue.value = priceValue;

    //balance
    phonePrice.innerText = phonePriceTextValue * parseInt(priceValue);
    // phonePrice.innerText = priceValue
})
document.getElementById('phone-decrease').addEventListener('click', function () {
    const priceDecreased = document.getElementById('price-value');
    const priceDecreasedValue = priceDecreased.value;
    priceDecreased.value = parseInt(priceDecreasedValue) - 1;
    
    // const pricePhone = document.getElementById('phone-price');
    // const priceText = pricePhone.innerText;
    // const priceNumber = parseInt(priceText);
    // pricePhone.innerText = priceNumber * parseInt(priceDecreasedValue)
})