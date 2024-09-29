let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let convertedTimeEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

convertBtnEl.addEventListener("click", function(event) {
    let hoursValue = hoursInputEl.value;
    let minutesValue = minutesInputEl.value;

    if (hoursValue === "") {
        convertedTimeEl.classList.add("d-none");
        errorMsgEl.textContent = "Please enter a valid number of hours";
    } else if (minutesValue === "") {
        convertedTimeEl.classList.add("d-none");
        errorMsgEl.textContent = "Please enter a valid number of minutes";
    } else {
        errorMsgEl.textContent = "";
        let timeInSeconds = (parseInt(hoursValue) * 3600 + parseInt(minutesValue) * 60);
        convertedTimeEl.classList.remove("d-none");
        convertedTimeEl.classList.add("errorMsg");
        
        convertedTimeEl.textContent = timeInSeconds + "s";
    }

})