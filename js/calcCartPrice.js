

function calcCartPriceDelivery() {
    const lastPrice = document.querySelector('.total-price')
    const cartItems = document.querySelectorAll('.cart-item')
    const deliveryCost = document.querySelector('.delivery-cost')
    const dataCartDelivery = document.querySelector('[data-cart-delivery]')
    const msgfreedelivery = document.querySelector('#msgfreedelivery')
    let totalPrice = 0
    cartItems.forEach(function(item) {

    const amountEl = item.querySelector('[data-counter]')
    const priceEl = item.querySelector('.price__currency')
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
    
    totalPrice += currentPrice
    })
    lastPrice.innerText = totalPrice

  if(totalPrice > 0) {
    dataCartDelivery.classList.remove('none')
  }else{
      dataCartDelivery.classList.add('none')
  }

    if(totalPrice >= 600) {
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'Бесплатно'
        msgfreedelivery.classList.add('none')
        
    }
    else{
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250 руб'
        msgfreedelivery.classList.remove('none')
    }
}