const first = document.getElementsByClassName("first")[0];
const yeah = document.getElementsByClassName("yeah")[0];
const magic = document.getElementsByClassName("magic")[0];
const mix = document.getElementsByClassName("mix")[0];
const video = document.getElementsByClassName("video")[0];
const nahMessage = document.getElementById("nahMessage");
const p2 = document.getElementsByClassName("p2")[0];
const p3 = document.getElementsByClassName("p3")[0];
const p4 = document.getElementsByClassName("p4")[0];
const p5 = document.getElementsByClassName("p5")[0];
const p6 = document.getElementsByClassName("p6")[0];
const p7 = document.getElementsByClassName("p7")[0];
const p8 = document.getElementsByClassName("p8")[0];
const p9 = document.getElementsByClassName("p9")[0];
const p10 = document.getElementsByClassName("p10")[0];
const p11 = document.getElementsByClassName("p11")[0];
const b1 = document.getElementsByClassName("b1")[0];
const b2 = document.getElementsByClassName("b2")[0];
const b3 = document.getElementsByClassName("b3")[0];
const b4 = document.getElementsByClassName("b4")[0];
const b5 = document.getElementsByClassName("b5")[0];
const b6 = document.getElementsByClassName("b6")[0];
const b7 = document.getElementsByClassName("b7")[0];
const b8 = document.getElementsByClassName("b8")[0];
const b9 = document.getElementsByClassName("b9")[0];
const b10 = document.getElementsByClassName("b10")[0];
const b11 = document.getElementsByClassName("b11")[0];
const product = document.getElementsByClassName("product")[0];
const footage = document.getElementsByClassName("footage")[0];
const message = document.getElementsByClassName("message")[0];
const clip = document.getElementsByClassName("clip")[0];
const content = document.getElementsByClassName("content")[0];
const one = document.getElementsByClassName("one")[0];
const two = document.getElementsByClassName("two")[0];
const three = document.getElementsByClassName("three")[0];
const btns = document.getElementsByClassName("btns")[0];
const container = document.getElementsByClassName("container")[0];
const five=document.getElementsByClassName("five")[0];
const five_1=document.getElementsByClassName("five_1")[0];
const five_2=document.getElementsByClassName("five_2")[0];
const five_3=document.getElementsByClassName("five_3")[0];
const five_4=document.getElementsByClassName("five_4")[0];
const five_5=document.getElementsByClassName("five_5")[0];
const five_6=document.getElementsByClassName("five_6")[0];
function showone() {
    let pass = window.prompt("enter the password")
    if (pass == "hello mr arohi") {
        one.style.display = "block"
        btns.style.display = "none"
    }
    else {
        navigator.vibrate(200); // vibrate for 200ms
        navigator.vibrate([
            200, 100, 500, 100, 300
        ]);
        document.body.classList.add("error")
        setTimeout(() => {
            document.body.classList.remove("error");
        }, 2000);
    }

}
function showtwo() {
    let pass = window.prompt("enter the password")
    if (pass == "hello mr arohi") {
        two.style.display = "block"
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

function showthree() {
    let pass = window.prompt("enter the password")
    if (pass == "hello mr arohi") {
        three.style.display = "block"
        btns.style.display = "none"
    }
    else {
        navigator.vibrate(200); // vibrate for 200ms
        navigator.vibrate([
            200, 100, 500, 100, 300
        ]);
        document.body.classList.add("error")
        setTimeout(() => {
            document.body.classList.remove("error");
        }, 2000);
    }
}

function showYeah() {
    yeah.style.display = "block";
    first.style.display = "none";
}

function showNah() {
    nahMessage.style.display = "block";
    first.style.display = "none";
}
function showmagic() {
    yeah.style.display = "none";
    magic.style.display = "block";
}
function showmix() {
    magic.style.display = "none";
    mix.style.display = "block";
}
function showvideo() {
    mix.style.display = "none";
    video.style.display = "block";
}
function showp2() {
    p2.style.display = "block"
    b2.style.display = "block"
    b1.style.display = "none"
}
function showp3() {
    p3.style.display = "block"
    b3.style.display = "block"
    b2.style.display = "none"
}
function showp4() {
    p4.style.display = "block"
    b4.style.display = "block"
    b3.style.display = "none"
}
function showp5() {
    p5.style.display = "block"
    b5.style.display = "block"
    b4.style.display = "none"
}
function showp6() {
    p6.style.display = "block"
    b6.style.display = "block"
    b5.style.display = "none"
}
function showp7() {
    p7.style.display = "block"
    b7.style.display = "block"
    b6.style.display = "none"
}
function showp8() {
    p8.style.display = "block"
    b8.style.display = "block"
    b7.style.display = "none"
}
function showp9() {
    p9.style.display = "block"
    b9.style.display = "block"
    b8.style.display = "none"
}
function showp10() {
    p10.style.display = "block"
    b10.style.display = "block"
    b9.style.display = "none"
}
function showp11() {
    p11.style.display = "block"
    b11.style.display = "block"
    b10.style.display = "none"
}
function showproduct() {
    message.style.display = "none"
    product.style.display = "block"
}
function showfootage() {
    product.style.display = "none"
    footage.style.display = "block"

}
function showclip() {
    clip.style.display = "block"
    content.style.display = "none"
}
const together = document.getElementsByClassName("together")[0];
const together_1 = document.getElementsByClassName("together-1")[0];
const together_2 = document.getElementsByClassName("together-2")[0];
const together_3 = document.getElementsByClassName("together-3")[0];
const commit_msg = document.getElementById("comit-msg")

const commit_ans = document.getElementById("comit-ans")

function showmsg() {
    together_1.style.display = "none";
    together_2.style.display = "block";
    commit_ans.textContent= commit_msg.value;
}
function showtogether(){
    together_3.style.display = "block";
    together_2.style.display = "none";

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx3Xe6juZVPddRr1peW5vtqAzBv9dJRriUyJbICgYhfgI1CAXMWk8Lo-0LGHR29GPsQ/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout (function(){
            msg.innerHTML="";
        },5000);
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
function showfour() {
    let pass = window.prompt("enter the password")
    if (pass == "hello mr arohi") {
        together.style.display = "block"
        btns.style.display = "none"
        document.body.classList.add("animated-bg")
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