import Cryptr from "cryptr";
const cryptr = new Cryptr("myTotallySecretKey", {
  encoding: "base64",
  pbkdf2Iterations: 100,
  saltLength: 5,
});

function encryptionfunc(sortenURL) {
    
    
    return  cryptr.encrypt(sortenURL);
}


function decrypedfunction(encURL) {
    return cryptr.decrypt(encURL);
    
}

export { encryptionfunc,decrypedfunction}

// console.log(encryptedString); // CPbKO/FFLQ8lVKxV+jYJcLcpTU0ZvW3D+JVfUecmJmLYY10UxYEa/wf8PWDQqhw=
// console.log(decryptedString); 