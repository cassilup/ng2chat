```
Note: This is a living document. Pull requests and Issues are most welcome.
```

# Angular2 Workshop: ng2chat

## Introduction
Starting from the [official Socket.io chat example](https://github.com/rauchg/chat-example), we are building an Angular2 chat app in order to explore some of Angular's features.


We will be using Webpack for bundling all the assets together.

The Workshop has 2 sections:

1. Tooling & Initial Configuration
2. Writing the Angular2 Application

Topics we will be covering during this workshop:
* Angular2
    * Bootstrapping,
    * Components, Component Architecture,
    * NgModule,
    * Special Decorators,
    * Services (Declaring, Providing and Injecting),
    * Change detection (Zones provider by zone.js),
    * RxJS (Observables),
    * Templates (ngFor, HTMLElement by reference)
    * Karma + Jasmine Testing,
    * ...and others.
* TypeScript (and Typings)
* ES6 (classes, imports, arrow functions, template literals),
* Webpack (Loaders, Dev Server, Plugins)
* NPM as Task Runner
* Jasmine & Karma
* Websockets

## Before Starting
Please make sure you have `Node.js` and `npm` installed.
* **MacOS**: http://blog.teamtreehouse.com/install-node-js-npm-mac
* **Windows**: http://blog.teamtreehouse.com/install-node-js-npm-windows

Once these are installed, you're ready to go further.

## 1. Tooling & Initial Configuration
#### 1. Clone this repository:
```sh
git clone https://github.com/cassilup/ng2chat.git
```

#### 2. Navigate to the `1-start/` folder.
```sh
cd 1-start/
```
+ This folder holds the starting point, Socket.io's example. We will be using this code as a starting point. It provides us with a Node.js server that listens for incoming messages and emits them to all the clients that are connected.

#### 3. Install the Node modules by running:
```sh
npm install
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

#### 4. Run the app to make sure it works. Running this command will start the server:
```sh
node app.js
```
Navigate to http://localhost:3000. You should see the Socket.io chat app.

#### 5. Let's organise our app before we start bringing in new libraries.
 * Create a new folder: `client/`
 * Create a new folder: `server/`
 * Move `app.js` and `index.html` into `server/`.
 * **Note:** We leave `node_modules/` together with `package.json`. The two always belong together.
 * **Best Practice:** Have only one `package.json` file per project.

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
#### 6. We are now ready to bring in Angular2 libraries. Change directory to `client/`.

**Note:** `npm` commands relate to the first `package.json` they encounter while navigating the folder structure upwards.

#### 7. Install Angular2 npm packages:
```sh
npm install --save @angular/common @angular/compiler @angular/core @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router bootstrap core-js reflect-metadata rxjs zone.js
```

To find out more about the npm packages that Angular2 requires, click here: https://angular.io/docs/ts/latest/guide/npm-packages.html.

To find out more about zone.js, here's an excellent video presentation by Brian Ford: https://www.youtube.com/watch?v=3IqtmUscE_U

Also, here is Misko Hevery's Zones proposal to TC39:
* Presentation: https://docs.google.com/presentation/d/1H3E2ToJ8VHgZS8eS6bRv-vg5OksObj5wv6gyzJJwOK0/edit#slide=id.p
* Gist: https://gist.github.com/mhevery/63fdcdf7c65886051d55

#### 8. Install Webpack & Tooling npm packages:
```sh
npm install --save-dev webpack webpack-dev-server typescript ts-loader css-loader extract-text-webpack-plugin html-webpack-plugin raw-loader style-loader
npm install --global typings

```

#### 9. Install Testing npm packages:
```sh
npm install --save-dev jasmine-core karma karma-chrome-launcher karma-jasmine karma-phantomjs-launcher karma-sourcemap-loader karma-webpack phantomjs-prebuilt es6-shim
```

#### 10. Configure `package.json` as a Task Runner. Add the following section to your `package.json` file:
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

#### 11. We now need to set up Typescript. We will do that by creating the `tsconfig.json` file in `client/` with the following contents:
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
***Note:*** We place the `tsconfig.json` file in the `client/` folder because it is related to our Angular2 project, not to the node app in `server/`. Webpack will know to automatically search for a `tsconfig.json` and if it doesn't find it, move up the folder structure until it does. For more information on the subject, please read: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html.

Information on why we have configured the `target` property to `es5` and have set `module` to `commonjs` can be found here: http://www.jbrantly.com/es6-modules-with-typescript-and-webpack/

More information on JavaScript Module Loaders can be found here: https://appendto.com/2016/06/the-short-history-of-javascript-module-loaders/. We are setting the `module` option to CommonJS, because that's what we're transpiling to.

#### 12. Initialize typings:
```sh
typings init
```

This will create the `typings.json` file in the folder where we ran this command.

#### 13. Install needed typings:
```sh
typings install dt~jasmine env~node dt~es6-promise --save --global
```

This will create the `typings/` folder in the current folder. The `typings/` folder will contain the typings indicated in the `typings.json` file. Similar to how `npm` works by reading the `package.json` and creating the `node_modules/` off of it.

The `--global` flag means that the library is bound to the global scope (eg. it will be invoked by using `window.<variable>`).

`--save` adds the entry to `typings.json`.

**Important!** Be sure not to run `typings init` or `typings install` in multiple folders of your project. That will result in Typescript compilation errors.

**Best Practice:** Recommended way of reinstalling typings is to run:
```sh
typings install -oc
```

(That is the equivalent of running `typings install --overwrite --clean` and it deletes the `typings/` folder and recreates it.)

More information on typings can be found here: https://github.com/typings/typings

Our app structure now looks like this:

```
/
|-  client/
    |- typings/
    |- typings.json
    |- tsconfig.json
|-  node_modules/
|-  server/
    |-  app.js
    |-  index.html
|-  package.json
```

#### 14. It's now time to set up Webpack.

We create a `webpack/` folder inside the `client/` folder.

The first file we create in that folder is `webpack.dev.js`.

```js
'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
  debug: true,
  devServer: {
    contentBase: path.resolve(rootDir, 'dist'),
    port: 9000
  },
  devtool: 'inline-source-map',
  entry: {
    app: [ path.resolve(rootDir, 'src', 'bootstrap') ],
    vendor: [ path.resolve(rootDir, 'src', 'vendor') ]
  },
  module: {
     loaders: [
       { loader: 'raw', test: /\.(css|html)$/ },
       { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ },
       { loader: ExtractTextPlugin.extract("style-loader", "css-loader"), test: /\.css$/ }
     ]
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(rootDir, 'dist')
   },
   plugins: [
    new ChunkWebpack({ // prevents us from having same lib imported multiple times
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
      name: 'vendor'
    }),
    new HtmlWebpack({ // automatically injects <script> tag into index.html
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(rootDir, 'src', 'index.html')
    }),
    new ExtractTextPlugin("styles.css")
  ],
  resolve: {
    extensions: [ '', '.ts', '.js' ]
  }
};
```

Notice we are loading styles through Webpack.

Also, for the `resolve` block, the order of the extensions **does** matter.


#### 15. To start our Angular2 app in development mode, type:

```sh
npm start
```

To start the API, type:

```sh
npm run api
```


#### 16. We will now set up Karma, the test runner. We are doing this on purpose before writing any Angular2 code, to emphasise the importance of writing tests.

Inside the `client/` folder, create a new folder named `karma/`.

We will need 2 files in there: `karma.conf.js` and `karma.entry.js`.

For More information on this approach to testing, read this article: https://semaphoreci.com/community/tutorials/setting-up-angular-2-with-webpack.

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

**Note:** We are ussing *ES6* syntax. Namely, the *Arrow Function*. For More information on ES6, click here: http://es6-features.org/#Constants.

#### 18. We now need to write `webpack.test.js`.

```js
'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { loader: 'raw', test: /\.(css|html)$/ },
      { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ },
      { loader: "style-loader!css-loader", test: /\.css$/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts'], // empty string is for node_modules, which we don't specify extension for
    modulesDirectories: ['node_modules'],
    root: path.resolve('.', 'src')
  }
};
```

`webpack.test.js` is simpler than `webpack.dev.js`, as it only loads the bare minimum for tests to execute.

#### 17. `karma.entry.js` will be the entry point for Karma when testing our application.

```js
require('es6-shim');
require('reflect-metadata');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');
require('zone.js/dist/jasmine-patch');

