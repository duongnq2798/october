// tip = bill * tipPercent/100
function formartMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return '$ ' + value;
}

function formatSplit(value) {
  if (value === '1') {
    return value + ' person';
  } else {
    return value + ' people';
  }
}

function update() {
  // Get Element
  let bill = Number(document.getElementById('yourBill').value);
  let tipPercent = document.getElementById('tipInput').value;
  let split = document.getElementById('splitInput').value;
  // Calculator
  let tipValue = bill * tipPercent/100;
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;
  
  document.getElementById('tipPercent').innerHTML = tipPercent + '%';
  document.getElementById('tipValue').innerHTML = formartMoney(tipValue);
  document.getElementById('totalWithTip').innerHTML = formartMoney(bill + tipValue);
  document.getElementById('splitValue').innerHTML = formatSplit(split) ;
  document.getElementById('billEach').innerHTML = formartMoney(newBillEach);
  document.getElementById('tipEach').innerHTML = formartMoney(tipEach);
}

let container = document.getElementById('container');
container.addEventListener('input', update); // addEventListener (type: input, function: update)