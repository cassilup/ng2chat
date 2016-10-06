# Angular 2 Workshop: ng2chat

## Introduction
Starting from the [official Socket.io chat example](https://github.com/rauchg/chat-example), we are building an Angular 2 chat app in order to explore some of Angular's features.

We will be using Webpack for bundling all the assets together.

The Workshop has 2 sections:
1. Tooling & Initial Configuration
2. Writing the Angular 2 Application

Topics we will be covering during this workshop:
* Angular 2
* TypeScript (and Typings)
* ES6
* Webpack (Loaders, Dev Server)
* Web Components (with inline templates and styles)
* NPM as Task Runner
* Jasmine & Karma
* Zone.js
* Websockets
* RxJS

## Before Starting
Please make sure you have `Node.js` and `npm` installed.
* **MacOS**: http://blog.teamtreehouse.com/install-node-js-npm-mac
* **Windows**: http://blog.teamtreehouse.com/install-node-js-npm-windows

Once these are installed, you're ready to go further.

## 1. Tooling & Initial Configuration
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
    |-  package.json
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
    $ npm install --save @angular/common @angular/compiler @angular/core @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router bootstrap core-js reflect-metadata rxjs zone.js
    ```

    To find out more about the npm packages that Angular 2 requires, click here: https://angular.io/docs/ts/latest/guide/npm-packages.html.

    To find out more about zone.js, here's an excellent video presentation by Brian Ford: https://www.youtube.com/watch?v=3IqtmUscE_U

    Also, here is Misko Hevery's Zones proposal to TC39:
    * Presentation: https://docs.google.com/presentation/d/1H3E2ToJ8VHgZS8eS6bRv-vg5OksObj5wv6gyzJJwOK0/edit#slide=id.p
    * Gist: https://gist.github.com/mhevery/63fdcdf7c65886051d55

8. Install Webpack & Tooling npm packages:
    ```sh
    $ npm install --save-dev webpack webpack-dev-server typescript ts-loader css-loader extract-text-webpack-plugin html-webpack-plugin raw-loader style-loader
    $ npm install --global --save-dev typings
    ```

9. Install Testing npm packages:
    ```sh
    $ npm install --save-dev jasmine-core karma karma-chrome-launcher karma-jasmine karma-phantomjs-launcher karma-sourcemap-loader karma-webpack phantomjs-prebuilt es6-shim
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

    If you are interested in finding out more about using NPM as a task runner, click here: http://paulcpederson.com/articles/npm-run/.

11. Initialize typings:
    ```sh
    typings init
    ```
12. Install needed typings:
    ```sh
    $ typings install dt~jasmine env~node --save --global
    $ typings install es6-promise --save
    ```

    The `--global` flag means that the library is bound to the global scope (eg. it will be invoked by using `window.<variable>`).

    `--save` adds the entry to `typings.json`.

    **Important!** Be sure not to run `typings init` or `typings install` in multiple

    **Best Practice:** Recommended way of reinstalling typings is to run:
    ```sh
    $ typings install --overwrite --clean
    ```

    More information on typings can be found here: https://github.com/typings/typings

13. We now need to set up Typescript. We will do that by creating the `tsconfig.json` file with the following contents:
    ```json
    {
        "compilerOptions": {
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "module": "commonjs",
            "sourceMap": true,
            "target": "es5"
        },
        "exclude": [
            "node_modules",
            "client/typings/index",
            "client/typings/index.d.ts"
        ]
    }
    ```

    Here is the official documentation for Typescript's configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html.

    More information on JavaScript Module Loaders can be found here: https://appendto.com/2016/06/the-short-history-of-javascript-module-loaders/. We are using CommonJS, because that's what we're transpiling to.

    Our app structure now looks like this:

    ```
    /
    |-  client/
        |- typings/
        |- typings.json
    |-  node_modules/
    |-  server/
        |-  app.js
        |-  index.html
    |-  package.json
    |-  tsconfig.json
    ```



14. We will now set up Karma, the test runner. We are doing this on purpose before writing any Angular 2 code, to emphasise the importance of writing tests.

    Inside the `client/` folder, create a new folder named `karma/`.

    We will need 2 files in there: `karma.conf.js` and `karma.entry.js`.

    For more information on this approach to testing, read this article: https://semaphoreci.com/community/tutorials/setting-up-angular-2-with-webpack.

    `karma.conf.js` will have the following contents:
    ```js
    'use strict';

    module.exports = (config) => {
      config.set({
        autoWatch: true,
        browsers: ['Chrome', 'PhantomJS'],
        files: [
          '../node_modules/es6-shim/es6-shim.min.js',
          'karma.entry.js'
        ],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
          exitOnResourceError: true
        },
        preprocessors: {
          'karma.entry.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: false,
        webpack: require('../webpack/webpack.test'),
        webpackServer: {
          noInfo: true
        }
      });
    };
    ```

    **Note:** We are ussing *ES6* syntax. Namely, the *Arrow Function*. For more information on ES6, click here: http://es6-features.org/#Constants.

15. `karma.entry.js` will be the entry point for Karma when testing our application.

    ```js

    ```
16. 
