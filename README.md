# Angular 2 Workshop: ng2chat

## Introduction
Starting from the [official Socket.io chat example](https://github.com/rauchg/chat-example), we are building an Angular 2 chat app in order to explore some of Angular's features.

We will be using Webpack for bundling all the assets together.

The Workshop has 2 sections:
1. Tooling & Initial Configuration
2. Writing the Angular 2 Code

## Before Starting
Please make sure you have `Node.js` and `npm` installed.
* **MacOS**: http://blog.teamtreehouse.com/install-node-js-npm-mac
* **Windows**: http://blog.teamtreehouse.com/install-node-js-npm-windows

Once these are installed, you're ready to go further.

## Tooling & Initial Configuration
1. Clone this repository:
    ```sh
    $ git clone https://github.com/cassilup/ng2chat.git
    ```

2. Navigate to the `1-start/` folder.
    ```sh
    $ cd 1-start/
    ```
    This folder holds the starting point, Socket.io's example. We will be using this code as a starting point. It provides us with a Node.js server that listens for incoming messages and emits them to all the clients that are connected.

3. Install the Node modules by running:
    ```sh
    $ npm install
    ```
    This command looks for the `package.json` file and install all packages listed under `dependencies` and `devDependencies`.

    To find out more about Node Package Manager and the `package.json` file, click here: http://browsenpm.org/package.json.

    To find out about peer dependencies, click here:  https://nodejs.org/en/blog/npm/peer-dependencies/.

    The folder structure we have should now be:
    ```
    /
    |-  app.js
    |-  index.html
    |-  node_modules/
    \-  package.json
    ```

4. Run the app to make sure it works. Running this command will start the server:
    ```sh
    $ node app.js
    ```
    Navigate to http://localhost:3000. You should see the Socket.io chat app.

5. Let's organise our app before we start bringing in new libraries.
     * Create a new folder: `client/`
     * Create a new folder: `server/`
     * Move `app.js` and `index.html` into `server/`.
     * **Note:** (We leave `node_modules/` together with `package.json`.
     * **Best Practice:** Have only one `package.json` file per project.)

    The new folder structure is:
    ```
    /
    |-  client/
    |-  node_modules/
    |-  package.json
    |-  server/
        |-  app.js
        |-  index.html
    ```
6. We are now ready to bring in Angular 2 libraries. Change directory to `client/`.
7. Install Angular2 npm packages:
    ```sh
    $ npm install --save @angular/common @angular/compiler @angular/core @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router bootstrap core-js es6-shim reflect-metadata rxjs zone.js
    ```

    To find out more about the npm packages that Angular 2 requires, click here: https://angular.io/docs/ts/latest/guide/npm-packages.html.

8. Install Webpack & Tooling npm packages:
    ```sh
    $ npm install --save-dev webpack webpack-dev-server typescript ts-loader css-loader extract-text-webpack-plugin html-webpack-plugin raw-loader style-loader typings
    ```

9. Install Testing npm packages:
    ```sh
    $ npm install --save-dev jasmine-core karma karma-chrome-launcher karma-jasmine karma-phantomjs-launcher karma-sourcemap-loader karma-webpack phantomjs-prebuilt
    ```

10. Configure `package.json` as a Task Runner. Add the following section to your `package.json` file:
    ```json
    ...
    "scripts": {
        "start": "webpack-dev-server --config ./client/webpack/webpack.dev.js",
        "api": "node server/app.js",
        "test": "karma start ./client/karma/karma.conf.js",
        "test:headless": "karma start ./client/karma/karma.conf.js --browsers PhantomJS"
    },
    ...
    ```

11.
