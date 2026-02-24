const posts = require ("../data/posts")


function index (req, res) {

	

	res.json(posts);
    console.log("Chiamata GET file JSON ricevuta");
    
    
}

function show (req, res) {
    //console.log("Chiamata GET ricevuta");
	//res.send(`You requested to SHOW the post with id: ${req.params.id}`);

    const id = Number(req.params.id);

	if (isNaN(id)) {
		return res.status(400).json({ error: "User error", message: "L'id non è valido" });
	}

	const result = posts.find(posts => posts.id == id);

	if (!result) {
		return res.status(404).json({ error: "Not Found", message: "Post non trovato" });
	}

	return res.json(result);
    
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
    //console.log("Chiamata DELETE ricevuta");
	//res.send(`You requested to DELETE the post with id: ${req.params.id}`);

    const id = Number(req.params.id);

	if (isNaN(id)) {
		return res.status(400).json({ error: "User error", message: "L'id non è valido" });
	}

	const result = posts.find(posts => posts.id == id);

	if (!result) {
		return res.status(404).json({ error: "Not Found", message: "Post non trovato" });
	}

	posts.splice(posts.indexOf(result), 1);

	console.log(`Post:${id} eliminato`, posts);

	return res.sendStatus(204);


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