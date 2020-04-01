
let clickedPlaces = ['first-clicked', 'second-clicked', 'third-clicked', 'fourth-clicked', 'fifth-clicked', 'sixth-clicked'];
let unclickedPlaces = ['first-not-clicked', 'second-not-clicked', 'third-not-clicked', 'fourth-not-clicked', 'fifth-not-clicked', 'sixth-not-clicked'];
let homeTexts = ['Trending', 'Reactions', 'Hello', 'Goodbye', 'Thank You', 'Happy Bi'];
let nextTexts = ['hank You', 'Happy Birthday', 'Weird', 'Working', 'Food', '..........'];
let homeNextSelected = 0;
let nextTextSelected = 1;
let timesCalled = 1;
let currentKeyword = 'hello';
let currentPage = 0;
let gifOpened = false;
let toggleInnerHTML = '';
let itemKey = '';
let notinsaved = true;

// Load Trending Page Gifs 
loadTrending(60, false);

// This function gets called when a toggle choice gets clicked

function toggleClicked(place) {

  // Check What Toggle Page We're In - Gifs 
  if (currentPage === 0) {
    if (place === 0 && (document.getElementById("first-not-clicked").innerHTML === "Trending" || document.getElementById("first-clicked").innerHTML === "Trending")) {
      loadTrending(60, true);
    }
    if (place === 1) {
      searchGif(document.getElementById('second-not-clicked').innerHTML, 60, true);
    }
    if (place === 2) {
      searchGif(document.getElementById('third-not-clicked').innerHTML, 60, true);
    }
    if (place === 3) {
      searchGif(document.getElementById('fourth-not-clicked').innerHTML, 60, true);
    }
    if (place === 4) {
      searchGif(document.getElementById('fifth-not-clicked').innerHTML, 60, true);
    }
    if (place === 5) {
      searchGif(document.getElementById('sixth-not-clicked').innerHTML, 60, true);
    }
  }
  // Check What Toggle Place We're In - Stickers 
  else if (currentPage === 1) {
    if (place === 0 && (document.getElementById("first-not-clicked").innerHTML === "Trending" || document.getElementById("first-clicked").innerHTML === "Trending")) {
      loadTrendingSticker(60, true);
    }
    if (place === 1) {
      searchSticker(document.getElementById('second-not-clicked').innerHTML, 60, true);
    }
    if (place === 2) {
      searchSticker(document.getElementById('third-not-clicked').innerHTML, 60, true);
    }
    if (place === 3) {
      searchSticker(document.getElementById('fourth-not-clicked').innerHTML, 60, true);
    }
    if (place === 4) {
      searchSticker(document.getElementById('fifth-not-clicked').innerHTML, 60, true);
    }
    if (place === 5) {
      searchSticker(document.getElementById('sixth-not-clicked').innerHTML, 60, true);
    }
  }
  // Unclick All Elements
  for (var i = 0; i < 6; i++) {
    document.getElementsByClassName('toggle-text')[i].id = unclickedPlaces[i]
  }
  // Click Element
  document.getElementsByClassName('toggle-text')[place].id = clickedPlaces[place]
  if (document.getElementsByClassName('arrow-svg')[0].id === 'right') {
    homeNextSelected = place;
  } else if (document.getElementsByClassName('arrow-svg')[0].id === 'left') {
    nextTextSelected = place;
  }
}
// Trending Endpoint API 
async function loadTrending(limit, clear) {
  let searchUrl = `https://api.giphy.com/v1/gifs/trending?api_key=x01GDnDrRCOp9kXRPTeazB7wqCyeB5Sq&limit=${limit}&rating=R`
  let result = await fetch(searchUrl);
  let jsonResult = await result.json();
  renderTrending(jsonResult, clear)
}

//This function gets called when the toggle arrow is clicked

