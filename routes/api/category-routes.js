const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id','product_name','price','stock','category_id']
    }
  })
  .then()
  // find all categories
  // be sure to include its associated Products
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });

});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  // find one category by its `id` value
  // be sure to include its associated Products
  .then()

  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });

});

router.post('/', (req, res) => {
  Category.create({// create a new category
    category_name: req.body.category_name
  })

    .then({

    })

      .catch(err => {
        console.log(err);
        res.status(500).json(err);
});
 
  
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  //! used the same then for all three for delete and update is this ok?
  .then(CategoryData => {
    if (!CategoryData) {
        res.status(404).json({ message: 'No Category found with this id' });
        return;
    }
    res.json(CategoryData);
    })

    .catch(err => {
      console.log(err);
      res.status(500).json(err);
});    
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
//! used the same then for all three for delete and update is this ok?
   .then(CategoryData => {
    if (!CategoryData) {
        res.status(404).json({ message: 'No Category found with this id' });
        return;
    }
    res.json(CategoryData);
    })
  
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
