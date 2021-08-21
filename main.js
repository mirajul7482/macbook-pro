//handle extra memory cost 8 gb
document.getElementById('memory-8gb').addEventListener('click', function(){
    // update extra memory cost $0
    const memorySize = document.getElementById('memory-cost');
    memorySize.innerText = 0;
    totalPrice();
})


//handle extra memory cost 16gb 
document.getElementById('memory-16gb').addEventListener('click', function(){
    // update extra memory cost $180
    const memorySize = document.getElementById('memory-cost');
    memorySize.innerText = 180;
    totalPrice()
})


//handle Extra Storage Cost 256gb
document.getElementById('ssd-256gb').addEventListener('click', function(){
    // update extra storage cost $0
    const memorySize = document.getElementById('storage-cost');
    memorySize.innerText = 0;
    totalPrice()
})


//handle Extra Storage Cost 512gb
document.getElementById('ssd-512gb').addEventListener('click', function(){
    // update extra storage cost $100
    const memorySize = document.getElementById('storage-cost');
    memorySize.innerText = 100;
    totalPrice()
})


//handle Extra Storage Cost 1tb
document.getElementById('ssd-1tb').addEventListener('click', function(){
    // update extra storage cost $180
    const memorySize = document.getElementById('storage-cost');
    memorySize.innerText = 180;
    totalPrice()
    
})


//handle dlivery cost free
document.getElementById('delivery-free').addEventListener('click', function(){
    // update delivery cost $0
    const memorySize = document.getElementById('delivery-cost');
    memorySize.innerText = 0;
    totalPrice()
    
})


//handle dlivery cost urgent
document.getElementById('delivery-first').addEventListener('click', function(){
    // update delivery cost $20
    const memorySize = document.getElementById('delivery-cost');
    memorySize.innerText = 20;
    totalPrice()
})



//input funtion for total price
function getInput(product){
   const productInputText =  document.getElementById(product).innerText;
   const productInput =parseFloat(productInputText)
   return productInput;
}


//total price funtion
function totalPrice(){
const bestPrice = getInput('best-price');
const memoryCost = getInput('memory-cost');
const storageCost = getInput('storage-cost');
const deliveryCost = getInput('delivery-cost');
const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;

//total price
document.getElementById('total-price').innerText = totalPrice;  

//total price without promo code
document.getElementById('promoCode-price').innerText = totalPrice;

}


//get promocode discount
document.getElementById('promo-code').addEventListener('click', function(){
    const promoCodefield = document.getElementById('input-promoCode');
    const userInput = promoCodefield.value;
    const totalPrice = getInput('total-price');
    document.getElementById('promoCode-price').innerText = totalPrice;

    //promo code for stevekaku
    if(userInput == 'stevekaku'){
        const totalPrice = getInput('total-price');
        const discountPrice =totalPrice - (totalPrice * 0.2);
        document.getElementById('promoCode-price').innerText = discountPrice;
    }
    
})