// to show check and next button for circle only
var idValue = "";

const showButton = (event) => {
    idValue = event.target.id;

    if(idValue == "circleSelected"){
        document.getElementById('nextButton').style.display = 'block';
        document.getElementById('checkCircle').style.display = 'block';
        document.getElementById('checkTriangle').style.display = 'none';
        document.getElementById('checkSquare').style.display = 'none';
    }

    if(idValue == "triangleSelected"){
        document.getElementById('nextButton').style.display = 'block';
        document.getElementById('checkTriangle').style.display = 'block';
        document.getElementById('checkSquare').style.display = 'none';
        document.getElementById('checkCircle').style.display = 'none';
    }

    if(idValue == "squareSelected"){
        document.getElementById('nextButton').style.display = 'block';
        document.getElementById('checkSquare').style.display = 'block';
        document.getElementById('checkCircle').style.display = 'none';
        document.getElementById('checkTriangle').style.display = 'none';
    }
}

const enterSide = () => {
    if(idValue == "circleSelected"){
        document.getElementById('circleText').style.display = 'block';
    }
    if(idValue == "triangleSelected"){
        document.getElementById('triangleText').style.display = 'block';
    }
    if(idValue == "squareSelected"){
        document.getElementById('squareText').style.display = 'block';
    }
    
document.getElementById('calculatePage').style.display = 'block';
document.getElementById('mainPage').style.visibility = 'hidden';
}



const calculateValue = () => {
    if(idValue == "circleSelected") {
        document.getElementById('circleResult').style.display = 'block';
        document.getElementById('circleText').style.display = 'none';
        document.getElementById('calculatePage').style.visibility = 'hidden';
        let val = document.getElementById('value').value;
        circle.radius  = val;

        document.getElementsByClassName('radiusValue')[0].innerHTML = circle.radius;
        document.getElementsByClassName('areaValue')[0].innerHTML = Math.round(3.14 * circle.radius * circle.radius);
        document.getElementsByClassName('perimeterValue')[0].innerHTML = Math.round(2 * 3.14 * circle.radius);

    }

    if(idValue == "triangleSelected") {
        document.getElementById('triangleResult').style.display = 'block';
        document.getElementById('triangleText').style.display = 'none';
        document.getElementById('calculatePage').style.visibility = 'hidden';
        let val = document.getElementById('value').value;
        triangle.side  = val;
        document.getElementsByClassName('radiusValue')[1].innerHTML = triangle.side;
        document.getElementsByClassName('areaValue')[1].innerHTML = Math.round(0.433 * triangle.side * triangle.side);
        document.getElementsByClassName('perimeterValue')[1].innerHTML = Math.round(3* triangle.side);

    }

    if(idValue == "squareSelected") {
        document.getElementById('squareResult').style.display = 'block';
        document.getElementById('squareText').style.display = 'none';
        document.getElementById('calculatePage').style.visibility = 'hidden';
        let val = document.getElementById('value').value;
        square.side  = val;
        document.getElementsByClassName('radiusValue')[2].innerHTML = square.side;
        document.getElementsByClassName('areaValue')[2].innerHTML = Math.round(square.side * square.side);
        document.getElementsByClassName('perimeterValue')[2].innerHTML = Math.round(4* square.side);

    }
}


//LOCAL STORAGE THING FOR REFERENCE
// document.querySelector("#shapes").addEventListener("click",(event) => {
//     console.log(event.target.id);
//     localStorage.setItem("shapes",event.target.id);
//     currShape = localStorage.getItem("shapes");
//     document.querySelector('#',currShape)
// })


var circle = {
    id : 1,
    name : 'circle',
    radius:'r',
};

var triangle = {
    id : 2,
    name : 'circle',
    side : 's',
};

var square = {
    id : 3,
    name : 'circle',
    side : 's',
};

