// EcoTrack Phase-I JavaScript

const wasteResults = {
    food: {
        category: "Wet Waste",
        message: "Put food waste in the wet waste bin or use suitable food waste for composting."
    },
    paper: {
        category: "Dry / Recyclable Waste",
        message: "Keep paper clean and dry and send it for recycling."
    },
    plastic: {
        category: "Plastic / Dry Waste",
        message: "Clean the plastic bottle and send it to an appropriate recycling channel."
    },
    glass: {
        category: "Glass Waste",
        message: "Separate glass carefully and send it for glass recycling."
    },
    ewaste: {
        category: "E-Waste",
        message: "Do not put electronics in normal bins. Use an authorized e-waste collection point."
    },
    battery: {
        category: "Battery Waste",
        message: "Do not throw batteries in regular waste. Use a suitable battery collection point."
    }
};

function checkWaste() {
    const select = document.getElementById("wasteSelect");
    const resultBox = document.getElementById("resultBox");
    const value = select.value;

    resultBox.classList.remove("d-none");

    if (value === "") {
        resultBox.innerHTML = "<strong>Please select a waste item first.</strong>";
        return;
    }

    const result = wasteResults[value];

    resultBox.innerHTML = `
        <h5>Recommended Category: ${result.category}</h5>
        <p class="mb-0">${result.message}</p>
    `;
}

const reportForm = document.getElementById("reportForm");

if (reportForm) {
    reportForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const msg = document.getElementById("reportMessage");

        msg.classList.remove("d-none");
        reportForm.reset();

        setTimeout(function() {
            msg.classList.add("d-none");
        }, 4000);
    });
}
