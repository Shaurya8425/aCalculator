let sqrt;
function sendNum(){
  const number=document.getElementById("number").value;
  console.log(number);
  sqrt=Math.sqrt(number);
  // Math.round(sqrt*1000);
  // sqrt/1000;
  console.log(sqrt);
  document.getElementById("sqrt").innerText=sqrt;
  // left
  document.getElementById("l1").innerText=(sqrt+1)+'\n='+(sqrt+1)*(sqrt+1);
  document.getElementById("l2").innerText=(sqrt+2)+'\n='+(sqrt+2)*(sqrt+2);
  document.getElementById("l3").innerText=(sqrt+3)+'\n='+(sqrt+3)*(sqrt+3);
  document.getElementById("l4").innerText=(sqrt+4)+'\n='+(sqrt+4)*(sqrt+4);
  document.getElementById("l5").innerText=(sqrt+5)+'\n='+(sqrt+5)*(sqrt+5);
  
  // right
  document.getElementById("r1").innerText=(sqrt-1)+'\n='+(sqrt-1)*(sqrt-1);
  document.getElementById("r2").innerText=(sqrt-2)+'\n='+(sqrt-2)*(sqrt-2);
  document.getElementById("r3").innerText=(sqrt-3)+'\n='+(sqrt-3)*(sqrt-3);
  document.getElementById("r4").innerText=(sqrt-4)+'\n='+(sqrt-4)*(sqrt-4);
  document.getElementById("r5").innerText=(sqrt-5)+'\n='+(sqrt-5)*(sqrt-5);
}

// let sqrtf=sqrt;
// let nsqrtf
// for(let i=1;i<=5;i++){
  //   sqrtf++;
  //   nsqrtf=sqrtf*sqrtf;
  //   console.log(nsqrtf);
  //   document.getElementById("left").append(nsqrtf);
  // }
  // let right=document.getElementById("right");