var wins = document.querySelector('.wins')
var losses = document.querySelector('.losses')
var guesses = document.querySelector('.guesses')
var letters = document.querySelector('.letters')
var word = document.querySelector('.word')
var arr = []
var arr1 = []
var arr2 = []
var winnum = 0
var lossesnum = 0
var guessesnum = 9
wins.innerText = winnum
losses.innerText = lossesnum
guesses.innerText = guessesnum
letters.innerText = arr
var arrc = ['tokyo', 'london', 'seoul', 'amsterdam', 'venice', 'bangkok', 'sydney', 'berlin', 'florence', 'prague', 'barcelona', 'edinburgh', 'stockholm']
var index = Math.floor(Math.random() * arrc.length)
var sparra = arrc[index].split('')
word.innerText = '_ '.repeat(arrc[index].length)
innerr = '_'.repeat(arrc[index].length)
spinnerr = innerr.split('')

window.onkeypress = function (e) {
    if (arr.includes(e.key) == false) {
        arr.push(e.key)


        for (var i = 0; i < sparra.length; i++) {
            if (e.key == sparra[i]) {
                spinnerr[i] = sparra[i]
                word.innerText = spinnerr.join(' ')
                arr1.push(e.key)
            }
        }
        if (arr1.includes(e.key) == false) {
            arr2.push(e.key)
            letters.innerText = arr2
        }
    }
    if (arr1.includes(e.key) == false) {
        guessesnum--
        guesses.innerText = guessesnum
        if (guessesnum == 0) {
            arr = []

            arr1 = []
            arr2 = []
            letters.innerText = arr2
            index = Math.floor(Math.random() * arrc.length)
            sparra = arrc[index].split('')
            word.innerText = '_ '.repeat(arrc[index].length)
            innerr = '_'.repeat(arrc[index].length)
            spinnerr = innerr.split('')
            guessesnum = 9
            guesses.innerText = guessesnum
            lossesnum++
            losses.innerText = lossesnum

        }
    }
    if (arr1.length == sparra.length) {
        index = Math.floor(Math.random() * arrc.length)
        sparra = arrc[index].split('')
        word.innerText = '_ '.repeat(arrc[index].length)
        innerr = '_'.repeat(arrc[index].length)
        spinnerr = innerr.split('')
        arr = []
        arr1 = []
        arr2 = []
        letters.innerText = arr2
        winnum++
        wins.innerText = winnum
        guessesnum = 9
        guesses.innerText = guessesnum


    }





}

