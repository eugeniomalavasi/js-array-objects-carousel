const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

let imgContainer = document.querySelector(".my-carousel-images");
images.forEach((curObj, index) => {
  console.log(curObj.image);
  imgContainer.innerHTML +=
    `
  <div class="my-carousel-item" carousel-item="1">
                  <img
                    class="img-fluid"
                    src="./${curObj.image}"
                    alt=${curObj.text + "picture"}
                  />
                  <div class="item-description px-3">
                    <h2>Marvel's Spiderman Miles Morale</h2>
                    <p>
                    ${curObj.text}
                    </p>
                  </div>
                </div>
`
})

const nextBtn = document.getElementById("next_btn").addEventListener("click", activeObj)

const allCards = document.querySelectorAll(".my-carousel-item");
let activeImg = 0;
allCards[activeImg].classList.add("active")

function activeObj() {
  allCards[activeImg].classList.remove("active");
  if (activeImg < images.length - 1) {
  activeImg++;
  } else {
    activeImg = 0;
  }
  allCards[activeImg].classList.add("active");
}