function toggleAnimation() {
  let direction = document.getElementsByClassName('arrow-svg')[0].id;
  var toggleTexts = document.querySelectorAll(".toggle-text");
  var textsbe = document.getElementsByClassName('toggle-text');

  // Checks If Arrow Is Facing Left 
  if (direction === 'left') {
    for (text in textsbe) {
      // makes sure that the text value is not the string 'length' but is actually a number
      if (text !== 'length') {
        // Unclick Elements
        textsbe[text].id = unclickedPlaces[text];
        // Changes the Next toggle text to the home toggle text
        textsbe[text].innerHTML = homeTexts[text];
      }
    }

    // Toggle Fade In 
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
    // Toggle Animation Properties
      toggleText.animProps = {
        // Toggle Animation Delay
        duration: 1000 + 10 * i,
        // Smooth Animation 
        easing: "ease-out",
        // How many times run 
        iterations: 1
      }
      // Plays Animation 
      var animationPlayer = toggleText.animate(toggleText.keyframes, toggleText.animProps);
      // Changes Arrow Direction to Right 
      document.getElementsByClassName('arrow-svg')[0].id = 'right'
      // Highlights Toggle Element We Were Last On
      textsbe[homeNextSelected].id = clickedPlaces[homeNextSelected];
      // Load Gifs When Toggle Clicked 
      if (currentPage === 0) {
        if (homeNextSelected === 0) {
          loadTrending(60, true);
        } else if (homeNextSelected === 1) {
          searchGif(document.getElementById('second-clicked').innerHTML, 60, true);
        } else if (homeNextSelected === 2) {
          searchGif(document.getElementById('third-clicked').innerHTML, 60, true);
        } else if (homeNextSelected === 3) {
          searchGif(document.getElementById('fourth-clicked').innerHTML, 60, true);
        } else if (homeNextSelected === 4) {
          searchGif(document.getElementById('fifth-clicked').innerHTML, 60, true);
        } else if (homeNextSelected === 5) {
          searchGif(document.getElementById('sixth-clicked').innerHTML, 60, true);
        }
        // Load Stickers when Toggle Clicked 
      } else if (currentPage === 1) {
        if (homeNextSelected === 0) {
          loadTrendingSticker(60, true);
        } else if (homeNextSelected === 1) {
          searchSticker(document.getElementById('second-clicked').innerHTML, 60, true);
        } else if (homeNextSelected === 2) {
          searchSticker(document.getElementById('third-clicked').innerHTML, 60, true);
        } else if (homeNextSelected === 3) {
          searchSticker(document.getElementById('fourth-clicked').innerHTML, 60, true);
        } else if (homeNextSelected === 4) {
          searchSticker(document.getElementById('fifth-clicked').innerHTML, 60, true);
        } else if (homeNextSelected === 5) {
          searchSticker(document.getElementById('sixth-clicked').innerHTML, 60, true);
        }
      }
    }
    // Checks If Arrow If Facing Right 
  } else if (direction == 'right') {
    for (text in textsbe) {
      // Makes sure that the text value is not the string 'length' but is actually a number
      if (text !== 'length') {
      // Unclick All Elements 
        textsbe[text].id = unclickedPlaces[text];
      //Changes the Home toggle text to the Next toggle text
        textsbe[text].innerHTML = nextTexts[text];
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
      // Toggle Animation Properties 
      toggleText.animProps = {
        // Toggle Animation Delay
        duration: 1000 + 10 * i,
        // Smooth Transition 
        easing: "ease-out",
        // How Many Times Run
        iterations: 1
      }
      // Plays Animation 
      var animationPlayer = toggleText.animate(toggleText.keyframes, toggleText.animProps);
    }
    // Changes Arrow Direction to Left 
    document.getElementsByClassName('arrow-svg')[0].id = 'left'
    // Highlights Previous Selected Toggle
    textsbe[nextTextSelected].id = clickedPlaces[nextTextSelected];
    // Display Gifs Using Toggles in Next 
    if (currentPage === 0) {
      if (nextTextSelected === 0) {
        searchGif(document.getElementById('first-clicked').innerHTML, 60, true)
      } else if (nextTextSelected === 1) {
        searchGif(document.getElementById('second-clicked').innerHTML, 60, true);
      } else if (nextTextSelected === 2) {
        searchGif(document.getElementById('third-clicked').innerHTML, 60, true);
      } else if (nextTextSelected === 3) {
        searchGif(document.getElementById('fourth-clicked').innerHTML, 60, true);
      } else if (nextTextSelected === 4) {
        searchGif(document.getElementById('fifth-clicked').innerHTML, 60, true);
      } else if (nextTextSelected === 5) {
        searchGif(document.getElementById('sixth-clicked').innerHTML, 60, true);
      }
      // Display Stickers Using Toggles in Next 
    } else if (currentPage === 1) {
      if (nextTextSelected === 0) {
        searchSticker(document.getElementById('first-clicked').innerHTML, 60, true)
      } else if (nextTextSelected === 1) {
        searchSticker(document.getElementById('second-clicked').innerHTML, 60, true);
      } else if (nextTextSelected === 2) {
        searchSticker(document.getElementById('third-clicked').innerHTML, 60, true);
      } else if (nextTextSelected === 3) {
        searchSticker(document.getElementById('fourth-clicked').innerHTML, 60, true);
      } else if (nextTextSelected === 4) {
        searchSticker(document.getElementById('fifth-clicked').innerHTML, 60, true);
      } else if (nextTextSelected === 5) {
        searchSticker(document.getElementById('sixth-clicked').innerHTML, 60, true);
      }
    }
    // Hide Undefined 
    textsbe[5].innerHTML = `<div class='no-select' style="color: #121212"> ${nextTexts[6]}<div>`
  }

}
function gifClicked() {
  currentPage = 0;
  // Checks If There's Not a Toggle 
  if (!document.getElementById('toggle')) {
    addElement('toggle-goes-here', 'div', 'toggle', 'toggle', '455', toggleInnerHTML)
    // Check if Toggle Is Clicked 
    document.getElementsByClassName('toggle-text')[0].addEventListener('click', function () { if (!gifOpened) { toggleClicked(0) } });
    document.getElementsByClassName('toggle-text')[1].addEventListener('click', function () { if (!gifOpened) { toggleClicked(1) } });
    document.getElementsByClassName('toggle-text')[2].addEventListener('click', function () { if (!gifOpened) { toggleClicked(2) } });
    document.getElementsByClassName('toggle-text')[3].addEventListener('click', function () { if (!gifOpened) { toggleClicked(3) } });
    document.getElementsByClassName('toggle-text')[4].addEventListener('click', function () { if (!gifOpened) { toggleClicked(4) } });
    document.getElementsByClassName('toggle-text')[5].addEventListener('click', function () { if (!gifOpened) { toggleClicked(5) } });
    document.getElementsByClassName('arrow-svg')[0].addEventListener('click', toggleAnimation);
  }
  // Put Back Width
  document.getElementById('gifs-grid2').style.width = 155;
  document.getElementById('gifs-grid3').style.width = 155;

  // Turn text 'GIFs'green and render green rectangle.
  document.getElementById('gifs-text').innerHTML = '<strong style="height:40px; color: #00ff99;">GIFs</strong><div class="clicked" id="gifs"></div>';
  // Unclick elements, turn the rest of the text grey, unrender rectangles 
  document.getElementById('stickers-text').innerHTML = '<strong style="height:40px; color: ##a6a6a6;">Stickers</strong><div class="not-clicked" id="stickers"></div>';
  document.getElementById('saved-text').innerHTML = '<strong  id="saved" style="height:40px; color: ##a6a6a6;">Saved</strong><div class="not-clicked" id="saved"></div>';

}

