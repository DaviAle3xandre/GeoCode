let qrcode = document.querySelector('#qrcode'); 
let btnLocalizar = document.querySelector('#btnLocalizar'); 


function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

   
    const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
    generateQRCode(googleMapsLink); 
}


function error(err) {
    console.warn(`Erro ao obter localização: ${err.message}`);
    alert("Não foi possível obter sua localização.");
}


function generateQRCode(url) {
    
    qrcode.innerHTML = "";

   
    new QRCode(qrcode, {
        text: url,
        width: 128,  
        height: 128, 
    });
}


function showLocation() {
    
    btnLocalizar.style.display = 'none';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error); 
    } else {
        alert("Geolocalização não é suportada neste navegador.");
    }
}


btnLocalizar.addEventListener('click', showLocation);
