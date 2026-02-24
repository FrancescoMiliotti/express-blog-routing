const posts = require ("../data/posts")


function index (req, res) {

	

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