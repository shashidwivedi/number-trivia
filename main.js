const getTriviaBtn = document.getElementById("get-trivia-btn");
const triviaNumberInput = document.getElementById("trivia-number");
const triviaText = document.getElementById("trivia-text")

getTriviaBtn.addEventListener("click", getTrivia);

function getTrivia() {
  let triviaNumber = triviaNumberInput.value;
  let numbersURL = `http://numbersapi.com/${triviaNumber}?json`;

  if (triviaNumber) {

    fetch(numbersURL).then((response) => {
      console.log(numbersURL);
      return response.json();
    }).then((json) => {
      let trivia = json;
      console.log(trivia);
      triviaText.innerText = trivia.text;
    }).catch((err) => {
      console.log('Fetch problem: ' + err.message);
    })

  } else {

    triviaText.innerText = "Please enter a number in the above box";

  }

}

