var number = 4561342563,
    numberArray = number.toString().split('');

var NUMBER2TEXT = {
    ones: ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
    tens: ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'],
    sep: ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion']
},
    numberText = [];
    tracker = 1;

while (numberArray.length) {        
    if (tracker === 1) {
        numberText.push(NUMBER2TEXT.ones[numberArray.pop()]);
    } else if (tracker % 3 === 1) {                   
        numberText.push(NUMBER2TEXT.ones[numberArray.pop()] + NUMBER2TEXT.sep[Math.ceil(tracker/4)]);
    } else if (tracker % 3 === 2) {
        numberText.push(NUMBER2TEXT.tens[numberArray.pop()]);
    } else if (tracker % 3 === 0) {
        numberText.push(NUMBER2TEXT.ones[numberArray.pop()] + "Hundred");        
    }
    tracker++;
}

console.log(numberText.reverse().join()+"Dollars");