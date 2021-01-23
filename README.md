# AngularAlbumSearchApp

## About Application

This developed application has the objective of being a seeker for specific artists albums.

### Features

This is a list of the available features included:
* Artist Album Searcher.
* Control of empty results and not found artist.
* Customizable pagination.
* See all albums option.
* Reset pagination option.
* Alphabetic sorting,  ascendant and descendant.

### API

To get more information about the iTunes Search API and its way of use, visit `https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/`.

### Use notes

When using the searcher, at the time of introducing the artist, avoid introducing symbols that are not part of the original artists name. UTF encoding replaces a space with a `+` sign, which is used in HTTP requests.

When needed, use them, for example:

* Don't look for Imagine+Dragons if the original name is Imagine Dragons.
* Use + in names like Florence + The Machine because it originally has + sign




## Technical Notes and Build Process

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

### Packages Installation

Run `npm install` to install node modules needed in the project, which won't be included in the cloning or downloading.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
Run `ng serve --open` to open a browser window in `http://localhost:4200/`.

### Code scaffolding

Use `ng generate directive|pipe|service|class|guard|interface|enum|module` to create a new element inside the project.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
There is a total of 34 tests included, when executed, by default they will start in random order.


### Further help with configuration

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.




