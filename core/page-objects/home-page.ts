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
    private signInButton= By.className('my-account--signin--RiPQVPB');
    private registerButton= By.xpath('/html/body/div[8]/div/div/div[2]/div/div/div/p')
    private emailField= By.xpath('/html/body/div[9]/div/div[2]/div/div/div[1]/div[3]/div/span/span[1]/span[1]/input');
    private suggestedEmail= By.xpath('//*[@id="batman-dialog-wrap"]/div/div/div[1]/div[3]/div[2]/div/div/div/div/div[1]/div');
    private continueButton= By.className('cosmos-btn cosmos-btn-primary cosmos-btn-large cosmos-btn-block');
    private registerPassword= By.xpath('//*[@id="batman-dialog-wrap"]/div/div/div[4]/div/span/span[1]/input')
    private passwordField= By.id('fm-login-password');
    private finalRegisterButton= By.className('cosmos-btn cosmos-btn-primary cosmos-btn-large cosmos-btn-block nfm-create-submit');

    private slider = By.id('nc_1__bg');
    



    constructor(driver: WebDriver) {
        super(driver);
    }
    

    async closePopup(){
        await this.findElementAndClick(this.closePopupSubs)
    }
        
    async navigateToHomePage() {
        await this.driver.findElement(this.logo).click();
    }
    async hoverOverAccountIcon(){
        await this.hoverElement(await this.findElement(this.account_icon))
    }

    async clickSignIn(){
        await this.findElementAndClick(this.signInButton);
    }

    async clickRegister(){
        await this.findElementAndClick(this.registerButton);
    }
    
    async enterEmail(){
        await this.fillInputField(this.emailField, testData.loginData.email);
    }

    async clickSuggestedEmail(){
        await this.findElementAndClick(this.suggestedEmail);
    }

    async clickContinue(){
        await this.findElementAndClick(this.continueButton);
    }
    async enterPassword(){
        await this.fillInputField(this.passwordField, testData.loginData.password);
    }
    async enterRegisterPassword(){
        await this.fillInputField(this.registerPassword, testData.loginData.password);
    }
    async clickFinalRegisterButton(){
        await this.findElementAndClick(this.finalRegisterButton);
    }
    async sliderForRegistration(){
        const sliderElement = await this.driver.findElement(this.slider);
        const sliderWidth = await sliderElement.getSize().then((size) => size.width);
      
        await this.driver.actions({ bridge: true })
          .dragAndDrop(sliderElement, { x: sliderWidth, y: 0 })
          .perform();
    }
}