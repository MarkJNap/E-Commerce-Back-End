const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // TODO: find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // TODO: find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // TODO: create a new tag
});

router.put('/:id', async (req, res) => {
  // TODO: update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // TODO: delete on tag by its `id` value
});

module.exports = router;
