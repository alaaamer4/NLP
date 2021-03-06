import "./styles/style.scss";
import { checkUrl } from "./js/checkURL";
const form = document.querySelector("#form");
const result = document.querySelector("#result");
const validateInput = (input) => {
  !checkUrl(input) && showError("this is not a valid url please try again");
  return checkUrl(input);
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = e.target.input.value;
  validateInput(url) && urlAnalysis(url);
  e.target.input.value = "";
});

const urlAnalysis = async (url) => {
  try {
    console.log(process.env.PORT);
    const response = await fetch(
      "http://localhost:3000/api/analyse?url=" + url
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    showResult(result);
  } catch (error) {
    console.log(error);
    showError(error);
  }
};

const showResult = (results) => {
  result.innerHTML = `
  <div class="wrapper">
  <h4>Form Results:</h4>
       <p id="text">model: ${results.model}</p>
          <p id="agreement">agreement: ${results.agreement}</p>
          <p id="subjectivity">subjectivity: ${results.subjectivity}</p>
          <p id="confidence">confidence: ${results.confidence}</p>
          <p id="irony">irony: ${results.irony}</p>
          <p id="score_tag">score tag: ${results.score_tag}</p>
          </div>
  `;
};

const showError = (error) => {
  result.innerHTML = `
  <div class="error">${error}</div>    
  `;
  setTimeout(() => {
    result.innerHTML = ``;
  }, 4000);
};
