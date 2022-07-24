document.querySelector("#plaVideo").addEventListener("click", playVideo);

function playVideo() {
  let onscreen = document.getElementById("vidOnScreen");
  onscreen.innerHTML = `<div id="del" onclick="stopVideo()">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <video width="820vw" height="540vw" controls autoplay>
          <source
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
            type="video/mp4"
          />
        </video>`;
}
function stopVideo() {
  let onscreen = document.getElementById("vidOnScreen");
  onscreen.innerHTML = null;
}

//navbar
let navbar = document.querySelector(".nav");
let menu = document.querySelector(".menu");
window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
    insert();
  } else {
    navbar.classList.remove("sticky");
    insert1();
  }
};

function insert() {
  let searchbar = document.querySelector(".searchbar");
  searchbar.innerHTML = `<input type="text" placeholder="What services are you looking for">
  <button><i class="fa-solid fa-magnifying-glass"></i></button>`;
  let logo = document.querySelector(".logo");
  logo.innerHTML = null;
  logo.innerHTML = `<svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>`;

  let list = document.querySelector("#product_append");
  list.innerHTML = `<div >
    <a href="">Graphics & Design</a>
    <a href="">Digital Marketing</a>
    <a href="">Writing & Translation</a>
    <a href="">Video & Animation</a>
    <a href="">Music & Audio</a>
    <a href="">Programming & Tech</a>
    <a href="">Business</a>
    <a href="">Lifestyle</a>
    <a href="">Tranding</a>    
  </div>`;
}
function insert1() {
  let searchbar = document.querySelector(".searchbar");
  searchbar.innerHTML = null;
  let logo = document.querySelector(".logo");
  logo.innerHTML = null;
  logo.innerHTML = `<svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#ffffff"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>`;
  let list = document.querySelector("#product_append");
  list.innerHTML = null;
}
//Slideshow using setInterval
let imgData = [
  "https://scontent.fdel12-1.fna.fbcdn.net/v/t39.30808-6/294315474_103983259066906_6602807832734292900_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=7BJHPzhELdQAX-MH7cQ&_nc_ht=scontent.fdel12-1.fna&oh=00_AT-SSGES2CgkK_VAp5fdOpbDlrWfJm6M5yUfVOt6gl86yA&oe=62DE5758",
  "https://scontent.fdel12-1.fna.fbcdn.net/v/t39.30808-6/294555234_103983265733572_5587503306512566994_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=UJiDoBACtlIAX8XG8dK&_nc_ht=scontent.fdel12-1.fna&oh=00_AT9mtxNEE4Cxglwcpm-a24Z6mHhP9m3vJD7im3BAcbGLFA&oe=62DDFB42",
  "https://scontent.fdel12-1.fna.fbcdn.net/v/t39.30808-6/295106970_103983272400238_3065240671420503316_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=DbwXqJL5K8oAX8jH0ll&_nc_ht=scontent.fdel12-1.fna&oh=00_AT8mAHy6gDVyQzQ9DcHessc1GnpophWol2EbnQVV2xh_5Q&oe=62DE9545",
  "https://scontent.fdel12-1.fna.fbcdn.net/v/t39.30808-6/294298576_103983269066905_1115171742859614918_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=pfucIsjtp1wAX-MuCHd&tn=fDyWP0GnUv8LQzj2&_nc_ht=scontent.fdel12-1.fna&oh=00_AT-nndl072eQYYrcWchBWXEjuEJbCaBN_eGXhAznuHRmyA&oe=62DDD958",
  "https://scontent.fdel12-1.fna.fbcdn.net/v/t39.30808-6/295088445_103983322400233_7205220773687619148_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=WeZYITMu_dcAX8mcaJg&_nc_ht=scontent.fdel12-1.fna&oh=00_AT9UJOyvJHm8_NNXeelwCCTPJGaecM2EtEcTZtgsmT4FLg&oe=62DE560A",
];

img_slideshow(imgData);
let i = 1;
function img_slideshow() {
  let slides = document.getElementById("img_slider");
  setInterval(function () {
    if (i == imgData.length) {
      i = 0;
    }
    let image = document.createElement("img");
    image.src = imgData[i];
    slides.innerHTML = null;
    slides.append(image);
    i++;
  }, 4000);
}

//   Popular professional services