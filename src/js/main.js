// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import * as geardata from './geardata.js'

const bigmateria=40;
const smallmateria=12;

localStorage.clear();
geardata.initialisegear();

const weaponsdata = JSON.parse(localStorage.getItem('weapons'));
var weaponsdataperms=[];

for(var i=0;i<weaponsdata.length;i++)
  {
    var tempdata=[
      {    
        'gearindex': weaponsdata[i].gearindex,
        'mainstat':weaponsdata[i].mainstat,
        'crit':weaponsdata[i].crit+bigmateria*weaponsdata[i].slot1[0]
      }
    ]
    console.log(tempdata)
    weaponsdataperms.concat()
  }

const hatsdata = JSON.parse(localStorage.getItem('weapons'));
console.log(hatsdata);

const alldata={
  weaponsdata,
  hatsdata
}

var button = document.getElementById("solvebutton");
button.addEventListener("click", startsolving);

export function startsolving(){
  console.log(alldata.weaponsdata[0].slot1);
}