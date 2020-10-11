window.onload = function(){
  
  const board = document.getElementById("#board");
  let square = [document.getElementById("#board > div")];


  document.querySelector("#board > div").className = ("square");



  for(let e = 0; e <= square.length; e++){
    document.querySelector("#board").classList.add("square");

  }
}