const browserTesting = require('@angular/platform-browser-dynamic/testing');
const coreTesting = require('@angular/core/testing');

coreTesting.TestBed.resetTestEnvironment();
coreTesting.TestBed.initTestEnvironment(
  browserTesting.BrowserDynamicTestingModule,
  browserTesting.platformBrowserDynamicTesting()
);

const context = require.context('../src/', true, /\.spec\.ts$/);
context.keys().forEach(context);

Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
```

Once configured, this file will not require tweaking.

#### 19. Now that we've set up the testing environment, it's time to see it in action.

To start the test suite, run:

```sh
npm test
```

For Headless testing:

```sh
npm test:headless
```

--

## 2. Writing the Angular2 Application

#### 1. Create `src/` folder
#### 2. Create `index.html`

```html
<!doctype html>
<html>
   <body>
      <app>Loading...</app>
   </body>
</html>
```

* Notice there's no `<script>` tag. Neither a `<style>` one.
* Notice the `<app>` tag.

#### 3. Bootstrap Angular2 app through `bootstrap.ts`.
```js
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
```

We need to use `platformBrowserDynamic` because we're writing an app that compiles the templates dynamically in the browser. We also need thesethis line because Angular2 can run on multiple platforms.

#### 4. Create `vendor.ts`
```js
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/dist/zone';
```

Libraries that Angular2 needs in order to run. We keep them separated for the sake of clarity.

#### 5. Create the `app/` folder inside `client/src/`.

The folder structure now looks like this:
 ```
