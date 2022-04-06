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
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = 59 * caseValueText;
})

document.getElementById('case-decreased').addEventListener('click', function () {
    const caseDecreased = document.getElementById('case-value');
    let caseValue = caseDecreased.value;
    caseValue = parseInt(caseValue) - 1;
    caseDecreased.value = caseValue;

    //balance
    const price = document.getElementById('case-price');
    price.innerText = 59 * caseValue;
})