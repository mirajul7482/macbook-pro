document.getElementById('memory-8gb').addEventListener('click', function(){
    // update extra memory cost
    const memorySize = document.getElementById('memory-cost');
    memorySize.innerText = 0;
    
})
document.getElementById('memory-16gb').addEventListener('click', function(){
    // update extra memory cost
    const memorySize = document.getElementById('memory-cost');
    memorySize.innerText = 180;
   
})
document.getElementById('ssd-256gb').addEventListener('click', function(){
    // update extra memory cost
    const memorySize = document.getElementById('storage-cost');
    memorySize.innerText = 0;
   
})
document.getElementById('ssd-512gb').addEventListener('click', function(){
    // update extra memory cost
    const memorySize = document.getElementById('storage-cost');
    memorySize.innerText = 100;
    
})
document.getElementById('ssd-1tb').addEventListener('click', function(){
    // update extra memory cost
    const memorySize = document.getElementById('storage-cost');
    memorySize.innerText = 180;
    
})

document.getElementById('delivery-free').addEventListener('click', function(){
    // update extra memory cost
    const memorySize = document.getElementById('delivery-cost');
    memorySize.innerText = 0;
    
})
document.getElementById('delivery-first').addEventListener('click', function(){
    // update extra memory cost
    const memorySize = document.getElementById('delivery-cost');
    memorySize.innerText = 20;
    
})