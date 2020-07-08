### Theses/concepts

- support from **Google**, **Microsoft**;
- it's complex solution, no additional tools required;
- knowledge of TS is helpful, but not required;
- approximately 2 major versions each year;
- RxJS/DI ot-of-the-box;
- two-way data binding to achieve synchronization between model and view (significantly decrease of DOM manipulations);
- all entities in Angular is a class (the similar approach as for components in SPA framework);
- lifecycle hooks;
- string interpolation `{{ something }}`;
- component level encapsulation: access only for component variables inside template, components encapsulate all their data;
- decorators (@Component) for generic classes, just functions that accept metadata and configure a specific component;
- any updates to the class data will update the template display;
- different predefined Date formats (similar to Moment.js);
- rendering is the area for wide optimization;
- remove dependency of Zone.js is the additionally advanced optimization possibility;
- integration with RxJS;

### Start work

- update if needed (`ng update @angular/cli @angular/core`);
- version 10.0.0 (`ng new --strict`, date range picker, warnings for CJS, updates for TS/TSLib/TSLint, other deps, update `.browserslistrc`);
- Angular CLI;
- Angular CLI installs all required packages;
- Wizard:
    - routing;
    - CSS/SCSS/Sass/Less or Stylus.
- angular.json -- all necessary configuration options, serve, bundle etc.;
- npm start/ng serve;
- Angular Live Development Server starts to host newly created add;
- accept JSX in a template of component instead of separate file;

### Practice and usage examples

- image gallery: use only `<img [src]="picture">` and change "picture" public property, all changes appeared in UI;
- easy keydown handle with "(keydown.control.shift.enter)=";
- current bundle size (`ng build --prod`) is 271.63 KB (in a compare, release bundle of SPA framework is 326.56 KB), the "average" is ~250 KB;

### Links

[made with angular](https://www.madewithangular.com/)
[live example 1](https://stackblitz.com/angular/nknyovevygv)
[live example 2](https://stackblitz.com/angular/yongarnoxkq)
[community chat](https://t.me/angular_ru)
