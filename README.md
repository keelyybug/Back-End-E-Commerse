# E-Commerce Back End

## My Task

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to their prevalence, understanding the fundamental architecture of these platforms will benefit you as a full-stack web developer.

My task is to build the back end for an e-commerce site by modifying starter code. I configured a working Express.js API to use Sequelize to interact with my MySQL database.

Because this application won’t be deployed, I did a video walk through linked [here.]([)](https://drive.google.com/file/d/1IdacExW4t0zpX-B3DnVH1-P7g1tjJ_5F/view)
and below I am linking a picture of my project!
![Screenshot 2023-05-04 at 10 11 16 PM](https://user-images.githubusercontent.com/128105814/236364715-f664cc0b-f96d-4162-bb7f-183b2df66bdd.png)
![Screenshot 2023-05-04 at 10 11 24 PM](https://user-images.githubusercontent.com/128105814/236364718-2ceb6923-2b70-40df-aa81-f1bf3f737bc8.png)


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Getting Started

I used the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

I used the `schema.sql` file in the `db` folder to create my database with MySQL shell commands. I used environment variables to store sensitive data like my MySQL username, password, and database name.

