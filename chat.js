// Base de connaissances sur Alexy
const knowledgeBase = {
    "qui": "Alexy est un étudiant de 20 ans qui a choisi d'étudier dans le domaine du sport car le tennis est sa passion depuis tout petit. Il étudie en licence en alternance pour lier le tennis et son aspect commercial.",
    "age": "Alexy a 20 ans.",
    "étudiant": "Alexy est un étudiant de 20 ans qui fait une licence en alternance dans le domaine du sport.",
    "alternance": "Alexy a choisi de faire une licence en alternance car il estime que d'être dans la vie active et dans le monde professionnel en même temps qu'étudier l'aspect théorique des choses à l'école est le meilleur moyen d'apprendre.",
    "qualités": "Les qualités d'Alexy sont : rigueur, investissement, compréhensif, curieux et heureux d'aider les autres.",
    "tennis": "Le tennis est la passion d'Alexy depuis tout petit. Il a commencé autour de ses quatre ans et a atteint un classement de 3/6. Le tennis lui permet de s'échapper et de travailler sur lui-même.",
    "passion": "La passion d'Alexy est le tennis. Il a commencé tout jeune autour de ses quatre ans, a fait de la compétition et a atteint son meilleur classement (3/6). Le tennis lui a appris la persévérance, le travail, l'envie de découvrir et de s'améliorer.",
    "classement": "Le meilleur classement d'Alexy au tennis est 3/6.",
    "psg": "Alexy est fan du Paris Saint-Germain depuis tout petit et regarde tous les matchs avec ferveur.",
    "mode": "Alexy aime beaucoup la mode et tout ce qui va avec l'esthétique : les accessoires, les coupes de cheveux, les boucles d'oreilles, les bijoux.",
    "musique": "Alexy aime beaucoup la musique. Ses artistes francophones préférés sont PNL, Hamza ou encore Jolagreen. Pour le reste du monde, il apprécie The Weeknd, Future, Coldplay ou Michael Jackson.",
    "passe-temps": "Les passe-temps d'Alexy incluent le tennis, le PSG, la mode, la musique, et passer du temps avec ses amis, sa famille et sa copine.",
    "famille": "Alexy aime passer du temps avec sa famille, surtout ses parents, sa sœur qui vient d'être mère d'une petite fille merveilleuse, et sa copine.",
    "australie": "Dans un avenir proche, Alexy souhaite partir avec sa copine en Australie pendant au moins un an pour y travailler en fermes, gagner de l'argent, découvrir une nouvelle culture, développer son anglais et voyager.",
    "avenir": "Alexy souhaite partir en Australie avec sa copine pendant au moins un an pour travailler en fermes, découvrir une nouvelle culture, développer son anglais et voyager. Il aimerait aussi visiter l'Asie, le Japon, Bali et d'autres pays magnifiques.",
    "voyage": "Alexy souhaite voyager, notamment en Australie, en Asie, au Japon, à Bali et dans d'autres pays magnifiques.",
    "anglais": "Alexy souhaite développer son anglais lors de son voyage en Australie, car cela sera un gros atout plus tard.",
    "nom": "Alexy Vrignaud",
    "magasin": "Avec ses qualités, Alexy peut développer ses compétences dans un magasin spécialisé dans le tennis et padel.",
    "jolagreen": "C'est très difficile pour lui de choisir donc je peux t'en donner 3 et non une seule : 12HEURES MINUIT, PLUS LE MEME et CR7 MAN UTD.",
    "musique préférée": "C'est très difficile pour lui de choisir donc je peux t'en donner 3 et non une seule : 12HEURES MINUIT, PLUS LE MEME et CR7 MAN UTD.",
    "coordonnées": "Numéro de téléphone : 0770283540, email pro : a.vrignaud@ileps.fr",
    "contact": "Numéro de téléphone : 0770283540, email pro : a.vrignaud@ileps.fr",
    "téléphone": "Numéro de téléphone : 0770283540, email pro : a.vrignaud@ileps.fr",
    "email": "Numéro de téléphone : 0770283540, email pro : a.vrignaud@ileps.fr",
    "destinations": "Bali, Australie et New York.",
    "destinations de rêves": "Bali, Australie et New York.",
    "rêves": "Bali, Australie et New York."
};

// Fonction pour obtenir une réponse basée sur la question
function getResponse(question) {
    const lowerQuestion = question.toLowerCase();
    
    // Questions spécifiques prioritaires
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

