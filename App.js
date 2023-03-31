const canvas = document.getElementById('canvas');
const graphics = canvas.getContext('2d');

//canvas
const canvasWidth = 200;
const canvasHeight = 200;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

//white background
graphics.fillStyle = 'white';
graphics.fillRect(0, 0, canvasWidth, canvasHeight);

var lineargradient = graphics.createLinearGradient(420,420,550,200);
lineargradient.addColorStop(0,"red");
lineargradient.addColorStop(0.5,"yellow");
lineargradient.addColorStop(1,"green");
graphics.fillStyle = lineargradient;

//red cross
graphics.beginPath();
graphics.fillStyle = 'red';
graphics.fillRect(60, 0, 80, canvasHeight);
graphics.fillRect(0, 70, canvasWidth, 75);


//eyes
graphics.beginPath();
graphics.arc(85, 80, 10, 0, 2 * Math.PI);
graphics.arc(120, 80, 10, 0, 2 * Math.PI);
graphics.fillStyle = 'white';
graphics.fill();

//iris 
graphics.beginPath();
graphics.arc(85, 80, 5, 0, 2 * Math.PI);
graphics.arc(120, 80, 5, 0, 2 * Math.PI);
graphics.fillStyle = 'black';
graphics.fill();
graphics.beginPath();
graphics.arc(83, 78, 1.5, 0, 2 * Math.PI);
graphics.arc(118, 78, 1.5, 0, 2 * Math.PI);
graphics.fillStyle = 'white';
graphics.fill();

//mouth
graphics.beginPath();
graphics.moveTo(75, 125);
graphics.quadraticCurveTo(100, 155, 125, 125);
graphics.quadraticCurveTo(100, 130, 75, 125);
graphics.fillStyle = 'black';
graphics.fill();
graphics.beginPath();
graphics.moveTo(75, 125);
graphics.quadraticCurveTo(90, 115, 70, 128);
graphics.moveTo(125, 125);
graphics.quadraticCurveTo(110, 115, 130, 128);

// draw teeth
graphics.fillStyle = 'white';
graphics.fillRect(95, 128, 5, 5);
graphics.fillRect(100, 128, 5, 5);
graphics.strokeStyle = 'black';
graphics.stroke();