![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Shuttle - a project tool for handweavers

## Description

_Duration: 2 Week Sprint_

Shuttle takes the often scattered process of devising brand-new handweaving projects and lends digital simplicity and organization. Equipped with a calculator to determine yarn needs, photo album and notepad, Shuttle is an application that makes devising, organizing, and documenting weaving projects easy. 

To see the fully functional site, please visit: https://fierce-thicket-39020.herokuapp.com/#/home


## Screen Shots

![Homepage](/public/screenshot-login.png)
![Dashboard](/public/screenshot-dashboard.png)
![DraftFile](/public/screenshot-file-view.png)
![Calculator](/public/screenshot-calculator.png)


## Prerequisites

The following software is required to install Shuttle:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)


## Installation

1. Create a database named `shuttle`
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries
3. Open up your editor of choice and run an `npm install`
4. If Postgres is not already running, start it by entering `brew services start postgresql` into the terminal
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab for you!


## Usage

1. Issa is a handweaver, meaning she creates textiles by hand using a floor loom. As she creates one-of-a-kind designs, she uses Shuttle to help her organize each unique weaving pattern (which is called a 'draft' in the biz).
2. After Issa logs in, her first stop is her Project Dashboard, where she can see all of her projects. At this point, Issa may either choose to create a brand new project, or check out one of the projects she's already been working on.
3. Today Issa's starting a brand new project, a wool plaid blanket, so she clicks the Create New Project button and gives it a title (Wool Plaid Blanket) and then lands in her new Draft File. 
4. The Draft File has tabs on the left for the Calculator, Notepad, Draft Tool, Photo Album, and an 'All' View.
5. Issa first checks out the Calculator to calculate how much yarn she is going to need based on the size of the blanket she's weaving, her material choice, and a host of other factors that go into weaving the blanket. 
6. Once she's calculated her yarn needs, she goes to the Draft Tool to draw up her draft. This tool is an L-shaped grid that indicates different actions the weaver needs to take with/on the loom (no worries if you're not a weaver, just trust me it's important and makes sense!).
7. Now Issa is ready to weave! After weaving a bit, she decides to document some of her progress by uploading photos of her project to the Photo Album.
8. Finally, Issa takes some notes in the Notepad so she can remember which decisions she made along the way to create her one of a kind blanket.
9. In the future, Issa will be able to use Shuttle to share her projects with her weaver-friends, print off her drafts in the WIF (Weaving Information File) format and search for other weaver's draft patterns. 


## Built With

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Firebase](https://firebase.google.com/)
- [Material UI](https://material-ui.com/)
  

## Acknowledgements

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thanks to the world's many weavers who inspired me to create a new tool.


## Support

If you have suggestions or issues, please contact me through [LinkedIn](https://www.linkedin.com/in/kristenstoeckeler/).