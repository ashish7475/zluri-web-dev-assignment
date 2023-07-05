

# Web development assignment for Zluri
Here is the Site you'll work on for this assignment: <a href="https://webdevelopmentassignmentmain.gatsbyjs.io/" target="_blank">https://webdevelopmentassignmentmain.gatsbyjs.io/</a>
1. For the assignment you are required to take this gatsby site and make neccessary changes.
2. Follow the installation instructions below and clone the github repo on your system.
3. The questions for the assignment are on the homepage of the site itself. You can view them once the local site is up and running.
4. Follow the instructions on the homepage and solve the questions as required.
5. Once the solutions are done follow the hosting instructions to host the site on gatsby cloud.
6. Once done, share the link with us.


## Installation

Install the latest version of NodeJs: <a href="https://nodejs.org/en" target="_blank">Download here</a>

Install VS Code and open the terminal in a new folder

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Create a new Gatsby site with the repo.

In a new file: 

   ```sh
   gatsby new web-development-assignment https://github.com/harshavardhan-zluri/web-development-assignment
   ```
in widows, if it shows a execution policy error, use the following code:

   ```sh
   Set-ExecutionPolicy Unrestricted -Scope Process
   ```

3. Once installed, you can begin developing your site.

   ```sh
   cd web-development-assignment
   npm i --legacy-peer-deps
   gatsby develop
   ```

or you can use this instead of gatsby develop:

   ```sh
   npm run develop
   ```

4. Once this is successful, you can access the live site at <a href="http://localhost:8000/" target="_blank"> http://localhost:8000/ </a>

5. Start the assignment and follow the instructions as on the homepage.


## Hosting Site on Gatsby cloud

1. Open github with your account and create a repo called zluri-web-dev-assignment

2. In VS Code initiate Git

   ```sh
   git init
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_REPO_NAME.git
   git branch -M main
   git add .
   git commit -m "first commit"
   git push -u origin main
   ```

   Your local repository should be snced with your github repo.
   Now you can make changes to the local site and push it to your remote Github repo.
   
3. Open Gatsby Cloud <a href="https://www.gatsbyjs.com/dashboard/" target="_blank" > Click here </a>

   Create a new account
   <img src="https://www.gatsbyjs.com/static/9c130998b561f1770834309715c99d5b/321ea/01-create-a-site-button.png" alt="gatsby cloud" />


4. Click on add a site and connect your github repository

   It'll ask to add gatsby clloud to your github account, Click install.
   Then import the repository.

5. Once you import it'll take you to the configure screen

   <img src="https://www.gatsbyjs.com/static/61bb418dbf509217b076a19507374eef/321ea/05-add-site-details.png" alt="configure" />
   
6. Scroll to the bottom and click on build site

   You'll be able to see your site building:
   <img src="https://www.gatsbyjs.com/static/d82ecf06f74d4195697a9a4c9253049d/321ea/07-site-page.png" alt="build" />

   Once done, you'll be able to open the link of your site hosted on gatsby cloud.

## Submission

Submit this site link along with any thoughts or comments you would like to add.
   
