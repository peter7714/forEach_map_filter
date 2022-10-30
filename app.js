let nums = [0,1,2,3,4,5,6,7,8,9];
let names = ['aurora', 'elijah', 'tommy', 'oswald'];
let people = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
];
let firstAndLast = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
];
let possibleCatOwners = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
];

function doubleValues(arr){
    let result = [];
    arr.forEach(function(i){
        result.push(i * 2);
    })
    return result;
}

function onlyEvenValues(arr){
    let result = [];
    arr.forEach(function(i){
        if(i % 2 === 0){
            result.push(i);
        }
    })
    return result;
}

function showFirstAndLast(arr){
    let result = [];
    arr.forEach(function(i){
        let lastChar = i.length - 1;
        let firstLast = '';
        firstLast += i[0];
        firstLast += i[lastChar];
        result.push(firstLast)
    })
    return result;
}

function addKeyAndValue(arr, key, value){
    arr.forEach(function(i){
        i[key] = value;
    })
    return arr;
}

function vowelCount(str){
    let strArr = str.split('');
    let vowels = 'aeiou';
    let result = {};
    strArr.forEach(function(i){
        let lowerCased = i.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            if(result[lowerCased]){
                result[lowerCased]++;
            } else {
                result[lowerCased] = 1;
            }
        }
    })
    return result;
}

function doubleValuesWithMap(arr){
    return arr.map(function(i){
        return i * 2;
    })
}

function valTimesIndex(arr){
    return arr.map(function(i, index){
        return i * index;
    })
}

function extractKey(arr, key){
    return arr.map(function(i){
        return i[key];
    })
}

function extractFullName(arr){
    return arr.map(function(i){
        return i.first + ' ' + i.last;
    })
}

function filterByValue(arr, key){
    return arr.filter(function(i){
        if(i[key] === true){
            return i;
        }
    })
}

function find(arr, value){
    return arr.filter(function(i){
        if(i === value){
            return i;
        }
    })[0];
}

function findInObj(arr, key, value){
    return arr.filter(function(i){
        if(i[key] === value){
            return i;
        }
    })[0];
}

function removeVowels(str){
    let lowerCased = str.toLowerCase();
    let arr = lowerCased.split('');
    let vowels = 'aeiou'
    return arr.filter(function(i){
        if(vowels.indexOf(i) === -1){
            return i;
        }
    }).join('');
}

function doubleOddNumbers(arr){
    let oddArray = arr.filter(function(i){
        return i%2!==0;
    });
    return oddArray.map(function(i){
        return i * 2;
    })
}