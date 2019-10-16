const router = require("express").Router();
const Mothers = require("./mothersHelper");

// register mother
router.post("/register", (req, res) => {
  let data = req.body;

  Mothers.addMother(data)
    .then(mother => {
      res.status(201).json({ message: "Added a mother" });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// get all mothers
router.get("/all", (req, res) => {
  Mothers.getMothers()
    .then(mothers => {
      res.status(200).json(mothers);
    })
    .catch(err => res.status(400).json(err));
});

// edit a mother based on ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;

  Mothers.updateMother(id, data)
    .then(mothers => {
      res.status(200).json(mothers);
    })
    .catch(err => res.status(500).json(err));
});

// delete a mother based on ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Mothers.deleteMother(id)
    .then(mothers => {
      res.status(200).json({ message: "mother deleted!" });
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
