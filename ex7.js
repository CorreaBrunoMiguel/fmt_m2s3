function maxNumber(arrayNumber){
    var numMax = 0
    for (let i = 0; i < arrayNumber.length; i++){
        if (numMax < arrayNumber[i])
            numMax = arrayNumber[i]
    }

    return numMax
}

let test = [4, 6, 1, 9, 7, 5, 4, 6]

let maxN = maxNumber(test)
console.log(maxN)