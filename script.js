async function fetchThreatData() {
    try {
        const response = await fetch("http://127.0.0.1:8000/");
        const data = await response.json();

        const statusElement = document.getElementById("status");
        const threatElement = document.getElementById("threat");
        const timeElement = document.getElementById("time");

        statusElement.innerText = data.status;
        threatElement.innerText = data.threat || "No Threat";
        timeElement.innerText = data.time;

        if (data.status === "ALERT") {
            statusElement.className = "alert";
        } else {
            statusElement.className = "safe";
        }

    } catch (error) {
        document.getElementById("status").innerText = "Backend Not Connected";
    }
}

fetchThreatData();
setInterval(fetchThreatData, 5000);
