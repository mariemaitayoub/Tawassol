export function ajout(participants) {
    let nom = document.querySelector("#nom").value;
    let email = document.querySelector("#email").value;
    let formation = document.querySelector("#formation").value;


    let regexNom = /^[a-zA-Z\ -]{3,}$/;
    let regexEmail = /^\S+@\S+\.\S+$/;
    if (regexNom.test(nom) === false) {
        alert('nom invalide');
        return;
    }
    if (regexEmail.test(email) === false) {
        alert('email invalide');
        return;
    }
    participants.push({nom: nom, email: email, formation: formation });
    console.log(participants)


        // localStorage.setItem('participants'.JSON.parse(participants))


}