# Angular project with ESLint, Prettier and stylelint

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.

## Project Structure

When working in a large team with many developers that are responsible for the same codebase, having a common understanding of how the application should be structured is vital.
This project is based on best practices from the community, [Angular coding style guide](https://angular.io/guide/styleguide), other github Angular projects, and developer experience.

All of the app's code goes in a folder named `src`. The end-to-end tests are in the `e2e` folder.
In Angular, everything is organized in modules, and every application have at least one of them, the `app` root module.
The `app` module is the entry point of the application, and is the module that Angular uses to bootstrap the application.
The global styles for the project are placed in a `scss` folder under `assets`.
The `styles.scss` file imports all the partials to apply their styling.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.
All the commands should be executed in a console inside the root directory.

## Development server

Run `ng serve` for a dev server. Navigate to <http://localhost:4200/>.
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Linting and formatting code

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [stylelint](https://stylelint.io/) help maintain the code quality.
Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
The formatting of the code is ensured by Prettier.

It's recommended to use them in your projects because:

- They keep everybody on the same page, following the same rules.
- They save time in code reviews, because you can safely ignore all style issues, and focus on things that matter, like the structure and semantics of your code.
- They catch errors. Prettier, not so much, but TSLint catches a lot of syntax errors and simple forms of type errors, such as undefined variables.
- Setting these things up is a one-time cost, but the time-saving benefits compound over time.

Run `npm run lint` to analyze your code. It includes, `ESLint`, `Prettier`, `stylelint` and other tools.
Many problems can be automatically fixed with `npm run lint:fix`.
Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](dist/coverage/index.html) file in your web browser.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
In order to only run the protractor end-to-end tests, assuming the frontend is already running, run `npm run protractor`.
Run `npm run protractor:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](dist/e2e/index.html) file in your web browser.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
These functionalities are provided natively or based on plugins.
[Angular DevTools](https://angular.io/guide/devtools/) is a Chrome extension that provides debugging and profiling capabilities for Angular applications.

You can use our IDE for debugging unit and end-to-end tests.
You can [debug](https://www.protractortest.org/#/debugging) async/await tests in chrome inspector with `debugger` keyword if we run `npm run protractor:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.
The same is valid when you run `npm run test:debug` script.
These functionalities are provided natively or based on plugins.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