function stickersClicked() {
  currentPage = 1;
  notinsaved = true;
  // Checks If There's No Toggle 
  if (!document.getElementById('toggle')) {
    addElement('toggle-goes-here', 'div', 'toggle', 'toggle', '455', toggleInnerHTML)
    // Checks If Toggle Is Clicked 
    document.getElementsByClassName('toggle-text')[0].addEventListener('click', function () { if (!gifOpened) { toggleClicked(0) } });
    document.getElementsByClassName('toggle-text')[1].addEventListener('click', function () { if (!gifOpened) { toggleClicked(1) } });
    document.getElementsByClassName('toggle-text')[2].addEventListener('click', function () { if (!gifOpened) { toggleClicked(2) } });
    document.getElementsByClassName('toggle-text')[3].addEventListener('click', function () { if (!gifOpened) { toggleClicked(3) } });
    document.getElementsByClassName('toggle-text')[4].addEventListener('click', function () { if (!gifOpened) { toggleClicked(4) } });
    document.getElementsByClassName('toggle-text')[5].addEventListener('click', function () { if (!gifOpened) { toggleClicked(5) } });
    document.getElementsByClassName('arrow-svg')[0].addEventListener('click', toggleAnimation);
  }
  // Puts Back Width 
  document.getElementById('gifs-grid2').style.width = 155;
  document.getElementById('gifs-grid3').style.width = 155;
  // Turn text green and render green rectangle.
  document.getElementById('stickers-text').innerHTML = '<strong style="height:40px; color: #00ff99;">Stickers</strong><div class="clicked" id="stickers"></div>';
  // Unclick elements, turn the rest of the text grey, unrender rectangles
  document.getElementById('gifs-text').innerHTML = '<strong style="height:40px; color: ##a6a6a6;">GIFs</strong><div class="not-clicked" id="gifs"></div>';
  document.getElementById('saved-text').innerHTML = '<strong  id="saved" style="height:40px; color: ##a6a6a6;">Saved</strong><div class="not-clicked" id="saved";></div>';

}

function savedClicked() {
  currentPage = 2;
  notinsaved = false;
  // Turn text green and render green rectangle.
  document.getElementById('saved-text').innerHTML = '<strong   id="saved" style="height:40px; color: #00ff99;">Saved</strong><div class="clicked" id="saved"></div>';
  // Unclick elements, turn the rest of the text grey, unrender rectangles
  document.getElementById('stickers-text').innerHTML = '<strong style="height:40px; color: ##a6a6a6;">Stickers</strong><div class="not-clicked" id="stickers"></div>';
  document.getElementById('gifs-text').innerHTML = '<strong style="height:40px; color: ##a6a6a6;">GIFs</strong><div class="not-clicked" id ="gifs"></div>';

}

