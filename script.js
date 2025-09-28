
function generate(){
let len = parseInt(document.getElementById("len").value);
 let upper = document.getElementById("upper").checked;
let nums = document.getElementById("nums").checked;
let special = document.getElementById("special").checked;
let passOut= document.getElementById("passOut")
    const pass = genPass(len, upper, nums, special);
    passOut.textContent = pass;
}
function reset() {
            document.getElementById("len").value = 12;
            document.getElementById("upper").checked = true;
            document.getElementById("nums").checked = true;
            document.getElementById("special").checked = true;
            document.getElementById("passOut").textContent = "Your password will appear here";
        }
function genPass(len, upper, nums, special){
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upperChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|\;:',.<>?/";
    let chars = lower;
    if(upper) chars +=upperChars;
    if(nums) chars += numChars;
    if(special) chars += specialChars;
    let pass = "";
    for(let i=0 ; i<len; i++){
        const randIdx = Math.floor(Math.random()*chars.length);
        pass+= chars[randIdx];
    }
    return pass;
}
