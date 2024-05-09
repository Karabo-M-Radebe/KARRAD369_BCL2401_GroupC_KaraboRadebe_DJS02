const form = document.querySelector("[data-form]");
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
})
