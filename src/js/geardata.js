const weapons=[

    {
        'gearindex':1,
        'mainstat':100,
        'crit':120,
        'dh':150,
        'critslot':2,
        'dhslot':1
    },
    {    
        'gearindex':2,
        'mainstat':100,
        'crit':200,
        'dh':200,
        'slot1':'critdh',
        'slot2':'critdh'
    }

];

const hats=[

    {
        'gearindex':1,
        'mainstat':100,
        'crit':120,
        'dh':150,
        'slot1':'critdh',
        'slot2':'critdh'
    },
    {    
        'gearindex':2,
        'mainstat':100,
        'crit':200,
        'dh':200,
        'slot1':'critdh',
        'slot2':'critdh'
    }

];



export function initialisegear(){
    console.log("hello world");
    localStorage.setItem('weapons', JSON.stringify(weapons));
    localStorage.setItem('hats', JSON.stringify(hats));
}