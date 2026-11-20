
export function affiche(participants) {
    const liste = document.querySelector("#liste");
    liste.innerHTML = ""

    let arr = participants.map(p =>
        `<p>${p.nom}${p.email}${p.formation}</p>`)
    console.log(arr);
    arr.forEach(a=>{
        // console.log(typeof a)
        liste.innerHTML += a
    // }
    })

    // liste.innerHTML=participants.map(p=>{
    //     `<p>${p.nom}</p>`
    // }


    // )


}
