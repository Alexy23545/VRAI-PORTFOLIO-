// Base de connaissances sur Alexy
const knowledgeBase = {
    // Identité
    "identité": "Nom : Alexy Vrignaud. Né le 13 novembre 2005 (20 ans en 2025).",
    "nom": "Alexy Vrignaud",
    "né le": "13 novembre 2005 (20 ans en 2025).",
    "age": "Alexy a 20 ans (en 2025).",
    "étudiant": "Homme, étudiant en sport, licence en alternance.",
    "alternance": "Licence en alternance pour combiner théorie et expérience professionnelle.",
    "qualités": "Rigoureux, investi, compréhensif, curieux, serviable.",
    // Famille
    "famille": "Parents : Éric (54 ans) et Céline (52 ans), tous deux jouent au tennis. Sœur : Camille, mère d’Inayah (1 an). Copine : Fidéline (née le 7 mars 2005).",
    "parents": "Parents : Éric (54 ans) et Céline (52 ans), pratiquent le tennis.",
    "sœur": "Sœur : Camille, mère d’Inayah (1 an).",
    "copine": "Copine : Fidéline, née le 7 mars 2005, même âge qu’Alexy.",
    // Vie personnelle
    "permis": "Permis obtenu depuis 2 ans.",
    "voiture": "Clio 5.",
    // Études & Professionnel
    "objectif professionnel": "Métier lié au tennis et au commerce, entrer en entreprise avec de l’expérience.",
    "magasin": "Possibilité de travailler dans un magasin spécialisé tennis/padel.",
    // Passions & Tennis
    "tennis": "Passion depuis l’enfance, compétition très jeune, meilleur classement 3/6.",
    "classement": "Meilleur classement : 3/6.",
    "psg": "Supporter du PSG.",
    "marque de tennis": "Wilson.",
    "raquettes": "Wilson Blade 98 18x20.",
    "raquette": "Wilson Blade 98 18x20.",
    "style de jeu": "Défenseur-contreur.",
    "surface préférée": "Résine intérieure.",
    // Mode & esthétique
    "couleurs préférées": "Violet et rose.",
    "vêtements": "Intérêt pour le style, accessoires, bijoux, coupes de cheveux.",
    "marques vêtements": "Arte, Nike, Snores.",
    "chaussures": "Asics.",
    // Parfums
    "parfums": "Terre d’Hermès, L’Interdit.",
    "parfum": "Terre d’Hermès, L’Interdit.",
    // Musique
    "musique": "Sensible au rythme, aux paroles et aux mélodies. Artistes FR : PNL, Hamza, Jolagreen, Ninho. Internationaux : The Weeknd, Future, Coldplay, Michael Jackson.",
    "albums préférés": "1994 (Hamza), les 3 albums de PNL, 99+XP (Jolagreen), M.I.L.S 2.0 (Ninho).",
    "jolagreen": "Difficile de choisir : 12HEURES MINUIT, PLUS LE MEME, CR7 MAN UTD.",
    "musique préférée": "Difficile de choisir : 12HEURES MINUIT, PLUS LE MEME, CR7 MAN UTD.",
    // Vie sociale
    "vie sociale": "Proche de ses amis, de sa famille (parents, sœur Camille, nièce Inayah) et de Fidéline.",
    // Goûts alimentaires
    "plats préférés": "Plats pimentés, souvent riz + poulet, style indien.",
    // Séries & films
    "séries": "Peaky Blinders, Prison Break, Snowfall.",
    "films": "Transformers, Fast and Furious.",
    "sagas": "Transformers, Fast and Furious.",
    // Personnalité
    "personnalité": "Perçu parfois comme aigri et nonchalant au premier abord, en réalité rigoureux, investi, curieux et serviable.",
    // Tennis – valeurs
    "valeurs tennis": "Concentration, évasion, persévérance, résilience, travail sur soi, esprit de compétition, curiosité.",
    // Avenir proche
    "australie": "Souhaite partir un an en Australie avec Fidéline : travailler en fermes, gagner de l’argent, découvrir une culture différente, améliorer l’anglais, voyager.",
    "avenir": "Projet Australie avec Fidéline, envie de voyager et réfléchir à l’avenir pro.",
    "destinations": "Asie, Japon, Bali et d’autres pays.",
    "destinations de rêves": "Asie, Japon, Bali et d’autres pays.",
    "voyage": "Objectifs : découvrir, améliorer son anglais, voyager."
};

