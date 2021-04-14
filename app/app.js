  
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

    locationArray.push(this);
}


console.log(locationArray);
Location.prototype.RandomCustomerNumber = function () {
    for (let i = 0; i < time.length; i++) {

        this.customersNumberPerHour.push(randomNumberOf(this.minCustomer, this.maxCustomer));

    }
}

Location.prototype.CookiesP = function () {
    this.totalcookies=0;
    for (let i = 0; i < time.length; i++) {
        
        this.cookiesPurchasedPerHour.push(Math.floor(this.customersNumberPerHour[i] * this.avgCookiesPerHour));
        this.totalcookies = this.totalcookies + this.cookiesPurchasedPerHour[i];
        
    }
   
}





let seattle = new Location('seattle', 23, 65, 6.3);
let tokyo = new Location('tokyo', 3, 24, 1.2);
let dubai = new Location('dubai', 11, 38, 3.7);
let paris = new Location('paris', 20, 38, 2.3);
let lima = new Location('lima', 2, 16, 4.6);



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
    thfElement.textContent = " location /Total";
}








Location.prototype.rendered = function () {


    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    let tdname = document.createElement('td');
    trElement.appendChild(tdname);
    tdname.textContent = this.name


    for (let x = 0; x < time.length; x++) {
        // let trElement=document.createElement('tr');
        // tableElement.appendChild(trElement);
        let tdShops = document.createElement('td');
        trElement.appendChild(tdShops);
        tdShops.textContent = this.cookiesPurchasedPerHour[x];
        console.log(this.cookiesPurchasedPerHour[x]);

    }

    let thfElement = document.createElement('td');
    trElement.appendChild(thfElement);
    thfElement.textContent = this.totalcookies;

}








function final() {
    
    
    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    let th1Element = document.createElement('th');
    trElement.appendChild(th1Element);
    th1Element.textContent = 'Totals';
    let gegaTotal = 0;
    for (let z = 0; z < time.length; z++) {
        
        let totalcookiesEachHour = 0;

        for (let q = 0; q < locationArray.length; q++) {
            
            totalcookiesEachHour += locationArray[q].cookiesPurchasedPerHour[z];
            gegaTotal += locationArray[q].cookiesPurchasedPerHour[z];
            
        }
        
        let finalTh = document.createElement('th');
        trElement.appendChild(finalTh);
        finalTh.textContent = totalcookiesEachHour;
        
    }
    
    let thfElement = document.createElement('th');
    trElement.appendChild(thfElement);
    thfElement.textContent = gegaTotal
    
}

//get the Element by its id 
let parent = document.getElementById('userEvent');

//add event listener 
userEvent.addEventListener('submit', submitter);


//create a submitter function , it just run when click the submit button .
function submitter(event) {
    
    event.preventDefault();
    
    let name = event.target.place.value;
    let minCustomer = parseInt(event.target.min.value);
    let maxCustomer = parseInt (event.target.max.value);
    let avgCookiesPerHour = parseInt(event.target.avg.value);
    
    let userEvent = new Location(name, minCustomer, maxCustomer, avgCookiesPerHour);
    console.log(userEvent);
    tableElement.textContent = '';
    
    
    first();
    
    for (let h = 0; h < locationArray.length; h++) {
        
        locationArray[h].RandomCustomerNumber();
        locationArray[h].CookiesP();
        locationArray[h].rendered();
    }
    
    final();
    
    
    

}



first();

for (let h = 0; h < locationArray.length; h++) {
    locationArray[h].RandomCustomerNumber();
    locationArray[h].CookiesP();
    locationArray[h].rendered();
}

final();










