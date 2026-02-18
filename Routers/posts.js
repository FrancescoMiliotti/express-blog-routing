const express = require('express')
const router = express.Router();




router.get('/', (req, res) => {
	const posts = [
		{
			title: "Orto",
			contents: "Scheda coltivazione degli ortaggi",
            image: "/bacheca/Orto.jpg",
			tags: ["pomodoro", "zucchina", "melanzana"],
		}, 
        {
			title: "Frutti",
			contents: "Guida coltivazione alberi da Frutto",
            image: "/bacheca/Frutti.jpg",
			tags: ["albicocco", "pesco", "melo"],
		},
        {
			title: "Erbe",
			contents: "Guida alla scoperta delle erbe aromatiche",
            image: "/bacheca/aromatiche.jpg",
			tags: ["basilico", "menta", "rosmarino"],
		},
        {
			title: "Difesa",
			contents: "Guida alla difesa dalle avversità",
            image: "/bacheca/difesa.jpg",
			tags: ["malattie", "insetti", "animali"],
		},
        {
			title: "Guida",
			contents: "Consigli utili alla coltivazione",
            image: "/bacheca/guida.jpg",
			tags: ["suolo", "raccolta", "potatura"]
		}
        
	];

	res.json(posts);
})


//Show (cRud)
router.get('/:id', (req, res) => {
	res.send(`You requested to SHOW the post with id: ${req.params.id}`);
})

//Store (Crud)
router.post('/', (req, res) => {
	res.send(`You request to CREATE a new post`);
})

//Update (crUd)
router.put('/:id', (req, res) => {
	res.send(`You requested to UPDATE (complete) the post with id: ${req.params.id}`);
})

//Modify (crUd)
router.patch('/:id', (req, res) => {
	res.send(`You requested to MODIFY (partial) the post with id: ${req.params.id}`);
})

//Destroy (cruD)
router.delete('/:id', (req, res) => {
	res.send(`You requested to DELETE the post with id: ${req.params.id}`);
})

module.exports = router;