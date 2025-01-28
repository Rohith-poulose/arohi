const five = document.getElementsByClassName("five")[0];
const five_1 = document.getElementsByClassName("five_1")[0];
const five_2 = document.getElementsByClassName("five_2")[0];
const five_3 = document.getElementsByClassName("five_3")[0];
const five_4 = document.getElementsByClassName("five_4")[0];
const five_5 = document.getElementsByClassName("five_5")[0];
const five_6 = document.getElementsByClassName("five_6")[0];
const wish_msg = document.getElementById("wish_msg");
const wish_p = document.getElementById("wish_p");
const wish_ans = document.getElementById("wish_ans");
const btn4 = document.getElementById("btn4");
btns = document.getElementsByClassName("btns")[0];
document.getElementById('Buttonfive').addEventListener('click', showfive);

function showfive() {
    let pass = window.prompt("Enter the password");
    if (pass === "hello mr arohi") {
        five.style.display = "block";
        btns.style.display = "none"
    } else {
        navigator.vibrate(200); // Vibrate for 200ms
        navigator.vibrate([1200, 100, 500, 100, 300]);
        document.body.classList.add("error");
        setTimeout(() => {
            document.body.classList.remove("error");
        }, 2000);
    }
}
function showfive_2() {
    five_2.style.display = "block";
    five_1.style.display = "none";
}
function showfive_3() {
    five_3.style.display = "block";
    five_2.style.display = "none";
}
function showfive_4() {
    five_4.style.display = "block";
    five_3.style.display = "none";

    if (wish_msg.value === "arsha" || wish_msg.value === "Arsha") {
        wish_ans.innerHTML = "I LOVE YOU";
        wish_p.innerHTML = "right answer";
        wish_p.style.color = "green";
    } else {
        // Show error message after 2 seconds
        wish_ans.innerHTML = wish_msg.value;
        wish_p.innerHTML = "wrong answer";
        wish_p.style.color = "red";
        setTimeout(() => {

            // Switch back to five_3 after showing the error message
            five_4.style.display = "none";
            five_3.style.display = "block";
        }, 2000);
    }
}

function showfive_5() {
    five_5.style.display = "block";
    five_4.style.display = "none";
}
function showfive_6() {
    five_6.style.display = "block";
    five_5.style.display = "none";
}


const scriptURL =
    "https://script.google.com/macros/s/AKfycbyNGVxcdiJoKQy_sj87enPPTXK1ZBvsKL4H0VEzpDDZETtaqDDGLcbbAm-dw2PxT9VPFg/exec";
let form = document.forms["google-sheet"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            alert("Done: Submitted Successfully.");
        })
        .catch((error) => {
            alert("Error: Something went wrong. Please try again.");
        });
});