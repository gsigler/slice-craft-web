# SliceCraft

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy 
ng build --prod    
ng deploy --cname=www.slicecraft.co

## Fact Faceoff pages

The app landing page, support page, and privacy policy are static files in
`src/fact-faceoff/`. Angular's assets configuration copies this directory to
`/fact-faceoff/` in production builds. They can also be published directly to
the matching directory on `gh-pages` without rebuilding the older Angular app.
Keep the source directory and published copy in sync.

To preview just these pages, run `python3 -m http.server 8095 --directory src`
and open `http://localhost:8095/fact-faceoff/`. The pages use locally hosted
Fredoka and Nunito fonts. Their font licenses are included in the directory.

## Website analytics

The main Angular website loads PostHog through `src/assets/analytics.js`.
It uses the public project token and US Cloud ingestion host. Page views follow
history changes. The main site is a single landing page for custom house
ornaments, with orders handled on Etsy. Former blog URLs redirect to home. Etsy buttons emit `shop_clicked` with their placement in `location`.
Local previews do not load the SDK. Session replay is disabled. The standalone
Fact Faceoff pages do not load this script.

For a production build with Node 22, install the locked dependencies with
`npm ci --ignore-scripts --legacy-peer-deps` and run
`NODE_OPTIONS=--openssl-legacy-provider npm run build -- --prod`.
The ignored install scripts avoid obsolete native Sass builds; Angular falls
back to the Dart Sass implementation already included in the lockfile.

## Homepage assets

`src/assets/img/slice-craft-logo.svg` is exported from the selected color logo
artboard in the Affinity document `new slice craft logo.afdesign`.
`src/assets/img/custom-house-detail.jpg` is a product photo from our Etsy listing:
https://www.etsy.com/listing/1137916249/custom-3d-home-replica-handpainted

The comparison gallery uses three original paired photos from the same listing.
Each file contains both the house and its ornament. CSS displays the relevant
half in the labeled comparison, without changing the original photographs.
