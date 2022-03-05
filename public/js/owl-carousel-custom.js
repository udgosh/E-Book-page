//FLAG used to stop carousel when tab resized
let flag = false;
//Get Modal of Comment Slider
let modalImage = document.getElementById("myModal");
//Get Modal of Video Slider
let modalVideo = document.getElementById("myModalVideo");

//Get Video Player from Video Slider Modal
let videoPlayer = modalVideo.getElementsByClassName('modal-content')[0];
//Close Button of Comment Slider Modal
let spanImage = modalImage.getElementsByClassName("close")[0];
//Close Button of Video Slider Modal
let spanVideo = modalVideo.getElementsByClassName("close")[0];


// ------------------------COMMENT SLIDER -----------------------

const commentSlider = $('.comment-slider').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1500,
  dots: false,
  nav: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 50
    },
    500: {
      items: 2
    },
    762: {
      items: 3
    },
    991: {
      items: 4
    }
    
  }
})

//When carousel resized, Then stop autoplay in background
commentSlider.on('resize.owl.carousel', function (event) {
  if (flag)
    commentSlider.trigger('stop.owl.autoplay')
})
commentSlider.on('resized.owl.carousel', function (event) {
  // console.log(event.type);
  if (flag)
    commentSlider.trigger('stop.owl.autoplay')
})




// CLICK LISTENER OF COMMENT SLIDER IMAGES

$('.comment-item').click(function (event) {
  let src;
  flag = true;
  commentSlider.trigger('stop.owl.autoplay')
  imageView(event.target.src)
})

//IMAGE VIEW METHOD FOR COMMENT SLIDER TO VIEW ON DISPLAY
function imageView(item) {
  let modalImg = document.getElementById("img01");
  modalImage.style.display = "block";
  modalImg.src = item;
}


// When the user clicks on <span> (x), close the Comment modal
spanImage.onclick = function () {
  modalImage.style.display = "none";
  flag = false;
  commentSlider.trigger('play.owl.autoplay')
}


// ------------------------------------COMMENT SLIDER END------------------------------






// ------------------------VIDEO SLIDER SECTION OWL CAROUSEL -----------------------



const videoSlider = $('.video-slider').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  margin: 10,
  autoplayTimeout: 3000,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 50
    },
    500: {
      items: 2
    },
    762: {
      items: 3
    },
    991: {
      items: 4
    }
  }
})


//When carousel resized, Then stop autoplay in background

videoSlider.on('resize.owl.carousel', function (event) {
  if (flag)
    videoSlider.trigger('stop.owl.autoplay')
})
videoSlider.on('resized.owl.carousel', function (event) {
  if (flag)
    videoSlider.trigger('stop.owl.autoplay')
})


//Click listener for Video-Slider Thumnail
$('.main-image-container').click(function (event) {
  let src;
  flag = true
  videoSlider.trigger('stop.owl.autoplay')
  if (event.target.tagName == "DIV") {
    src = (event.target.getElementsByClassName('main-image')[0]).getAttribute("data-image");
  } else {
    src = (event.target).getAttribute('data-image')
  }

  videoView(src);
})


//videoView() having video link and set to video modal
function videoView(videoLink) {


  modalVideo.style.display = "block";
  videoPlayer.src = videoLink;

}


// When the user clicks on <span> (x), close the Video modal
spanVideo.onclick = function () {

  modalVideo.style.display = "none";
  videoPlayer.pause()
  flag = false
  videoSlider.trigger('play.owl.autoplay')

}