# 09 Node.js Homework: Professional README Generator

⋘ ──── ∗⋅◦∘◈\[[MissNG README Generator](#Mock-Up)\]◈∘◦⋅∗ ──── ⋙

Use my README generator to easily create a high-quality README right from your terminal! This command-line application will dynamically generate a professional README.md file by registering a user's input to a list of prompts.

Technologies utilised include...
+ Javascript
+ [GitBash](https://gitforwindows.org/)
+ Node
+ [Inquirer package](https://www.npmjs.com/package/inquirer)

## ≫ ──── ≪•◦ Objectives ◦•≫ ──── ≪

```
+ Assist developers in creating READMEs for their open source projects
+ Run a README generator from Terminal using node.js
+ Provide a README that is not only functional but looks professional
```

## ≫ ──── ≪•◦ Mock-Up ◦•≫ ──── ≪

The following image demonstrates the application functionality:

![README Generator demo](./utils/_____.gif)

### ≫ ──── ≪•◦ Overview of Code Functionality ◦•≫ ──── ≪

1. Command-line application runs when initiiated & accepts user input.

2. Application generates README from user-requested information and includes title of user project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

3. Application allows user to choose a license from a selection of choices and includes a badge for that license near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

4. Application registers user GitHub username and adds a section to the README entitled Questions, with a link to user's GitHub profile.

5. Application also prompts user for email address to include under Questions section with instructions on how user can be contacted.

6. Clicking on any link in the Table of Contents will direct user to the corresponding section of the README.

### ≫ ──── ≪•◦ Usability ◦•≫ ──── ≪

* Invoke the application by using the following command:

```bash
node index.js
```

* Answer the following prompts accordingly:

```
? What is your GitHub username? (w/o @)
? What is your email address?
? What is the title of your project? 
? Write a short description for your project. 
? What steps are required to install your project? 
? Provide instructions and usage examples of your project. 
? Choose a license for your project.
? If applicable, provide guidelines on how other developers can contribute to your project.
? If applicable, provide any tests written for your application and provide examples on how to run them.
```

* A "Thank you" and confirmation message will display in Terminal to advise that the README has been created successffully
**Note:** _the markdown file will be generated in the demo folder_

* Navigate to the **demo** folder and open the _demoREADME.md_ file to see your generated README!