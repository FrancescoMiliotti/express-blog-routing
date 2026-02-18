const express = require('express')
const postsRouter = require("./Routers/posts");

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
	console.log("Chiamata Benvenuto ricevuta");
	res.send('Benvenuto nel Server del mio blog');
})

app.use("/posts", postsRouter)




app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
})