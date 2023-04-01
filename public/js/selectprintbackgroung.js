
const single_input = document.querySelector("#single_input_back");

let upload_images = "";

single_input.addEventListener("change", function(){
    const readeron = new FileReader();
    readeron.addEventListener("load", ()=>{
        upload_images = readeron.result;
      const esfourone = document.querySelector("tr#display_image_back");      
        
        esfourone.style.backgroundImage=`url(${upload_images})`;
        esfourone.style.backgroundPosition=center;
      esfourone.style.backgroundSize=cover;
      esfourone.style.backgroundRepeat= no-repeat;
        // esthreeone.backgroundImage=`url(${upload_images})`;
        // estwoone.backgroundImage=`url(${upload_images})`;
        // esoneone.backgroundImage=`url(${upload_images})`; 
    });
    readeron.readAsDataURL(this.files[0]);
});