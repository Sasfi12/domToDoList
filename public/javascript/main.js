let user = document.querySelector("#user") ; 
// Je récupere l'input de l'utilisateur  
let newElemValue = user.value
// je crée une variable pour stocker sa valeur.  
user.addEventListener("change", function() {
    newElemValue = this.value ;    
    // je stock la nouvelle valeur à chaque foix que la valeur dans l'input est changé.
})

let addButton = document.querySelector("#confirmRequest") ; 
// je récupére le bouton add 
// qui rajoute la valeur à la liste. 
let items = document.querySelector("#items"); 
// je récupere la div item qui est la div qui contients les élements. 
// Cette récupération me sert à pouvoir push de nouveau elements à celle-ci. 
let allTasks = document.querySelectorAll(".task");

addButton.addEventListener("click", function() {
   let divParent = document.createElement("div"); 
   // je verifie si l'input n'est pas vide. 
    if(newElemValue !== undefined && newElemValue.trim() !== ""){
        divParent.classList = "task" // je rajoute à cette elem une class "task" pour 
        divParent.innerHTML =  `<h3 class="text"></h3> 
                                <div class = "item-manipulation">                      
                                <button value = "done"class="item-button done">Done</button>
                                <button value = "modify"class="item-button change">Modifier</button>    
                                <button value = "delete"class="item-button delete">Supprimer</button>
                                </div>`   
        // je creer une divParent pour pouvoir manipuler son innerHTML et directement crée ses enfants.                                                  
        // je lui rajoute son texte et ses boutons.  
        // je leur rajoute aussi des classes pour pouvoirs manipuler celles-cis en style et en SCRIPT.                                                             
        divParent.querySelector(".text").textContent = newElemValue 
        // je pouse la valeur que j'ai recup avant. dans le h3 qui est dans la divParent. 
    }
    else {
        alert("Your input is empty !")
    }   
    items.append(divParent)
    // Je prepend la div à la fin des autres. 
    allTasks = document.querySelectorAll(".task")
    // J'update ma valeur qui contientra le querySelectorAll de toutes les divs créer par mon javascript. 
    // Il existe aussi une autre méthode qui consiste à push chaque divParent dans un array, c'est une methode qui sauve plus d'espace. 
        
    
});
// les methodes pour accéder à ces boutons sont nombreuse , mais voici la mienne.
let toDoList = document.querySelector("#items") 
// Je recupére tout ma toDoList  
// je crée un event listener general sur toute la toDoList 
toDoList.addEventListener("mousedown", function(e) {
    let clicked = e.target ;
    //J'assigne le e.target à une variable pour facilité la suite. 
    switch (clicked.value) { // noté que la réponse du texte ici est toujours basé sur 
        case "done": 
            // dans le cas ou c'est fait , le text en haut est barré. 
            if(clicked.textContent !== "Cancel") {
                clicked.textContent = "Cancel"
                clicked.parentNode.previousElementSibling.style.textDecoration = "line-through";
                clicked.parentNode.parentNode.style.backgroundColor = "green"; 
                // dans le cas ou on à pas encore validé,
            }
            else {
                clicked.textContent = "Done"
                clicked.parentNode.previousElementSibling.style.textDecoration = "";
                clicked.parentNode.parentNode.style.backgroundColor = ""; 
                // dans le case ou on à dejà validé tout , on remet le style à zero.  
            }
            break;
        case "modify":
            clicked.parentNode.innerHTML =  `
                                            <button value = "done"class="item-button done">Done</button>
                                            <input  placeholder = "enter your new value" >  
                                            <button value = "confirm-input">modify</button>
                                            <button value = "abort">Quitté le mode modifier</button>
                                            <button value = "delete"class="item-button delete">Supprimer</button>
                                            `
            break; 
        case "delete":
            clicked.parentNode.innerHTML = `<button value = "done"class="item-button done">Done</button>
                                            <button value = "modify"class="item-button change">Modifier</button>    
                                            <button value = "confirm"class="item-button confirm">Confirmer</button>
                                            <button value = "abort"class="item-button confirm">Annuler</button>`
            // je remonte une fois le parent pour retourner jusqu'a la div qui contient mes boutons , et je la modifie en ajoutant les deux nouvelles options. 
            allTasks = document.querySelectorAll(".task")
            break; 
        case "confirm": 
            clicked.parentNode.parentNode.remove()
            // je remonte deux fois le parent pour retourner au niveau de toute la div et j'enleve tout.
            allTasks = document.querySelectorAll(".task")
            
            break; 
        case "abort": 
            clicked.parentNode.innerHTML =  `
                                            <button value = "done"class="item-button done">Done</button>
                                            <button value = "modify"class="item-button change">Modifier</button>    
                                            <button value = "delete"class="item-button delete">Supprimer</button>
                                            `
            // je remonte encore deux fois le parent pour ramener toute la div actuelle à sa situation precedente. 
                                  
            break;   
        case "confirm-input": 
                if(clicked.previousElementSibling.value.trim() != "" && clicked.previousElementSibling.value != undefined) {
                    clicked.parentNode.previousElementSibling.textContent = clicked.previousElementSibling.value
                // je m'assure que la valeur soit bien differente de ""(rien) avant de la push dans le text 
                    }
        default:
            break;
    }
})

