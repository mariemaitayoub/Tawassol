export function recherche(participants, nom) {

    return participants.filter(p =>
        p.nom.toLowerCase().trim() == nom.toLowerCase().trim()
    )
                            
}