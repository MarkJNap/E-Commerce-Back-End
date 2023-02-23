# E-commerce Back End
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

Creating a back end for an E-commerce app is an incredibly useful skill to have given the absolutely huge size of the internet retail industry. Getting experience handling data and learning about invaluable resources like sequelize to interact with MySQL and the importance of RESTful routes as well as understanding the One to One, One to Many, and Many to Many relationships. Building this gave me a lot of experience and a much better understanding of routes and async / await, feeling much more confident about being able to create a full stack app on my own

## Installation

Requires:
* Node.js v16
* GitBash or equivalent
* MySQL
* Insomnia or equivalent

After cloning the repository and navigating to correct folder in GitBash the user needs to run `npm install` to ensure it downloads all needed packages/dependencies.

Be sure to modify the .env.EXAMPLE file to have MySQL work properly.

1. Run `mysql -u root -p` and enter your password
2. Run `SOURCE db/schema.sql` then quit out of MySQL with the command `quit`
3. Run `npm run seed` to seed the data


## Usage

To begin using this application type `npm start` in the correct folder.
Then open Insomnia at `http://localhost:3001/`

This application allows the user to interact with the tables of categories, products, and tags. They are able to view, add, edit, and delete information in the database.

Link to Demo Video: 
https://drive.google.com/file/d/1sT6dwnO3a4P_Ut31jdJFlf_GAei3z_q9/view


## Credits

Mark Napolitano

## License

ISC License 
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
