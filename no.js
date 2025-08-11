var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function redirectToWhatsApp() {
    const hostelName = document.getElementById('message')?.innerText.trim() || "a hostel";
    const pageUrl = window.location.href;

    // Get agent number from HTML element
    const agentPhoneNumber = document.getElementById('agentNumber')?.innerText.trim() || "";
    
    const message = `Hi, I'm interested in ${hostelName} listed on Hostelhub. Here's the page link: ${pageUrl}`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${agentPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none"; 
}
