const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['id','product_name','price','stock','category_id']
    }
  })
  .then({

  })

  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id','product_name','price','stock','category_id']
    }
  })

  .then({

  }) //! help

  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })

  .then(TagData =>json(TagData))
  
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
     {
    tag_name: req.body.tag_name
    },
    {
    where: req.params.id //! know its needed but not sure why
    }
  )
  // ! is the same then as your delete becuase if you cant find the tag ID to update you cant update same if you cant find tag to delete you cant delete 
  .then(TagData => {
    if (!TagData) {
        res.status(404).json({ message: 'No Tag found with this id' });
        return;
    }
    res.json(TagData);
    })

  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })

  .then(TagData => {
    if (!TagData) {
        res.status(404).json({ message: 'No Tag found with this id' });
        return;
    }
    res.json(TagData);
    })

  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
