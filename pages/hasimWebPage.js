exports.HasimWebPage = class HasimWebPage {
  constructor(page) {
    this.page = page;
    this.aboutMe_button = page.getByRole("link", { name: "ABOUT ME" });
    this.contacs_button = page.getByRole("link", { name: "CONTACTS" });
    this.yourName_textBox = page.getByPlaceholder("Your name");
    this.yourEmail_textBox = page.getByPlaceholder("Your email address");
    this.yourMessage_textBox = page.getByPlaceholder("Enter your message");
    this.submit_button = page.getByRole("button", { name: "Submit" });
  }
  async goToHasimWebPage() {
    await this.page.goto("https://www.hasimkirkpinar.com/");
  }

  async contacs(name, email, message) {
    await this.contacs_button.click();
    await this.yourName_textBox.fill(name);
    await this.yourEmail_textBox.fill(email);
    await this.yourMessage_textBox.fill(message);
    await this.submit_button.click();
  }
};
