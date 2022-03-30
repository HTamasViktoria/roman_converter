let arabic = document.querySelector('#arabic');
let roman = document.querySelector('#roman');
let convertButton = document.querySelector(".button");

let oneDigits = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX" };
let twoDigits = { 30: "XXX", 20: "XX", 10: "X", 40: "XL", 80: "LXXX", 60: "LX", 70: "LXX", 50: "L", 90: "XC" };
let threeDigits = { 100: "C", 200: "CC", 300: "CCC", 400: "CD", 500: "D", 600: "DC", 700: "DCC", 800: "DCCC", 900: "CM" };
let fourDigits = { 1000: "M", 2000: "MM" };
let arabicValueArray = [];
let romanValue;

//egyy közös objektumot csináltam a fentiekből
let numbers = {
    ...oneDigits,
    ...twoDigits,
    ...threeDigits,
    ...fourDigits
}


//eldönti, hogy az arabot szeretném-e váltani, vagy a rómait
convertButton.addEventListener("click", () => {
    if (arabic.value.length == 0) { makeArabic() }
    else if (roman.value.length == 0) { makeRoman() }
})


//ha rómait arabra:
function makeArabic() {
    let romanToConvert = roman.value;
    let arabicLength;
    let newArray = [];


function romanToArabic()
    {
        if (romanToConvert.startsWith("MM")) { arabicLength = 4; newArray.push("MM"); romanToConvert = romanToConvert.replace('MM', '') }
        else if (romanToConvert.startsWith("M")) { arabicLength = 4; newArray.push("M"); romanToConvert = romanToConvert.replace('M', '') }
        else if (romanToConvert.startsWith("CM")) { arabicLength = 3; newArray.push("CM"); romanToConvert = romanToConvert.replace('CM', '') }
        else if (romanToConvert.startsWith("DC")) { arabicLength = 3; newArray.push("DC"); romanToConvert = romanToConvert.replace('DC', '') }
        else if (romanToConvert.startsWith("D")) { arabicLength = 3; newArray.push("D"); romanToConvert = romanToConvert.replace('D', '') }
        else if (romanToConvert.startsWith("CD")) { arabicLength = 3; newArray.push("CD"); romanToConvert = romanToConvert.replace('CD', '') }
        else if (romanToConvert.startsWith("C")) { arabicLength = 3; newArray.push("C"); romanToConvert = romanToConvert.replace('C', '') }
        else if (romanToConvert.startsWith("XC")) { arabicLength = 2; newArray.push("XC"); romanToConvert = romanToConvert.replace('XC', '') }
        else if (romanToConvert.startsWith("LXXX")) { arabicLength = 2; newArray.push("LXXX"); romanToConvert = romanToConvert.replace('LXXX', '') }
        else if (romanToConvert.startsWith("LXX")) { arabicLength = 2; newArray.push("LXX"); romanToConvert = romanToConvert.replace('LXX', '') }
        else if (romanToConvert.startsWith("LX")) { arabicLength = 2; newArray.push("LX"); romanToConvert = romanToConvert.replace('LX', '') }
        else if (romanToConvert.startsWith("L")) { arabicLength = 2; newArray.push("L"); romanToConvert = romanToConvert.replace('L', '') }
        else if (romanToConvert.startsWith("XL")) { arabicLength = 2; newArray.push("XL"); romanToConvert = romanToConvert.replace('XL', '') }
        else if (romanToConvert.startsWith("XXX")) { arabicLength = 2; newArray.push("XXX"); romanToConvert = romanToConvert.replace('XXX', '') }
        else if (romanToConvert.startsWith("XX")) { arabicLength = 2; newArray.push("XX"); romanToConvert = romanToConvert.replace('XX', '') }
        else if (romanToConvert.startsWith("X")) { arabicLength = 2; newArray.push("X"); romanToConvert = romanToConvert.replace('X', '') }
        else if (romanToConvert.startsWith("IX")) { arabicLength = 1; newArray.push("IX"); romanToConvert = romanToConvert.replace('IX', '') }
        else if (romanToConvert.startsWith("VIII")) { arabicLength = 1; newArray.push("VIII"); romanToConvert = romanToConvert.replace('VIII', '') }
        else if (romanToConvert.startsWith("VII")) { arabicLength = 1; newArray.push("VII"); romanToConvert = romanToConvert.replace('VII', '') }
        else if (romanToConvert.startsWith("VI")) { arabicLength = 1; newArray.push("VI"); romanToConvert = romanToConvert.replace('VI', '') }
        else if (romanToConvert.startsWith("V")) { arabicLength = 1; newArray.push("V"); romanToConvert = romanToConvert.replace('V', '') }
        else if (romanToConvert.startsWith("IV")) { arabicLength = 1; newArray.push("IV"); romanToConvert = romanToConvert.replace('IV', '') }
        else if (romanToConvert.startsWith("III")) { arabicLength = 1; newArray.push("III"); romanToConvert = romanToConvert.replace('III', '') }
        else if (romanToConvert.startsWith("II")) { arabicLength = 1; newArray.push("II"); romanToConvert = romanToConvert.replace('II', '') }
        else if (romanToConvert.startsWith("I")) { arabicLength = 1; newArray.push("I"); romanToConvert = romanToConvert.replace('I', '') }
    }/*eddig vizsgálta az átváltandó római szám első betűjét, és megmondta, hogy az alapján hány számjegyű lesz az arabban, a sok
        közbeeső nulla miatt, illetve leszedi az elejéről az első betűt, és beteszi a newArray-be*/

    romanToArabic();
    romanToArabic();
    romanToArabic();
    romanToArabic();
    romanToArabic();
    //még párszor lefut a fgv, így a végére a newArray-ben benne lesznek a betűk


    console.log(newArray);
    //newArraybe szépen beleteszi  ['M', 'CM', 'XC', 'VI']

    //akkor most a fentiekből ezeket lecserélem




    let elsoSzamjegy = newArray[0]; //M
    let masodikSzamjegy = newArray[1]; //CM
    let harmadikSzamjegy = newArray[2]; //III
    let negyedikSzamjegy = newArray[3]; //

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }


    let elsoSzam = getKeyByValue(numbers, elsoSzamjegy)
    let masodikSzam = getKeyByValue(numbers, masodikSzamjegy)
    let harmadikSzam = getKeyByValue(numbers, harmadikSzamjegy)
    let negyedikSzam = getKeyByValue(numbers, negyedikSzamjegy)


    elsoSzam = (parseInt(elsoSzam))
    masodikSzam = (parseInt(masodikSzam))
    harmadikSzam = (parseInt(harmadikSzam))
    negyedikSzam = (parseInt(negyedikSzam))
    console.log(elsoSzam) //1000
    console.log(masodikSzam) //50
    console.log(harmadikSzam) //NaN
    console.log(negyedikSzam)//Nan


    //eddig működik, írja szépen a konzol a számokat, 1000,900,10,6 - 1916-nál például egymás alá, és kékkel

    if (elsoSzam) {
        arabicNumber = (parseInt(elsoSzam))
    }
    if (masodikSzam) {
        arabicNumber += (parseInt(masodikSzam))
    }
    if (harmadikSzam) {
        arabicNumber += (parseInt(harmadikSzam))
    }
    if (negyedikSzam) {
        arabicNumber += (parseInt(negyedikSzam))
    }

    console.log(arabicNumber);
    arabic.value = arabicNumber;
};

