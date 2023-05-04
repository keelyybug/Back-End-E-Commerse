// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignkey: 'category_id',
});
// Categories have many Products one to many
Category.hasMany(Product,{
  foreignkey: '', //???? not sure what to put as these foreign keys
});
// Products belongToMany Tags (through ProductTag)many to many
Product.belongsToMany(Tag,{
  through: ProductTag, //??????
  foreignkey: '',
});
// Tags belongToMany Products (through ProductTag) many to many
Tag.belongsToMany(Product,{
  through: ProductTag,
  foreignkey: '',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
