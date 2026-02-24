const express = require('express')
const router = express.Router();
const postController = require("../controllers/postController");




router.get('/', postController.index )


//Show (cRud)
router.get('/:id', (req, res) => {
    console.log("Chiamata GET ricevuta");
	res.send(`You requested to SHOW the post with id: ${req.params.id}`);
    
})

//Store (Crud)
router.post('/', (req, res) => {
    console.log("Chiamata POST ricevuta");
	res.send(`You request to CREATE a new post`);
})

//Update (crUd)
router.put('/:id', (req, res) => {
    console.log("Chiamata PUT ricevuta");
	res.send(`You requested to UPDATE the post with id: ${req.params.id}`);
})

//Modify (crUd)
router.patch('/:id', (req, res) => {
    console.log("Chiamata PATCH ricevuta");
	res.send(`You requested to MODIFY the post with id: ${req.params.id}`);
})

//Destroy (cruD)
router.delete('/:id', (req, res) => {
    console.log("Chiamata DELETE ricevuta");
	res.send(`You requested to DELETE the post with id: ${req.params.id}`);
})

module.exports = router;