/
|-  client/
    |-  typings/
    |-  typings.json
    |-  karma/
        |-  karma.conf.js
        |-  karma.entry.js
    |-  src/
        |-  app/
        |-  bootstrap.ts
        |-  index.html
        |-  styles.css
        |-  vendor.ts
    |-  webpack/
        |-  webpack.dev.js
        |-  webpack.test.js
    |-  typings.json
    |-  tsconfig.json
|-  node_modules/
|-  server/
    |-  app.js
    |-  index.html
|-  package.json
```

#### 6. Declaring the Application Module

We need to create the `client/src/app/app.module.ts` file.

Angular2 RC-5 brought the `@NgModule()` decorator. With its help, we can create modules in our app.

```js
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';

@NgModule({
  imports:      [ BrowserModule ], // because it's a web application and it runs in the browser
  declarations: [ App ],
  bootstrap:    [ App ]
})
export class AppModule { }
```

More information on `@NgModule` can be found here: https://angular.io/docs/ts/latest/guide/ngmodule.html

#### 6. Once we've created our module, we can proceed to create our first Component. `app/app/component.ts`:

```js
import { Component } from "@angular/core";

@Component({
  selector: 'app',
  template: `
    <div class="app-wrapper">Hi!</div>
  `
})
export class App {}
```

This is the implementation of the `<app>` selector in `index.html`.

#### 7. `messageList`
* Each component gets its own folder.
* `*ngFor`. More information: https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
* Template Literals; Inline Templates.
* Lifecycle Hooks: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html

#### 8. `newMessage`
* Events and properties.

#### 9. `chatService`
* `@Injectable`. More information: https://angular.io/docs/ts/latest/guide/dependency-injection.html#!%23injectable

#### 10. Providing the service to the module, instantiating the service.
* providing & injecting the service,
* [] attributes,
* passing data to child components.

#### 11. Submitting new messages.

#### 12. Making use of ChatService in MessageList.
* RxJS

More information:
* http://stackoverflow.com/questions/37363121/get-and-update-a-string-through-a-service-in-angular-2
* https://www.barbarianmeetscoding.com/blog/2016/04/02/getting-started-with-angular-2-step-by-step-6-consuming-real-data-with-http/

#### 8. Bringing in socket.io and connecting ChatService to the Backend.

More information: http://www.syntaxsuccess.com/viewarticle/socket.io-with-rxjs-in-angular-2.0

---

Aaaand, we're done! :)
