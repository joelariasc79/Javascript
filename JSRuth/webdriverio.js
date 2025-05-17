Webdriverio

// Single Element
// const element = $('css selector');

// css selectors:
const elementById = $('#my-id'); // Shorthand for $('#my-id')
const elementByClassName = $('.my-class'); // Shorthand for $('.my-class')
const elementByLinkText = $('=hola link amigo'); // Exact match
const elementByPartialLinkText = $('*=amigo'); // Partial match
const elementByTagName = $('<p>');


<a href="http://wwww.gmail.com">hola link amigo</a>


const elementByXPath = $('//div[@class="my-class"]');
const elementByAriaLabel = $('[aria-label="Submit"]');

// Multiple Elements
const elements = $$('css selector');

// Interacting with Elements
element.click();
element.setValue('some text');
const text = element.getText();
const isDisplayed = element.isDisplayed();

// Example: Login Form
const usernameField = $('#username');
const passwordField = $('#password');
const loginButton = $('button[type="submit"]');

usernameField.setValue('myusername');
passwordField.setValue('mypassword');
loginButton.click();

// Chaining Selectors (for more specificity)
const nestedElement = $('.parent-div').$('.child-element');

// Waiting for Elements
browser.waitUntil(() => {
    return $('#my-element').isDisplayed();
}, { timeout: 5000, timeoutMsg: 'Element not displayed after 5 seconds' });

// Finding elements within another element
const form = $('#myForm');
const submitButtonWithinForm = form.$('button[type="submit"]');

// Using `nth-child` with CSS Selectors
const thirdListItem = $$('ul li')[2]; // Index starts at 0

// Dynamic Selectors (using variables)
const dynamicId = 'item-123';
const dynamicElement = $(`#${dynamicId}`);

// Important Considerations:

* **Specificity:**  Be as specific as possible with your selectors to avoid targeting the wrong element.
* **Maintainability:**  Choose selectors that are less likely to break when the website changes.  IDs and well-structured CSS are generally preferred.
* **Performance:**  CSS selectors are usually faster than XPath.
* **Waiting:** Use `browser.waitUntil` or similar methods to ensure elements are loaded before interacting with them.  This is crucial for dynamic web pages.
* **Debugging:** If your selectors aren't working, use your browser's developer tools (right-click on the element -> Inspect) to inspect the HTML and test your selectors directly in the console.  This is the best way to troubleshoot selector issues.







// Mocha:





describe('My Test Suite', () => {
    it('should login successfully', async () => {
        await browser.url('/login');

        const usernameField = $('#username');
        const passwordField = $('#password');
        const loginButton = $('button[type="submit"]');

        await usernameField.setValue('myuser');
        await passwordField.setValue('mypassword');
        await loginButton.click();

        // Assert that the user is logged in (example)
        const welcomeMessage = $('#welcome-message');
        await expect(welcomeMessage).toHaveText('Welcome, myuser!');
    });
});