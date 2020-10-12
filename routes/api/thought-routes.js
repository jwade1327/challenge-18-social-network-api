const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought.controller')

// GET and POST /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// GET, PUT, and DELETE /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// POST and DELETE /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction)

module.exports = router;