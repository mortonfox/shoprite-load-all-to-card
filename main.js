function runSelect(event) {
  event.preventDefault();

  var cpsite = document.getElementById('cpsite').contentDocument;
  var allcouponitems = cpsite.getElementById('all-coupon-items0');

  // Click on every "load to card" button.
  var load2crd = allcouponitems.getElementsByClassName('load2crd');
  for (var btn of load2crd) {
    btn.click();
  }
}

function insertButton(btn) {
  function waitForSite() {
    var cpsite = document.getElementById('cpsite').contentDocument;
    var allcouponitems = cpsite.getElementById('all-coupon-items0');
    if (allcouponitems != null) {
      clearInterval(waitForSiteTimer);
      allcouponitems.parentNode.insertBefore(btn, allcouponitems);
    }
  }

  // Wait for site to finish loading the iframe before inserting button.
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