//Ezzel készen van a római szám átváltása arabra



function makeRoman() {
    //az arab mezőbe beírt számokat lebontja tömbbe
    arabicValueArray = Array.from(arabic.value);

    if (arabicValueArray.length == 4) {
    
        let ezres = arabicValueArray[0]
        //ezres = 1
        ezres = ezres.concat("000")
        let ezresSzam = fourDigits[ezres]

        let szazas = arabicValueArray[1]
        szazas = szazas.concat("00")
        let szazasSzam = threeDigits[szazas]

        let tizes = arabicValueArray[2]
        tizes = tizes.concat("0")
        tizesSzam = twoDigits[tizes]

        let egyes = arabicValueArray[3]
        egyesSzam = oneDigits[egyes];
        

        let romanNumber = ezresSzam.concat(szazasSzam).concat(tizesSzam).concat(egyesSzam)
        romanNumber = romanNumber.replace("undefined","")
        romanNumber = romanNumber.replace("undefined","")
        romanNumber = romanNumber.replace("undefined","")
        console.log(romanNumber)
        roman.value = romanNumber
        

        }
        //1985-öt szépen sorban írja M, CM, LXXX, V}

        if (arabicValueArray.length == 3) {
            let szazas = arabicValueArray[0]
            szazas = szazas.concat("00")
            szazasSzam = threeDigits[szazas]

            let tizes = arabicValueArray[1]
            tizes = tizes.concat("0")
            tizesSzam = twoDigits[tizes]

            let egyes = arabicValueArray[2]
            egyesSzam = oneDigits[egyes];
            let romanNumber = szazasSzam.concat(tizesSzam).concat(egyesSzam)
            romanNumber = romanNumber.replace("undefined","")
            romanNumber = romanNumber.replace("undefined","")
            
        roman.value = romanNumber
        }
    
        if(arabicValueArray.length == 2){
            let tizes = arabicValueArray[0]
            tizes = tizes.concat("0")
            let tizesSzam = twoDigits[tizes]
            let egyes = arabicValueArray[1]
            let egyesSzam = oneDigits[egyes]
            let romanNumber = tizesSzam.concat(egyesSzam)
            romanNumber = romanNumber.replace("undefined","")
           
            roman.value = romanNumber
        }

        if(arabicValueArray.length == 1){
            let egyes = arabicValueArray[0]
            let egyesSzam = oneDigits[egyes]
            let romanNumber = egyesSzam
            romanNumber.replace("undefined","")
            roman.value = romanNumber
        }

}