// Search Endpoint API 
async function searchGif(keyword, limit, clear) {
  notinsaved = true;
  let searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=tJWi8tEPTSzGXx9YJZqiXT9QFc5M0wsS&q=${keyword}&limit=${limit}&offset=0&rating=R&lang=en`
  let result = await fetch(searchUrl);
  let jsonResult = await result.json();
  renderImage(jsonResult, clear, keyword)
}

// Display Searched Gifs Inside Scrollable Area 
var base = 0;
function renderImage(imageData, clear, keyword) {

  let offSet = 20;
  // Clears Old Gifs
  if (clear === true) {
    document.getElementsByClassName('scrollableArea')[0].innerHTML = '<div class="main-container"><div class="container" id="gifs-grid"></div><div class="container2" id="gifs-grid2"></div><div class="container3" id="gifs-grid3"></div>'
    timesCalled = 1;
    base = 0;
    currentKeyword = keyword;
  }
  // Insert New Searched Gifs Into First Column
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid').innerHTML += `<div class="gif">
  <img data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"   class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145" ></div>`


  }
// Insert New Searched Gifs Into Second Column
  base += offSet
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid2').innerHTML += `<div class="gif">
  <img data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"   class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}'  id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145"></div>`


  }
  // Insert New Searched Gifs Into Third Column 
  base += offSet
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid3').innerHTML += `<div class="gif">
  <img data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"    class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145" ></div>`


  }
  // Adds 20 New Gifs on Each Column
  base += offSet
  timesCalled ++;

}


function renderSaved() {
  // Clears Current Gifs
  document.getElementsByClassName('scrollableArea')[0].innerHTML = '<div class="main-container"><div class="container" style=" align-content: flex-start; width:auto; max-width: 465px;flex-direction: row; flex-wrap: wrap;" id="gifs-grid"></div><div class="container2" id="gifs-grid2"></div><div class="container3" id="gifs-grid3"></div>'
  // Changes Width to 0 
  document.getElementById('gifs-grid2').style.width = 0;
  document.getElementById('gifs-grid3').style.width = 0;
  // Gets Saved Gifs From Chrome Storage 
  chrome.storage.sync.get(null, function (result) {
    savedGifs = Object.values(result)
    // Places Gifs Inside the Gif 
    for (var i = 0; i < savedGifs.length; i++) {
      document.getElementById('gifs-grid').innerHTML += `<div ${savedGifs[i].includes('sticker') ? "style='background-image:url(static/transparent.PNG);'" : ''} class="gif">${savedGifs[i]}</div>`
    }
  });



}

// Display Trending Gifs in Scrollable Area
function renderTrending(imageData, clear) {

  let offSet = 20;
// Clears Old Gifs in Scrollable Area 
  if (clear === true) {
    document.getElementsByClassName('scrollableArea')[0].innerHTML = '<div class="main-container"><div class="container" id="gifs-grid"></div><div class="container2" id="gifs-grid2"></div><div class="container3" id="gifs-grid3"></div>'
    timesCalled = 1;
    base = 0;
    currentKeyword = null;
  }
// Display 20 Trending Gifs In First Column 
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid').innerHTML += `<div class="gif">
  <img data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"   class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145" ></div>`

  }
  //Display 20 Trending Gifs In Second Column 
  base += offSet
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid2').innerHTML += `<div class="gif">
    <img data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"    class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145">  </div>`

  }
  //Display 20 Trending Gifs in Third Column 
  base += offSet
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid3').innerHTML += `<div class="gif">
  <img data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"    class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145" > </div>`

  }
  //Display 20 Gifs in Columns
  base += offSet
  timesCalled += 1;

}

// Check if search button was clicked
document.getElementById("searchGifs").addEventListener("click", function () {
  document.getElementById('content-opened').innerHTML = '';
  addElement('toggle-goes-here', 'div', 'toggle', 'toggle', '455', toggleInnerHTML)
  document.getElementsByClassName('toggle-text')[0].addEventListener('click', function () { if (!gifOpened) { toggleClicked(0) } });
  document.getElementsByClassName('toggle-text')[1].addEventListener('click', function () { if (!gifOpened) { toggleClicked(1) } });
  document.getElementsByClassName('toggle-text')[2].addEventListener('click', function () { if (!gifOpened) { toggleClicked(2) } });
  document.getElementsByClassName('toggle-text')[3].addEventListener('click', function () { if (!gifOpened) { toggleClicked(3) } });
  document.getElementsByClassName('toggle-text')[4].addEventListener('click', function () { if (!gifOpened) { toggleClicked(4) } });
  document.getElementsByClassName('toggle-text')[5].addEventListener('click', function () { if (!gifOpened) { toggleClicked(5) } });
  document.getElementsByClassName('arrow-svg')[0].addEventListener('click', toggleAnimation);
  searchGif(document.getElementsByName("search")[0].value, 60, true);
})
/*check if something was typed in the search bar*/
document.getElementById("search").addEventListener("keyup", function () {
  if (document.getElementById('saved-text').firstElementChild.style.color !== "rgb(0, 255, 153)"){
  document.getElementById('gifs-grid2').style.width = 155;
  document.getElementById('gifs-grid3').style.width = 155;
  console.log('currentpage is : ' + currentPage)
  document.getElementById('content-opened').innerHTML = '';
  addElement('toggle-goes-here', 'div', 'toggle', 'toggle', '455', toggleInnerHTML)
  document.getElementsByClassName('toggle-text')[0].addEventListener('click', function () { if (!gifOpened) { toggleClicked(0) } });
  document.getElementsByClassName('toggle-text')[1].addEventListener('click', function () { if (!gifOpened) { toggleClicked(1) } });
  document.getElementsByClassName('toggle-text')[2].addEventListener('click', function () { if (!gifOpened) { toggleClicked(2) } });
  document.getElementsByClassName('toggle-text')[3].addEventListener('click', function () { if (!gifOpened) { toggleClicked(3) } });
  document.getElementsByClassName('toggle-text')[4].addEventListener('click', function () { if (!gifOpened) { toggleClicked(4) } });
  document.getElementsByClassName('toggle-text')[5].addEventListener('click', function () { if (!gifOpened) { toggleClicked(5) } });
  document.getElementsByClassName('arrow-svg')[0].addEventListener('click', toggleAnimation);
  if (currentPage === 0) {
    searchGif(document.getElementsByName("search")[0].value, 60, true);
  } else if (currentPage === 1) {
    searchSticker(document.getElementsByName("search")[0].value, 60, true);
  }
}
})
// Check if user scrolled to bottom 
document.getElementsByClassName('scrollableArea')[0].onscroll = function () {
  var d = document.getElementsByClassName('scrollableArea')[0]
  var offset = Math.floor(d.scrollTop);
  var height = Math.floor(d.scrollHeight - 514);


  if (offset >= height) {
    if (currentKeyword !== null) {
      if (currentPage == 0) {
        //Load 60 more Gifs when Scrolled to Bottom OF keyword 
        searchGif(currentKeyword, 60 * timesCalled, false);
      } else if (currentPage == 1) {
        //Load 60 more Stickers when Scrolled to Bottom OF keyword 
        searchSticker(currentKeyword, 60 * timesCalled, false);
      }
    } else {
      if (currentPage == 0) {
        // Load 60 more trending Gifs when Scrolled to the Bottom 
        loadTrending(60, false);
      } else if (currentPage == 1) {
        // Load 60 more trending Stickers when Scrolled to the Bottom 
        loadTrendingSticker(60, false);
      }
    }
  }
};

// Search Sticker Endpoint API
async function searchSticker(keyword, limit, clear) {
  let searchUrl = `https://api.giphy.com/v1/stickers/search?api_key=x01GDnDrRCOp9kXRPTeazB7wqCyeB5Sq&q=${keyword}&limit=${limit}&offset=0&rating=R&lang=en`
  let result = await fetch(searchUrl);
  let jsonResult = await result.json();
  renderSticker(jsonResult, clear, keyword)
}
// Search Trending Sticket Endpoint API
async function loadTrendingSticker(limit, clear) {
  let searchUrl = `https://api.giphy.com/v1/stickers/trending?api_key=x01GDnDrRCOp9kXRPTeazB7wqCyeB5Sq&limit=${limit}&rating=R`
  let result = await fetch(searchUrl);
  let jsonResult = await result.json();
  renderTrendingSticker(jsonResult, clear)
}

