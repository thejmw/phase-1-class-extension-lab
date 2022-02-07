// Your code here

//Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
// Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
// Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.
// Define a Triangle class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.
// The sum of the lengths of any two sides of a triangle is greater than the length of the third side. If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side. If that is not true, then it is not possible to construct a triangle with the given side lengths.

// Define a Square class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
// Use the get keyword to make a getter method area that calculates the area of the square.

class Polygon {
    constructor(polygon){
        this.polygon = polygon
    }
    get countSides(){
        return this.polygon.length
    }
    get perimeter(){
        return this.polygon.length * 5
    }
}

class Triangle extends Polygon{
    // constructor(triangle){
    //     this.triangle = triangle
    // }
    get isValid(){
        console.log(this.polygon)
        let sideOne = this.polygon[0]
        let sideTwo = this.polygon[1]
        let sideThree = this.polygon[2]
        return ((sideOne + sideTwo > sideThree) && (sideOne + sideThree > sideTwo) && (sideTwo + sideThree > sideOne))
    }
    get perimeter(){

   }
}
let triangle = new Triangle([5, 5, 5])
let triangle2 = new Triangle([15,10,1])
console.log(triangle.isValid)

class Square extends Polygon{
    constructor(){
        this.countSides = this.countSides
    }
    get area(){
        return this.countSides * this.countSides
    }
    get perimeter(){

    }
}