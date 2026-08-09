//Option 1 - Function Declaration
function rectangleArea(weight, height) {
    return (weight * height)
}
console.log(rectangleArea(7, 10))



//Option 2 - Function Expression
const rectangleAreaExp = function(weight, height) {
    return (weight * height)
}
console.log(rectangleAreaExp(7, 10))



//Option 3 - Arrow Function
const rectangleAreaArrow = (weight, height) => {
    return (weight * height)
}
console.log(rectangleAreaArrow(7, 10))