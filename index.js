let h = prompt('write numder');
if(h >=0 && h <=100){
    alert(h)
};
let j = prompt('write number');
if(j >=0 && j<=100){
    alert(j)
}
else{
    alert('no corect value')
};
let y = prompt('write number');
if(y <=0){
    alert('no corect value')
}else if(y>=100){
    alert('no corect value')
}else{
    alert(y)
};
let newarr = [1,2,3,4,5,6,7,8];
for (key in newarr){
    console.log('key'+' '+key)
};
for (value of newarr){
    console.log('value'+' '+value)
};
let i;
function av(i){
if(i>0 && i<=10){
    alert(';)')
}
if(i>10 && i<=15){
    alert('☺')
}
if(i>15 && i<=20){
    alert('∟┐');
}
if(i<=0 || i>20){
    alert('☻')
}
}
