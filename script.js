const submit = document.getElementById("submit");
const output = document.getElementById("output");
const outputContainer = document.getElementById('output-container');

submit.addEventListener("click", () => {
  let date1 = new Date(document.getElementById("date-1").value);
  let date2 = new Date(document.getElementById("date-2").value);

  if (date1.getTime() && date2.getTime()) {
    let timeDifference = date2.getTime() - date1.getTime();
    let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));

    outputContainer.style.background = '#198754';
    outputContainer.style.border = 'none';
    output.innerHTML = `Difference between the two dates is <span>${dayDifference}</span> days`;
  } else {
    outputContainer.style.background = '#dc3545';
    outputContainer.style.border = 'none';
    output.innerHTML = "Please select a valid date";
  }
});