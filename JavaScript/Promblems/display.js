document.addEventListener("DOMContentLoaded",function(){
 
      const txt = document.getElementById("text");
      const btn = document.getElementById("btn");

      btn.addEventListener("click",function(){
          if (txt.style.display === "none") {
              txt.style.display = "block"
          } else {
              txt.style.display = "none";
          }          

      });

});