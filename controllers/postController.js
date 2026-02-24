function index (req, res) {

	const posts = [
		{
            id: 1,
			title: "Orto",
			contents: "Scheda coltivazione degli ortaggi",
            image: "/bacheca/Orto.jpg",
			tags: ["pomodoro", "zucchina", "melanzana"],
		}, 
        {
            id: 2,
			title: "Frutti",
			contents: "Guida coltivazione alberi da Frutto",
            image: "/bacheca/Frutti.jpg",
			tags: ["albicocco", "pesco", "melo"],
		},
        {
            id: 3,
			title: "Erbe",
			contents: "Guida alla scoperta delle erbe aromatiche",
            image: "/bacheca/aromatiche.jpg",
			tags: ["basilico", "menta", "rosmarino"],
		},
        {
            id: 4,
			title: "Difesa",
			contents: "Guida alla difesa dalle avversità",
            image: "/bacheca/difesa.jpg",
			tags: ["malattie", "insetti", "animali"],
		},
        {
            id: 5,
			title: "Guida",
			contents: "Consigli utili alla coltivazione",
            image: "/bacheca/guida.jpg",
			tags: ["suolo", "raccolta", "potatura"]
		}
        
	];

	res.json(posts);
    console.log("Chiamata GET file JSON ricevuta");
    
    
}

function show (req, res) {
    console.log("Chiamata GET ricevuta");
	res.send(`You requested to SHOW the post with id: ${req.params.id}`);
    
}

function store (req, res) {
    console.log("Chiamata POST ricevuta");
	res.send(`You request to CREATE a new post`);
}

function update (req, res) {
    console.log("Chiamata PUT ricevuta");
	res.send(`You requested to UPDATE the post with id: ${req.params.id}`);
}

function modify (req, res) {
    console.log("Chiamata PATCH ricevuta");
	res.send(`You requested to MODIFY the post with id: ${req.params.id}`);
}

function destroy (req, res) {
    console.log("Chiamata DELETE ricevuta");
	res.send(`You requested to DELETE the post with id: ${req.params.id}`);
}




const postController = {

    index,
    show,
    store,
    update,
    modify,
    destroy
}

module.exports = postController