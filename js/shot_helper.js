

var double=[32,16,20,50,2,4,6,8,10,12,14,18,20,22,24,26,28,30,34,36,38,40]; // Combinaisons doubles
var tout=[0,20,19,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21,22,24,25,26,27,28,30,32,33,36,38,39,40,42,45,48,50,51,54,57,60]; // Combinaisons possibles
var table=[]; // tableau pour les valeurs retenues
var table_cible=[15,2,17,3,19,7,16,8,11,14,9,12,5,20,1,18,4,13,6,10];
var taille; // table de la cible
var pas; // taille du pas pour les largeurs des doubles/triples
var indice_max;



function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerWidth);
  canvas.parent('myContainer');
  textSize(25);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  taille=width-width/20;
  pas=taille/20;
  document.getElementById("myNumber").value=floor(random(15,150));
}


// Fonction executé par le bouton a coté de l'input
// Ecrit dans "table" les valeurs des combinaisons
function button_compute(){
  table=[];
  var toto = document.getElementById("myNumber").value; // On recupere le chiffre de l'input
  localStorage.setItem('someSetting', 'value stored');
  for(var k = 0; k < double.length; k++){
    for (var i = 0; i < tout.length; i++) {
      for (var j = 0; j < tout.length; j++) {
        if(toto-double[k]-tout[i]-tout[j]==0){ // Si on trouve une combinaison
          table.push([tout[j],tout[i],double[k]]); // On la range dans le tableau
        }
      }
    }
  }

  if(table.length<4){
    table.push([0,0,0],[0,0,0],[0,0,0],[0,0,0]);
  }

  // On ecrit les combinaisons sur les boutons
  var button = document.getElementById("button1");
  button.innerText = table[0][0]+" puis "+table[0][1]+" puis double "+table[0][2]/2;
  var button = document.getElementById("button2");
  button.innerText = table[1][0]+" puis "+table[1][1]+" puis double "+table[1][2]/2;
  var button = document.getElementById("button3");
  button.innerText = table[2][0]+" puis "+table[2][1]+" puis double "+table[2][2]/2;
  var button = document.getElementById("button4");
  button.innerText = table[3][0]+" puis "+table[3][1]+" puis double "+table[3][2]/2;
}


// Fonctions executées par les 3 boutons :
function button_click1(){
  show_target();
  stroke(255,0,0);
  show_hit(table[0][0],1);
  stroke(0,255,0);
  show_hit(table[0][1],2);
  stroke(0,0,255);
  var  i=look_for(table_cible,table[0][2]/2);
  cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  if(table[0][2]==50)cross(width/2,height/2,8);
}

function button_click2(){
  show_target();
  stroke(255,0,0);
  show_hit(table[1][0],1);
  stroke(0,255,0);
  show_hit(table[1][1],2);
  stroke(0,0,255);
  var  i=look_for(table_cible,table[1][2]/2);
  cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  if(table[1][2]==50)cross(width/2,height/2,8);
}

function button_click3(){
  show_target();
  stroke(255,0,0);
  show_hit(table[2][0],1);
  stroke(0,255,0);
  show_hit(table[2][1],2);
  stroke(0,0,255);
  var  i=look_for(table_cible,table[2][2]/2);
  cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  if(table[2][2]==50)cross(width/2,height/2,8);
}

function button_click4(){
  show_target();
  stroke(255,0,0);
  show_hit(table[3][0],1);
  stroke(0,255,0);
  show_hit(table[3][1],2);
  stroke(0,0,255);
  var  i=look_for(table_cible,table[3][2]/2);
  cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
  if(table[3][2]==50)cross(width/2,height/2,8);
}


function draw(){
}
