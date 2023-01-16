function Lexicographically(s) {
  let letters = new Set(s)
  let str=s.split("")
  let u=0
  let baseValue=""
  letters= Array.from(letters).sort()
  for(let x=0;x<letters.length;x++){
    let indexOfCurrentValueInLetters=letters.indexOf(str[u])
    baseValue=str[u]
    let valueToSwap=letters[indexOfCurrentValueInLetters-1]
    for(let i=u;i<str.length;i++){
       if(str[u] <= letters[x]){
          u++
          break
       }else{
         for(let p=0;p<str.length;p++){
          if(str[p] === baseValue){
            str[p]=valueToSwap
          }else if(str[p]===valueToSwap){
            str[p]=baseValue
          }
        }
         x--
         break
       }
    }
  }
  return str.join("");
}
console.log(Lexicographically("abbe"))
