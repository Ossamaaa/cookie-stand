'use strict'




let salesCookies = document.getElementById('Cooki');
let table = document.createElement('table');
salesCookies.appendChild(table);
table.appendChild;
table.setAttribute('cellpadding', '8');


let workHours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];


let salmonCookieObjects = [];
function SalmonCookie (cookiesName, minCustomer, maxCustomer, avgCustomer) {
  this.cookiesName = cookiesName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCustomer = avgCustomer;

  this.customersPerHour = [];
  this.cookiesPurchasedPerHour = [];
  this.totalCookiesPurchased = 0;

  console.log(this);
  salmonCookieObjects.push(this);
}

let seattle = new SalmonCookie('Seattle', 23, 65, 6.3);
let tokyo = new SalmonCookie('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCookie('Dubai', 11, 38, 3.7);
let paris = new SalmonCookie('Paris', 20, 38, 2.3);
let lima = new SalmonCookie('Lima', 2, 16, 4.6);


SalmonCookie.prototype.randomNumber = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer));
  }
};

SalmonCookie.prototype.cookiesPurchased = function () {
  for (let i = 0; i < this.customersPerHour.length; i++) {
    this.cookiesPurchasedPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCustomer));
    this.totalCookiesPurchased += this.cookiesPurchasedPerHour[i];
  }
};

