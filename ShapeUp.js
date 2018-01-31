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
//const randNum = 100;
const posShape = document.getElementById('shape-display');
let makeCircle;
let makeSquare;
let makeRectangle;
let makeTriangle;




document.addEventListener('DOMContentLoaded', function(){
    shapeContainer = document.getElementsByClassName('shapeContainer');
});

// random position function
function pickPos(){
    return Math.floor((Math.random()*300)+100) + "px";
}
 
function change(){
    var num = Math.floor(Math.random() * 100);
      makeCircle.style.borderRadius= num +'px';
  };

  

class Shape {
    constructor(color,type){
        this.color = color;
        this.type = type;
    }
    render(){

    }
}

class CircleShape extends Shape{
    constructor (radius){
        super("purple","circle");
        this.radius = radius;
        
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
        // for (var i = 0; i < randNum; i ++) {
        //     $(posShape).append('<div class="circle" id="circle' + i + '"> </div>');
        //   }    
        
        
    }
    
}
// circle.addEventListener('input', function () {
//     console.log('input changed to: ', circle.value);
// });

circleButton.addEventListener('click',function(){
    let newCircle = new CircleShape(circle);
    newCircle.createCircle();
})
// NEED TO REMOVE WHEN DBLCLICKED


class SquareShape extends Shape {
    constructor(sideLength) {
        super("red","square");
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
        
    }
}
squareButton.addEventListener('click',function(){
    let newSquare = new SquareShape(square);
    newSquare.createSquare();
})

//triangle holds height(which is the same as width/base)
// inp1 = parseInt(document.Triangle_Inputs.input1.value);
// inp2 = parseInt(document.Triangle_Inputs.input2.value);
// inp3 = parseInt(document.Triangle_Inputs.input3.value);
// /* Side options */
// sideA = (inp1 + inp2);
// sideB = (inp1 + inp3);
// sideC = (inp2 + inp3);

// function getTriangleType(a,b,c) {
//     return (a === b && b === c) && 'equilateral' ||
//     (a === b || a === c || b === c) && 'isosceles' ||
//     'scalene';
//   }

class Triangle extends Shape{
    constructor(height) {
    super("yellow","triangle");    
    this.height = height;
    
    }
//     createTriangle (){
//         const makeTriangle = document.createElement("div");
//         makeTriangle.className = 'square';
//         //makeTriangle.style.height = `${this.height.value}px`;
//         //makeTriangle.style.width = `${this.sideLength.value}px`;
//         makeTriangle.style.base
//         makeTriangle.style.left = pickPos();
//         makeTriangle.style.top = pickPos();
//         posShape.appendChild(makeTriangle);
        
//     }
    
 }
// recButton.addEventListener('click',function(){
//     let newRectangle = new SquareShape(square);
//     newRec.createRectangle();
// })


class RectangleShape extends Shape{
    constructor(width,height) {
        super("green","rectangle");
        this.width = recWidth.value;
        this.height = recHeight.value;
        
    }
    createRectangle (){
        const makeRectangle = document.createElement("div");
        makeRectangle.className = 'rectangle';
        makeRectangle.style.height = `${this.recHeight.value}px`;
        makeRectangle.style.width = `${this.recWidth.value}px`;
        makeRectangle.style.left = pickPos();
        makeRectangle.style.top = pickPos();
        posShape.appendChild(makeRectangle);
        
    }
}
recButton.addEventListener('click',function(){
    let newRectangle = new RectangleShape(this);
    newRectangle.createRectangle();
})


 


 




// function new circle(){

// }

// function new square(){

// }

// function new triangle(){

// }
// function new recangle(){

// }


// $(document).ready(function() {
//     const SQ_NUM = 100;
//     for (var i = 0; i < SQ_NUM; i ++) {
//       $('#canvas').append('<div class="square" id="square' + i + '"> </div>');
//     }    
//     function get_random_color() {
//       function c() {
//         return Math.floor(Math.random()*256).toString(16);
//       }
//       return "#"+c()+c()+c();
//     }      
//     setInterval(function() {
//       for (var i = 0; i < SQ_NUM; i ++) {
//         var obj = $('#square' + i);
//         obj.css("outline", "1px solid " + get_random_color());
//         obj.css("background", get_random_color());
//         var width = $(document).width();
//         var height = $(document).height();
//         var left = Math.floor(Math.random() * width); 
//         var top = Math.floor(Math.random() * height); 
//         obj.css("left", left);
//         obj.css("top", top);  
//         var min = Math.min(
//               Math.floor(Math.random() * (width - left)), 
//               Math.floor(Math.random() * (height - top))
//         );        
//         obj.css("width", min);
//         obj.css("height", min);
//       }
//     }, 100);
//   });

