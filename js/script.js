//soft happiness: hover pop up, click "radiate that energy!" background gradiant (light)
var msg = [];
var btn = [];
var colors = [];
const Y_AXIS = 1;
var c1, c2;

msg[0] = '';
msg[1] = 'Forget World. How are you?';
msg[2] = 'How do you feel?';
msg[3] = 'Radiate that energy!'
msg[4] = 'Breathe.'
msg[5] = 'I got that summertime, summertime sadness';
msg[6] = 'Sis u good?';
msg[100] = 'Refresh page to reload JavaScript';
btn[0] = '<button onclick="howRU()">Greet World!</button>';
btn[1] = '<button onclick="good()" id="good">Good!</button>';
btn[2] = '<button onclick="idk()" id="idk">idk.</button>';
btn[3] = '<button onclick="happy(); sHappyG()" id="sHappy">Soft happiness</button>';
btn[4] = '<button onclick="happy(); mHappyG()" id="mHappy">Medium happiness</button>';
btn[5] = '<button onclick="happy(); iHappyG()" id="iHappy">Intense happiness</button>';
btn[6] = '<button onclick="idk()" id="nah">not rly.</button>';
btn[7] = '<button onclick="anger(); angerG()" id="angry">Soft anger</button>';
btn[8] = '<button onclick="sadness(); sadnessG()" id="sadness">Soft sadness</button>';
btn[9] = '<button onclick="fear(); angerG()" id="fear">Soft fear</button>';
btn[10] = '<button onclick="jealousy(); jealousyG()" id="jealousy">Soft jealousy</button>';
btn[11] = '<button onclick="good()" id="imGood">Nah, I' + "'" + 'm good.</button>';
btn[100] ='';

function setup(){
  var canvas = createCanvas(windowWidth, windowHeight, P2D);
  canvas.parent("drawingCanvas");
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(255);
  document.body.style.backgroundColor = "white";
  sh1 = color(255, 87, 125, 80); // SOFT HAPPINESS GRADIENT BACKGROUND COLORS
  sh2 = color(255, 177, 81, 80);
  mh1 = color(255, 87, 125, 150); // MEDIUM HAPPINESS GRADIENT BACKGROUND COLORS
  mh2 = color(255, 177, 81, 150);
  ih1 = color(255, 87, 125); // INTENSE HAPPINESS GRADIENT BACKGROUND COLORS
  ih2 = color(255, 177, 81);
  a1 = color(166, 209, 230); // SOFT ANGER GRADIENT BACKGROUND COLORS
  a2 = color(22, 62, 113); 
  s1 = color(246, 153, 85); // SOFT SADNESS GRADIENT BACKGROUND COLORS
  s2 = color(255, 227, 122);
  j1 = color(32, 143, 124); // SOFT JEALOUSY GRADIENT BACKGROUND COLORS
  j2 = color(233, 238, 176);
}

// INTERACTIVE GRADIENT BACKGROUND
function draw(){
  for ( var x = 0; x < width; x += 5){
    for (var y = 0 ; y < height; y += 5){
      r = map(0, y, width, 166, 22);
      g = map(0, 0, height, 209, 62); 
      b = map(mouseX, mouseY, width, 230, 113); 
      fill(r, g, b);
      noStroke(); 
      rect(x, y, 5, 5);
    }
  }
}

// STOP INTERACTIVE BACKGROUND
function mousePressed(){
  noLoop();
}

// GREET WORLD!
function firstPage(){
  document.getElementById("btndiv").innerHTML = btn[0];
  document.getElementById("reload").innerText = msg[100];
}

firstPage();

// FORGET WORLD. HOW ARE YOU?
function howRU(){
  document.getElementById("msgdiv").innerText = msg[1];
  document.getElementById("btndiv").innerHTML = btn[1] + btn[2];
  document.getElementById("reload").innerText = msg[100];
}

