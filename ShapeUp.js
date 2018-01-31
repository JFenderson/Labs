const square = document.getElementById('squareInput');
const squareButton = document.getElementById('newSquare');
const circle = document.getElementById('circleInput');
const circleButton = document.getElementById('newCircle')
const triangle = document.getElementById('triangleInput');
const triangleButton = document.getElementById('newTriangle');
const rectangle = document.getElementsByName('rectangle');
const recWidth = document.getElementById('recWidthInput');
const recHeight = document.getElementById('recHeightInput');
const recButton = document.getElementById('newRectangle');
const posShape = document.getElementById('shape-display');

let shapeName = document.getElementById('shapeName');
let shapeWidth = document.getElementById('shapeWidth');
let shapeHeight = document.getElementById('shapeHeight');
let shapeRadius = document.getElementById('shapeRadius');
let shapeArea = document.getElementById('shapeArea');
let shapePerimeter = document.getElementById('shapePerimeter');

let targetName;
let targetWidth;
let targetHeight;
let targetRadius;
let targetArea;
let targetPerimeter;

document.addEventListener('DOMContentLoaded', function(){
    shapeContainer = document.getElementsByClassName('shapeContainer');
});

// random position function
function pickPos(){
    return Math.floor((Math.random()*300)+100) + "px";
}
  

class Shape {
    constructor(name){
        this.name = name;
    }
    decribe(){
        shapeName.innerText = `${targetName}`;
        shapeHeight.innerText = `${targetHeight}`;
        shapeWidth.innerText = `${targetWidth}`;
        shapeArea.innerText = `${targetArea}`;
        shapePerimeter.innerText = `${targetPerimeter}`;
        shapeRadius.innerText = `${targetRadius}`;
        
    }
}

class CircleShape extends Shape{
    constructor (radius){
        super("circle");
        this.radius = radius;
        // this.createCircle();
        
    }
    createCircle (){
        const makeCircle = document.createElement("div");
        makeCircle.className = 'circle';
        makeCircle.style.height = `${this.radius.value * 2}px`;
        makeCircle.style.width = `${this.radius.value * 2}px`;
        makeCircle.style.position = ('absolute');
        makeCircle.style.left = pickPos();
        makeCircle.style.top = pickPos();
        posShape.appendChild(makeCircle);  
        makeCircle.addEventListener('dblclick', () => {
            makeCircle.remove();
        })
        makeCircle.addEventListener('click',() =>{
            this.getCircleStats();
            this.decribe();
        })
    }
    getCircleStats() {
        targetName = this.name;
        targetWidth = this.radius * 2;
        targetHeight = this.radius * 2;
        targetArea = 3.14*(this.radius ** 2);
        targetPerimeter = 2 * 3.14 * this.radius;
        targetRadius = this.radius;
        
    }
}


circleButton.addEventListener('click',function(){
    let newCircle = new CircleShape(circle);
    newCircle.createCircle();
})

class SquareShape extends Shape {
    constructor(sideLength) {
        super("square");
        this.sideLength = sideLength;
        
    }
    createSquare (){
        const makeSquare = document.createElement("div");
        makeSquare.className = 'square';
        makeSquare.style.height = `${this.sideLength.value}px`;
        makeSquare.style.width = `${this.sideLength.value}px`;
        makeSquare.style.left = pickPos();
        makeSquare.style.top = pickPos();
        posShape.appendChild(makeSquare);
        makeSquare.addEventListener('dblclick', function () {
            makeSquare.remove();
        })
        makeSquare.addEventListener('click', () => {
            this.getSquareStats();
            this.decribe();
        })
    }
    getSquareStats() {
        targetName = this.name;
        targetWidth = this.sideLength;
        targetHeight = this.sideLength;
        targetArea = this.sideLength ** 2;
        targetPerimeter = this.sideLength * 4;
        targetRadius = this.radius;
    }
    
}
squareButton.addEventListener('click',function(){
    let newSquare = new SquareShape(square);
    newSquare.createSquare();
})


class TriangleShape extends Shape{
    constructor(height) {
    super("triangle");    
    this.height = height;
    
    }
    createTriangle (){
        const makeTriangle = document.createElement("div");
        makeTriangle.className = 'triangle';
        makeTriangle.style.borderBottom = `${this.height.value}px solid yellow`;
        makeTriangle.style.borderLeft = `${this.height.value}px solid transparent`;
        makeTriangle.style.left = pickPos();
        makeTriangle.style.top = pickPos();
        posShape.appendChild(makeTriangle);
        makeTriangle.addEventListener('dblclick', function () {
            makeTriangle.remove();
        })
        makeTriangle.addEventListener('click', () => {
            this.getTriangleStats();
            this.decribe();
        })
    }
    getTriangleStats() {
        targetName = this.name;
        targetWidth = this.height;
        targetHeight = this.height;
        targetArea = 1/2 *(this.height * 2);
        targetPerimeter = 2 * this.height * Math.sqrt*(2 * height * height);
        targetRadius = this.radius;
    }
 }
triangleButton.addEventListener('click',function(){
    let newTriangle = new TriangleShape(triangle);
    newTriangle.createTriangle();
})


class RectangleShape extends Shape{
    constructor(width,height) {
        super("rectangle");
        this.width = width;
        this.height = height;
        
    }
    createRectangle (){
        const makeRectangle = document.createElement("div");
        makeRectangle.className = 'rectangle';
        makeRectangle.style.height = `${this.recHeightInput}px`;
        makeRectangle.style.width = `${this.recWidthInput}px`;
        makeRectangle.style.left = pickPos();
        makeRectangle.style.top = pickPos();
        posShape.appendChild(makeRectangle); 
        makeRectangle.addEventListener('dblclick', function () {
            makeRectangle.remove();
        })
        makeRectangle.addEventListener('click', () => {
            this.getRectangleStats();
            this.decribe();
        })
    }
    getRectangleStats() {
        targetName = this.name;
        targetWidth = this.width;
        targetHeight = this.height;
        targetArea = this.height * this.width;
        targetPerimeter = (2 * this.height) + (2 * this.width);
        targetRadius = this.radius;
    }
}

recButton.addEventListener('click',function(){
    let newRectangle = new RectangleShape(recWidthInput.value,recHeightInput.value);
    newRectangle.createRectangle();
})
