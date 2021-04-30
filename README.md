<h3 align="center">
Currency Exchange</h3>

<hr style="height: 1px; border:none; color:#333; background" />

### By Isaac Moreno 👨‍💻

Click [here](https://isaacrmoreno.github.io/currency-exchange/) to view project.

### Description

This will be a basic currency converter site used to practice implementing API calls.

<hr style="height: 1px; border:none; color:#333;" />

### Prerequisites

- A text editor like [VScode](https://code.visualstudio.com/) | [Atom](https://atom.io/) | [Sublime](https://www.sublimetext.com/)
- [Node](https://nodejs.org/en/)

### Setup/Installation Instructions

1. Clone the repository: `% git clone https://github.com/isaacrmoreno/currency-exchange`
2. Navigate to the `currency-exchange` directory on your computer
3. Open with your preferred text editor to view code
4. To start a development server and view project in the browser:
   - Navigate to `currency-exchange` in your command line
   - Run command `npm install` to install dependencies
   - Optional: Run command `npm run build` to bundle files
   - Finally, run the command `npm run start` to start a development server

### API Setup Instructions

1. Navigate to [ExchangeRate-API](https://www.exchangerate-api.com/)
2. Input your email address and select the "Get Free Key" button.
3. Create a password and select "Accept Terms & Create API Key!"
4. Confirm your email address by selecting the link ExchangeRate-API sent to your inbox.

Now that you have access to your API key and ExchangeRate-API's dashboard we want to ensure your API key remains private before deployment. Please follow along with the remaining instructions:

1. Create a .env file in your root directory.
2. Add your API key to the .env file using the following format: API_KEY=YourAPIKey
3. Add .env to your .gitignore file.
4. Within your command line type the following:

   - `git status` to verify the .gitignore file has been modified.
   - `git add .gitignore`, `return` to stage .gitignore file.
   - `git commit -m "update .gitignore file"`.
   - `git push origin main`. To verify the .env file is being ignored you shouldn't see it anymore when you type `git status` within the command line.

5. From here you can build your project with confidence knowing your precious API key is tucked away in the privacy of its own little .env file - Now go seize your day you beautiful developer! 🎉

<hr style="height: 1px; border:none; color:#333;" />

### Bugs

No known Issues

### Technologies Used

<p align="center">
HTML | CSS | JavaScript | Bootstrap | jQuery | Webpack | Eslint | Babel | Jest | Node | VScode | GitHub</p>

### Contact

[GitHub](https://github.com/isaacrmoreno) | [Email](mailto:ipdxcreative@gmail.com)

<hr style="height: 1px; border:none; color:#333;" />

### Copyright and License

[MIT License](license) &copy; 2021 Isaac Moreno
