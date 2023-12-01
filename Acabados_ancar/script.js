var counter =1;

setInterval(function(){
    document.getElementById('R' + counter).checked= true;
    counter++;
    if(counter >4){
        counter=1;
    }
},8000)
