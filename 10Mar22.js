//1  const anagrams=(strg1,strg2)=>{
//     str1=[...strg1].sort()
//     str2=[...strg2].sort()
//     if(strg1==strg2){
//         console.log("The strings are anagrams")
//     }
//     else{
//         console.log("strings are not anagrams")
//     }
// }
// console.log(anagrams(strg1,strg2)); 

// import { clear } from "console"




//2 function factorial(num) {
//     if (num < 0) {
//         console.log("Not a positive Number")
//     }
//     else {
//         let factorial = 1;
//         for (i = 1; i <= num; i++) {
//             factorial = factorial * i;
//         }
//         console.log("the factorial of num is", factorial)
//     }
// }
// factorial(8)


//3 const gcd = (numr1, numr2) => {
//     const division = 1
//     if (numr1 % numr2 == 0) {
//         return numr2
//     }
//     else if (numr2 % numr1 == 1)
//         return numr1
//     else (numr1 > numr2)
//        return gcd((numr1 - numr2), numr2);


// }
// console.log(gcd(8, 4));


//5 const setOfString=(string)=>{
//     if(string.length==0)
//     return 'string is empty'
//     else {
//        let string1=[...string]
//        console.log(string)
//         string1.split("")
//     }
// }


//6 console.log(setOfString("shivam"));
// const emptyString=(string)=>{
//     if(string.length==0){
//         return 'string is empty'
//     }
//     else{
//         return 'string is not empty'
//     }
// }
// console.log(emptyString('Shivam'))



//7 const capitalizeString = (string) => {
//     if (string.length == 0) {
//         return 'empty string'
//     }
//     else {
//         let str1 = string.split('')
//         let str2 = []
//         for (i = 0; i < str1.length; i++) {
//             if (i == 0) {
//                 str2.push(str1[0].toUpperCase())
//             }
//             else {
//                 str2.push(str1[i])
//             }
//         }
//         console.log(str2.join(''))
//     }
// }
// capitalizeString('he is playing')


//8 function capitalizeFirst(string){
//     string=string.split(" ");
//     let n=string.length
//     for(let i=0;i<n;i++){
//      string[i]=string[i][0].toUpperCase()+string[i].substr(1);  
//     }
//     return string.join(" ")
// }
// console.log(capitalizeFirst("he will play the match"));

//10 function stringCamelCase(string){
//     let n=string.length;
//     let s="";
//     for(var i=0;i<n;i++){
//         if(string[i]==' '){
//             s=s+string[i+1].toUpperCase();
//             i++;
//         }
//         else{
//             s=s+string[i];
//         }
//     }
//     return s;
// }
// console.log(stringCamelCase("he will play "));

//9 function upperLowerCase(){
//     let str="Upper Lower Case"
//     str = str.split('');
//     let string = str.map((id)=>{
//         if(id==id.toUpperCase()){
//             return id.toLowerCase();
//         }
//         return id.toUpperCase();
//     })
//     string = string.join('')
//     console.log(string);
// }
// upperLowerCase()
