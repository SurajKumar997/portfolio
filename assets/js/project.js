/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Conservation Of Fossil Fuels",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "",
    tag: "PPT",
    Previewlink: "https://docs.google.com/presentation/d/15F75QMVq4xLVkpNI7_fViSdLTt_sUxPd/edit#slide=id.p1",
    Githublink: "",
  },
  {
    title: "AIL Say No To Plastics Social Studies",
    cardImage: "assets/images/project-page/chess.jpg",
    description: "",
    tag: "PPT",
    Previewlink: "https://docs.google.com/presentation/d/1keVtqZwCBaGTFtcqCRhPWFChEwi5U-_0/edit#slide=id.p1",
    Githublink: "",
  },
  {
    title: "MATHS AIL PROJECT",
    cardImage: "assets/images/project-page/flappybird.png",
    description: "",
    tag: "PPT",
    Previewlink: "https://docs.google.com/presentation/d/1kLJJwxPR5rToya2BfTEtPHepoXEz2sGT/edit#slide=id.p1",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/exercise.jpg",
    description: "Exercise tracker built using basic redux.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/poker.jpg",
    description: "Poker game built using typescript.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description:
      "Minesweeper Game built using python Object Oriented Programming.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/battery.png",
    description: "Built battery life calculator using Python.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description: "Built using Tensorflow.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Coming Soon",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Python.",
    tag: "Coming Soon",
    Previewlink: "",
    Githublink: "",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tag, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="${Previewlink}" target = "_blank" rel = "noopener noreferrer">${title}</a></h1>
            </div>
            <div class="searchdiv"><button class="tagbutton">${tag}</button></div>
            <ul class="menu-content"><br>
              <li><a href="${Previewlink}" class="social-icon"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  button = document.getElementsByClassName("tagbutton");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
