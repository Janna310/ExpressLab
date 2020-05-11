const router = require("express").Router();
const logger = require("morgan");

router.use(logger());

//data array

const items = [
  {
    id: 1,
    prefix: "shirt",
    price: "20.00",
  },
  {
    id: 2,
    prefix: "shirt",
    price: "20.00",
  },
  {
    id: 3,
    prefix: "shirt",
    price: "25.00",
  },
  {
    id: 4,
    prefix: "shirt",
    price: "28.00",
  },
  {
    id: 5,
    prefix: "pant",
    price: "30.00",
  },
  {
    id: 6,
    prefix: "pant",
    price: "26.00",
  },
  {
    id: 7,
    prefix: "pant",
    price: "35.00",
  },
  {
    id: 8,
    prefix: "accessory",
    price: "35.00",
  },
  {
    id: 9,
    prefix: "accessory",
    price: "35.00",
  },
  {
    id: 10,
    prefix: "accessory",
    price: "10.00",
  },
];

//talking to the front end - catch all for requests
router.get("/api/items", (req, res) => {
  console.log("request path", req.path);
});

//filtering items by specific param - prefix
router.get("/api/items/prefix", (req, res) => {
  console.log("request path", req.path);
  const itemPrefix = items.filter((x) => x.prefix === req.params.prefix);
  res.json(itemPrefix);
});

//filtering items by specific param - maxPrice
router.get("/api/items/price", (req, res) => {
  console.log("request path", req.path);
  const itemMaxPrice = items.filter((x) => x.maxPrice === req.params.maxPrice);
  res.json(itemMaxPrice);
});

//looking for ID specific
router.get("/api.items/:id");

module.exports = router;
