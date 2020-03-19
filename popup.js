
function firstClicked(){
  /*Change style of clicked element*/
  document.getElementsByClassName('toggle-text-first')[0].id='first-clicked'
  /*Change style of elements that are not clicked*/
  document.getElementsByClassName('toggle-text-second')[0].id='second-not-clicked'
  document.getElementsByClassName('toggle-text-third')[0].id='third-not-clicked'
  document.getElementsByClassName('toggle-text-fourth')[0].id="fourth-not-clicked"
  document.getElementsByClassName('toggle-text-fifth')[0].id="fifth-not-clicked"
  document.getElementsByClassName('toggle-text-sixth')[0].id="sixth-not-clicked"
}

function secondClicked(){
  /*Change style of clicked element*/
  document.getElementsByClassName('toggle-text-second')[0].id='second-clicked'
  /*Change style of elements that are not clicked*/
  document.getElementsByClassName('toggle-text-first')[0].id='first-not-clicked'
  document.getElementsByClassName('toggle-text-third')[0].id='third-not-clicked'
  document.getElementsByClassName('toggle-text-fourth')[0].id="fourth-not-clicked"
  document.getElementsByClassName('toggle-text-fifth')[0].id="fifth-not-clicked"
  document.getElementsByClassName('toggle-text-sixth')[0].id="sixth-not-clicked"
}


function thirdClicked(){
  /*Change style of clicked element*/
  document.getElementsByClassName('toggle-text-third')[0].id='third-clicked'
  /*Change style of elements that are not clicked*/
  document.getElementsByClassName('toggle-text-first')[0].id='first-not-clicked'
  document.getElementsByClassName('toggle-text-second')[0].id='second-not-clicked'
  document.getElementsByClassName('toggle-text-fourth')[0].id="fourth-not-clicked"
  document.getElementsByClassName('toggle-text-fifth')[0].id="fifth-not-clicked"
  document.getElementsByClassName('toggle-text-sixth')[0].id="sixth-not-clicked"
}

function fourthClicked(){
  /*Change style of clicked element*/
  document.getElementsByClassName('toggle-text-fourth')[0].id="fourth-clicked"
  /*Change style of elements that are not clicked*/
  document.getElementsByClassName('toggle-text-first')[0].id='first-not-clicked'
  document.getElementsByClassName('toggle-text-second')[0].id='second-not-clicked'
  document.getElementsByClassName('toggle-text-third')[0].id='third-not-clicked'
  document.getElementsByClassName('toggle-text-fifth')[0].id="fifth-not-clicked"
  document.getElementsByClassName('toggle-text-sixth')[0].id="sixth-not-clicked"
}

function fifthClicked(){
  /*Change style of clicked element*/
  document.getElementsByClassName('toggle-text-fifth')[0].id="fifth-clicked"
  /*Change style of elements that are not clicked*/
  document.getElementsByClassName('toggle-text-first')[0].id='first-not-clicked'
  document.getElementsByClassName('toggle-text-second')[0].id='second-not-clicked'
  document.getElementsByClassName('toggle-text-third')[0].id='third-not-clicked'
  document.getElementsByClassName('toggle-text-fourth')[0].id="fourth-not-clicked"
  document.getElementsByClassName('toggle-text-sixth')[0].id="sixth-not-clicked"
}

function sixthClicked(){
  /*Change style of clicked element*/
  document.getElementsByClassName('toggle-text-sixth')[0].id="sixth-clicked"
  /*Change style of elements that are not clicked*/
  document.getElementsByClassName('toggle-text-first')[0].id='first-not-clicked'
  document.getElementsByClassName('toggle-text-second')[0].id='second-not-clicked'
  document.getElementsByClassName('toggle-text-third')[0].id='third-not-clicked'
  document.getElementsByClassName('toggle-text-fourth')[0].id="fourth-not-clicked"
  document.getElementsByClassName('toggle-text-fifth')[0].id="fifth-not-clicked"
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
document.getElementsByClassName('toggle-text-first')[0].addEventListener('click', firstClicked)
document.getElementsByClassName('toggle-text-second')[0].addEventListener('click', secondClicked)
document.getElementsByClassName('toggle-text-third')[0].addEventListener('click', thirdClicked)
document.getElementsByClassName('toggle-text-fourth')[0].addEventListener('click', fourthClicked)
document.getElementsByClassName('toggle-text-fifth')[0].addEventListener('click', fifthClicked)
document.getElementsByClassName('toggle-text-sixth')[0].addEventListener('click', sixthClicked)


