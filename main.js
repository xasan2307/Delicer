// massala - 1
// let n = 5;
// function getSum(n) {
//   for (let i = 1; i < n; i++) {
//     console.log(i * (n - 1));
//   }
// }
// getSum(5);

//massala 4

// let unli = ["a", "u", "i", "o", "e", "o'"];
// let str = "gap kiriting";

// function gitDif() {
//   let arr = str.split(" ");
//   let lenUnli = 0;
//   let lenUndosh = 0;
//   arr.forEach((letter) => {
//     if (unli.includes(letter.toLowerCase())) {
//       console.log(letter);
//       lenUnli++;
//     } else {
//       lenUndosh++;
//     }
//   });
//   return lenUnli - lenUndosh;
// }
// console.log(gitDif());

//massala 5
// let arr = [1123, 1231, 23123, 3456787654];
// for (let item of arr) {
//   item = item.toString();
//   console.log(item, item.length);
// }

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
