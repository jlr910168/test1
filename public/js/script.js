var products = document.querySelectorAll('.product');

products.forEach(function(product) {
  // change alt unit ratio info
  var unitAmount = product.querySelector('.unit--amount');
  var unitAltAmount = product.querySelector('.unit--alt-amount');
  var AltRatio = unitAltAmount ? parseFloat(unitAltAmount.textContent) : 1;
  var input = product.querySelector('.stepper-input');
  input.addEventListener('keyup', function() {
    unitAmount.innerHTML = input.value;
    unitAltAmount.innerHTML = (AltRatio * input.value).toFixed(2);
    if (!input.value) {
      input.value = 1;
    }
  })

  // change input value with arrows and alt unit ratio info
  var stepperUp = product.querySelector('.stepper-arrow.up');
  var stepperDn = product.querySelector('.stepper-arrow.down');
  stepperUp.addEventListener('click', function() {
    input.value = parseInt(input.value) + 1;
    input.dispatchEvent(new Event('keyup'));
  })
  stepperDn.addEventListener('click', function() {
    if (input.value > 1)
    input.value = parseInt(input.value) -  1;
    input.dispatchEvent(new Event('keyup'));
  })

  // change units prices when changing unit selector
  var productUnits = product.querySelector('.product_units');
  var unitSelects = productUnits.querySelectorAll('.unit--select');
  var priceGold = product.querySelector('.goldPrice');
  var priceRetail = product.querySelector('.retailPrice');
  unitSelects.forEach(function(select) {
    select.addEventListener('click', function() {
      unitSelects.forEach(function(s) {
        s.className = "unit--select";
      })
      select.className = "unit--select unit--active";
      var selectNo = Array.prototype.indexOf.call(select.parentNode.children, select);
      if (selectNo === 0) {
        priceGold.textContent = priceGold.dataset.gold;
        priceRetail.textContent = priceRetail.dataset.retail;
      } else {
        priceGold.textContent = priceGold.dataset.goldalt;
        priceRetail.textContent = priceRetail.dataset.retailalt;
      }
    })
  })
})
