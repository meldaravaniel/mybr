# [mybr](https://meldaravaniel.github.io/mybr/)

playground for resource and data presentation
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## test data

generated with chat gpt:

```
Generate a csv of 100 records with the fields: id (integer, starting at 1), name (string, limit 50 chars), street_address (string, limit 50 chars), city (string, united states only), state (string, two-letter code), postal_code (integer, United States only), latitude (long, United States only), longitude (long, United States only), legal (boolean), youth (boolean), adult (boolean), housing (boolean).
```

## Dependencies

(This is based on a Unix OS...windows may be a bit different)

* Github account (if you will need to interact with this repo)
    * You'll also need to [make an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to interact with github, as they no longer support user/pass authentication.
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    * this is...technically optional, as you can edit things directly in Github's WebIDE, but is good if you want to run things locally.
* Node.js v18.16
    * recommend using [NVM (Node version manager)](https://github.com/nvm-sh/nvm#installing-and-updating) to maintain your node versions
    * this includes [npm.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* angular CLI
    * install using npm: `npm install -g @angular/cli`

## Local Development

### Get the Code 

* Check out the repository
    * using the terminal, navigate to a folder in which you want your code repo to reside
    * run `git clone https://github.com/meldaravaniel/mybr.git`
* Go into the folder `cd mybr`

### Development server

To open in your default browser, run `ng serve --open`.  Otherwise, run `ng serve` for a dev server. Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Deploying to Github Pages

Instructions I kind of used are [here](https://www.makeuseof.com/angular-app-github-deploy-using-angular-cli/) but some of it doesn't work anymore, so modifications are below.

#### Setup (one time)

1) install gh-pages: `npm install -g gh-pages` (alternately the angular-cli-gh-pages or whatever)
1) make a branch called `gh-pages` but don't actually check it out or commit anything to it, it will be where the deployment files live
1) make sure that's the branch selected under the Settings > Pages > Build and Deployment section (also enable deploy from branch)

#### Actual Deploy

The section in the above instructions about using `ng deploy --base-href` etc doesn't work because that command no longer recognizes the `--base-href` argument.  It only recognizes the `-c` or `configuration` argument, so the stuff is all configured in the [angular.json](angular.json) file.

1) Build it: `ng build -c production --base-href ""`
1) Deploy the dist folder that gets created to gh-pages: `gh-pages -d dist` (this is what sticks stuff in the gh-pages branch)

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## TODO

- [ ] the workflow for test doesn't work because of Chrome stuff. fix pls.