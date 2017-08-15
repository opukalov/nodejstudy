function genericFunc(argument) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT.push(argument); // Push, now arrayOfT = [argument].
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
alert(arrayFromString[0]); // "beep"
alert(typeof arrayFromString[0]); // String
var arrayFromNumber = genericFunc(42);
alert(arrayFromNumber[0]); // 42
alert(typeof arrayFromNumber[0]); // number