// GOOD! OPTION
function good(){
  document.getElementById("msgdiv").innerHTML = msg[2];
  document.getElementById("btndiv").innerHTML = btn[3] + btn[4] + btn[5] + btn[6];
  document.getElementById("reload").innerText = msg[100];
}

// HAPPINESS OPTION
function happy(){
  document.getElementById("msgdiv").innerHTML = msg[3];
  document.getElementById("btndiv").innerHTML = btn[100];
  document.getElementById("reload").innerText = msg[100];
}

// SOFT HAPPINESS GRADIENT BACKGROUND
function sHappyG(){
  gradient(0, 0, width, height, sh1, sh2, Y_AXIS);
  function gradient(x, y, w, h, sh1, sh2, axis){
    noFill();
    if (axis === Y_AXIS){
      for (var i = y; i <= y + h; i++){
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(sh1, sh2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    }
  }
}

// MEDIUM HAPPINESS GRADIENT BACKGROUND
function mHappyG(){
  gradient(0, 0, width, height, mh1, mh2, Y_AXIS);
  function gradient(x, y, w, h, mh1, mh2, axis){
    noFill();
    if (axis === Y_AXIS){
      for (var i = y; i <= y + h; i++){
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(mh1, mh2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    }
  }
}

// INTENSE HAPPINESS GRADIENT BACKGROUND
function iHappyG(){
  gradient(0, 0, width, height, ih1, ih2, Y_AXIS);
  function gradient(x, y, w, h, ih1, ih2, axis){
    noFill();
    if (axis === Y_AXIS){
      for (var i = y; i <= y + h; i++){
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(ih1, ih2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    }
  }
}

// IDK. OPTION
function idk(){
  document.getElementById("msgdiv").innerHTML = msg[2];
  document.getElementById("btndiv").innerHTML = btn[7] + btn[8] + btn[9] + btn[10] + btn[11];
  document.getElementById("reload").innerText = msg[100];
}

// SOFT ANGER OPTION
function anger(){
  document.getElementById("msgdiv").innerHTML = msg[4];
  document.getElementById("btndiv").innerHTML = btn[100];
  document.getElementById("reload").innerText = msg[100];
}

// SOFT SADNESS OPTION
function sadness(){
  document.getElementById("msgdiv").innerHTML = msg[5];
  document.getElementById("btndiv").innerHTML = btn[100];
  document.getElementById("reload").innerText = msg[100];
}

// SOFT FEAR OPTION
function fear(){
  document.getElementById("msgdiv").innerHTML = msg[4];
  document.getElementById("btndiv").innerHTML = btn[100];
  document.getElementById("reload").innerText = msg[100];
  loop();
}

// SOFT JEALOUSY OPTION
function jealousy(){
  document.getElementById("msgdiv").innerHTML = msg[6];
  document.getElementById("btndiv").innerHTML = btn[100];
  document.getElementById("reload").innerText = msg[100];
}

// SOFT ANGER & SOFT FEAR GRADIENT BACKGROUND
function angerG(){
  gradient(0, 0, width, height, a1, a2, Y_AXIS);
  function gradient(x, y, w, h, a1, a2, axis){
    noFill();
    if (axis === Y_AXIS){
      for (var i = y; i <= y + h; i++){
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(a1, a2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    }
  }
}

// SOFT SADNESS GRADIENT BACKGROUND
function sadnessG(){
  gradient(0, 0, width, height, s1, s2, Y_AXIS);
  function gradient(x, y, w, h, s1, s2, axis){
    noFill();
    if (axis === Y_AXIS){
      for (var i = y; i <= y + h; i++){
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(s1, s2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    }
  }
}

// SOFT JEALOUSY GRADIENT BACKGROUND
function jealousyG(){
  gradient(0, 0, width, height, j1, j2, Y_AXIS);
  function gradient(x, y, w, h, j1, j2, axis){
    noFill();
    if (axis === Y_AXIS){
      for (var i = y; i <= y + h; i++){
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(j1, j2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    }
  }
}

