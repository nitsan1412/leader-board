let babiesArray = [
  { img: "/Eitan.jpeg", player: "Eiten Levit", points: 999 },
  { img: "/bunny.jpg", player: "Baby Bunny", points: 300 },
  { img: "/chicken.jpg", player: "Baby Chicken", points: 298 },
  { img: "/boss.jpg", player: "Baby Boss", points: 292 },
  { img: "/shark.png", player: "Baby Shark", points: 290 },
];
let div;
let divImg;
let img;
let points;
let divPoints;
let player;
let divPlayer;
let board = document.querySelector(".board");
let flag = ["", "", 0]; //    [player,like/dis,number]

const displayPlayers = (babiesArray) => {
  board.innerText = "";
  for (let i = 0; i < babiesArray.length; i++) {
    div = document.createElement("div");
    div.className = "row";
    divImg = document.createElement("div");
    divImg.className = "col";
    divPoints = document.createElement("div");
    divPoints.className = "col";
    divPlayer = document.createElement("div");
    divPlayer.className = "col";
    img = document.createElement("img");
    img.src = babiesArray[i].img;
    // img.className = "col";
    player = document.createElement("span");
    player.innerText = babiesArray[i].player;
    player.className = "player";
    divPlayer.className = "col";
    points = document.createElement("span");
    points.innerText = babiesArray[i].points;
    points.className = "score";
    divPoints.className = "points col";
    board.appendChild(div);
    div.appendChild(divImg);
    divImg.appendChild(img);
    div.appendChild(divPlayer);
    divPlayer.appendChild(player);
    div.appendChild(divPoints);
    divPoints.appendChild(points);

    // console.log(babiesArray[i].player);
  }
};

displayPlayers(babiesArray);
const form = document.querySelector("form");
const selectForm = document.querySelector("#babies");
let likeBtn = document.querySelector("#like");
let disLikeBtn = document.querySelector("#dislike");

likeBtn.onclick = () => {
  event.preventDefault();
  let chosen = selectForm.value;
  if (checkFlag(chosen, "like")) {
    // console.log(chosen);
    for (let index = 0; index < babiesArray.length; index++) {
      if (babiesArray[index].player === chosen) {
        babiesArray[index].points++;
        comparePoints(index);
      }
    }
    displayPlayers(babiesArray);
  }
};

disLikeBtn.onclick = () => {
  event.preventDefault();
  let chosen = selectForm.value;
  if (checkFlag(chosen, "dislike")) {
    // console.log(chosen);
    for (let index = 0; index < babiesArray.length; index++) {
      if (babiesArray[index].player === chosen) {
        babiesArray[index].points--;
        console.log(babiesArray[index].points);
      }
    }
    comparePoints();
    displayPlayers(babiesArray);
  }
};
// console.log(chosen);
const comparePoints = () => {
  babiesArray.sort(function (a, b) {
    return b.points - a.points;
  });
};

checkFlag = (player, button) => {
  if (flag[0] == player && flag[1] == button) {
    flag[2]++;
  } else {
    flag[0] = player;
    flag[1] = button;
    flag[2] = 0;
  }
  console.log(flag[2]);
  if (flag[2] > 4) {
    return false;
  } else {
    return true;
  }
};
