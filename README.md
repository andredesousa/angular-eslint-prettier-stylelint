# Angular project with ESLint, Prettier and stylelint

JavaScript linters are tools that you can use to help you improve your code.
They scan your scripts for common issues and errors, and give you back a report.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.

## Overview

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.

It's recommended to use them in your projects because:

- They keep everybody on the same page, following the same rules.
- They save time in code reviews, because you can safely ignore all style issues, and focus on things that matter, like the structure and semantics of your code.
- They catch errors. Prettier, not so much, but ESLint catches a lot of syntax errors and simple forms of type errors, such as undefined variables.
- Setting these things up is a one-time cost, but the time-saving benefits compound over time.

This project is based on best practices from the community, [Angular coding style guide](https://angular.io/guide/styleguide), other github Angular projects, and developer experience.
All of the app's code goes in a folder named `src`. The end-to-end tests are in the `e2e` folder.

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs the application.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to source code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests in watch mode.
- `e2e` - Runs the e2e tests.
- `e2e:watch` - Runs the e2e tests in watch mode.
- `build` - Builds the dist files

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
[ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [stylelint](https://stylelint.io/) help maintain the code quality.

Use `npm run lint` to analyze your code.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save

## Running unit tests

Unit tests are responsible for testing of individual methods or classes by supplying input and making sure the output is as expected.

Use `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](dist/coverage/index.html) file in your web browser.

## Running end-to-end tests

The end-to-end tests are responsible for testing scenarios on the product itself, by controlling the browser or the website, regardless of the internal structure to ensure expected behavior.

Use `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
In order to only run the protractor end-to-end tests, assuming the frontend is already running, use `npm run protractor`.
Use `npm run protractor:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](dist/e2e/index.html) file in your web browser.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

## Debugging

You can debug the client-side Angular code, adding breakpoints, inspect variables and see the call stack of the client-side Angular application.
These functionalities are provided natively or based on plugins.
[Angular DevTools](https://angular.io/guide/devtools/) is a Chrome extension that provides debugging and profiling capabilities for Angular applications.

You can use our IDE for debugging unit and end-to-end tests.
You can [debug](https://www.protractortest.org/#/debugging) async/await tests in chrome inspector with `debugger` keyword if we use `npm run protractor:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.
The same is valid when you use `npm run test:debug` script.
These functionalities are provided natively or based on plugins.

## Build

Use `npm run build` to build the project. The build artifacts will be stored in the `dist/app/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
