var c = 1;
function openNav() {
  document.querySelector(".Menu").style.width = "25%";

    document.querySelector(".Menu").style.left = "0px";
  }
  function closeNav() {
    document.querySelector(".Menu").style.width = "0%";
        // document.getElementById("Menu").style.marginRight= "0%";
        document.querySelector(".Menu").style.left = "0px";
        // document.getElementById("Menu").style.display = "block";
  }
  function Nav(){
      (c==1)?openNav():closeNav();
      c = (c==1)?0:1;
  }
  function setC(c){
    this.c = c;
  }

  function show(){
    document.querySelector("#Issues1").style.display = "block";
    document.querySelector("#Issues2").style.display = "block";
    document.querySelector("#Issues3").style.display = "block";
    document.querySelector("#Issues4").style.display = "block";
    // document.querySelector(".IssuesPage").style.display = "block";
  }
  function hide(){
    document.querySelector("#Issues1").style.display = "none";
    document.querySelector("#Issues2").style.display = "none";
    document.querySelector("#Issues3").style.display = "none";
    document.querySelector("#Issues4").style.display = "none";
    // document.querySelector(".Issues").style.display = "none";
    
    // document.querySelector(".IssuesPage").style.display = "block";

  }

  function submit(){
    document.querySelector("#Message").value="";
    alert("Message Sent");
  }
  // $.mobile.changePage(pages.issue1);
  // var currentView = new HomeView();
  
//   var b = 1;
//   function openButtonDiv(){
//     (b==1)?document.querySelector(".Buttons").style.width = "400px":document.querySelector(".Buttons").style.width = "0px";
//     (b==1)?b=0:b=1;
//   }
