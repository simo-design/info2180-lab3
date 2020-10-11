window.onload = function(){
  
  const board = document.getElementById("#board");
  let square = document.getElementById("div");


  document.querySelector("#board").className = ("board");

  let e = querySelectorAll("board > div");

  for(e=0; e<=9; e++){
    document.querySelector("#board").classList.add("square");
  }
}