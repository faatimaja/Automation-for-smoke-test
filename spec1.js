describe('Sign in page', function() {

    it('Create an account', function () {
        //protractor for non-angular apps
        browser.waitForAngularEnabled(false);
        //Link of the web app
        browser.get('http://automationpractice.com/index.php');
        //CLICK SIGN IN BUTTON
        element(by.css('.login')).click();
        //Enter mail to register
        element(by.css('.account_input')).sendKeys('faatimaja+test01@gmail.com');
        element(by.buttonText('Create an account')).click().then(function () {
            browser.sleep(3000);
        });
        //CREATE AN ACCOUNT
        //Your personal information
        element(by.id('id_gender1')).click();
        element(by.id('customer_firstname')).sendKeys('Fatima');
        element(by.id('customer_lastname')).sendKeys('Ja').click();
        element(by.id('passwd')).sendKeys('test12345');
        element(by.name('days')).click();
        element(by.id('uniform-days')).all(by.tagName('option')).get(5).click();
        element(by.id('months')).all(by.tagName('option')).get(7).click();
        element(by.id('uniform-years')).all(by.tagName('option')).get(20).click()
        // element(by.id('newsletter')).click();
        // element(by.id('uniform-optin')).click();
        //Your address
        element(by.id('firstname')).sendKeys('Fatima');
        element(by.id('lastname')).sendKeys('Ja');
        element(by.id('address1')).sendKeys('My Address');
        element(by.id('city')).sendKeys('Beverly Hills');
        element(by.id('postcode')).sendKeys('90210');
        element(by.id('id_state')).all(by.tagName('option')).get(1).click();
        element(by.id('other')).sendKeys('Xxxxxxx yyyyyy zzzzz 10.');
        element(by.id('phone_mobile')).sendKeys('1234567890');
        element(by.id('alias')).sendKeys('My address');
        element(by.id('submitAccount')).click().then(function () {
            browser.sleep(5000);
        });
    });

    it('Sign out', function () {
        //SIGN OUT
        element(by.css('.logout')).click();
    });

    it('Log in', function () {
        //LOGIN
        element(by.css('.login')).click().then(function () {
            browser.sleep(3000);
        });
        element(by.id('email')).sendKeys('faatimaja+test01@gmail.com');
        element(by.id('passwd')).sendKeys('test12345');
        element(by.css('.icon-lock')).click().then(function () {
            browser.sleep(3000);
        });
    });

    it('Order a product', function () {
        //ORDER A PRODUCT
        //Click the logo to come to the first page
        element(by.css('.logo')).click().then(function(){
            browser.sleep(5000);
        })
        //Select a product
        element(by.css('.left-block')).click().then(function(){
            browser.sleep(5000);
        })
        element(by.name('Submit')).click().then(function(){
            browser.sleep(5000);
        })
        element(by.css('.button-medium')).click().then(function(){
            browser.sleep(3000);
        })
        element(by.css('.standard-checkout')).click().then(function(){
            browser.sleep(3000);
        })
        element(by.css('[name="processAddress"]')).click().then(function (){
            browser.sleep(3000);
        });
        element(by.css('[name="cgv"]')).click();
        element(by.css('[name="processCarrier"]')).click().then(function (){
            browser.sleep(3000);
        });
        element(by.css('.cheque')).click().then(function(){
            browser.sleep(3000);
        });
        //This part does not work... but should
        element(by.css('.icon-chevron-right')).click().then(function(){
            browser.sleep(3000);
        })
    });
});
