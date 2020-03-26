
let clickedPlaces = ['first-clicked', 'second-clicked', 'third-clicked', 'fourth-clicked', 'fifth-clicked', 'sixth-clicked'];
let unclickedPlaces = ['first-not-clicked', 'second-not-clicked', 'third-not-clicked', 'fourth-not-clicked', 'fifth-not-clicked', 'sixth-not-clicked']
let homeTexts = ['Trending', 'Reactions', 'Hello', 'Goodbye', 'Thank You', 'Happy Bi'];
let nextTexts = ['hank You', 'Happy Birthday','Weird', 'Working', 'Food', '..........'];
let homeNextSelected = 0
let nextTextSelected = 1


/*This function gets called when a toggle choice gets clicked*/

function toggleClicked(place){
  /*unclick all elements*/
  for (var i=0; i<6; i++){
    document.getElementsByClassName('toggle-text')[i].id=unclickedPlaces[i]
  }
  /*Click element*/
  document.getElementsByClassName('toggle-text')[place].id=clickedPlaces[place]
  if(document.getElementsByClassName('arrow-svg')[0].id==='right'){
    homeNextSelected = place;
  }else if(document.getElementsByClassName('arrow-svg')[0].id==='left'){
    nextTextSelected = place;
  }
}


/*This function gets called when the toggle arrow is clicked*/

function toggleAnimation(){
    let direction = document.getElementsByClassName('arrow-svg')[0].id;
    var toggleTexts = document.querySelectorAll(".toggle-text");
    var textsbe = document.getElementsByClassName('toggle-text');
    
    /*Checks which way the arrow is facing*/
    if (direction==='left'){
  
      for (text in textsbe){
      /*makes sure that the text value is not the string 'length' but is actually a number*/
      if (text !== 'length'){
        /*unclick elements*/
        textsbe[text].id=unclickedPlaces[text];
        /*Changes the toggle text to the home toggle text*/
        textsbe[text].innerHTML=homeTexts[text];
      }
      }
      

      for (var i = 0; i < 6; i++) {
      var toggleText = toggleTexts[i];
      
      toggleText.keyframes = [{
          opacity: 0,
          transform: "translate3d(" + 0 + "px, 0px, 0px)"
      }, {
          opacity: 0,
          transform: "translate3d(" + 0 + "px, 7px, 0px)"
      }, {
          opacity: 1,
          transform: "translate3d(" + 0 + "px, 0px, 0px)"
      }];
      
      toggleText.animProps = {
          duration: 1000 + 10*i,
          easing: "ease-out",
          iterations: 1
      }
      
      var animationPlayer = toggleText.animate(toggleText.keyframes, toggleText.animProps);
      document.getElementsByClassName('arrow-svg')[0].id ='right'
      textsbe[homeNextSelected].id=clickedPlaces[homeNextSelected];
      }




    }else if (direction=='right'){
      for (text in textsbe){
        if (text !== 'length'){
          textsbe[text].id=unclickedPlaces[text];
          textsbe[text].innerHTML=nextTexts[text];
        }
        }

      for (var i = 0; i < 6; i++) {
      var toggleText = toggleTexts[i];
      
      toggleText.keyframes = [{
          opacity: 0,
          transform: "translate3d(" + 0 + "px, 0px, 0px)"
      }, {
          opacity: 0,
          transform: "translate3d(" + 0 + "px, 7px, 0px)"
      }, {
          opacity: 1,
          transform: "translate3d(" + 0 + "px, 0px, 0px)"
      }];
      
      toggleText.animProps = {
          duration: 1000 + 10*i,
          easing: "ease-out",
          iterations: 1
      }
  
  var animationPlayer = toggleText.animate(toggleText.keyframes, toggleText.animProps);
  }
  document.getElementsByClassName('arrow-svg')[0].id ='left'
  textsbe[nextTextSelected].id=clickedPlaces[nextTextSelected];
  textsbe[5].innerHTML=`<div class='no-select' style="color: #121212"> ${nextTexts[6]}<div>`
}

}

function gifClicked(){
  /* Turn text 'GIFs'green and render green rectangle.*/
    document.getElementById('gifs-text').innerHTML='<strong style="height:40px; color: #00ff99;">GIFs</strong><div class="clicked" id="gifs"></div>';
  /*Unclick elements, turn the rest of the text grey, unrender rectangles*/
    document.getElementById('stickers-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">Stickers</strong><div class="not-clicked" id="stickers"></div>';
    document.getElementById('saved-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">Saved</strong><div class="not-clicked" id="saved"></div>';
    
}

function stickersClicked(){
  /* Turn text green and render green rectangle.*/
    document.getElementById('stickers-text').innerHTML='<strong style="height:40px; color: #00ff99;">Sitckers</strong><div class="clicked" id="stickers"></div>';
  /*Unclick elements, turn the rest of the text grey, unrender rectangles*/ 
    document.getElementById('gifs-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">GIFs</strong><div class="not-clicked" id="gifs"></div>';
    document.getElementById('saved-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">Saved</strong><div class="not-clicked" id="saved";></div>';
    
}

function savedClicked(){
  /* Turn text green and render green rectangle.*/
   document.getElementById('saved-text').innerHTML='<strong style="height:40px; color: #00ff99;">Saved</strong><div class="clicked" id="saved"></div>';
  /*Unclick elements, turn the rest of the text grey, unrender rectangles*/
   document.getElementById('stickers-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">Stickers</strong><div class="not-clicked" id="stickers"></div>';
   document.getElementById('gifs-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">GIFs</strong><div class="not-clicked" id ="gifs"></div>';
   
}


/*Check if navbar elements were clicked*/
document.getElementById('gifs-text').addEventListener('click', gifClicked);
document.getElementById('stickers-text').addEventListener('click', stickersClicked);
document.getElementById('saved-text').addEventListener('click', savedClicked);


/*Check if toggle elements were clicked*/

document.getElementsByClassName('toggle-text')[0].addEventListener('click', function(){toggleClicked(0)});
document.getElementsByClassName('toggle-text')[1].addEventListener('click', function(){toggleClicked(1)});
document.getElementsByClassName('toggle-text')[2].addEventListener('click', function(){toggleClicked(2)});
document.getElementsByClassName('toggle-text')[3].addEventListener('click', function(){toggleClicked(3)});
document.getElementsByClassName('toggle-text')[4].addEventListener('click', function(){toggleClicked(4)});
document.getElementsByClassName('toggle-text')[5].addEventListener('click', function(){toggleClicked(5)});


  
document.getElementsByClassName('arrow-svg')[0].addEventListener('click', toggleAnimation);
