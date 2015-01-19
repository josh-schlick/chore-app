Setup
------
Install node.js: [NodeJS](http://nodejs.org/)

Ensure latest version of npm: `sudo npm install npm -g`

Install jsx: `npm install -g jsx`

Install bower: `sudo npm install -g bower`

Install the bower components: `bower install`

App Engine for Go: [Instructions](https://cloud.google.com/appengine/docs/go/gettingstarted/devenvironment)

Building
------
`jsx --watch src/ build/`

(add these to build process later)
go fmt app.go

Running Locally
-------
`goapp serve` and visit `localhost:8080`

or

`goapp serve -host 0.0.0.0` if connecting from another device


Deploying Remotely
------
`goapp deploy`