'use strict';



let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumberOf(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


let locationArray = [];



function Location(name, minCustomer, maxCustomer, avgCookiesPerHour) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.customersNumberPerHour = [];
  this.cookiesPurchasedPerHour = [];
  this.totalcookies = 0;
  this.totalcookiesShopPerHour = [];

  locationArray.push(this);
}


console.log(locationArray);
Location.prototype.RandomCustomerNumber = function () {
  for (let i = 0; i < time.length; i++) {

    this.customersNumberPerHour.push(randomNumberOf(this.minCustomer, this.maxCustomer));

  }
}

Location.prototype.CookiesP = function () {
  for (let i = 0; i < time.length; i++) {

    this.cookiesPurchasedPerHour.push(Math.floor(this.customersNumberPerHour[i] * this.avgCookiesPerHour));
    this.totalcookies = this.totalcookies + this.cookiesPurchasedPerHour[i];

  }
}
Location.prototype.TotalsShop = function () {
  for (let t = 0; t < time.length; t++) {

    this.totalcookiesShopPerHour[t] = seattle.cookiesPurchasedPerHour[t] + tokyo.cookiesPurchasedPerHour[t] + dubai.cookiesPurchasedPerHour[t] + paris.cookiesPurchasedPerHour[t] + lima.cookiesPurchasedPerHour[t]


  }

}




let seattle = new Location('seattle', 23, 65, 6.3);
let tokyo = new Location('tokyo', 3, 24, 1.2);
let dubai = new Location('dubai', 11, 38, 3.7);
let paris = new Location('paris', 20, 38, 2.3);
let lima = new Location('lima', 2, 16, 4.6);


seattle.RandomCustomerNumber();
seattle.CookiesP();
seattle.TotalsShop();

tokyo.RandomCustomerNumber();
tokyo.CookiesP();
tokyo.TotalsShop();

dubai.RandomCustomerNumber();
dubai.CookiesP();
dubai.TotalsShop();

paris.RandomCustomerNumber();
paris.CookiesP();
paris.TotalsShop();

lima.RandomCustomerNumber();
lima.CookiesP();
lima.TotalsShop();





let divPerant = document.getElementById('Cooki');
let tableElement = document.createElement('table');
divPerant.appendChild(tableElement);








function first() {


  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let th1Element = document.createElement('th');
  trElement.appendChild(th1Element);
  th1Element.textContent = ' ';

  for (let y = 0; y < time.length; y++) {


    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = time[y];
  }

  let thfElement = document.createElement('th');
  trElement.appendChild(thfElement);
  thfElement.textContent = "Daily location /Total";
}

first();







Location.prototype.rendered = function () {


  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let th1Element = document.createElement('th');
  trElement.appendChild(th1Element);
  th1Element.textContent = this.name


  for (let x = 0; x < time.length; x++) {
    // let trElement=document.createElement('tr');
    // tableElement.appendChild(trElement);
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = this.cookiesPurchasedPerHour[x];

  }

  let thfElement = document.createElement('th');
  trElement.appendChild(thfElement);
  thfElement.textContent = this.totalcookies;

}

seattle.rendered();
tokyo.rendered();
dubai.rendered();
paris.rendered();
lima.rendered();




Location.prototype.final = function () {



  let trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  let th1Element = document.createElement('th');
  trElement.appendChild(th1Element);
  th1Element.textContent = 'Totals';

  for (let z = 0; z < time.length; z++) {


    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = this.totalcookiesShopPerHour[z];
  }

  let thfElement = document.createElement('th');
  trElement.appendChild(thfElement);
  thfElement.textContent = seattle.totalcookies + tokyo.totalcookies + dubai.totalcookies + paris.totalcookies + lima.totalcookies;


}


lima.final();
