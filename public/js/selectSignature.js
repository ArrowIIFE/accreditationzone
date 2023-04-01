
const signature_input_select = document.querySelector("#image_signature_select");

let upload_image_sig = "";

signature_input_select.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        upload_image_sig = reader.result;
        const sigfour = document.querySelector("tr#display_image_back> td.item17").style;
        sigfour.backgroundImage=`url(${upload_image_sig})`;
        sigfour.backgroundSize = "100px 35px";

    });
    reader.readAsDataURL(this.files[0]);
});