SalmonCookie.prototype.render = function () {
  let salesCookies = document.getElementById('Cooki');
  let div = document.createElement('div');
  salesCookies.appendChild(div);
  let h3 = document.createElement('h3');
  div.appendChild(h3);
  h3.textContent = this.cookiesName;
  let ul = document.createElement('ul');
  div.appendChild(ul);
  for (let i = 0; i < this.customersPerHour.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${workHours[i]} : ${this.cookiesPurchasedPerHour[i]} Cookies`;
  }
  let li = document.createElement('li');
  ul.appendChild(li);
  li.textContent = `Tootal : ${this.totalCookiesPurchased} Cookies`;
  let hr = document.createElement('hr');
  div.appendChild(hr);
};




for (let i = 0; i < salmonCookieObjects.length; i++) {
  salmonCookieObjects[i].randomNumber();
  salmonCookieObjects[i].cookiesPurchased();
  salmonCookieObjects[i].render();
}

renderTheadTable();
renderTbodyTable();
renderTfootTable();

console.log(salmonCookieObjects[0].cookiesPurchasedPerHour[0]);


function renderTheadTable() {
  let thead = document.createElement('thead');
  table.appendChild(thead);
  let tr = document.createElement('tr');
  thead.appendChild(tr);
  let thStart = document.createElement('th');
  tr.appendChild(thStart);
  thStart.textContent = 'locations';
  for (let i = 0; i < workHours.length; i++) {
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = workHours[i];
  }
  let thEnd = document.createElement('th');
  tr.appendChild(thEnd);
  thEnd.textContent = 'Daily Location Total';
}


function renderTbodyTable() {
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  for (let i = 0; i < salmonCookieObjects.length; i++) {

    let trTbody = document.createElement('tr');
    tbody.appendChild(trTbody);

    let tdTbodyForName = document.createElement('td');
    trTbody.appendChild(tdTbodyForName);
    tdTbodyForName.textContent = salmonCookieObjects[i].cookiesName;

    for (let j = 0; j < salmonCookieObjects[i].cookiesPurchasedPerHour.length; j++) {

      let tdTbody = document.createElement('td');
      trTbody.appendChild(tdTbody);
      tdTbody.textContent = salmonCookieObjects[i].cookiesPurchasedPerHour[j];

    }

    let tdTbodyForTotal = document.createElement('td');
    trTbody.appendChild(tdTbodyForTotal);
    tdTbodyForTotal.textContent = salmonCookieObjects[i].totalCookiesPurchased;
  }
}

function renderTfootTable() {

  let totalDailySalesCookies = 0;

  let tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);

  let tr = document.createElement('tr');
  tfoot.appendChild(tr);

  let tdTfootForAllTotal = document.createElement('th');
  tr.appendChild(tdTfootForAllTotal);
  tdTfootForAllTotal.textContent = 'Total';

  for (let i = 0; i < workHours.length; i++) {
    let totalHoursSalesCookies = 0;
    for (let j = 0; j < salmonCookieObjects.length; j++) {
      totalHoursSalesCookies += salmonCookieObjects[j].cookiesPurchasedPerHour[i];
    }
    totalDailySalesCookies += totalHoursSalesCookies;
    let td = document.createElement('th');
    tr.appendChild(td);
    td.textContent = totalHoursSalesCookies;
  }

  let tdTotalDailySalesCookies = document.createElement('th');
  tr.appendChild(tdTotalDailySalesCookies);
  tdTotalDailySalesCookies.textContent= totalDailySalesCookies;

}













// const seattle = {
//   cookiesName: 'Seattle Sales ',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   customersPerHour: [],
//   PurchasedPerhour: [],
//   totalcookiespurchased: 0,



//   randomNumb: function () {
//     for (let i = 0; i < this.workHours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
//   },
//   cookiespurchased: function () {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
//       this.totalcookiespurchased += this.PurchasedPerhour[i];
//     }
//   },
//   viewsales: function () {
//     let salesCookies = document.getElementById('Cooki');
//     let div = document.createElement('div');
//     salesCookies.appendChild(div);
//     let h3 = document.createElement('h3');
//     div.appendChild(h3);
//     h3.textContent = this.cookiesName;
//     let ul = document.createElement('ul');
//     div.appendChild(ul);
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
//     }
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
//     let hr = document.createElement('hr');
//     div.appendChild(hr);
//   }
// };
// seattle.randomNumb();
// seattle.cookiespurchased();
// seattle.viewsales();








// const tokyo = {
//   cookiesName: 'Tokyo Sales',
//   min:3,
//   max:24,
//   avg:1.2,
//   workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   customersPerHour: [],
//   PurchasedPerhour: [],
//   totalcookiespurchased: 0,


//   randomNumb: function () {
//     for (let i = 0; i < this.workHours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
//   },
//   cookiespurchased: function () {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
//       this.totalcookiespurchased += this.PurchasedPerhour[i];
//     }
//   },
//   viewsales: function () {
//     let salesCookies = document.getElementById('Cooki');
//     let div = document.createElement('div');
//     salesCookies.appendChild(div);
//     let h3 = document.createElement('h3');
//     div.appendChild(h3);
//     h3.textContent = this.cookiesName;
//     let ul = document.createElement('ul');
//     div.appendChild(ul);


//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
//     }
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
//     let hr = document.createElement('hr');
//     div.appendChild(hr);
//   }
// };
// tokyo.randomNumb();
// tokyo.cookiespurchased();
// tokyo.viewsales();






// const dubai = {
//   cookiesName: 'Dubai Sales ',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   customersPerHour: [],
//   PurchasedPerhour: [],
//   totalcookiespurchased: 0,


//   randomNumb: function () {
//     for (let i = 0; i < this.workHours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
//   },
//   cookiespurchased: function () {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
//       this.totalcookiespurchased += this.PurchasedPerhour[i];
//     }
//   },
//   viewsales: function () {
//     let salesCookies = document.getElementById('Cooki');
//     let div = document.createElement('div');
//     salesCookies.appendChild(div);
//     let h3 = document.createElement('h3');
//     div.appendChild(h3);
//     h3.textContent = this.cookiesName;
//     let ul = document.createElement('ul');
//     div.appendChild(ul);


//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
//     }
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
//     let hr = document.createElement('hr');
//     div.appendChild(hr);
//   }
// };
// dubai.randomNumb();
// dubai.cookiespurchased();
// dubai.viewsales();






// const paris = {
//   cookiesName: 'Paris Sales ',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   customersPerHour: [],
//   PurchasedPerhour: [],
//   totalcookiespurchased: 0,


//   randomNumb: function () {
//     for (let i = 0; i < this.workHours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
//   },
//   cookiespurchased: function () {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
//       this.totalcookiespurchased += this.PurchasedPerhour[i];
//     }
//   },
//   viewsales: function () {
//     let salesCookies = document.getElementById('Cooki');
//     let div = document.createElement('div');
//     salesCookies.appendChild(div);
//     let h3 = document.createElement('h3');
//     div.appendChild(h3);
//     h3.textContent = this.cookiesName;
//     let ul = document.createElement('ul');
//     div.appendChild(ul);


//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
//     }
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
//     let hr = document.createElement('hr');
//     div.appendChild(hr);
//   }
// };
// paris.randomNumb();
// paris.cookiespurchased();
// paris.viewsales();





// const lima = {
//   cookiesName: 'Lima Sales ',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
//   customersPerHour: [],
//   PurchasedPerhour: [],
//   totalcookiespurchased: 0,



//   randomNumb: function () {
//     for (let i = 0; i < this.workHours.length; i++) {
//       this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
//     }
//   },
//   cookiespurchased: function () {
//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
//       this.totalcookiespurchased += this.PurchasedPerhour[i];
//     }
//   },
//   viewsales: function () {
//     let salesCookies = document.getElementById('Cooki');
//     let div = document.createElement('div');
//     salesCookies.appendChild(div);
//     let h3 = document.createElement('h3');
//     div.appendChild(h3);
//     h3.textContent = this.cookiesName;
//     let ul = document.createElement('ul');
//     div.appendChild(ul);


//     for (let i = 0; i < this.customersPerHour.length; i++) {
//       let li = document.createElement('li');
//       ul.appendChild(li);
//       li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
//     }
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
//     let hr = document.createElement('hr');
//     div.appendChild(hr);
//   }
// };
// lima.randomNumb();
// lima.cookiespurchased();
// lima.viewsales();
