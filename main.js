/*
http://coupons.shoprite.com/main.html


<button class="load2crd">Load to Card</button>

id: AllCoupons0
class: rightDiv

<iframe id="cpsite" src="http://coupons.shoprite.com/LoggedInPage.html?d1=47015120226&amp;d2=cheah1@hotmail.com&amp;d3=c61d4381-53ac-4998-8dca-deb171fc597b"></iframe>
*/

/*
function runSelect(event) {
  event.preventDefault();

  var tbody = document.getElementsByTagName('tbody');
  var rows = tbody[0].getElementsByTagName('tr');

  for (var row of rows) {
    // Find all table rows with an archived cache.
    var oldwarning = row.getElementsByClassName('OldWarning');
    if (oldwarning.length > 0) {
      // Check the row's checkbox so user can do a bulk delete later.
      var checkboxes = row.getElementsByClassName('Checkbox');
      checkboxes[0].checked = true;
    }
  }
}
*/

function init() {
  // Make a new button for our action.
  var newbutton = document.createElement('button');
  newbutton.setAttribute('name', 'load_all_to_card');
  newbutton.setAttribute('id', 'load_all_to_card');
  newbutton.setAttribute('value', 'Load All To Card');
  newbutton.setAttribute('style', 'background-color: #E82A24; color: #fff; font-weight: 700; border: none; padding: 6px 10px; cursor: pointer;');
  newbutton.appendChild(document.createTextNode('Load All To Card'));

  var iframe = document.getElementById('cpsite');
  var cpsite = iframe.contentDocument;

  var allcouponitems = cpsite.getElementById('all-coupon-items0');
  console.log(allcouponitems);

  allcouponitems.parentNode.insertBefore(newbutton, allcouponitems);

  /*
  newbutton.addEventListener('click', runSelect);
  */
}

setTimeout(init, 3000);

// -- The End --
