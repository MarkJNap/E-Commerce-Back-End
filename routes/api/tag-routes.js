const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // Gets all tags and includes their associated Product data
  try {
    const allTags = await Tag.findAll({ 
      include: Product
    })
    res.status(200).json(allTags)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // Gets a single tag by its id and includes its associated Product data
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: Product
    })
    if (!tag) {
      res.status(404).json( { message: "No Tag found with the id: " + req.params.id})
      return
    }
    res.status(200).json(tag)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // Create a new tag
  try {
    const newTag = await Tag.create(req.body)
    res.status(200).json(newTag)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // Update a tag's name by its id value
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (!updateTag[0]) {
      res.status(404).json({ message: "No tag found with the id: " + req.params.id })
      return
    }
    res.status(200).json({ message: "Succesfully updated the tag: " + req.body.tag_name })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // Delete a tag by its id value
  try {
    const deleteTag = await Tag.destroy( {
      where: {
        id: req.params.id
      }
    })
    if (!deleteTag) {
      res.status(404).json({ message: "No tag found with the id: " + req.params.id })
      return
    }
    res.status(200).json({ message: "Succesfully deleted the tag." })
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
