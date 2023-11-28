var myModels = ["/models.orange.glb","/models/teal.glb","/models.orange.glb","/models/teal.glb"];
var counter = 0;

document.getElementById("change-colour").assEventListener("click", function(){
    counter++;
    if (counter==3) {
        counter = 0;
    }
    document.getElementById("model").src="/models/teal.glb";
    document.getElementById("model-info").style.display = "block";
})