const seattle = {
  cookiesName: 'Seattle Sales ',
  min: 23,
  max: 65,
  avg: 6.3,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  PurchasedPerhour: [],
  totalcookiespurchased: 0,



  randomNumb: function () {
    for (let i = 0; i < this.workHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
  },
  cookiespurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
      this.totalcookiespurchased += this.PurchasedPerhour[i];
    }
  },
  viewsales: function () {
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
      li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
seattle.randomNumb();
seattle.cookiespurchased();
seattle.viewsales();








const tokyo = {
  cookiesName: 'Tokyo Sales',
  min:3,
  max:24,
  avg:1.2,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  PurchasedPerhour: [],
  totalcookiespurchased: 0,


  randomNumb: function () {
    for (let i = 0; i < this.workHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
  },
  cookiespurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
      this.totalcookiespurchased += this.PurchasedPerhour[i];
    }
  },
  viewsales: function () {
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
      li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
tokyo.randomNumb();
tokyo.cookiespurchased();
tokyo.viewsales();






const dubai = {
  cookiesName: 'Dubai Sales ',
  min: 11,
  max: 38,
  avg: 3.7,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  PurchasedPerhour: [],
  totalcookiespurchased: 0,


  randomNumb: function () {
    for (let i = 0; i < this.workHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
  },
  cookiespurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
      this.totalcookiespurchased += this.PurchasedPerhour[i];
    }
  },
  viewsales: function () {
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
      li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
dubai.randomNumb();
dubai.cookiespurchased();
dubai.viewsales();






const paris = {
  cookiesName: 'Paris Sales ',
  min: 20,
  max: 38,
  avg: 2.3,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  PurchasedPerhour: [],
  totalcookiespurchased: 0,


  randomNumb: function () {
    for (let i = 0; i < this.workHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
  },
  cookiespurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
      this.totalcookiespurchased += this.PurchasedPerhour[i];
    }
  },
  viewsales: function () {
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
      li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
paris.randomNumb();
paris.cookiespurchased();
paris.viewsales();





const lima = {
  cookiesName: 'Lima Sales ',
  min: 2,
  max: 16,
  avg: 4.6,
  workHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersPerHour: [],
  PurchasedPerhour: [],
  totalcookiespurchased: 0,



  randomNumb: function () {
    for (let i = 0; i < this.workHours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
  },
  cookiespurchased: function () {
    for (let i = 0; i < this.customersPerHour.length; i++) {
      this.PurchasedPerhour.push(Math.ceil(this.customersPerHour[i] * this.avg));
      this.totalcookiespurchased += this.PurchasedPerhour[i];
    }
  },
  viewsales: function () {
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
      li.textContent = `${this.workHours[i]} : ${this.PurchasedPerhour[i]} Cookies`;
    }
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `Tootal : ${this.totalcookiespurchased} Cookies`;
    let hr = document.createElement('hr');
    div.appendChild(hr);
  }
};
lima.randomNumb();
lima.cookiespurchased();
lima.viewsales();
