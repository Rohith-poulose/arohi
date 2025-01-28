const five = document.getElementsByClassName("five")[0];
const five_1 = document.getElementsByClassName("five_1")[0];
const five_2 = document.getElementsByClassName("five_2")[0];
const five_3 = document.getElementsByClassName("five_3")[0];
const five_4 = document.getElementsByClassName("five_4")[0];
const five_5 = document.getElementsByClassName("five_5")[0];
const five_6 = document.getElementsByClassName("five_6")[0];
const wish_msg = document.getElementById("wish_msg");
const wish_ans = document.getElementById("wish_ans");

function showfive() {
    let pass = window.prompt("enter the password")
    if (pass == "hello mr arohi") {
        five.style.display = "block"
        btns.style.display = "none"
    }
    else {
        navigator.vibrate(200); // vibrate for 200ms
        navigator.vibrate([
            1200, 100, 500, 100, 300
        ]);
        document.body.classList.add("error")
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
    wish_ans.innerHTML = wish_msg.value;
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
      const form = document.forms["google-sheet"];
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        var formData = new FormData(form);
        var ex = document.getElementById("ex").checked;
        var age = document.getElementById("age").checked;

        if (age) {
          formData.append("age", "Yes");
        } else {
          formData.append("age", "No");
        }
        if (ex) {
          formData.append("ex", "Yes");
        } else {
          formData.append("ex", "No");
        }

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
          })
          .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
          });
      });