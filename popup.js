

function gifClicked(){
    document.getElementById('gifs-text').innerHTML='<strong style="height:40px; color: #00ff99;">GIFs</strong><div class="clicked" id="gifs"></div>';
    document.getElementById('stickers-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">Stickers</strong><div class="not-clicked" id="stickers"></div>';
    document.getElementById('saved-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">Saved</strong><div class="not-clicked" id="saved"></div>';
    
}

function stickersClicked(){
    document.getElementById('stickers-text').innerHTML='<strong style="height:40px; color: #00ff99;">Sitckers</strong><div class="clicked" id="stickers"></div>';
    document.getElementById('gifs-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">GIFs</strong><div class="not-clicked" id="gifs"></div>';
    document.getElementById('saved-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">Saved</strong><div class="not-clicked" id="saved";></div>';
    
}

function savedClicked(){
   document.getElementById('saved-text').innerHTML='<strong style="height:40px; color: #00ff99;">Saved</strong><div class="clicked" id="saved"></div>';
   document.getElementById('stickers-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">Stickers</strong><div class="not-clicked" id="stickers"></div>';
   document.getElementById('gifs-text').innerHTML='<strong style="height:40px; color: ##a6a6a6;">GIFs</strong><div class="not-clicked" id ="gifs"></div>';
   
}



document.getElementById('gifs-text').addEventListener('click', gifClicked);
document.getElementById('stickers-text').addEventListener('click', stickersClicked);
document.getElementById('saved-text').addEventListener('click', savedClicked);



