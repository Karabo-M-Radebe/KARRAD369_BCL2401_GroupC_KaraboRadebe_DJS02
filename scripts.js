/*const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const {dividend, divider} = Object.fromEntries(entries);
  const wholeNumberResult = Math.floor(dividend/divider);
  result.innerText = wholeNumberResult;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const {dividend, divider} = Object.fromEntries(entries);
  function blankResult() {
   result.innerText = "Division not performed. Both values are required in inputs. Try again"
  }
  if (dividend === "" || divider === "") {
    blankResult();
  }
});

 form.addEventListener("submit", (event) => {
   event.preventDefault();
   const entries = new FormData(event.target);
   const {dividend, divider} = Object.fromEntries(entries);
   function zeroError() {
     result.innerText = "Division not performed. Invalid number provided. Try again"
   };

     if ( divider === "0") {
     zeroError();
     throw new Error("Division by zero")
   } 
 });

 form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const {dividend, divider} = Object.fromEntries(entries);
  function stringError () {
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    console.error(new Error("The provided input was not a number"));

  }
  if (isNaN(dividend) || isNaN(divider)) {
    stringError();
  }
 });*/



 // Refactored code
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
 
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
 
  function blankResult() {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again';
  }
 
  function zeroError() {
    result.innerText = 'Division not performed. Invalid number provided. Try again';
  }
 
  function stringError() {
    document.body.innerHTML = 'Something critical went wrong. Please reload the page';
    console.error(new Error('Input is not a number'));
  }
 
  if (dividend === '' || divider === '') {
    blankResult();
  } else if (divider === '0') {
    zeroError();
    throw new Error ('Division by zero');
  } else if (isNaN(dividend) || isNaN(divider)) {
    stringError();
  } else {
    const wholeNumberResult = Math.floor(dividend/divider);
    result.innerText = wholeNumberResult;
  }
});
