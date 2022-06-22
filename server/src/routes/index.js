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

const { auth } = require("../../middleware/auth");
const { uploadFile } = require('../../middleware/uploadFile');

// Route
router.post('/user', addUsers);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

router.post("/register", register);
router.post("/login", login);

router.get('/profile', getProfile);

router.get('/products', auth, getProducts);
router.get('/product/:id', auth, getProduct);
router.post('/product', auth, uploadFile("image"), addProduct);
router.patch('/product/:id', auth, updateProduct);
router.delete('/product/:id', auth, deleteProduct);

router.get('/transactions', getTransactions);
router.post('/transaction', addTransaction);

router.post('/notification', notification);

router.get('/categories', auth, getCategories);
router.get('/category/:id', auth, getCategory);
router.post('/category', auth, addCategory);
router.patch('/category/:id', auth, updateCategory);
router.delete('/category/:id', auth, deleteCategory);


module.exports = router;