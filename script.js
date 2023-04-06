// const AUTH_KEY = "146811582440391135737x64355 ";

// const whereAmI = function (lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${AUTH_KEY}`)
//         .then((response) => {
//             if (!response.ok)
//                 throw new Error(`Problem with geocoding, ${response.status}`);
//             return response.json();
//         })
//         .then((data) =>
//             console.log(
//                 `You are in ${
//                     data.city.charAt(0).toUpperCase() +
//                     data.city.slice(1).toLowerCase()
//                 }, ${data.country}`
//             )
//         )
//         .catch((err) => console.log(err.message));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//PROMISES
// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log("Lottery is happening!");
//     setTimeout(function () {
//         if (Math.random() > 0.5) resolve("I win");
//         else reject(new Error("I lost"));
//     }, 2000);
// });
// lotteryPromise.then((res) => console.log(res)).catch((rej) => console.log(rej));

// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };

// wait(1)
//     .then(() => {
//         console.log("Waited for 1second");
//         return wait(1);
//     })
//     .then(() => {
//         console.log("Waited for 2second");
//         return wait(1);
//     })
//     .then(() => {
//         console.log("Waited for 3second");
//         return wait(1);
//     })
//     .then(() => {
//         console.log("Waited for 4second");
//         return wait(1);
//     });

//Geolocation API

// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => resolve(position),
//         //     err => reject(err)
//         // )
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };
// getPosition().then((pos) => console.log(pos));

//Code Challenge 2

const wait = function () {
    return new Promise(function (resolve) {
        setTimeout(resolve, 2000);
    });
};

const imgContainer = document.querySelector(".image-container");
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement("img");
        img.src = imgPath;
        console.log("img path: " + img.src);
        img.addEventListener("load", function () {
            imgContainer.append(img);
            console.log("image element" + img);

            resolve(img);
        });
        img.addEventListener("error", function () {
            reject(new Error("Image not loaded!"));
        });
    });
};
let currentImg;
createImage("/img/img-1.jpg")
    .then((img) => {
        currentImg = img;
        console.log("Image loaded");
        return wait();
    })
    .then(() => {
        console.log("displaying none");
        currentImg.style.display = "none";
        return wait();
    })
    .then(() => {
        console.log("displaying img");
        return createImage("/img/img-2.jpg");
    })
    .then((img) => {
        currentImg = img;
        console.log("second image: " + currentImg);

        console.log("Image loaded");
        return wait();
    })
    .then(() => {
        console.log("displaying none");
        currentImg.style.display = "none";
    })
    .catch((err) => console.log(err));

setTimeout(function () {
    console.log("1 secind passes.");
    setTimeout(function () {
        console.log("2 secind passes.");
        setTimeout(function () {
            console.log("1 secind passes.");
            setTimeout(function () {
                console.log("1 secind passes.");
                setTimeout();
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
