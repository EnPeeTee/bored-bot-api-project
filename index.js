document.getElementById("to-do-get").addEventListener( "click", () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("to-do-title").textContent = `FunBot`;
            document.getElementById("to-do-activity").textContent = data.activity;
            document.body.classList.add("fun");
        });
});