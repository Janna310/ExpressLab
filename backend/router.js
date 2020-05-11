const router = require("express").Router();
const logger = require("morgan");

router.use(logger());

//data array

const cartItems = [
  {
    id: 1,
    product: "jacket",
    price: 20,
    quantity: 30,
  },
  {
    id: 2,
    product: "pants",
    price: 20,
    quantity: 30,
  },
  {
    id: 3,
    product: "shirt",
    price: 10,
    quantity: 30,
  },
  {
    id: 4,
    product: "shoes",
    price: 43,
    quantity: 30,
  },
  {
    id: 5,
    product: "pants",
    price: 16,
    quantity: 30,
  },
  {
    id: 6,
    product: "pants",
    price: 22,
    quantity: 30,
  },
  {
    id: 7,
    product: "shirt",
    price: 40,
    quantity: 30,
  },
  {
    id: 8,
    product: "shoes",
    price: 13,
    quantity: 30,
  },
  {
    id: 9,
    product: "shirt",
    price: 20,
    quantity: 30,
  },
  {
    id: 10,
    product: "jacket",
    price: 25,
    quantity: 30,
  },
];

//end points
//get cart-items /api/cart-items -> basic return all items
router.get("/cart-items", (req, res) => {
  //setting up queries "if this is in - do this"
  const { maxPrice, prefix, pageSize } = req.query;
  let items;
  let cached = {}; //storing in memory
  if (maxPrice) {
    items = cartItems.filter((x) => x.price <= Number(maxPrice)); //whatever information this returns (anything lower then the highest price)
    cached["maxPrice"] = items.sort((a, b) => a - b); //save wat is returned and sort it
  }
  if (pageSize) {
    items = cached["maxPrice"]
      ? cached["maxPrice"].slice(0, Number(pageSize)) //if there are items filtered by max price and cached (saved), start from the top and return the specified "page size" number of items.
      : cartItems.slice(0, Number(pageSize)); //if there are no cached items - give only the specified "page size" number of items, from the original array
    cached["pageSize"] = items.sort((a, b) => a - b);
  }
  if (prefix) {
    items = cached["prefix"]
      ? cached["prefix"].filter((x) => x.product.startsWith(prefix)) //if it's already saved with a prefix.
      : cartItems.filter((x) => x.product.startsWith(prefix)); //if there isn't a previous request the product name starts with a specially request string e.g."jac" return all items that match that prefix (not a full word)
  }
  console.log("*** Cached Items ***", cached);

  res.json(items ? items : cartItems);
});

// get cart item specificity by id. make sure to filter by id and cast to a number
router.get("cart-items/:id", (req, res) => {
  const item = cartItems.filter((x) => x.id === Number(req.params.id));
  //response code
  if (item.length >= 1) {
    //id is found
    res.status(200);
    res.json(item);
  } else {
    //id not found
    res.status(404);
    res.json(`message: ID: ${req.params.id} not found`);
  }
});

//Post cartItems - adding to the array
router.post("/cart-items", (res, res) => {
  cartItems.push(req.body); //I am sending something along that I want to be added to the server
  res.status(201);
  res.json(cartItems);
});

//put request

router.put("/cart-items/:id", (req, res) => {
  const idx = cartItems.indexOf(req.params.id); //find index based off of item id
  cartItems.splice(idx, 1, req.body); // replace that specific items with information from the put request
  res.status(200);
  res.json(cartItems);
});

//delete item from the array
router.delete("cart-items/:id", (res, req) => {
  const idx = cartItems.indexOf(req.params.id);
  cartItems.splice(idx, 1, req.body);
  res.status(200);
  res.json(cartItems);
});

module.exports = router;
