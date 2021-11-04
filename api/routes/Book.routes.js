const router = require("express").Router();

const {
  AddBook,
  FetchBook,
  DeleteBook,
  UpdateBook,
} = require("../DAO/Book.dao");
router.get("/", async (_, res) => {
  try {
    const result = await FetchBook();
    res.send(result);
  } catch (ex) {
    res.status(500).send(ex);
  }
});
router.post("/", async (req, res) => {
  try {
    let result = await AddBook(req.body);
    console.log("the results are", result);

    res.send(result);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

router.put("/", async (req, res) => {
  try {
    const book = await UpdateBook(req.body);
    res.send(book);
  } catch (ex) {
    console.log(ex);
    res.status(500).send(ex);
  }
});

router.delete("/", async (req, res) => {
  try {
    const book = await DeleteBook(req.body.id);
    res.send("book deleted");
  } catch (ex) {
    console.log(ex);
    res.status(500).send(ex);
  }
});

module.exports = router;
