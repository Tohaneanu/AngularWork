function incrementValue() {
    let value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue() {
    let value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}

let game1 = {name: "CSGO", gen: "shooter game", img: "img.png"};
let game2 = {name: "The Forest", gen: "survival game", img: "img_1.png"};
const data = [game1, game2];
const body = document.body;

const divCards = document.createElement("div");
divCards.style.display = "flex";
divCards.style.alignItems = "center";
divCards.style.justifyContent = "center";

body.append(divCards);

function addDiv(item) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.style.width = "18rem";
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = item.img;
    div.append(img);
    const divChild = document.createElement("div");
    divChild.classList.add("card-body");
    const name = document.createElement("h5");
    name.classList.add("card-text");
    name.innerText = item.name;
    divChild.append(name);
    const p = document.createElement("p");
    p.classList.add("card-text");
    p.innerText = item.gen;
    divChild.append(p);
    div.append(divChild);
    divCards.append(div);
}

data.forEach(addDiv);


const divInsert = document.createElement("div");
divInsert.style.display = "flex";
divInsert.style.alignItems = "center";
divInsert.style.justifyContent = "center";
body.append(divInsert);
const div1 = document.createElement("div");
div1.classList.add("mb-3");
const label1 = document.createElement("label");
label1.htmlFor = "formGroupExampleInput";
label1.classList.add("form-label");
label1.innerText = "Name";
const input1 = document.createElement("input");
input1.type = "text";
input1.id = "formGroupExampleInput";
input1.placeholder = "";
div1.append(label1);
div1.append(input1);

const div2 = document.createElement("div");
div2.classList.add("mb-3");
const label2 = document.createElement("label");
label2.htmlFor = "formGroupExampleInput";
label2.classList.add("form-label");
label2.innerText = "Gen";
const input2 = document.createElement("input");
input2.type = "text";
input2.id = "formGroupExampleInput";
input2.placeholder = "";
div2.append(label2);
div2.append(input2);

const div3 = document.createElement("div");
div3.classList.add("mb-3");
const label3 = document.createElement("label");
label3.htmlFor = "formGroupExampleInput";
label3.classList.add("form-label");
label3.innerText = "Image";
const input3 = document.createElement("input");
input3.type = "image";
input3.id = "formGroupExampleInput";
input3.placeholder = "";
div3.append(input3);
div3.append(input3);

divInsert.append(div1);
divInsert.append(div2);
divInsert.append(div3);