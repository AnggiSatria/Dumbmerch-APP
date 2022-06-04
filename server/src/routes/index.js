const express = require('express');

const router = express.Router();

// Controller
const {
  addUsers,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product');

const {
  getTransactions,
  addTransaction,
  notification,
} = require('../controllers/transaction');

const {
  getCategories,
  addCategory,
  updateCategory,
  getCategory,
  deleteCategory,
} = require('../controllers/category');

const { getProfile } = require('../controllers/profile');

const { 
  register,
  login
} = require("../controllers/auth")

const { auth } = require("../../middleware/auth")

// Route
router.post('/user', addUsers);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.post("/register", register);
router.post("/login", login);

router.get('/profile', getProfile);

router.get('/products', getProducts);
router.get('/product/:id', getProduct);
router.post('/product', addProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

router.get('/transactions', auth, getTransactions);
router.post('/transaction', addTransaction);

router.post('/notification', notification);

router.get('/categories', getCategories);
router.get('/category/:id', getCategory);
router.post('/category', addCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);


module.exports = router;