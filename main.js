function runSelect(event) {
  event.preventDefault();

  // Click on every "load to card" button.
  var load2crd = document.getElementsByClassName('available-to-clip');
  console.log(load2crd.length + ' coupons found');
  var clicked = 0;
  for (var btn of load2crd) {
    // Skip all hidden buttons, i.e. coupons that have already been loaded to
    // card.
    if (!btn.classList.contains('ng-hide')) {
      btn.click();
      clicked++;
    }
  }
  console.log(clicked + ' coupons clicked');
}

function insertButton(btn) {
  function waitForSite() {
    var targetelem = document.getElementsByClassName('coupon-list');
    if (targetelem != null) {
      clearInterval(waitForSiteTimer);
      targetelem[0].parentNode.insertBefore(btn, targetelem[0]);
    }
  }

  // Wait for site to finish loading before inserting button.
  var waitForSiteTimer = setInterval(waitForSite, 100);
}

function init() {
  // Make a new button for our action.
  var newbutton = document.createElement('button');
  newbutton.name = 'load_all_to_card';
  newbutton.id = 'load_all_to_card';
  newbutton.style.cssText = 'background-color: #E82A24; color: #fff; font-weight: 700; border: none; padding: 6px 10px; cursor: pointer;';
  newbutton.appendChild(document.createTextNode('Load All To Card'));
  newbutton.addEventListener('click', runSelect);

  insertButton(newbutton);
}

init();

// -- The End --
