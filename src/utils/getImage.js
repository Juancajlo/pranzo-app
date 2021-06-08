import Base64 from './base64.js';

const getImage = (encoded) => {
    //console.log(encoded) 
    if(encoded){
        // Decode the string
        //console.log('encoded',encoded) 
        var decoded = Base64.decode(encoded);
        console.log(decoded);

        // if the file extension is unknown
        /*var extension = undefined;
        // do something like this
        var lowerCase = decoded.toLowerCase();
        if (lowerCase.indexOf("png") !== -1) extension = "png"
        else if (lowerCase.indexOf("jpg") !== -1 || lowerCase.indexOf("jpeg") !== -1)
            extension = "jpg"
        else extension = "tiff";

        // alternatively, you can do this
        return ("data:image/" + extension + ";base64," + encoded);*/
    }
}
export default getImage;