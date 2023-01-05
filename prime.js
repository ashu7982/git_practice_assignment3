problem1--->find prime number?
let num=5;
for(let i=2;i<=5;i++){
if(num%5==0){
count++;
}
}
if(count==1){
console.log('prime')
}
else{
console.log('not a prime')
}
  
problem2--->pallindrome or not?
let str='naman';
for(let i=0;i<str.length;i++){
bag+=str[i]
}
if(bag==str){
console.log('Yes it is pallindrome)
}
else{
console.log('No it is not a pallindrome')
}