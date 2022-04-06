document.getElementById('phone-increase').addEventListener('click', function () {
    const phonePriceValue = document.getElementById('price-value');
    let priceValue = phonePriceValue.value;
    priceValue = parseInt(priceValue) + 1; 
    phonePriceValue.value = priceValue;

    //balance
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = 1219 * parseInt(priceValue);
    // phonePrice.innerText = priceValue
})
document.getElementById('phone-decrease').addEventListener('click', function () {
    const priceDecreased = document.getElementById('price-value');
    let priceDecreasedValue = priceDecreased.value;
    priceDecreasedValue = parseInt(priceDecreasedValue) - 1;
    priceDecreased.value = priceDecreasedValue;
    
    const pricePhone = document.getElementById('phone-price');
    pricePhone.innerText = 1219 * parseInt(priceDecreasedValue);
})

// case manipulation
document.getElementById('case-increased').addEventListener('click', function () {
    const caseValueIncrease = document.getElementById('case-value');
    let caseValueText = caseValueIncrease.value;
    caseValueText = parseInt(caseValueText) + 1;
    caseValueIncrease.value = caseValueText;

    //balance
})