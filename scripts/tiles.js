let services = {
    MinimalistLogoDesign: [
        {
            usrName: "studioawest",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img1.webp",
            level: "Level 2 Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller1.webp",
            quote: "I will do minimalist modern and business logo design",
            rating: 4.9,
            price: 2518
        },
        {
            usrName: "logoflow",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img2.webp",
            level: "Level 2 Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller2.webp",
            quote: "I will design 3 modern minimalist logo design in 24 hours",
            rating: 4.9,
            price: 250
        },
        {
            usrName: "tonyacconcia",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img3.webp",
            level: "Top Rated Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller3.webp",
            quote: "I will draw architectural plans in autocad 2d for your project",
            rating: 5.0,
            price: 2856
        },
        {
            usrName: "tonyacconcia",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img4.webp",
            level: "Top Rated Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller4.webp",
            quote: "I will draw architectural plans in autocad 2d for your project",
            rating: 5.0,
            price: 2518
        },
        {
            usrName: "tonyacconcia",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img5.webp",
            level: "Top Rated Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller5.webp",
            quote: "I will draw architectural plans in autocad 2d for your project",
            rating: 5.0,
            price: 2518
        },
        {
            usrName: "tonyacconcia",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img6.webp",
            level: "Top Rated Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller6.webp",
            quote: "I will draw architectural plans in autocad 2d for your project",
            rating: 5.0,
            price: 2518
        },
        {
            usrName: "tonyacconcia",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img6.webp",
            level: "Top Rated Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller6.webp",
            quote: "I will draw architectural plans in autocad 2d for your project",
            rating: 5.0,
            price: 2518
        },
        {
            usrName: "tonyacconcia",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img7.webp",
            level: "Top Rated Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller7.webp",
            quote: "I will draw architectural plans in autocad 2d for your project",
            rating: 5.0,
            price: 2518
        },
        {
            usrName: "tonyacconcia",
            tilePic: "/images/Graphics & Design/Minimalistic logo design/img8.webp",
            level: "Top Rated Seller",
            usrPic: "/images/Graphics & Design/Minimalistic logo design/seller8.webp",
            quote: "I will draw architectural plans in autocad 2d for your project",
            rating: 5.0,
            price: 2518
        },
    ]
};

let tilesContainer = document.querySelector("#tilesContainer");

function takeProduct(usrName, tilePic, level, usrPic, quote, rating, p) {
    let prodDetails = [];
    for(let i = 0; i < arguments.length; i++) {
        prodDetails.push(arguments[i]);
    }
    localStorage.setItem("prodDetails", JSON.stringify(prodDetails));
    window.location.href = "checkout.hml";
    console.log(prodDetails);
}

for(let i = 0; i < services.MinimalistLogoDesign.length; i++) {
    let usrName = services.MinimalistLogoDesign[i].usrName;
    let tilePic = services.MinimalistLogoDesign[i].tilePic;
    let level = services.MinimalistLogoDesign[i].level;
    let usrPic = services.MinimalistLogoDesign[i].usrPic;
    let quote = services.MinimalistLogoDesign[i].quote;
    let rating = services.MinimalistLogoDesign[i].rating;
    let p = services.MinimalistLogoDesign[i].price;
        // <div class="tiles">
            let tiles = document.createElement("div");
            tiles.className = "tiles";
            // <img src="/images/Graphics & Design/Minimalistic logo design/img9.webp" class="tileImg">
            let tileImg = document.createElement("img");
            tileImg.className = "tileImg";
            tileImg.addEventListener("click", () => {
                takeProduct(usrName, tilePic, level, usrPic, quote, rating, p);
            });
            tileImg.src = services.MinimalistLogoDesign[i].tilePic;
            // <div class="sellerThumb">
                let sellerThumb = document.createElement("div");
                sellerThumb.className = "sellerThumb";
                // <img src="/images/Graphics & Design/Minimalistic logo design/seller9.webp" class="sellerPic">
                let sellerPic = document.createElement("img");
                sellerPic.className = "sellerPic";
                sellerPic.src = services.MinimalistLogoDesign[i].usrPic;

                // <div class="sellerThumbSub">
                    let sellerThumbSub = document.createElement("div");
                    sellerThumbSub.className = "sellerThumbSub";
                    // <p class="sellerUsername">tonyacconcia</p>
                    let sellerUsername = document.createElement("p");
                    sellerUsername.className = "sellerUsername";
                    sellerUsername.innerText = services.MinimalistLogoDesign[i].usrName;
                    // <p class="sellerLevel">Top Rated Seller</p>
                    let sellerLevel = document.createElement("p");
                    sellerLevel.className = "sellerLevel";
                    sellerLevel.innerText = services.MinimalistLogoDesign[i].level;
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
                sellerQuote.innerText = services.MinimalistLogoDesign[i].quote;
                sellerQuote.addEventListener("click", () => {
                    takeProduct(usrName, tilePic, level, usrPic, quote, rating, p);
                });
                // <p class="sellerRating">5.0</p>
                let sellerRating = document.createElement("p");
                sellerRating.className = "sellerRating";
                sellerRating.innerHTML = '<span class="material-symbols-outlined">star</span>' + services.MinimalistLogoDesign[i].rating;
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
                    price.innerHTML = '<span class="material-symbols-outlined">currency_rupee</span>' + services.MinimalistLogoDesign[i].price;
                    priceContainer.append(startingAt, price);
                // </div>

              sellerWishNPriceContainer.append(sellerWishListIcon, priceContainer);
            // </div>

          tiles.append(tileImg, sellerThumb, sellerDescContainer, sellerWishNPriceContainer);
          tilesContainer.append(tiles);
        // </div>
    }