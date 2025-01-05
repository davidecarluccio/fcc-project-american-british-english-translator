const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
  // Translate Mangoes are my favorite fruit. to British English
  test("Translate Mangoes are my favorite fruit. to British English", function () {
    let text = "Mangoes are my favorite fruit.";
    let locale = "american-to-british";
    let expectedOutput =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate I ate yogurt for breakfast. to British English
  test("Translate I ate yogurt for breakfast. to British English", function () {
    let text = "I ate yogurt for breakfast.";
    let locale = "american-to-british";
    let expectedOutput =
      'I ate <span class="highlight">yoghurt</span> for breakfast.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate We had a party at my friend's condo. to British English
  test("Translate We had a party at my friend's condo. to British English", function () {
    let text = "We had a party at my friend's condo.";
    let locale = "american-to-british";
    let expectedOutput =
      'We had a party at my friend\'s <span class="highlight">flat</span>.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate Can you toss this in the trashcan for me? to British English
  test("Translate Can you toss this in the trashcan for me? to British English", function () {
    let text = "Can you toss this in the trashcan for me?";
    let locale = "american-to-british";
    let expectedOutput =
      'Can you toss this in the <span class="highlight">bin</span> for me?';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate The parking lot was full. to British English
  test("Translate The parking lot was full. to British English", function () {
    let text = "The parking lot was full.";
    let locale = "american-to-british";
    let expectedOutput =
      'The <span class="highlight">car park</span> was full.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate Like a high tech Rube Goldberg machine. to British English
  test("Translate Like a high tech Rube Goldberg machine. to British English", function () {
    let text = "Like a high tech Rube Goldberg machine.";
    let locale = "american-to-british";
    let expectedOutput =
      'Like a high tech <span class="highlight">Heath Robinson device</span>.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate To play hooky means to skip class or work. to British English
  test("Translate To play hooky means to skip class or work. to British English", function () {
    let text = "To play hooky means to skip class or work.";
    let locale = "american-to-british";
    let expectedOutput =
      'To <span class="highlight">bunk off</span> means to skip class or work.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate No Mr. Bond, I expect you to die. to British English
  test("Translate No Mr. Bond, I expect you to die. to British English", function () {
    let text = "No Mr. Bond, I expect you to die.";
    let locale = "american-to-british";
    let expectedOutput =
      'No <span class="highlight">Mr</span> Bond, I expect you to die.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate Dr. Grosh will see you now. to British English
  test("Translate Dr. Grosh will see you now. to British English", function () {
    let text = "Dr. Grosh will see you now.";
    let locale = "american-to-british";
    let expectedOutput =
      '<span class="highlight">Dr</span> Grosh will see you now.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate Lunch is at 12:15 today. to British English
  test("Translate Lunch is at 12:15 today. to British English", function () {
    let text = "Lunch is at 12:15 today.";
    let locale = "american-to-british";
    let expectedOutput =
      'Lunch is at <span class="highlight">12.15</span> today.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate We watched the footie match for a while. to American English
  test("Translate We watched the footie match for a while. to American English", function () {
    let text = "We watched the footie match for a while.";
    let locale = "british-to-american";
    let expectedOutput =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate Paracetamol takes up to an hour to work. to American English
  test("Translate Paracetamol takes up to an hour to work. to American English", function () {
    let text = "Paracetamol takes up to an hour to work.";
    let locale = "british-to-american";
    let expectedOutput =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate First, caramelise the onions. to American English
  test("Translate First, caramelise the onions. to American English", function () {
    let text = "First, caramelise the onions.";
    let locale = "british-to-american";
    let expectedOutput =
      'First, <span class="highlight">caramelize</span> the onions.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate I spent the bank holiday at the funfair. to American English
  test("Translate I spent the bank holiday at the funfair. to American English", function () {
    let text = "I spent the bank holiday at the funfair.";
    let locale = "british-to-american";
    let expectedOutput =
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate I had a bicky then went to the chippy. to American English
  test("Translate I had a bicky then went to the chippy. to American English", function () {
    let text = "I had a bicky then went to the chippy.";
    let locale = "british-to-american";
    let expectedOutput =
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate I've just got bits and bobs in my bum bag. to American English
  test("Translate I've just got bits and bobs in my bum bag. to American English", function () {
    let text = "I've just got bits and bobs in my bum bag.";
    let locale = "british-to-american";
    let expectedOutput =
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate The car boot sale at Boxted Airfield was called off. to American English
  test("Translate The car boot sale at Boxted Airfield was called off. to American English", function () {
    let text = "The car boot sale at Boxted Airfield was called off.";
    let locale = "british-to-american";
    let expectedOutput =
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate Have you met Mrs Kalyani? to American English
  test("Translate Have you met Mrs Kalyani? to American English", function () {
    let text = "Have you met Mrs Kalyani?";
    let locale = "british-to-american";
    let expectedOutput =
      'Have you met <span class="highlight">Mrs.</span> Kalyani?';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate Prof Joyner of King's College, London. to American English
  test("Translate Prof Joyner of King's College, London. to American English", function () {
    let text = "Prof Joyner of King's College, London.";
    let locale = "british-to-american";
    let expectedOutput =
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Translate Tea time is usually around 4 or 4.30. to American English
  test("Translate Tea time is usually around 4 or 4.30. to American English", function () {
    let text = "Tea time is usually around 4 or 4.30.";
    let locale = "british-to-american";
    let expectedOutput =
      'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  /* ********************************* */

  // Highlight translation in Mangoes are my favorite fruit.
  test("Highlight translation in Mangoes are my favorite fruit", function () {
    let text = "Mangoes are my favorite fruit.";
    let locale = "american-to-british";
    let expectedOutput =
      'Mangoes are my <span class="highlight">favourite</span> fruit.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Highlight translation in I ate yogurt for breakfast.
  test("Highlight translation in I ate yogurt for breakfast", function () {
    let text = "I ate yogurt for breakfast.";
    let locale = "american-to-british";
    let expectedOutput =
      'I ate <span class="highlight">yoghurt</span> for breakfast.'; // brekkie or not...?
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Highlight translation in We watched the footie match for a while.
  test("Highlight translation in We watched the footie match for a while", function () {
    let text = "We watched the footie match for a while.";
    let locale = "british-to-american";
    let expectedOutput =
      'We watched the <span class="highlight">soccer</span> match for a while.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });

  // Highlight translation in Paracetamol takes up to an hour to work.
  test("Highlight translation in Paracetamol takes up to an hour to work", function () {
    let text = "Paracetamol takes up to an hour to work.";
    let locale = "british-to-american";
    let expectedOutput =
      '<span class="highlight">Tylenol</span> takes up to an hour to work.';
    let translation = translator.translate(text, locale);
    assert.equal(
      translation.translation,
      expectedOutput,
      "The translation should equal the expected output"
    );
  });
});