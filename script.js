/*
let str = "this is the end";
let cph = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
let key = 3;
let splited = str.toUpperCase().split("");
let filtred = splited.filter(i => /[A-Z]/.test(i));
//let arr = filtred.map((char,index) => (index + key) % 26);
let arr = filtred.map(i => (cph.indexOf(i) + key) % 26);
let encrypted = arr.map(i => cph[i]).join("");

let blocks = [];
for (let i = 0; i < encrypted.length; i += 4) {
    blocks.push(encrypted.slice(i, i + 4));
}
*/
let choose = document.getElementById("select");
let plainLabel = document.getElementById("plain-label");
let cipherLabel = document.getElementById("cipher-label");
let btnEncDec = document.getElementById("btn");

let plainTxt = document.getElementById("plaintxt");
let cipherTxt = document.getElementById("ciphertxt");
let key = document.getElementById("key");
let clearBtn = document.getElementById("clear");



choose.addEventListener("change", () => {
    if(choose.value === "encrypt") {
        plainLabel.textContent = "Plain Text:";
        cipherLabel.textContent = "Cipher Text:";
        plainTxt.placeholder = "Enter plain text here...";
        cipherTxt.placeholder = "Encrypted text will appear here...";
        
    }
    if(choose.value === "decrypt") {
        plainLabel.textContent = "Cipher Text:";
        cipherLabel.textContent = "Plain Text:";
        plainTxt.placeholder = "Enter cipher text here...";
        cipherTxt.placeholder = "Decrypted text will appear here...";
    }
    
});

btnEncDec.addEventListener("click", () => {
    let textP = plainTxt.value;
    let keyPC = Number(key.value);
    let splited = textP.toUpperCase().split("");
    let filtred = splited.filter(i => /[A-Z]/.test(i));

    let arr;
    let encrypted;
    let decrypted;

    if (!Number.isInteger(keyPC) || keyPC < 1 || keyPC > 25) {
        alert("Key must be a number between 1 and 25!");
        return;
    }

    if(textP === ""){
        alert("Please enter a text !");
        return;
    }

    if(choose.value === "encrypt") {
        arr = filtred.map(i =>
            (i.charCodeAt(0) - 65 + Number(keyPC)) % 26
        );
        encrypted = arr.map(i => String.fromCharCode(i + 65)).join("");
        cipherTxt.value = encrypted;
    } else if(choose.value === "decrypt") {
        arr = filtred.map(i =>
            (i.charCodeAt(0) - 65 - Number(keyPC) + 26) % 26
        );
        decrypted = arr.map(i => String.fromCharCode(i + 65)).join("");
        cipherTxt.value = decrypted;
    }
});

clearBtn.addEventListener("click",() => {
    cipherTxt.value = "";
    plainTxt.value = "";
    key.value = "";
})