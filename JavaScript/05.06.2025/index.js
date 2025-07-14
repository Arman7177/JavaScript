document.addEventListener("DOMContentLoaded",function(){

       var input = document.getElementById("input");
       var output = document.getElementById("output");

       input.addEventListener("input" ,function(){
              output.textContent = this.value; 
       });
});