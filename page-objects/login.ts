import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;
    readonly pageUrl: string = "https://www.saucedemo.com/";
      
    constructor(page: Page) {
      
      this.page = page;
      this.usernameInput = page.locator('#user-name');
      this.passwordInput = page.locator('#password');
      this.loginBtn = page.locator('#login-button');
    
    }
  
    async goto() {
      await this.page.goto(this.pageUrl);
    }

    async login(user: string){
      //this.goto();
      switch(user){
        case 'standard':
          console.log ('User to log in is standard');
          await this.enterUsername("standard_user");
          await this.enterPassword("secret_sauce");
          await this.clickLoginButton();
          break;
  
        case 'locked-out':
          console.log ('User to log in is locked out');
                  
          break;  
      
        case 'problem':
          console.log ('User to log in is problem');
          
          break;
          
        case 'performance-glitch':
          console.log ('User to log in is performance glitch');
          
          break;  
      }
    }

    async enterUsername(username: string){
      await this.usernameInput.type(username);
    }

    async enterPassword(password: string){
      await this.passwordInput.type(password);
    }

    async clickLoginButton(){
      await this.loginBtn.click();
    }
  
      
    
}