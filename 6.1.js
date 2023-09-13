// Create a class named Circle with attributes xPos, yPos and radius. Add a method named move(xOffset, yOffset) that will adjust the position of the circle. Add a getter accessor named surface that will return the surface of the circle.
// Test its method and accessors by modifying the values and checking if everything is consistent.
// Write a function named createCircle(xPos, yPos, radius) that will return a Circle object with given values. Write a program that will use this function to create circles having increasing radius. Sort the circles by growing surface.
// Write a function named display(circle) that will show the circle infos (coordinates, surface). Use this function to display the created circles.
// Write a program that will create circles with random positions and radius. You can use the random() method from the Math built-in object to generate random values.
// Modify the program so that it displays the surface of the circle that has the biggest surface.
// Modify the program so that it can return the biggest circle.

class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
        return this;
    }
    
    get surface() {
        return Math.PI * this.radius * this.radius;
    }
    }

    const theCircle = new Circle(2, 2, 5).move(2, 2);

    console.log(
        "actual circle properties are x:",
        theCircle.xPos,
        "y:",
        theCircle.yPos,
        "radius:",
        theCircle.radius,
        "surface:",
        theCircle.surface
    );

