const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  // Translation with text and locale fields: POST request to /api/translate
  test("Translation with text and locale fields: POST request to /api/translate", function () {
    chai
      .request(server)
      .post("/api/translate")
      .send({
        text: "Text to translate eon artic",
        locale: "american-to-british",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.isObject(res.body, "response should be an object");
        assert.property(
          res.body,
          "text",
          "response object should contain a text property"
        );
        assert.property(
          res.body,
          "translation",
          "response object should contain a translation property"
        );
        assert.equal(
          res.body.text,
          "Text to translate eon artic",
          "text value should be equal to input text value"
        );
        assert.equal(
          res.body.translation,
          'Text to translate <span class="highlight">aeon</span> artic',
          "translation value should be the correct translation for the given text value"
        );
      });
  });

  // Translation with text and invalid locale field: POST request to /api/translate
  test("Translation with text and invalid locale field: POST request to /api/translate", function () {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "Text to translate eon artic", locale: "moon" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.isObject(res.body, "response should be an object");
        assert.property(
          res.body,
          "error",
          "response object should contain an error property"
        );
        assert.equal(
          res.body.error,
          "Invalid value for locale field",
          "error value should correspond to the error expected for an invalid locale field"
        );
      });
  });

  // Translation with missing text field: POST request to /api/translate
  test("Translation with missing text field: POST request to /api/translate", function () {
    chai
      .request(server)
      .post("/api/translate")
      .send({ locale: "american-to-british" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.isObject(res.body, "response should be an object");
        assert.property(
          res.body,
          "error",
          "response object should contain an error property"
        );
        assert.equal(
          res.body.error,
          "Required field(s) missing",
          "error value should correspond to the error expected for a missing text field"
        );
      });
  });

  // Translation with missing locale field: POST request to /api/translate
  test("Translation with missing locale field: POST request to /api/translate", function () {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "Text to translate eon artic" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.isObject(res.body, "response should be an object");
        assert.property(
          res.body,
          "error",
          "response object should contain an error property"
        );
        assert.equal(
          res.body.error,
          "Required field(s) missing",
          "error value should correspond to the error expected for a missing locale field"
        );
      });
  });

  // Translation with empty text: POST request to /api/translate
  test("Translation with empty text: POST request to /api/translate", function () {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "", locale: "british-to-american" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.isObject(res.body, "response should be an object");
        assert.property(
          res.body,
          "error",
          "response object should contain an error property"
        );
        assert.equal(
          res.body.error,
          "No text to translate",
          "error value should correspond to the error expected for an empty text field"
        );
      });
  });

  // Translation with text that needs no translation: POST request to /api/translate
  test("Translation with text that needs no translation: POST request to /api/translate", function () {
    chai
      .request(server)
      .post("/api/translate")
      .send({ text: "Hello world", locale: "british-to-american" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, "application/json");
        assert.isObject(res.body, "response should be an object");
        assert.property(
          res.body,
          "text",
          "response object should contain a text property"
        );
        assert.property(
          res.body,
          "translation",
          "response object should contain a translation property"
        );
        assert.equal(
          res.body.text,
          "Hello world",
          "text value should be equal to input text value"
        );
        assert.equal(
          res.body.translation,
          "Everything looks good to me!",
          "translation value should be the correct value for a text that requires no translation"
        );
      });
  });
});