# Connection of a Private Blockchain to a Front-End Client via APIs

This project is intended to build a RESTful API that interfaces with a private blockchain. To this end, a Node.js framework is used. Two endpoints are built: GET block and POST block. Note that the blockchain to be used in this project is the one built on [this Github repo](https://github.com/EsteveM/Creation-of-a-private-blockchain).

## Table of Contents

* [Description of the Project](#description-of-the-project)
* [Getting Started](#getting-started)
* [Contributing](#contributing)

## Description of the Project

As has already been mentioned, this project implements a RESTful API which interfaces with the private blockchain built on [this Github repo](https://github.com/EsteveM/Creation-of-a-private-blockchain). The work that has been made is best described by explaining the steps that have been followed:

### Selection of a Node.js framework

The [Express.js](https://expressjs.com/) framework has been chosen. Either [Hapi.js](https://hapijs.com/) or [Sails.js](https://sailsjs.com/) could have been chosen as well. However, Express.js is the one I am most familiarised with.

### Configuration of API service port

The API service has been configured so that it runs on port 8000.

### Configuration of the two endpoints

Two endpoints have been configured:

* GET block endpoint: the URL path used is */block/[blockheight]*. As can be observed, it contains a blockheight parameter. The response is a block object in JSON format.

* POST block endpoint: the URL path used is */block*. It posts a new block with payload option so that data, a string of text, is added to the block body. The response is a block object in JSON format. Note that if the payload is empty, the block is not created.

Finally, it is noteworthy that [Postman](https://www.getpostman.com/) has been used to test the endpoints.

### README.md update

This step creates the README.md file that you are viewing right now.

## Getting Started

The procedure to obtain functional a copy of the project on your local machine so that you can further develop and/or test it is explained in this section:

* Firstly, you have to download the project files from this repository onto your local machine.
* Secondly, you have to install Node.js® and NPM, which can be done from the [Node.js® site](https://nodejs.org/en/).
* Thirdly, you have to initialize the project by typing `npm init` on a terminal shell on your project main directory. Then, install crypto-js, level, express, and body-parser by typing `npm install crypto-js --save` and `npm install level --save`, `npm install express --save`, and `npm install body-parser --save` respectively.
* At this point, the server can be started by typing `node app.js`.
* Once that has been done, you can test the project. One way to do this is by using [Postman](https://www.getpostman.com/), which tests endpoints.

## Contributing

This repository contains all the work that makes up the project. Individuals and I myself are encouraged to further improve this project. As a result, I will be more than happy to consider any pull requests.


