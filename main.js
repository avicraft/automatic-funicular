// Canvas
// Canvas is basically like a plain white drawing paper. You must use JavaScript to actually draw the graphics on Canvas. Canvas has several methods for drawing paths, circles, line, rectangle, and adding images.Canvas is basically like a plain white drawing paper. You must use JavaScript to actually draw the graphics on Canvas. Canvas has several methods for drawing paths, circles, line, rectangle, and adding images.
console.log("Windows PowerShell");
console.log("Copyright (C) Microsoft Corporation. All rights reserved.");
console.log("");
console.log("Try the new cross-platform PowerShell https://aka.ms/pscore6");
console.log("");
console.log("PS D:\workspace>");
var canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
var color = "red";
    ctx.beginpath();
    ctx.strokeStyle = "grey";
    ctx.lineWidth = 2;
    ctx.rect(150,143,430,200);
    ctx.stroke();

    ctx.beginpath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.arc(250 , 210 , 40 , 0 , 2 * Math.PI);
    ctx.stroke();

    ctx.beginpath();
    ctx.strokeStyle =  "yellow";
    ctx.lineWidth = 2;
    ctx.arc(300 , 260 , 40 , 0 , 2 * Math.PI);
    ctx.stroke();

    ctx.beginpath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.arc(300 , 210 , 40 , 0 , 2 * Math.PI);
    ctx.stroke();

    ctx.beginpath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.arc(250 , 210 , 40 , 0 , 2 * Math.PI);
    ctx.stroke();

    ctx.beginpath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.arc(300 , 260 , 40 , 0 , 2 * Math.PI);
    ctx.stroke();
