const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  translate(text, locale) {
    let updatedText = text;

    // handle translation of words
    let translationDictionary;
    locale === "american-to-british"
      ? (translationDictionary = [americanToBritishSpelling, americanOnly])
      : (translationDictionary = [americanToBritishSpelling, britishOnly]);
    for (let i = 0; i < translationDictionary.length; i++) {
      for (const key of Object.keys(translationDictionary[i])) {
        let keyRegex = new RegExp(`${key}\\b(?!<\/span>)`, "gi");
        let valueRegex = new RegExp(
          `${translationDictionary[i][key]}\\b(?!<\/span>)`,
          "gi"
        );
        (locale === "british-to-american" && i == 1) ||
        locale === "american-to-british"
          ? (updatedText = updatedText.replace(
              keyRegex,
              '<span class="highlight">' +
                translationDictionary[i][key] +
                "</span>"
            ))
          : (updatedText = updatedText.replace(
              valueRegex,
              '<span class="highlight">' + key + "</span>"
            ));
      }
    }

    // handle translation of titles, refactor to use the object instead
    if (locale === "american-to-british") {
      updatedText = updatedText.replace(
        /Mr\./gi,
        '<span class="highlight">Mr</span>'
      );
      updatedText = updatedText.replace(
        /Mrs\./gi,
        '<span class="highlight">Mrs</span>'
      );
      updatedText = updatedText.replace(
        /Ms\./gi,
        '<span class="highlight">Ms</span>'
      );
      updatedText = updatedText.replace(
        /Mx\./gi,
        '<span class="highlight">Mx</span>'
      );
      updatedText = updatedText.replace(
        /Dr\./gi,
        '<span class="highlight">Dr</span>'
      );
      updatedText = updatedText.replace(
        /Prof\./gi,
        '<span class="highlight">Prof</span>'
      );
    } else {
      updatedText = updatedText.replace(
        /Mr\b/gi,
        '<span class="highlight">Mr.</span>'
      );
      updatedText = updatedText.replace(
        /Mrs\b/gi,
        '<span class="highlight">Mrs.</span>'
      );
      updatedText = updatedText.replace(
        /Ms\b/gi,
        '<span class="highlight">Ms.</span>'
      );
      updatedText = updatedText.replace(
        /Mx\b/gi,
        '<span class="highlight">Mx.</span>'
      );
      updatedText = updatedText.replace(
        /Dr\b/gi,
        '<span class="highlight">Dr.</span>'
      );
      updatedText = updatedText.replace(
        /Prof\b/gi,
        '<span class="highlight">Prof.</span>'
      );
    }

    // handle translation of time and highlight result
    let timeRegex =
      /([0-9][0-9]:[0-9][0-9])|(\d:\d\d)|(\d\d\.\d\d)|(\d\.\d\d)/g;
    if (timeRegex.test(updatedText)) {
      let timeMatch = updatedText.match(timeRegex);
      for (let i = 0; i < timeMatch.length; i++) {
        let timeMatchRegex = new RegExp(timeMatch[i]); // necessary or can simply use timeMatch[i] in the replace?
        let swappedTime = timeMatch[i];
        locale === "american-to-british"
          ? (swappedTime = swappedTime.replace(/:/, "."))
          : (swappedTime = swappedTime.replace(/\./, ":"));
        let highlightedTime =
          '<span class="highlight">' + swappedTime + "</span>";
        updatedText = updatedText.replace(timeMatchRegex, highlightedTime);
      }
    }

    let translated;
    text != updatedText ? (translated = true) : (translated = false);

    // console.log('Translation needed:', translated);
    // console.log('Original text:', text);
    // console.log('updatedText:', updatedText);

    return translated
      ? { text: text, translation: updatedText }
      : { text: text, translation: "Everything looks good to me!" };
  }
}

module.exports = Translator;