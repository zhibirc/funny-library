### Theses/concepts

- it's complex solution, no additional tools required;
- knowledge of TS is helpful, but not required;
- all entities in Angular is a class (the similar approach as for components in SPA framework);
- lifecycle hooks;
- string interpolation {{ something }};
- component level encapsulation: access only for component variables inside template, components encapsulate all their data;
- decorators (@Component) for generic classes, just functions that accept metadata and configure a specific component;
- any updates to the class data will update the template display;

### Start work

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

- image gallery: use only <img [src]="picture"> and change "picture" public property, all changes appeared in UI;
- easy keydown handle with "(keydown.control.shift.enter)=";
