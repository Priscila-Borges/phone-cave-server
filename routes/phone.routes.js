const router = require("express").Router();
const phonesJson = require("../data/phones.json")

router.get("/phones", (req, res, next) => {
    res.json(phonesJson)
});

router.get("/phones/:id", (req, res, next) => {
    const { phoneId } = req.params;

    Phone.findById(phoneId)
        .then(phone => res.status(200).json(phone))
        .catch(error => res.json(error));
});


module.exports = router;