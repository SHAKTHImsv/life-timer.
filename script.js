let dateOfBirth;

const dobInputEl = document.getElementById("dobInput");
const dobButtonEl = document.getElementById("dobButton");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
};

const updateAge = () => {
    if (!dateOfBirth) return;

    const currentDate = new Date();
    const totalSeconds = Math.floor((currentDate - dateOfBirth) / 1000);
    
    const year = Math.floor(totalSeconds / (365.25 * 24 * 60 * 60));
    const month = Math.floor((totalSeconds % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60));
    const day = Math.floor((totalSeconds % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hour = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minute = Math.floor((totalSeconds % 3600) / 60);
    const second = totalSeconds % 60;

    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month);
    dayEl.innerHTML = makeTwoDigitNumber(day);
    hourEl.innerHTML = makeTwoDigitNumber(hour);
    minuteEl.innerHTML = makeTwoDigitNumber(minute);
    secondEl.innerHTML = makeTwoDigitNumber(second);
};

const setDOBHandler = () => {
    const dateString = dobInputEl.value;

    if (dateString) {
        dateOfBirth = new Date(dateString);
        initialTextEl.classList.add("hide");
        afterDOBBtnTxtEl.classList.remove("hide");
        updateAge(); // Update immediately
        setInterval(updateAge, 1000); // Start the timer
    } else {
        alert("Please enter a valid date of birth.");
    }
};

dobButtonEl.addEventListener("click", setDOBHandler);
