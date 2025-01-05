"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    let text = req.body.text;
    let locale = req.body.locale;
    console.log(text, locale);

    // perhaps can clean this up so only one res.json is used, or atleast one for the errors
    if (text === "") {
      res.json({ error: "No text to translate" });
    } else if (!text || !locale) {
      res.json({ error: "Required field(s) missing" });
    } else if (
      locale !== "american-to-british" &&
      locale !== "british-to-american"
    ) {
      res.json({ error: "Invalid value for locale field" });
    } else {
      res.json(translator.translate(text, locale));
    }
  });
};