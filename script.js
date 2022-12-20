let counter = 0;
let holder = 0;
const start = document.querySelector(".start");
const display = document.querySelector(".display");
const stopp = document.querySelector(".stop");
const reset = document.querySelector(".reset");
let mm = 0;
let hh = 0;
let minutes = null;

const counts = () => {

      holder = (display.innerHTML);
      holder = holder.slice(-2);
      counter = parseFloat(holder) + 1;
      hh = hh < 10 ? `0${hh}` :hh;
      mm = mm < 10 ? `0${mm}` :mm;
      counter = counter < 10 ? `0${counter}` :counter;
      display.innerText = `${hh}: ${mm}: ${counter}` ; 
      mm = parseFloat(mm);
      hh = parseFloat(hh);
        if (counter === 60)
        {
          counter = 0;
          mm = mm + 1;
          display.innerText = `${mm} :00` ;
          
          if (mm === 60)
        {
          counter = 0;
          mm = 0;
          hh = hh + 1;
          display.innerText = `${hh}:00:00` ;
          
          
        
        }
        
        }
      
}





start .addEventListener("click",() => {
  if (minutes === null){
    minutes = setInterval(counts, 100);
  }
 
});
stopp .addEventListener("click",() => {
  clearInterval(minutes);
  minutes = null;
  console.log("stop");
  });

  reset .addEventListener("click",() => {
    if (minutes === null)
    {
      display.innerHTML = `00:00:00`;
      minutes = null;

      if ( hh > 0 || mm > 0)
      {
      hh = 0;
      mm = 0;
      holder = 0;
      counter =0;
      console.log ("if statement");
      }
      
    }
     else {
      clearInterval(minutes);
      display.innerHTML = `00:00:00`;
      minutes = null;
      if ( hh > 0 || mm > 0)
      {
      hh = 0;
      mm = 0;
      holder = 0;
      counter =0;
      console.log ("else statement");
      }
      
     } 
    });