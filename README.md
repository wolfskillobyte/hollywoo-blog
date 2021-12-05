# hollywoo local blog!

## Purpose

```md
A CMS-style blog site for publishing articles, blog posts, thoughts, and opinions.
```

## Table of Contents

- [Preview](#Preview)
- [Installation](#Installation)
- [Database Schema](#Database-Schema)
- [Tests](#Tests)
- [Documentation](#Documentation)
- [Feedback](#Feedback)

---

## Preview

Here is how the application appears and functions.

<img src='' />

## Installation

_This project requires Node.js and other dependencies_

- [How to install Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

After you have installed Node, navigate to the directory you would like to use using the CLI and then clone this repository:

```bash
git clone git@github.com:wolfgarb/tech-blob.git
```

Create `.gitignore` to include the following:

```bash
node_modules
.env
.DS_Store
package-lock.json
```

`.env` will hold your sensitive information.

```bash
DB_NAME='tech_blob_db'
DB_USER='root'
DB_PW='YOUR_PASSWORD_HERE'
```

Open VS code and use these commands to install _all_ the necessary packages:

```bash
npm i bcrypt mysql2 dotenv express sequelize node
connect-session-sequelize express-handlebars express-session handlebars
npm init
```

`npm init` will create your `package.json` file.
Make sure `package.json` includes the seed in your scripts:

```json
"scripts": {
    "start": "node server.js",
    "seed": "node seeds/index.js"
}
```

Login to MySQL with your credentials.

```bash
mysql -u root -p
```

In the MySQL terminal, start the database

```mysql
USE tech_blob_db;
```

Go back to your main terminal or VS Code powershell and enter

```bash
npm run seed
```

Finally, start the server from the command line:

```bash
npm start
```

## Database Schema

<img src='images\db-schema.png' />

## Tests

_This project used Jest for testing_

## Documentation

- [npm](https://docs.npmjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Express](https://expressjs.com/en/4x/api.html)
- [Sequelize](https://sequelize.org/master/)

## Feedback

Have something you'd like to add?<br>
Feel free to contact me via email!<br>

<a href="mailto:sraewolfskill@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
 </a>
