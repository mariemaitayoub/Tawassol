export function filtrage(participants, formation) {
    return participants.filter(p =>
        p.formation == formation
    )

}