# Password Manager

App to manage passwords, based on LastPass. Adittional information about the test can be seen [here](https://github.com/fdttests/password-manager/blob/main/challenge.md).

The project consists of two repositories:

- [Front end](https://github.com/fdttests/password-manager);
- [Back end](https://github.com/fdttests/password-manager-api);

## Demo

A demo of the application can be seen on:  [`https://fdt-password-manager.herokuapp.com/home`](https://fdt-password-manager.herokuapp.com/home)

## Development server

Run `npm run serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

Run `npm run build && npm run start` to run the production server. Navigate to `http://localhost:8080/` to see the app running.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Algorithm & Approach

The application was developed using a simple base Angular project with lazy loading route modules. The source consist of three folders:

- `components`: Generic components that can be used in the whole application context. In this folder are a generic card component and a simple modal;
- `pages`: Represents each main page / route of the application. This folder has a subfolder called components, so, while the global/generic components are stored in `app/components`, the module/page specific componentes are stored on `pages/page-module-name/components`; 
- `data`: Stores non-component related parts of the application, like models, repositories, use cases, helper functions, etc;

To follow clean architecture, the content of data folder should be splited into core/infrastructure, domain and application layers. For the sake of simplicity, I decided to group everything on data folder, but on a production app, the layers concerns should be better defined.

Some simple use cases classes were implemented to isolate the communication between the application components and the data souce (repositories).

The core application is very simple, so I decided to only use Angular's default input/output and RxJs to do the communication between components. In a more complex context, with more component levels and data, a state management tool such as [elf](https://github.com/ngneat/elf) should be used to improve the communication between the components.

## Bonus Points

Due to lack of time, only Angular's default components tests were implemented. In a production application, the functionality and behavior of each component should be tested. The use case classes should have tests too.

# Technical Dependencies and Libraries

The app was developed using VS Code. The frameworks/dependencies used are listed bellow:

- `@angular/*` - Angular framework and it's dependencies. Version `~13.2.0` was used;
- `rxjs` - Angular's default reactive library;
- `typescript` - Angular's default dependency to build TS files;
- `tslib` - Angular's default dependency for enchancing typescript;
- `zone.js` - Angular's default dependency to manipulate browser's default behavior;
- `karma` - Angular's default dependency for testing;
- `express` - Used to serve the demo application on Heroku. Version `~4.17.3` was used;
- `ngx-clipboard` - Lightweight package to deal with clipboard (copy to clipboard feature);
- `ng-tailwindcss` & `tailwindcss` - CSS Utility first framework used on the application UI;
