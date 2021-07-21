const hero = document.querySelector(".hero");
const heroHuman = document.querySelector(".hero-human");
const villain = document.querySelector(".villain");

const jump = () => {
  if (hero.classList != "animate") { //we're going to use .animate class to make the girl jump  
    hero.classList.add("animate"); //when you press the space bar it will attach this animate class to the girl
    villain.style.animation = "move 1s infinite linear";  //this makes the code block move forward towards the girl
  }
  setTimeout(() => {  //At this point, the girl only jumps once. In order for her to jump multiple times, we will use setTimeout.
    hero.classList.remove("animate");
  }, 300); //reset after 300 miliseconds so we can continue to jump
};

document.addEventListener("keydown", (e) => {  
  if (e.code == "Space") { //this makes the space bar the event for the jump() function
    jump();
  }
});

let isAlive = setInterval(() => { //this checks if the girl is alive by seeing if she has made contact with the code block 
  // setInterval is important because we have to check if she is alive every x amount of time.
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));  //distance of girl/hero and "top"   
    // console.log(heroTop);
  let villainLeft = parseInt( //this checks position of code block
    window.getComputedStyle(villain).getPropertyValue("left") //distance of codeblock/villain and "left"
  );

  if (villainLeft < 40 && villainLeft > 20 && heroTop >= 130) { 
    villain.style.animation = "none";  //if the girl has not jumped high enough then animation is none, codeblock stops,  and game is over
    alert("Code has defeated you. Press spacebar to try again"); //alert for when you die
  }
}, 10); //this checks every 10 millseconds to check if girl is still alove
