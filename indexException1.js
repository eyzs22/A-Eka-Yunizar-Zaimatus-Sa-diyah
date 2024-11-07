function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");