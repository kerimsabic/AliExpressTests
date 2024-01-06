import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class HomePage extends BasePage {
    private closePopupSubs = By.className('_24EHh');
    private logo = By.className('pc-header--logoImg--mDbiT4k');
    private account_icon = By.className('my-account--menuItem--1GDZChA');
    private signInButton = By.className('my-account--signin--RiPQVPB');
    private registerButton = By.xpath('/html/body/div[8]/div/div/div[2]/div/div/div/p')
    private emailField = By.xpath('//*[@id="batman-dialog-wrap"]/div/div/div[1]/div[3]/div/span/span[1]/span[1]/input')
    private accountIcon = By.xpath('//*[@id="_full_container_header_23_"]/div[2]/div/div[2]/div[3]/span[1]/svg');
    private sigInEmailField= By.xpath('//*[@id="fm-login-id"]');
    private signInPasswordField=By.xpath('//*[@id="fm-login-password"]');
    private signInButton1=By.xpath('//*[@id="login-form"]/div[4]/button');
    // private signInPasswordField=By.id('fm-login-password');
   // private sigInEmailField= By.id('fm-login-id');
    //private googleRegisterButton= By.xpath('//*[@id="batman-dialog-wrap"]/div/div/section/div/div[2]/span');
    private suggestedEmail = By.xpath('//*[@id="batman-dialog-wrap"]/div/div/div[1]/div[3]/div[2]/div/div/div/div/div[1]/div');
    private continueButton = By.className('cosmos-btn cosmos-btn-primary cosmos-btn-large cosmos-btn-block');
    private registerPassword = By.xpath('//*[@id="batman-dialog-wrap"]/div/div/div[4]/div/span/span[1]/input')
    private passwordField = By.id('fm-login-password');
    private finalRegisterButton = By.className('cosmos-btn cosmos-btn-primary cosmos-btn-large cosmos-btn-block nfm-create-submit');
    private signInButton2 = By.className('cosmos-btn cosmos-btn-primary cosmos-btn-large cosmos-btn-block');
    private searchBar = By.xpath('//*[@id="search-words"]');
    private searchButton = By.className('search--submit--2VTbd-T');
    private suggestedPhoneCase = By.xpath('/html/body/div[1]/div[4]/div/div[1]/div[2]/div/div[1]/div/div/div/ul/li[1]/a');
    private redPhoneCaseObject = By.xpath('/html/body/div[6]/div[1]/div/div[2]/div[2]/div/div[1]/div/a');
    private titleOfRedPhoneCase = By.xpath('/html/body/div[6]/div[1]/div/div[2]/div[2]/div/div[1]/div/a/div[2]/div[1]/h1');
    private miuiFilter = By.xpath('/html/body/div[6]/div[1]/div/div[1]/div[2]/div[2]/span/span[3]/span[1]');
    private freeShippingFilter = By.xpath('/html/body/div[6]/div[1]/div/div[1]/div[1]/div[2]/span/span[2]/span[1]');
    private priceSort=By.xpath('/html/body/div[6]/div[1]/div/div[2]/div[1]/div/div/div[1]/div/div/div[3]');
    private redDimondsLetterPhoneCase=By.xpath('/html/body/div[6]/div[1]/div/div[2]/div[3]/div/div/div/a');
    private addToCartButtonOnImage=By.xpath('/html/body/div[6]/div[1]/div/div[2]/div[3]/div/div[1]/div/a/div[1]/div[2]');
    private addToCartButton=By.xpath('/html/body/div[12]/div[2]/div/div[2]/div/div/div/div[3]/div/div/div[6]/button');
    private cartButton=By.xpath('/html/body/div[4]/div/div/div[2]/div/div[2]/div[4]/a');
    private cartHeader=By.className('cart-header-title');
    private BuyButton=By.xpath('//*[@id="root"]/div/div[3]/div/div[2]/div/div/div[8]/button[1]');
    private placeOrderButton=By.xpath('//*[@id="placeorder_wrap__inner"]/div/div[2]/div[2]/div/div/div[3]/button');
    private AddresDiv=By.className('comet-modal-title');
    private deliverySpan=By.className('order-item-header-status-text');



    private feedback = By.xpath('//*[@id="pure-bx-feedback-btn"]')
    private sliderLocator = By.xpath('/html/body/center/div[1]/div/div/div/div[1]');





    constructor(driver: WebDriver) {
        super(driver);
    }


    async closePopup() {
        await this.findElementAndClick(this.closePopupSubs)
    }
    async navigateToOrderPage() {
        await this.driver.get(testData.url.order_page);
    }

    async navigateToHomePage() {
        await this.driver.findElement(this.logo).click();
    }
    async hoverOverAccountIcon() {
        await this.hoverElement(await this.findElement(this.account_icon))
    }
    async clickAccountIcon() {
        await this.findElementAndClick(this.accountIcon);
    }

    async clickSignIn() {
        await this.findElementAndClick(this.signInButton);
    }

    async clickRegister() {
        await this.findElementAndClick(this.registerButton);
    }

    /* async clickRegisterWithGoogle(){
         await this.findElementAndClick(this.googleRegisterButton)
     }*/

    async enterEmail() {
        await this.fillInputField(this.emailField, testData.loginData.email);
    }
    async enterSignInEmail() {
        await this.fillInputField(this.sigInEmailField, testData.loginData.email);
    }
    async enterSignInPassword() {
        await this.fillInputField(this.signInPasswordField, testData.loginData.password);
    }
    async clickSignInButton() {
        await this.findElementAndClick(this.signInButton1);
    }

    async clickSuggestedEmail() {
        await this.findElementAndClick(this.suggestedEmail);
    }

    async clickContinue() {
        await this.findElementAndClick(this.continueButton);
    }
    async enterPassword() {
        await this.fillInputField(this.passwordField, testData.loginData.password);
    }
    async enterRegisterPassword() {
        await this.fillInputField(this.registerPassword, testData.loginData.password);
    }
    async clickFinalRegisterButton() {
        await this.findElementAndClick(this.finalRegisterButton);
    }
    async clickFeedback() {
        await this.findElementAndClick(this.feedback)
    }

    async moveSliderToRight() {
        const slider = await this.findElementAndClick(this.sliderLocator);
        const offset = 350;
        await this.dragAndDrop(slider, offset, 0);
    }

    async dragAndDrop(element, offsetX, offsetY) {
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: element }).press().move({ x: offsetX, y: offsetY }).release().perform();
    }

    async clickSignIn2() {
        await this.findElementAndClick(this.signInButton2)
    }

    async enterSearch() {
        await this.fillInputField(this.searchBar, "red phonecase");
    }
    async clickSiggestedCase() {
        await this.findElementAndClick(this.suggestedPhoneCase);
    }
    async clickSearchButton() {
        await this.findElementAndClick(this.searchButton);
    }
    async clickOnPhoneCase() {
        await this.findElementAndClick(this.redPhoneCaseObject);
    }
    async checkIfTitleCorrect() {
        const element = await this.findElement(this.titleOfRedPhoneCase);
        if (element) {
            const textContent: string = await element.getText();
            const lowerCaseText = textContent.toLowerCase();
            console.log(lowerCaseText);
            expect(String(lowerCaseText).includes("red") && (String(lowerCaseText).includes("case") || String(lowerCaseText).includes("phonecase"))).toBe(true);
        }

    }
    async clickBuyButton(){
        await this.findElementAndClick(this.BuyButton);
    }
    async clickPlaceOrder(){
        await this.findElementAndClick(this.placeOrderButton);
    }
    async applyFilter1() {
        await this.findElementAndClick(this.miuiFilter);
    }
    async applyFilter2() {
        await this.findElementAndClick(this.freeShippingFilter);
    }
    async applySort(){
        await this.findElementAndClick(this.priceSort);
    }

    async clickOnRedDimondsLetterCase(){
        await this.findElementAndClick(this.redDimondsLetterPhoneCase);
    }
    async clickAddToCart(){
        await this.waitAndClick(this.addToCartButtonOnImage,2000);
    }
    async clickAddToCart2(){
        await this.waitAndClick(this.addToCartButton,2000);
    }
    async clickOnCartButton(){
        await this.findElementAndClick(this.cartButton);
    }
    async checkIfElementInCart(){
        await this.checkMatchingElements(this.cartHeader, "Shopping Cart (1)")
    }
    async checkDiv(){
        await this.waitForElement(this.AddresDiv,50000);
        await this.checkMatchingElements(this.AddresDiv, "Add New Address");
    
    }
    async checkDeliverySpan(){
        await this.waitForElement(this.deliverySpan,50000);
        await this.checkMatchingElements(this.deliverySpan, "Awaiting delivery");
    }


}