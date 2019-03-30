
const button = document.querySelector('#roll_button');
const container = document.querySelector(".dice");

const divs = function (cont, face, extra) {
const div = document.createElement("div");
cont.appendChild(div);
div.classList.add(face);
div.setAttribute("id" , extra); 
 }

// to make pips
const pips = function(num, parent) {
  for(let i=0; i < num; i++) {

    const pip = document.createElement('span');
    pip.className = "pip";
    document.querySelector(`#${parent}`).appendChild(pip);
    }}

    // to make columns that contain pips
    const columns = function(num,n,parent) {
    
    for(let i=0; i < num; i++) {
       const column = document.createElement('div');
      column.className = "column";
     
      for(let i=0; i<n; i++) {
        const pip = document.createElement('span');
      pip.className = "pip";
      column.appendChild(pip);}
    
      document.querySelector(`#${parent}`).appendChild(column);
      }}


  // To make dice faces 1-6    
const face_one = function (extra) { 
divs(container, "first-face", extra);
pips(1, extra);
} 


const face_two = function (extra) 
{
  divs(container, "second-face", extra);
pips(2, extra);
}

const face_three = function (extra) 
{
  divs(container, "third-face", extra);
  pips(3, extra);
   }


const face_four = function (extra) 
{
  divs(container, "fourth-face", extra);
  columns (2,2,extra);   
   }
 

const face_five = function (extra) {
  divs(container, "fifth-face", extra);
  columns (1,2,extra);   
  columns (1,1, extra );  
  columns (1,2, extra);    
} 


const face_six = function (extra) {
  divs(container, "sixth-face", extra);
  columns (2,3, extra); 
} 





const roll = function(){

  while(container.firstChild) {
      container.removeChild(container.firstChild);
  }

  const random_number = function(range) {
    return Math.floor(Math.random() * range);
  }

  const array_faces = [ face_one, face_two, face_three, face_four, face_five, face_six]

const random_faces = function () {
  array_faces[random_number(array_faces.length)]('q');
  array_faces[random_number(array_faces.length)]('w');
  array_faces[random_number(array_faces.length)]('r');
  array_faces[random_number(array_faces.length)]('t');
  array_faces[random_number(array_faces.length)]('y');
  array_faces[random_number(array_faces.length)]('u');
}

return random_faces();
}


button.addEventListener('click', roll)
