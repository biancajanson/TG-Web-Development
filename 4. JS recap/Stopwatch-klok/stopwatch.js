window.onload = function () {
  
    let seconds = 00; 
    let tens = 00; 
    let minutes = 00;
    let appendTens = document.getElementById("tens")
    let appendSeconds = document.getElementById("seconds")
    let appendMinutes = document.getElementById("minutes");
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Interval ;
  
    buttonStart.onclick = function() {
      
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
      clearInterval(Interval);
      minutes = "00"; 
      tens = "00";
      seconds = "00";
      appendMinutes.innerHTML = minutes;
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
        tens++; 
      
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
      
        if (tens > 9){
            appendTens.innerHTML = tens;
        } 
      
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
      
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            seconds = 0;
            appendSeconds.innerHTML = "0" + seconds;
            appendMinutes.innerHTML = "0" + minutes;
        }
    
        
    }
    
  
  }