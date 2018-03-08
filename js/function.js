// renvoie l'indice de value dans array
function look_for(array,value){
  for (var i = 0; i < array.length; i++) {
    if(array[i]==value)return i;
  }
}


//--------------------------AFFICHAGE-------------------------------------------
//draw a cross at x y
function cross(x,y,size){
  strokeWeight(4);
  line(x-size,y+size,x+size,y-size);
  line(x-size,y-size,x+size,y+size);
}


//draw a different cross at x y
function cross2(x,y,size){
  strokeWeight(4);
  line(x-size,y,x+size,y);
  line(x,y-size,x,y+size);
}

// affiche la cible :
function show_target(){
  strokeWeight(1);
  background(255);
  noFill()
  stroke(0);

  ellipse(width/2,height/2,taille,taille);
  ellipse(width/2,height/2,taille-pas,taille-pas);
  ellipse(width/2,height/2,taille/2-pas/2,taille/2-pas/2);
  ellipse(width/2,height/2,taille/2-pas/2+pas,taille/2-pas/2+pas);

  for (var i = 0; i < 20; i++) {
    line(width/2,height/2,width/2+taille/2*cos(TWO_PI/40+i*TWO_PI/20),height/2+taille/2*sin(TWO_PI/40+i*TWO_PI/20));
    fill(0);
    text(table_cible[i],width/2+taille/3*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/3*sin(TWO_PI/10+i*TWO_PI/20));
  }

  fill(255);
  ellipse(width/2,height/2,pas*2,pas*2);
  ellipse(width/2,height/2,pas/2,pas/2);
}


// Affiche là ou il faut tirer pour une valeur donnée
// si number = 1, croix n°1, si number = 2, croix n°2
function show_hit(valeur,number){
  if(number==1){
    if(valeur==0){
      cross(width/2+taille/1.7*cos(TWO_PI/10+11*TWO_PI/20),height/2+taille/1.7*sin(TWO_PI/10+11*TWO_PI/20),8);
    }

    if(valeur==25){
      cross(width/2+taille/33*cos(TWO_PI/10+11*TWO_PI/20),height/2+taille/33*sin(TWO_PI/10+11*TWO_PI/20),8);
    }

    if(valeur==50){
      cross(width/2,height/2,8);
    }

    if(valeur%3==0){
      var i=look_for(table_cible,valeur/3);
      cross(width/2+taille/4*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/4*sin(TWO_PI/10+i*TWO_PI/20),8);
    }
    if(valeur%2==0){
      var i=look_for(table_cible,valeur/2);
      cross(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
    }
    if(valeur<=20){
      var i=look_for(table_cible,valeur);
      cross(width/2+taille/2.5*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.5*sin(TWO_PI/10+i*TWO_PI/20),8);
      cross(width/2+taille/6*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/6*sin(TWO_PI/10+i*TWO_PI/20),8);
    }
  }
  if(number==2){
    if(valeur==0){
      cross2(width/2+taille/1.7*cos(TWO_PI/10+11*TWO_PI/20),height/2+taille/1.7*sin(TWO_PI/10+11*TWO_PI/20),8);
    }

    if(valeur==25){
      cross2(width/2+taille/33*cos(TWO_PI/10+11*TWO_PI/20),height/2+taille/33*sin(TWO_PI/10+11*TWO_PI/20),8);
    }

    if(valeur==50){
      cross2(width/2,height/2,8);
    }

    if(valeur%3==0){
      var i=look_for(table_cible,valeur/3);
      cross2(width/2+taille/4*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/4*sin(TWO_PI/10+i*TWO_PI/20),8);
    }
    if(valeur%2==0){
      var i=look_for(table_cible,valeur/2);
      cross2(width/2+taille/2.05*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.05*sin(TWO_PI/10+i*TWO_PI/20),8);
    }
    if(valeur<=20){
      var i=look_for(table_cible,valeur);
      cross2(width/2+taille/2.5*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/2.5*sin(TWO_PI/10+i*TWO_PI/20),8);
      cross2(width/2+taille/6*cos(TWO_PI/10+i*TWO_PI/20),height/2+taille/6*sin(TWO_PI/10+i*TWO_PI/20),8);
    }
  }
}

//------------------------------------------------------------------------------