// Display Stickers in Scrollable Area 
function renderSticker(imageData, clear, keyword) {

  let offSet = 20;
// Clear old Stickers 
  if (clear === true) {
    document.getElementsByClassName('scrollableArea')[0].innerHTML = '<div class="main-container"><div class="container" id="gifs-grid"></div><div class="container2" id="gifs-grid2"></div><div class="container3" id="gifs-grid3"></div>'
    timesCalled = 1;
    base = 0;
    currentKeyword = keyword;
  }
  // Add 20 Stickers to First Column 
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid').innerHTML += `<div class="gif" style="background-image: url(static/transparent.PNG);" > <div style="background-image: url(static/transparent.PNG);">
<img data-type="sticker" data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"   class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145" ></div>`
  }
  // Add 20 Stickers to Second Column 
  base += offSet
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid2').innerHTML += `<div class="gif" style="background-image: url(static/transparent.PNG);" > 
<img data-type="sticker" data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"   class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145">  </div>`

  }
  // Add 20 Stickers to second Column 
  base += offSet
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid3').innerHTML += `<div class="gif" style="background-image: url(static/transparent.PNG);" >
<img data-type="sticker"  data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"   class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145" ></div>`

  }
  // Add 60 Gifs in Columns 
  base += offSet
  timesCalled += 1;

}
// Display Trending Stickers in Scrollable Area 
function renderTrendingSticker(imageData, clear) {

  let offSet = 20;
  // Clear Old Gifs in Scrollable Area 
  if (clear === true) {
    document.getElementsByClassName('scrollableArea')[0].innerHTML = '<div class="main-container"><div class="container" id="gifs-grid"></div><div class="container2" id="gifs-grid2"></div><div class="container3" id="gifs-grid3"></div>'
    timesCalled = 1;
    base = 0;
    currentKeyword = null;
  }
  // Display 20 Trending Stickers in First Column 
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid').innerHTML += `<div class="gif" style="background-image: url(static/transparent.PNG);"> <div style="background-image: url(static/transparent.PNG);">
  <img data-type="sticker" data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"  class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145"></div>`
  }
  // Display 20 Trending Stickers in Second Column 
  base += offSet
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid2').innerHTML += `<div class="gif" style="background-image: url(static/transparent.PNG);" ><div style="background-image: url(static/transparent.PNG);">
  <img data-type="sticker" data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"   class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145"></div> `

  }
  // Display 20 Trending Stickers in Third Column 
  base += offSet
  for (var i = base; i < base + offSet; i++) {
    document.getElementById('gifs-grid3').innerHTML += `<div class="gif" style="background-image: url(static/transparent.PNG);"><div style="background-image: url(static/transparent.PNG);">
  <img data-type="sticker" data-is-verified = "${imageData.data[i].user ? imageData.data[i].user.is_verified : 'nothing'}" data-avatar-url = "${imageData.data[i].user ? imageData.data[i].user.avatar_url : 'nothing'}" data-user-url = "${imageData.data[i].user ? imageData.data[i].user.profile_url : 'nothing'}" data-username = "${imageData.data[i].user ? imageData.data[i].user.username : 'nothing'}" data-display = "${imageData.data[i].user ? imageData.data[i].user.display_name : 'nothing'}"   class='giphy-image ${imageData.data[i].images.original.url} ${imageData.data[i].bitly_gif_url}' id=${i} src=${imageData.data[i].images.fixed_height_downsampled.url} width="145" ></div>`
  }
  // Display 60 Trending Stickers in Columns
  base += offSet
  timesCalled += 1;

}


// Check If Toggles & Navbar Element "Gifs" Is clicked 
document.getElementById('gifs-text').addEventListener('click', function () {
  gifClicked()
  if (document.getElementsByClassName('arrow-svg')[0].id === 'left') {
    if (nextTextSelected === 0) {
      loadTrending(60, true);
    } else if (nextTextSelected === 1) {
      searchGif(document.getElementById('second-clicked').innerHTML, 60, true);
    } else if (nextTextSelected === 2) {
      searchGif(document.getElementById('third-clicked').innerHTML, 60, true);
    } else if (nextTextSelected === 3) {
      searchGif(document.getElementById('fourth-clicked').innerHTML, 60, true);
    } else if (nextTextSelected === 4) {
      searchGif(document.getElementById('fifth-clicked').innerHTML, 60, true);
    } else if (nextTextSelected === 5) {
      searchGif(document.getElementById('sixth-clicked').innerHTML, 60, true);
    }
    // Check If Next Toggles Are Clicked 
  } else if (document.getElementsByClassName('arrow-svg')[0].id === 'right') {
    if (homeNextSelected === 0) {
      loadTrending(60, true);
    } else if (homeNextSelected === 1) {
      searchGif(document.getElementById('second-clicked').innerHTML, 60, true);
    } else if (homeNextSelected === 2) {
      searchGif(document.getElementById('third-clicked').innerHTML, 60, true);
    } else if (homeNextSelected === 3) {
      searchGif(document.getElementById('fourth-clicked').innerHTML, 60, true);
    } else if (homeNextSelected === 4) {
      searchGif(document.getElementById('fifth-clicked').innerHTML, 60, true);
    } else if (homeNextSelected === 5) {
      searchGif(document.getElementById('sixth-clicked').innerHTML, 60, true);
    }
  }
});
  //Check if Toggles and Navbar Element "Stickers" is clicked 
document.getElementById('stickers-text').addEventListener('click', function () {
  stickersClicked()
  if (document.getElementsByClassName('arrow-svg')[0].id === 'left') {
    if (nextTextSelected === 0) {
      loadTrendingSticker(60, true);
    } else if (nextTextSelected === 1) {
      searchSticker(document.getElementById('second-clicked').innerHTML, 60, true);
    } else if (nextTextSelected === 2) {
      searchSticker(document.getElementById('third-clicked').innerHTML, 60, true);
    } else if (nextTextSelected === 3) {
      searchSticker(document.getElementById('fourth-clicked').innerHTML, 60, true);
    } else if (nextTextSelected === 4) {
      searchSticker(document.getElementById('fifth-clicked').innerHTML, 60, true);
    } else if (nextTextSelected === 5) {
      searchSticker(document.getElementById('sixth-clicked').innerHTML, 60, true);
    }
    // Check if Toggles on Home are Clicked 
  } else if (document.getElementsByClassName('arrow-svg')[0].id === 'right') {
    if (homeNextSelected === 0) {
      loadTrendingSticker(60, true);
    } else if (homeNextSelected === 1) {
      searchSticker(document.getElementById('second-clicked').innerHTML, 60, true);
    } else if (homeNextSelected === 2) {
      searchSticker(document.getElementById('third-clicked').innerHTML, 60, true);
    } else if (homeNextSelected === 3) {
      searchSticker(document.getElementById('fourth-clicked').innerHTML, 60, true);
    } else if (homeNextSelected === 4) {
      searchSticker(document.getElementById('fifth-clicked').innerHTML, 60, true);
    } else if (homeNextSelected === 5) {
      searchSticker(document.getElementById('sixth-clicked').innerHTML, 60, true);
    }
  }
});
// Check if Navbar Element "Saved" Is clicked 
document.getElementById('saved-text').addEventListener('click', savedClicked);


// Check if Toggle Elements are clicked 

document.getElementsByClassName('toggle-text')[0].addEventListener('click', function () { if (!gifOpened) { toggleClicked(0) } });
document.getElementsByClassName('toggle-text')[1].addEventListener('click', function () { if (!gifOpened) { toggleClicked(1) } });
document.getElementsByClassName('toggle-text')[2].addEventListener('click', function () { if (!gifOpened) { toggleClicked(2) } });
document.getElementsByClassName('toggle-text')[3].addEventListener('click', function () { if (!gifOpened) { toggleClicked(3) } });
document.getElementsByClassName('toggle-text')[4].addEventListener('click', function () { if (!gifOpened) { toggleClicked(4) } });
document.getElementsByClassName('toggle-text')[5].addEventListener('click', function () { if (!gifOpened) { toggleClicked(5) } });

// Check if Arrow Is Clicked 

document.getElementsByClassName('arrow-svg')[0].addEventListener('click', toggleAnimation);





function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}

function addElement(parentId, elementTag, elementId, elementClass, elementWidth, html) {
  // Adds an element to the document
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute('id', elementId);
  newElement.setAttribute('class', elementClass);
  newElement.setAttribute('width', elementWidth);
  newElement.innerHTML = html;
  p.appendChild(newElement);
}


// Event Bubbling 
document.addEventListener('click', function () {
  if (event.target.classList.contains('giphy-image')) {
    displayGif(event.target.src);
  } else if (event.target.id === 'back-button') {
    exit()
  } else if (event.target.classList.contains('copy-link')) {
    copyToClipboard(event.target.getAttribute('data-link'));
  } else if (event.target.id == "saved" || event.target.id == "saved-text") {
    displaySaved()
    renderSaved(contentToSave)
  } else if (event.target.classList.contains('content-action')) {
    var storage = chrome.storage.sync;
    var key = itemKey;
    if (event.target.id == 'save-content') {
      storage.set({
        [key]: contentToSave
      });
      event.target.id = "remove-content"
      event.target.style.backgroundColor = '#fcba03';
      event.target.innerHTML = "Remove"
    } else if (event.target.id === "remove-content") {
      storage.remove(key);
      exit()
      savedClicked()
      displaySaved()
      notinsaved = false;
      renderSaved(contentToSave)

    }
  }
});

// Display the Saved tab
function displaySaved() {
  if (document.getElementById('toggle')) {
    toggleInnerHTML = document.getElementById('toggle').innerHTML;
    removeElement('toggle');
  }
}

// What Gif is Being Saved 
let contentToSave = '';

// Display Gif using URL 
function displayGif(url) {
  // Removes Toggle 
  if (document.getElementById('toggle')) {
    toggleInnerHTML = document.getElementById('toggle').innerHTML;
    removeElement('toggle');
  }
  // Sets Content to Save 
  contentToSave = event.target.parentElement.innerHTML
  itemKey = event.target.classList[2];
  document.getElementById('content-opened').innerHTML = `<div ${document.getElementById('saved-text').firstElementChild.style.color === "rgb(0, 255, 153)" ? 'style="height:640px;position: absolute;width: 474.4px;margin-top: 30px;"' : ""}id="gif-opened">
  <div id = 'gif-opened-header'>
    <div id ='drag-dialogue' style="z-idex=10;">
      <b>Drag and Drop</b>
      &nbsp;GIF onto any web page
    </div>
    <img id ='back-button' src="static/back-button.png">
  </div>
  <div id="opened-gif">
<a id="a-tag" href=${event.target.classList[2]} class = "opened-content-gif" style="${document.getElementById('stickers-text').firstElementChild.style.color !== "rgb(0, 255, 153)" ? 'background-color: rgb(16,16,16);' : 'background-image: url(static/transparent.PNG);'}"><img id="these-dimensions" class="opened-content-gif" src=${event.target.classList[1]}>
    </a>
  </div>
  <div id='wrapsidk' style="${document.getElementById('saved-text').firstElementChild.style.color === "rgb(0, 255, 153)" ? ' margin-top: 550px; position: absolute; width: 99%;' : 'margin-top: 0px; position:relative; width: 99%;'}"> 
    <div id="gif-footer">
      <img src=${event.target.getAttribute('data-avatar-url') !== 'nothing' ? event.target.getAttribute('data-avatar-url') : 'static/none.png'}>  
      <div id="username">
        <div class="sc-htoDjs kgSoAQ">${event.target.getAttribute('data-display') !== 'nothing' ? event.target.getAttribute('data-display') : ''}</div>
        <a href="${event.target.getAttribute('data-user-url') !== 'nothing' ? event.target.getAttribute('data-user-url') : ''}" target="_blank" rel="noopener noreferrer" class="at">${event.target.getAttribute('data-username') !== 'nothing' ? '@' + event.target.getAttribute('data-username') : ''}&nbsp;${event.target.getAttribute('data-is-verified') !== 'nothing' ? '<svg viewBox="-1 0 18 18" version="1.1" width="14px"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Artboard-2" transform="translate(-324.000000, -132.000000)" fill="#15CDFF"><g id="Group-3" transform="translate(323.000000, 132.000000)"><polygon id="sprocket" points="8.95093746 16.1755971 6.18494567 16.8455287 4.34519872 14.6949378 1.70947694 13.628319 1.49869564 10.8185214 2.85993451e-13 8.42276436 1.49869564 6.02700728 1.70947694 3.21720971 4.34519872 2.1505909 6.18494567 4.92383911e-14 8.95093746 0.669931593 11.7169293 4.82947016e-14 13.5566762 2.1505909 16.192398 3.21720971 16.4031793 6.02700728 17.9018749 8.42276436 16.4031793 10.8185214 16.192398 13.628319 13.5566762 14.6949378 11.7169293 16.8455287"></polygon><path d="M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z" id="check" fill="#121212" transform="translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "></path></g></g></g></svg>' : '<div></div>'}</a>
      </div>
    </div>
    <div class="copy-link" data-link ="${event.target.classList[2]}"id="not-copied">Copy Link</div>
      <div id="${document.getElementById('saved-text').firstElementChild.style.color === "rgb(0, 255, 153)" ? "remove-content" : "save-content"}" style="margin-left: 5px; ${document.getElementById('saved-text').firstElementChild.style.color === "rgb(0, 255, 153)" ? 'background-color: #fcba03;' : ''}" class="content-action" >${document.getElementById('saved-text').firstElementChild.style.color === "rgb(0, 255, 153)" ? 'Remove' : 'Save'}</div>
  </div>

  
  </div>
</div>
`


  // Gets link and Sets Width and Height 
  document.getElementById('a-tag').width = document.getElementById('these-dimensions').style.width
  document.getElementById('a-tag').height = document.getElementById('these-dimensions').style.height

}

  // Clears and adds Toggles Back 
function exit() {
  if (document.getElementById('saved-text').firstElementChild.style.color !== "rgb(0, 255, 153)") {
    addElement('toggle-goes-here', 'div', 'toggle', 'toggle', '455', toggleInnerHTML);
    document.getElementsByClassName('toggle-text')[0].addEventListener('click', function () { if (!gifOpened) { toggleClicked(0) } });
    document.getElementsByClassName('toggle-text')[1].addEventListener('click', function () { if (!gifOpened) { toggleClicked(1) } });
    document.getElementsByClassName('toggle-text')[2].addEventListener('click', function () { if (!gifOpened) { toggleClicked(2) } });
    document.getElementsByClassName('toggle-text')[3].addEventListener('click', function () { if (!gifOpened) { toggleClicked(3) } });
    document.getElementsByClassName('toggle-text')[4].addEventListener('click', function () { if (!gifOpened) { toggleClicked(4) } });
    document.getElementsByClassName('toggle-text')[5].addEventListener('click', function () { if (!gifOpened) { toggleClicked(5) } });
    document.getElementsByClassName('arrow-svg')[0].addEventListener('click', toggleAnimation);
  }
  // Adds Event Listener 
  if (notinsaved) {
    document.getElementsByClassName('toggle-text')[0].addEventListener('click', function () { if (!gifOpened) { toggleClicked(0) } });
    document.getElementsByClassName('toggle-text')[1].addEventListener('click', function () { if (!gifOpened) { toggleClicked(1) } });
    document.getElementsByClassName('toggle-text')[2].addEventListener('click', function () { if (!gifOpened) { toggleClicked(2) } });
    document.getElementsByClassName('toggle-text')[3].addEventListener('click', function () { if (!gifOpened) { toggleClicked(3) } });
    document.getElementsByClassName('toggle-text')[4].addEventListener('click', function () { if (!gifOpened) { toggleClicked(4) } });
    document.getElementsByClassName('toggle-text')[5].addEventListener('click', function () { if (!gifOpened) { toggleClicked(5) } });
    document.getElementsByClassName('arrow-svg')[0].addEventListener('click', toggleAnimation);
  }
  // Clear 
  document.getElementById('content-opened').innerHTML = '';

}

// Allows For User To Copy Link 
function copyToClipboard(textToCopy) {
  var button = document.getElementsByClassName('copy-link')[0];
  var textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  button.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  button.removeChild(textArea);
  button.id = "copied"
  button.innerHTML = 'Copied!'
  setTimeout(notCopied, 4000);
}

// Changes Style of Button to purple 
function notCopied() {
  var button = document.getElementsByClassName('copy-link')[0];
  button.innerHTML = 'Copy Link'
  button.id = "not-copied-b"

}