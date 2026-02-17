const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
res.send('Benvenuto nel Server del mio blog')
})

app.get('/Bacheca/', (req, res) => {
	const bacheca = [
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

	res.json(bacheca);
})




app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})