const container=document.querySelector(".container");
const generateBtn=container.querySelector(".form button");
const Inptxt=container.querySelector(".form input");
const qrImg=container.querySelector(".qr-code img");
generateBtn.addEventListener("click",()=>{
    let qrvalue=Inptxt.value;
    if(!qrvalue) return alert("Enter a text");
    generateBtn.innerText="Generating QR code....";
    console.log(qrvalue);
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrImg.addEventListener("load",()=>{
        container.classList.add("active");
        generateBtn.innerText="Generate QR code";
    })
});