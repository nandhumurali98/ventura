const db = require("../models");
const Product = db.product;

exports.create = (req,res)=>{
  if(!req.body.name && !req.body.category){
   return res.status(400).send({message:"Cannot be empty"});
  }
  const product = new Product({
    category:req.body.category,
    name:req.body.name,
    image_path:req.body.image_path,
    price:req.body.price
  });
  product
    .save(product)
    .then(data =>{
      res.send(data);
    })
    .catch(err =>{
      res.status(500).send({
        message:
          err.message || "Error Occured while creating the Product"
      });
    });
};
exports.findAll = (req, res) => {
  const category = req.query.category;
  var condition = category ? { category: { $regex: new RegExp(category), $options: "i" } } : {};

  Product.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    });
};
exports.findOne=(req,res)=>{
  const id = req.params.id;

  Product.findById(id)
   .then(data => {
     if(!data)
      res.status(404).send({message:"Not Found!"});
     else res.send(data);
   })
   .catch(err =>{
     res
       .status(500)
       .send({message:"Error retrieving Product"})
   });
};
exports.update=(req,res)=>{
  if (!req.body) {
    return res.status(400).send({
      message: "Cannot be empty!"
    });
  }

  const id = req.params.id;

  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Product. Maybe Product was not found!`
        });
      } else res.send({ message: "Product updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Product"
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params._id;

  Product.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
        });
      } else {
        res.send({
          message: "Product was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};exports.deleteAll=(req,res)=>{
  Product.deleteMany({})
  .then(data => {
    res.send({
      message: `${data.deletedCount} Product deleted successfully!`
    });
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error occurred while removing all products."
    });
  });
};
