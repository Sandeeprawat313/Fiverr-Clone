let tilesContainer = document.querySelector("#tilesContainer");
let headContainer = document.querySelector("#headContainer");
getData();


let serviceDetails = function(a, b, c, d, e, f, g) {
    this.usrName = a,
    this.tilePic = b,
    this.level = c,
    this.usrPic = d,
    this.quote = e
    this.rating = f,
    this.price = g
}

function takeProduct(usrName, tilePic, level, usrPic, quote, rating, p) {
let service = new serviceDetails(usrName, tilePic, level, usrPic, quote, rating, p);
localStorage.setItem("productDetails", JSON.stringify(service));
window.location.href = "/checkOut.html";
}

async function getData() {
    let url = "/api/fiverrCloneAPI.json";
    url = await fetch(url);
    url = url.json();
    url = await url;
    appendData(url);
}

function appendData(obj) {
    let services = obj.services;
    let data, headingData, headDescData, headSubCatImgData, subCatNameData, pathData;
    for(let i = 0; i < services.length; i++) {
        if(services[i].minimalLogoDesign == true) {
            headingData = services[i].heading;
            headDescData = services[i].headDesc;
            headSubCatImgData = services[i].headSubCatImg;
            subCatNameData = services[i].subCatName;
            data = services[i].data;
            pathData = services[i].path;
            // console.log(headingData, headDescData, headSubCatImgData, subCatNameData, pathData);
            // <div id="path">FIVERR > DIGITAL MARKETING ></div>
            let path = document.createElement("div");
            path.innerText =  pathData;
            path.id = "path";
            // <div id="headingNDesc">
            let headingNDesc = document.createElement("div");
            headingNDesc.id = "headingNDesc";
            // <h1>Video Marketing</h1>
            let heading = document.createElement("h1");
            heading.innerText = headingData;
            heading.id = "heading";
            // <p>Target the right audience and get better results with the help of video marketing freelancers.
            let headDesc = document.createElement("p");
            headDesc.innerText = headDescData;
            headDesc.id = "headDesc";
            // <a href="#" onclick="showPopUp()">How Fiverr Works</a></p>
            headingNDesc.append(heading, headDesc);
            // </div>
            // <div id="headSubCat">
            let headSubCat = document.createElement("div");
            headSubCat.id = "headSubCat";

            for(let j = 0; j < headSubCatImgData.length; j++) {
                            // <div class="headSubCatBoxes">
            let headSubCatBoxes = document.createElement("div");
            headSubCatBoxes.className = "headSubCatBoxes";
            // <img src="/images/Graphics & Design/Digital Marketing/icons/1.svg">
            let headSubCatImg = document.createElement("img");
            headSubCatImg.className = "subCatImg";
            headSubCatImg.src = headSubCatImgData[j];
            // <p>Video Promotion and Distribution</p>
            let headSubCatTitle = document.createElement("p");
            headSubCatTitle.className = "headSubCatTitle";
            headSubCatTitle.innerText = subCatNameData[j];
            headSubCatBoxes.append(headSubCatImg, headSubCatTitle);
            // </div>

            

           
                       headSubCat.append(headSubCatBoxes);
            }
                   // </div>
                   headContainer.append(path, headingNDesc, headSubCat)





        }
        for(let i = 0; i < data.length; i++) {
            let usrName = data[i].usrName;
            let tilePic = data[i].tilePic;
            let level = data[i].level;
            let usrPic = data[i].usrPic;
            let quote = data[i].quote;
            let rating = data[i].rating;
            let p = data[i].price;
            





            // <div class="tiles">
            let tiles = document.createElement("div");
            tiles.className = "tiles";
            // <img src="/images/Graphics & Design/Minimalistic logo design/img9.webp" class="tileImg">
            let tileImg = document.createElement("img");
            tileImg.className = "tileImg";
            tileImg.addEventListener("click", () => {
                takeProduct(usrName, tilePic, level, usrPic, quote, rating, p);
            });
        // tileImg.src = services.MinimalistLogoDesign[i].tilePic;
        tileImg.src = tilePic;
        // <div class="sellerThumb">
        let sellerThumb = document.createElement("div");
        sellerThumb.className = "sellerThumb";
        // <img src="/images/Graphics & Design/Minimalistic logo design/seller9.webp" class="sellerPic">
        let sellerPic = document.createElement("img");
        sellerPic.className = "sellerPic";
        // sellerPic.src = services.MinimalistLogoDesign[i].usrPic;
        sellerPic.src = usrPic;
        // <div class="sellerThumbSub">
        let sellerThumbSub = document.createElement("div");
        sellerThumbSub.className = "sellerThumbSub";
        // <p class="sellerUsername">tonyacconcia</p>
        let sellerUsername = document.createElement("p");
        sellerUsername.className = "sellerUsername";
                // sellerUsername.innerText = services.MinimalistLogoDesign[i].usrName;
                
                sellerUsername.innerText = usrName;
                // <p class="sellerLevel">Top Rated Seller</p>
                let sellerLevel = document.createElement("p");
                sellerLevel.className = "sellerLevel";
                // sellerLevel.innerText = services.MinimalistLogoDesign[i].level;
                sellerLevel.innerText = level;
                sellerThumbSub.append(sellerUsername, sellerLevel);
            // </div> 
            sellerThumb.append(sellerPic, sellerThumbSub);
        // </div>

        // <div class="sellerDescContainer">
            let sellerDescContainer = document.createElement("div");
            sellerDescContainer.className = "sellerDescContainer";

            // <p class="sellerQuote">I will draw architectural plans in autocad 2d for your project</p>
            let sellerQuote = document.createElement("p");
            sellerQuote.className = "sellerQuote";
            // sellerQuote.innerText = services.MinimalistLogoDesign[i].quote;
            sellerQuote.innerText = quote;
            sellerQuote.addEventListener("click", () => {
                takeProduct(usrName, tilePic, level, usrPic, quote, rating, p);
            });
            // <p class="sellerRating">5.0</p>
            let sellerRating = document.createElement("p");
            sellerRating.className = "sellerRating";
            sellerRating.innerHTML = '<span class="material-symbols-outlined">star</span>' + rating;
            sellerDescContainer.append(sellerQuote, sellerRating);
        // </div>

        // <div class="sellerWishNPriceContainer">
            let sellerWishNPriceContainer = document.createElement("div");
            sellerWishNPriceContainer.className = "sellerWishNPriceContainer";
            // <div class="sellerWishlistIcon">
                let sellerWishListIcon = document.createElement("div");
                sellerWishListIcon.className = "sellerWishListIcon";
                sellerWishListIcon.innerHTML = '<span class="material-symbols-outlined wishListIcon">favorite</span>';
            // </div>

            // <div class="priceContainer">
                let priceContainer = document.createElement("div");
                priceContainer.className = "priceContainer";
                priceContainer.addEventListener("click", () => {
                    takeProduct(usrName, tilePic, level, usrPic, quote, rating, p);
                });
                // <p>STARTING AT</p>
                let startingAt = document.createElement("p");
                startingAt.innerText = "STARTING AT";
                startingAt.className = "startingAt";
                // <p>Rs.2,518/-</p>
                let price = document.createElement("p");
                price.id = "priceVal";
                price.innerHTML = '<span class="material-symbols-outlined">currency_rupee</span>' + p; //p means price here
                priceContainer.append(startingAt, price);
            // </div>

          sellerWishNPriceContainer.append(sellerWishListIcon, priceContainer);
        // </div>

      tiles.append(tileImg, sellerThumb, sellerDescContainer, sellerWishNPriceContainer);
      tilesContainer.append(tiles);
    // </div>
}
    
    }
}
for(let i = 0; i < data.length; i++) {

    let usrName = data[i].usrName;
    let tilePic = data[i].tilePic;
    let level = data[i].level;
    let usrPic = data[i].usrPic;
    let quote = data[i].quote;
    let rating = data[i].rating;
    let p = data[i].price;
        // <div class="tiles">
            let tiles = document.createElement("div");
            tiles.className = "tiles";
            // <img src="/images/Graphics & Design/Minimalistic logo design/img9.webp" class="tileImg">
            let tileImg = document.createElement("img");
            tileImg.className = "tileImg";
            tileImg.addEventListener("click", () => {
                takeProduct(usrName, tilePic, level, usrPic, quote, rating, p);
            });
            // tileImg.src = services.MinimalistLogoDesign[i].tilePic;
            
            tileImg.src = tilePic;
            // <div class="sellerThumb">
                let sellerThumb = document.createElement("div");
                sellerThumb.className = "sellerThumb";
                // <img src="/images/Graphics & Design/Minimalistic logo design/seller9.webp" class="sellerPic">
                let sellerPic = document.createElement("img");
                sellerPic.className = "sellerPic";
                // sellerPic.src = services.MinimalistLogoDesign[i].usrPic;
                
                sellerPic.src = usrPic;

                // <div class="sellerThumbSub">
                    let sellerThumbSub = document.createElement("div");
                    sellerThumbSub.className = "sellerThumbSub";
                    // <p class="sellerUsername">tonyacconcia</p>
                    let sellerUsername = document.createElement("p");
                    sellerUsername.className = "sellerUsername";
                    // sellerUsername.innerText = services.MinimalistLogoDesign[i].usrName;
                    
                    sellerUsername.innerText = usrName;
                    // <p class="sellerLevel">Top Rated Seller</p>
                    let sellerLevel = document.createElement("p");
                    sellerLevel.className = "sellerLevel";
                    // sellerLevel.innerText = services.MinimalistLogoDesign[i].level;
                    sellerLevel.innerText = level;
                    sellerThumbSub.append(sellerUsername, sellerLevel);
                // </div> 
                sellerThumb.append(sellerPic, sellerThumbSub);
            // </div>

            // <div class="sellerDescContainer">
                let sellerDescContainer = document.createElement("div");
                sellerDescContainer.className = "sellerDescContainer";

                // <p class="sellerQuote">I will draw architectural plans in autocad 2d for your project</p>
                let sellerQuote = document.createElement("p");
                sellerQuote.className = "sellerQuote";
                // sellerQuote.innerText = services.MinimalistLogoDesign[i].quote;
                sellerQuote.innerText = quote;
                sellerQuote.addEventListener("click", () => {
                    takeProduct(usrName, tilePic, level, usrPic, quote, rating, p);
                });
                // <p class="sellerRating">5.0</p>
                let sellerRating = document.createElement("p");
                sellerRating.className = "sellerRating";
                sellerRating.innerHTML = '<span class="material-symbols-outlined">star</span>' + rating;
                sellerDescContainer.append(sellerQuote, sellerRating);
            // </div>

            // <div class="sellerWishNPriceContainer">
                let sellerWishNPriceContainer = document.createElement("div");
                sellerWishNPriceContainer.className = "sellerWishNPriceContainer";
                // <div class="sellerWishlistIcon">
                    let sellerWishListIcon = document.createElement("div");
                    sellerWishListIcon.className = "sellerWishListIcon";
                    sellerWishListIcon.innerHTML = '<span class="material-symbols-outlined wishListIcon">favorite</span>';
                // </div>

                // <div class="priceContainer">
                    let priceContainer = document.createElement("div");
                    priceContainer.className = "priceContainer";
                    priceContainer.addEventListener("click", () => {
                        takeProduct(usrName, tilePic, level, usrPic, quote, rating, p);
                    });
                    // <p>STARTING AT</p>
                    let startingAt = document.createElement("p");
                    startingAt.innerText = "STARTING AT";
                    startingAt.className = "startingAt";
                    // <p>Rs.2,518/-</p>
                    let price = document.createElement("p");
                    price.id = "priceVal";
                    price.innerHTML = '<span class="material-symbols-outlined">currency_rupee</span>' + p; //p means price here
                    priceContainer.append(startingAt, price);
                // </div>

              sellerWishNPriceContainer.append(sellerWishListIcon, priceContainer);
            // </div>

          tiles.append(tileImg, sellerThumb, sellerDescContainer, sellerWishNPriceContainer);
          tilesContainer.append(tiles);
        // </div>
    }


