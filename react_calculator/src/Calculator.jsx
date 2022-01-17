function sum(x,y) {
    return x+y;
}
function sub(x,y) {
    return x-y;
}
function mul(x,y) {
    return x*y;
}
function div(x,y) {
    return (Math.round((x/y)*100)/100);
}
export {sum, sub, mul, div};