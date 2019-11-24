# AngularAuthNgrx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.18.

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

State management is difficult. As your application scales, state generally scatters across your application, tucked away in various nooks and crannies. Although it’s not an issue yet, it’s a good idea to set a solid foundation to help ensure that, going forward, state management is easier and more predictable. This is where NGRX Store comes into play. It helps to solve this problem by managing state in a single, immutable data store.

Core tenets:

State is a single immutable data structure
Actions describe state changes
Pure functions called reducers take the previous state and the next action to compute the new state
State accessed with the Store, an observable of state and an observer of actions
In a nutshell, NGRX Store builds on Redux’s core patterns by adding in RxJS. It’s specifically designed for Angular apps.

Building blocks:

Store - single, immutable data structure
Actions - describe changes to state
Reducers - pure functions that create a new state
Example:

angular ngrx store flow
Install:

$ npm install @ngrx/store@5.2.0 --save
Add files and folders for the actions and reducers
Next, we need to add a bit of structure for the actions and reducers. Within “src/app”, add a new folder called “store”. Then, add the following folders to “store”:

“actions”
“reducers”
Add a file called app.states.ts as well. Finally, add a single file to each folder:

auth.actions.ts
auth.reducers.ts
You should now have:

└── store
    ├── actions
    │   └── auth.actions.ts
    ├── app.states.ts
    └── reducers
        └── auth.reducers.ts
You could also group actions and reducers by domain. Actions and reducers would live at the component level, in other words. If you decide to go that route, you should probably create a “common” folder for actions and reducers that are used across a number of components. Auth actions and reducers should then live in “common”.

Define the state
Before creating any actions or reducers, let’s define structure of the store in src/app/store/reducers/auth.reducers.ts:

import { User } from '../../models/user';


export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}
Remember: State is a single, immutable data structure.

Also, add an initialState object:

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};
Then, define the top-level state interface in src/app/store/app.states.ts:

import * as auth from './reducers/auth.reducers';


export interface AppState {
  authState: auth.State;
}
