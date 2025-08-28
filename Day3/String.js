console.log("Example 1 -  The last word is Word with length  ")

let  s = "Hello World" 
let splitWord = s.split(" ")
let lastWord = splitWord[splitWord.length-1]
let wordLength = lastWord.length

console.log(`Last Word is ${lastWord} with length ${wordLength}`)


console.log("Example 2 -  The last word is moon with length  ")

let  s1 = "   fly me   to   the moon  " 
let trimWords = s1.trim().replace(/\s+/g," ")
let spiliWords=trimWords.split(" ")
let lastword=spiliWords[spiliWords.length-1]
let wordLength2= lastword.length
console.log(`Length of lastword is  ${wordLength2} `)



console.log("Example 3 -    strings are anagrams ")


function isAnagram(str1, str2){
    str1 = str1.replace(/\s+/g, " ").toLowerCase()
     str2= str2.replace(/\s+/g," ").toLowerCase()

     let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join(''); 

    return sortedStr1 === sortedStr2;

}

console.log(isAnagram('listen', 'silent'));   // true
console.log(isAnagram('hello', 'world'));     // false




