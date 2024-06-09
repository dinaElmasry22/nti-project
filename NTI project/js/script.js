let passwordIcon = document.querySelector(".eye-icon")
passwordIcon.onclick = function (e) {
    let passwordInput = document.querySelector(".password-input")
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        e.target.classList.add("ri-eye-off-line");
        e.target.classList.remove("ri-eye-line");
    } else {
        passwordInput.type = "password";
        e.target.classList.add("ri-eye-line");
        e.target.classList.remove("ri-eye-off-line");

    }
}

let addBtn = document.querySelector(".add-btn")
addBtn.onclick = function (e) {
    e.preventDefault()
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")

    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    document.querySelector("table").append(tr)

    let nameInput = document.querySelector('.text-form');
    let nameValue = nameInput.value;
    let emailInput = document.querySelector('input[type="email"]');
    let emailValue = emailInput.value;
    let idInput = document.querySelector('input[type="number"]');
    let idValue = idInput.value;
    let universityInput = document.querySelector('.uni-form');
    let universityValue = universityInput.value;
    td1.innerText = nameValue;
    td2.innerText = emailValue;
    td3.innerText = universityValue;
    td4.innerText = idValue;
    let deleteIcon = document.createElement("i")
    deleteIcon.classList.add("ri-delete-bin-5-line")
    deleteIcon.classList.add("text-danger")
    deleteIcon.classList.add("fs-4")
    deleteIcon.style.backgroundColor = "transparent"
    td5.append(deleteIcon)
    deleteIcon.onclick = function (e) {
        this.parentElement.parentElement.remove();
    }
}

let prevBtn = document.querySelector(".prev-btn")
let nextBtn = document.querySelector(".next-btn")

let counter=1
nextBtn.onclick = function (e) {
        counter++;
        if (counter > 6){
            counter=1;
        }
        document.querySelector(".images img").src = `images/${counter}.jpg`
        document.querySelector(".images").style.animation = "none";

        setTimeout(function () {
            document.querySelector(".images").style.animation = "fade 1s ease-in-out";
        }, 10);
}
prevBtn.onclick = function (e) {
    counter--;
    if (counter < 1){
        counter=6;
    }
    document.querySelector(".images img").src = `images/${counter}.jpg`
    document.querySelector(".images").style.animation = "none";

    setTimeout(function () {
        document.querySelector(".images").style.animation = "fade 1s ease-in-out";
    }, 10);
}
function autoSlide() {
    counter++;
    if (counter > 6) {
        counter = 1;
    }
    document.querySelector(".images img").src = `images/${counter}.jpg`;
    document.querySelector(".images").style.animation = "none";

    setTimeout(function () {
        document.querySelector(".images").style.animation = "fade 1s ease-in-out";
    }, 10);
}
setInterval(autoSlide, 7000);