// Fonction pour obtenir une réponse basée sur la question
function getResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Questions spécifiques prioritaires
    if (lowerQuestion.includes("raquette")) {
        return "Ses raquettes : Wilson Blade 98 18x20.";
    }
    
    if (lowerQuestion.includes("marque") && (lowerQuestion.includes("tennis") || lowerQuestion.includes("raquette"))) {
        return "Sa marque de tennis préférée : Wilson.";
    }
    
    if (lowerQuestion.includes("style de jeu")) {
        return "Style de jeu : défenseur-contreur.";
    }
    
    if (lowerQuestion.includes("surface préférée") || (lowerQuestion.includes("surface") && lowerQuestion.includes("préf"))) {
        return "Surface préférée : résine intérieure.";
    }
    
    if (lowerQuestion.includes("voiture")) {
        return "Voiture : Clio 5.";
    }
    
    if (lowerQuestion.includes("permis")) {
        return "Permis obtenu depuis 2 ans.";
    }
    
    if (lowerQuestion.includes("parfum")) {
        return "Parfums : Terre d’Hermès, L’Interdit.";
    }
    
    if (lowerQuestion.includes("couleur") && lowerQuestion.includes("préfér")) {
        return "Couleurs préférées : violet et rose.";
    }
    
    if ((lowerQuestion.includes("marques") || lowerQuestion.includes("marque")) && (lowerQuestion.includes("vêtement") || lowerQuestion.includes("vetement"))) {
        return "Marques vêtements préférées : Arte, Nike, Snores.";
    }
    
    if (lowerQuestion.includes("chaussures")) {
        return "Chaussures préférées : Asics.";
    }
    
    if (lowerQuestion.includes("plats préférés") || (lowerQuestion.includes("plat") && lowerQuestion.includes("préfér"))) {
        return "Plats préférés : plats pimentés, souvent riz + poulet, style indien.";
    }
    
    if (lowerQuestion.includes("série") || lowerQuestion.includes("séries")) {
        return "Séries : Peaky Blinders, Prison Break, Snowfall.";
    }
    
    if (lowerQuestion.includes("film") || lowerQuestion.includes("saga") || lowerQuestion.includes("sagas")) {
        return "Sagas/films : Transformers, Fast and Furious.";
    }
    
    if (lowerQuestion.includes("jolagreen") && (lowerQuestion.includes("musique") || lowerQuestion.includes("préférée") || lowerQuestion.includes("préféré"))) {
        return "C'est très difficile pour lui de choisir donc je peux t'en donner 3 et non une seule : 12HEURES MINUIT, PLUS LE MEME et CR7 MAN UTD.";
    }
    
    if (lowerQuestion.includes("coordonnées") || (lowerQuestion.includes("contact") && !lowerQuestion.includes("famille"))) {
        return "Numéro de téléphone : 0770283540, email pro : a.vrignaud@ileps.fr";
    }
    
    if (lowerQuestion.includes("destinations de rêves") || (lowerQuestion.includes("destinations") && lowerQuestion.includes("rêves")) || (lowerQuestion.includes("rêves") && lowerQuestion.includes("destination"))) {
        return "Bali, Australie et New York.";
    }
    
    // Recherche de mots-clés dans la question
    for (const [keyword, answer] of Object.entries(knowledgeBase)) {
        if (lowerQuestion.includes(keyword)) {
            return answer;
        }
    }
    
    // Réponses par défaut
    if (lowerQuestion.includes("bonjour") || lowerQuestion.includes("salut") || lowerQuestion.includes("hello")) {
        return "Bonjour ! Je suis alexyAI. Posez-moi des questions sur Alexy et je ferai de mon mieux pour y répondre !";
    }
    
    if (lowerQuestion.includes("merci") || lowerQuestion.includes("remerci")) {
        return "De rien ! N'hésitez pas si vous avez d'autres questions sur Alexy.";
    }
    
    return "Je ne suis pas sûr de comprendre votre question. Pourriez-vous la reformuler ? Vous pouvez aussi explorer le portfolio d'Alexy pour trouver des informations détaillées sur lui.";
}

// Fonction pour ajouter un message dans le chat
function addMessage(text, isUser) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    const p = document.createElement('p');
    p.textContent = text;
    contentDiv.appendChild(p);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Fonction pour envoyer un message
function sendMessage(questionText = null) {
    const input = document.getElementById('chatInput');
    const question = questionText || input.value.trim();
    
    if (question === '') return;
    
    // Masquer les suggestions après la première question
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
    
    // Ajouter le message de l'utilisateur
    addMessage(question, true);
    input.value = '';
    
    // Simuler un délai de réponse
    setTimeout(() => {
        const response = getResponse(question);
        addMessage(response, false);
    }, 500);
}

// Événements
document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('sendButton');
    const chatInput = document.getElementById('chatInput');
    
    sendButton.addEventListener('click', function() {
        sendMessage();
    });
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Gérer les clics sur les suggestions
    const suggestionCards = document.querySelectorAll('.suggestion-card');
    suggestionCards.forEach(card => {
        card.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            sendMessage(question);
        });
    });
});

