// jshint esversion: 6

function runSelect(event) {
  event.preventDefault();

  let showAllBtn = [...document.querySelectorAll('button')].find(el => el.innerText.toLowerCase().includes('show all'));
  if (showAllBtn) {
    console.log('Clicking Show All button...');
    showAllBtn.click();
  }

  // Click on every "load to card" button.
  let load2crd = document.getElementsByClassName('available-to-clip');
  console.log(load2crd.length + ' coupons found');
  let clicked = 0;

  // Iterate in reverse because clicking on a button mutates the coupon list.
  for (let btn of Array.from(load2crd).reverse()) {
    btn.click();
    clicked++;
  }

  alert(`Clicked ${clicked} coupons clicked`);
}

function insertButton(btn) {
  function waitForSite() {
    let targetelem = document.getElementsByClassName('coupon-app');
    if (targetelem !== null && targetelem[0] !== undefined) {
      clearInterval(waitForSiteTimer);
      targetelem[0].parentNode.insertBefore(btn, targetelem[0]);
    }
  }

  // Wait for site to finish loading before inserting button.
  let waitForSiteTimer = setInterval(waitForSite, 100);
}

function init() {
  // Make a new button for our action.
  let newbutton = document.createElement('button');
  newbutton.name = 'load_all_to_card';
  newbutton.id = 'load_all_to_card';
  newbutton.style.cssText = 'background-color: #fff; color: #E82A24; font-weight: 700; border: solid #E82A24; padding: 6px 10px; cursor: pointer; margin: 5px';

  newbutton.addEventListener('mouseenter',
    () => {
      newbutton.style.color = '#fff';
      newbutton.style.backgroundColor = '#E82A24';
    }
  );

  newbutton.addEventListener('mouseleave',
    () => {
      newbutton.style.color = '#E82A24';
      newbutton.style.backgroundColor = '#fff';
    }
  );

  newbutton.appendChild(document.createTextNode('Load All To Card'));
  newbutton.addEventListener('click', runSelect);

  insertButton(newbutton);
}

init();

// -- The End --
