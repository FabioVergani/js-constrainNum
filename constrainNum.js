function constrainNum(n,a,b){return n<a?a:(n>b?b:n);};//num,min,max

/*
let x;
x=2;console.log(constrainNum(x,3,8));//3
x=4;console.log(constrainNum(x,3,8));//4
x=9;console.log(constrainNum(x,3,8));//8
x=-6;console.log(constrainNum(x,-4,1));-4
x=-2;console.log(constrainNum(x,-4,1));-2
x=6;console.log(constrainNum(x,-4,1));1
x=2;console.log(constrainNum(x,-4,1));1
x=666;console.log(constrainNum(x,-4,Infinity));//666
x=-666;console.log(constrainNum(x,-Infinity,0));//-666
x=-666;console.log(constrainNum(x,Number.NEGATIVE_INFINITY,0));//-666
*/
