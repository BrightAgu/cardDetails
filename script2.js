function tocelsius(K) {
    return K - 273.15
}
x = tocelsius(100);
console.log(x);
document.getElementById("demo").innerHTML = x