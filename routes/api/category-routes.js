const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // Gets all categories and has their associated Products
  try {
    const allCategories = await Category.findAll({
      include: Product
    })
    res.status(200).json(allCategories)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // Gets a category by its id and includes their associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: Product
    })
    if (!category) {
      res.status(404).json( { message: "No Category found with the id: " + req.params.id })
      return
    }
    res.status(200).json(category)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // Create a new category
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // Update a category by its id value
  try {
    const updateCategory = await Category.update(req.body, { 
      where: {
        id: req.params.id
      }
    })
    if (!updateCategory[0]) {
      res.status(404).json({ message: "No category found with the id: " + req.params.id })
      return
    }
    res.status(200).json({ message: "Successfully updated the category to: " + req.body.category_name })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // Delete a category by its id value
  try {
    const deleteCategory = await Category.destroy( {
      where: {
        id: req.params.id
      }
    })
    if (!deleteCategory) {
      res.status(404).json({ message: "No category found with the id: " + req.params.id })
      return
    }
    res.status(200).json({ message: "Successfully deleted." })
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
