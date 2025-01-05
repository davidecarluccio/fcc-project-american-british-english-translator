American British Translator
===========================

Build a full stack JavaScript app that is functionally similar to this: [https://american-british-translator.freecodecamp.rocks/](https://american-british-translator.freecodecamp.rocks/). Working on this project will involve you writing your code using one of the following methods:

*   Clone [this GitHub repo](https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/) and complete your project locally.
*   Use [our Gitpod starter project](https://gitpod.io/?autostart=true#https://github.com/freeCodeCamp/boilerplate-project-american-british-english-translator/) to complete your project. Learn [how to share your Gitpod workspace to get help](https://forum.freecodecamp.org/t/how-to-use-gitpod-in-the-curriculum/668669#how-can-i-share-my-workspace-to-get-help-8).
*   Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

* * *

*   All logic can go into `/components/translator.js`
*   Complete the `/api/translate` route in `/routes/api.js`
*   Create all of the unit/functional tests in `tests/1_unit-tests.js` and `tests/2_functional-tests.js`
*   See the JavaScript files in `/components` for the different spelling and terms your application should translate
*   To run the tests automatically, set `NODE_ENV` to `test` without quotes in the `.env` file
*   To run the tests in the console, use the command `npm run test`.

Write the following tests in `tests/1_unit-tests.js`:

*   Translate `Mangoes are my favorite fruit.` to British English
*   Translate `I ate yogurt for breakfast.` to British English
*   Translate `We had a party at my friend's condo.` to British English
*   Translate `Can you toss this in the trashcan for me?` to British English
*   Translate `The parking lot was full.` to British English
*   Translate `Like a high tech Rube Goldberg machine.` to British English
*   Translate `To play hooky means to skip class or work.` to British English
*   Translate `No Mr. Bond, I expect you to die.` to British English
*   Translate `Dr. Grosh will see you now.` to British English
*   Translate `Lunch is at 12:15 today.` to British English
*   Translate `We watched the footie match for a while.` to American English
*   Translate `Paracetamol takes up to an hour to work.` to American English
*   Translate `First, caramelise the onions.` to American English
*   Translate `I spent the bank holiday at the funfair.` to American English
*   Translate `I had a bicky then went to the chippy.` to American English
*   Translate `I've just got bits and bobs in my bum bag.` to American English
*   Translate `The car boot sale at Boxted Airfield was called off.` to American English
*   Translate `Have you met Mrs Kalyani?` to American English
*   Translate `Prof Joyner of King's College, London.` to American English
*   Translate `Tea time is usually around 4 or 4.30.` to American English
*   Highlight translation in `Mangoes are my favorite fruit.`
*   Highlight translation in `I ate yogurt for breakfast.`
*   Highlight translation in `We watched the footie match for a while.`
*   Highlight translation in `Paracetamol takes up to an hour to work.`

Write the following tests in `tests/2_functional-tests.js`:

*   Translation with text and locale fields: POST request to `/api/translate`
*   Translation with text and invalid locale field: POST request to `/api/translate`
*   Translation with missing text field: POST request to `/api/translate`
*   Translation with missing locale field: POST request to `/api/translate`
*   Translation with empty text: POST request to `/api/translate`
*   Translation with text that needs no translation: POST request to `/api/translate`

Tests
-----

1\. You should provide your own project, not the example URL.

2\. You can `POST` to `/api/translate` with a body containing `text` with the text to translate and `locale` with either `american-to-british` or `british-to-american`. The returned object should contain the submitted `text` and `translation` with the translated text.

3\. The `/api/translate` route should handle the way time is written in American and British English. For example, ten thirty is written as "10.30" in British English and "10:30" in American English. The `span` element should wrap the entire time string, i.e. `<span class="highlight">10:30</span>`.

4\. The `/api/translate` route should also handle the way titles/honorifics are abbreviated in American and British English. For example, Doctor Wright is abbreviated as "Dr Wright" in British English and "Dr. Wright" in American English. See `/components/american-to-british-titles.js` for the different titles your application should handle.

5\. Wrap any translated spelling or terms with `<span class="highlight">...</span>` tags so they appear in green.

6\. If one or more of the required fields is missing, return `{ error: 'Required field(s) missing' }`.

7\. If `text` is empty, return `{ error: 'No text to translate' }`

8\. If `locale` does not match one of the two specified locales, return `{ error: 'Invalid value for locale field' }`.

9\. If `text` requires no translation, return `"Everything looks good to me!"` for the `translation` value.

10\. All 24 unit tests are complete and passing.

11\. All 6 functional tests are complete and passing.