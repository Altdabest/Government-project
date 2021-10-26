var c = 1;
function openNav() {
    document.getElementById("Menu").style.width = "25%";

    document.getElementById("Menu").style.left = "-10px";
  }
  function closeNav() {
    document.getElementById("Menu").style.width = "0%";
        // document.getElementById("Menu").style.marginRight= "0%";
          document.getElementById("Menu").style.left = "-10px";
        // document.getElementById("Menu").style.display = "block";
  }
  function Nav(){
      (c==1)?openNav():closeNav();
      c = (c==1)?0:1;
  }
  function setC(c){
    this.c = c;
  }
