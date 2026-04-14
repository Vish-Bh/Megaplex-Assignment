// helloRoutes.js
const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("WHY");
})
router.get("/hello", (req, res) => {
  res.send("Hello");
});

module.exports = router;