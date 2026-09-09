const prompt = require('prompt-sync')();
function menu(){
console.log("=====RAILWAY MANAGER=====");
console.log("1. Afficher les trajets");
console.log("2. Acheter un ticket");
console.log("3. Afficher les tickets");
console.log("4. Annuler un ticket");
console.log("5. Rechercher un ticket");
console.log("6. Filtrer les trajets");
console.log("7. Trier les trajets");
console.log("0. Quitter");
}
const trajets = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
function Afficher_trajets() {
    console.log("=== TRAJETS DISPONIBLES ===");
    for (let i = 0; i < trajets.length; i++) {
        console.log( "#" + trajets[i].id + " " +trajets[i].departure + " → " +trajets[i].destination);
        console.log("Départ : " + trajets[i].departureTime);
        console.log("Arrivée : " + trajets[i].arrivalTime);
        console.log("Prix : " + trajets[i].price + " DH");
        console.log("Places disponibles : " + trajets[i].availableSeats);
        console.log("---------------------------");
    }
}const tickets = [];
let prochainIdTicket = 1;
function Acheter_ticket() {
    let Nom_du_passager = prompt("Entrer le nom du passager : ");
    let Identifiant_du_trajet = Number(prompt("Entrer l'identifiant du trajet : "));
    let trajet = 0;
    for (let i = 0; i < trajets.length; i++) {
        if (trajets[i].id == Identifiant_du_trajet) {
            trajet = trajets[i];
            break;
        }
    }
    if(trajet === 0) {
        console.log("Trajet introuvable.");
        return;
    }if(trajet.availableSeats <= 0) {
        console.log("Train complet.");
        return;
    }trajet.availableSeats--;
    let numeroPlace = 50 - trajet.availableSeats;
    const ticket = {
        id: prochainIdTicket,
        passager: Nom_du_passager,
        trajetId: trajet.id,
        place: numeroPlace,
        prix: trajet.price
    };
    prochainIdTicket++;
    
    tickets.push(ticket);
    console.log("Ticket acheté avec succès.");
    console.log("Ticket #" + ticket.id);
    console.log("Passager : " + ticket.passager);
    console.log("Trajet : " + trajet.departure + " → " + trajet.destination);
    console.log("Place : " + ticket.place);
    console.log("Prix : " + ticket.prix + " DH");
}
function Affichrer_tickets(){
    console.log("======Tickets======");
    if(tickets.length===0){
        console.log("Aucun ticket enregistré");
        return;
    }
    for(i=0;i<tickets.length;i++){
       let ticket=tickets[i];


    }
}
let choix;
do {
    menu();
    choix = Number(prompt("Entrer votre choix : "));
    switch (choix) {
        case 1:
            Afficher_trajets();
            break;
        case 2:
            Acheter_ticket();
            break;
        case 3:
            console.log("Afficher les tickets");
            break;
        case 4:
            console.log("Annuler un ticket");
            break;
        case 5:
            console.log("Rechercher un ticket");
            break;
        case 6:
            console.log("Filtrer les trajets");
            break;
        case 7:
            console.log("Trier les trajets");
            break;
        case 0:
            console.log("Au revoir !");
            break;
        default:
            console.log("Choix invalide.");
    }
} while (choix != 0);

    






 