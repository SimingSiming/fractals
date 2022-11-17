new p5;

// let fraction;
// let angle;
let Trigle = PI; 
function setup() {
  createCanvas(800, 800);
  // fraction = createSlider(0, 0.999, 0.01, 0.1); 
  // angle = createSlider(0, 2*PI, 0.01, 1/6*PI); 

}

function draw() {
  // let angle_val = angle.value(); 
  // let fraction_val = fraction.value();

  background(0);

  push();
  stroke(255);
  translate(400, 0);
  draw_header(300, Trigle);
  pop();

  if (Trigle >= 10* PI){
    translate(400, 200)
    snow(0, 0, 300);
  } 

  else if (Trigle >= 8*PI){
    translate(400,400);
    fract_tri(0,0, 100);
  }

  else if (Trigle >= 6 * PI){
    translate(400,400);
    fract_square(0, 0, 75);
  }

  else if (Trigle >= 4 *PI){
    stroke(255);
    translate(400,400);
    draw_triRotate(0);
    }

  else if (Trigle >= 2 * PI){ 
    push(); 
    translate(300, 400);
    noFill();
    stroke(255);
    draw_tri(200, Trigle);
    pop();
  }

  Trigle += 0.02;
}

function draw_header(size, angle_val){
    
    line(0, 0, 0, 1/2 * size);
    translate(0, 1/2 * size); 
    rotate(2*PI - angle_val);
    

    if (size > 1){
    draw_header(0.9* size, angle_val);
    }
}


function draw_tri(size){
  let a = (size / 2) * sqrt(3);
  let b = size / 2;
   
  triangle(0, 0, -b, a, b, a);
  translate(0, a);
  rotate(PI);
  if (size > 1){
    draw_tri(1/2 * size);
  }
}

function draw_triRotate(angle){
  noFill();
  // translate(-50,-100);
  translate(100,70);
  rotate(angle);
  translate(-100,-70);
  triangle(0,0, 75, 200, 300, 75);

  if (angle < 10*PI){
    draw_triRotate(angle + 0.3);
  } 
}

function fract_square(locx, locy, size){
  noFill(); 
  stroke(255);
  square(locx, locy, size);

  if (size > 1){
    let subloc = [[locx - 2*size/3, locy - 2*size/3], 
              [locx + size/3, locy - 2*size/3], 
              [locx + 4*size/3, locy - 2*size/3], 
              [locx - 2*size/3, locy + size/3], 
              [locx + 4*size/3, locy + size/3],
              [locx - 2*size/3, locy + 4*size/3],
              [locx + size/3, locy + 4*size/3], 
              [locx + 4*size/3, locy + 4*size/3]]
    for(let i of subloc){
      subx = i[0];
      suby = i[1];
      fract_square(subx, suby, 1/3*size); 
    }
  } 
}


  function fract_tri(locx, locy, size){
    noFill(); 
    stroke(255); 
    let height = size * sqrt(3)/2;
    let half_base = size / 2;
    triangle(locx, locy, locx + size, locy, locx + half_base, locy + height);
    
    if (size > 1){
      let subloc = [[locx + half_base/2, locy - height/2], 
                [locx - half_base/2, locy + height/2], 
                [locx + 3*half_base/2, locy + height/2]]
      for (let i of subloc){
        let subx1 = i[0];
        let suby1 = i[1];
        fract_tri(subx1, suby1, size/2);
      }
    }
  }

  function snow(locx, locy, size, angle){
    stroke(255);
    noFill(); 
    let height = size * sqrt(3)/2; 
    let half_base = size / 2;
    triangle(locx, locy, locx - half_base, locy + height, locx + half_base, locy + height); 
    

    if (size > 1){
      let subloc = [[locx - 1/3*size - 1/3*half_base, locy + 1/3 * height],
                    [locx + 1/3*size + 1/3*half_base, locy + 1/3 * height],
                    [locx, locy + height + 1/3*height]] 
      let subx1 = subloc[0][0];
      let suby1 = subloc[0][1];
      let subx2 = subloc[1][0]; 
      let suby2 = subloc[1][1]; 
      let subx3 = subloc[2][0]; 
      let suby3 = subloc[2][1];
      
      push(); 
      translate(subx1, suby1);
      rotate(-PI/3);
      translate(-subx1, -suby1);
      snow(subx1, suby1, size/3);
      pop();

      push(); 
      translate(subx2, suby2);
      rotate(PI/3);
      translate(-subx2, -suby2);
      snow(subx2, suby2, size/3);
      pop();

      push(); 
      translate(subx3, suby3);
      rotate(PI);
      translate(-subx3, -suby3);
      snow(subx3, suby3, size/3);
      pop();
    }

  }