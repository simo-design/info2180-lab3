window.onload = function()
{
  const board = document.getElementById("board");

  const btn = document.getElementById(".btn");
  
  
  board.setAttribute("class", "board");

  
  for (let e = 0; e <= 9; e++)
    {
      
      board.getElementsByTagName("div")[e].setAttribute("class" , "square");

    }

  
}