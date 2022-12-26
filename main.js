function addItem() {
  // Get the item name, price, and quantity
  var itemName = document.getElementById("item-name").value;
  var itemPrice = parseFloat(document.getElementById("item-price").value);
  var itemQuantity = parseInt(document.getElementById("item-quantity").value);

  // Create a new table row element
  var newRow = document.createElement("tr");

  // Create the item name, price, and quantity cells
  var itemNameCell = document.createElement("td");
  var itemPriceCell = document.createElement("td");
  var itemQuantityCell = document.createElement("td");

  // Set the text of the cells
  itemNameCell.innerHTML = itemName;
  itemPriceCell.innerHTML = "$" + itemPrice.toFixed(2);
  itemQuantityCell.innerHTML = itemQuantity;

  // Add the cells to the row
  newRow.appendChild(itemNameCell);
  newRow.appendChild(itemPriceCell);
  newRow.appendChild(itemQuantityCell);

  // Add the row to the receipt table
  var receiptTable = document.getElementById("receipt");
  receiptTable.appendChild(newRow);

  // Calculate and update the total
  var total = parseFloat(document.getElementById("total").innerHTML.substring(1));
  total += itemPrice * itemQuantity;
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}
function addTip() {
  // Get the tip amount
  var tip = parseFloat(document.getElementById("tip").value);

  // Calculate the total with tip
  var total = parseFloat(document.getElementById("total").innerHTML.substring(1));
  var totalWithTip = (total/100) * (tip + 100);

  // Update the total with tip display
  document.getElementById("total-with-tip").innerHTML = "$" + totalWithTip.toFixed(2);
  document.getElementById("tip-per").innerHTML = tip.toFixed(0) + "%";
}
function clearReceipt() {
  // Clear the receipt table
  var receiptTable = document.getElementById("receipt");
  receiptTable.innerHTML = '<tr><th>Item</th><th>Price</th><th>Quantity</th></tr>';

  // Reset the total and total with tip displays
  document.getElementById("total").innerHTML = "$0.00";
  document.getElementById("total-with-tip").innerHTML = "$0.00";
}
function calculateChange() {
  // Get the total with tip and the amount paid
  var totalWithTip = parseFloat(document.getElementById("total-with-tip").innerHTML.substring(1));
  var amountPaid = parseFloat(document.getElementById("amount-paid").value);

  // Calculate the change
  var change = amountPaid - totalWithTip;

  // Display the change
  document.getElementById("change").innerHTML = "$" + change.toFixed(2);
}
