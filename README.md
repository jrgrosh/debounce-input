# DebounceInput

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Download, navigate to the root directory, and install required packages with `npm install`. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Rxjs Operators

This project demonstrates how to use rxjs operators to debounce user input. As the user types into the input element, the rxjs operators debounceTime, distinctUntilChanged, switchMap are used to prevent unnecessary mock api calls to provide search suggestions. 

debounceTime is used to prevent API calls until the user has stopped typing for sufficient amount of time.

distinctUntilChanged is used to prevent API calls until the user has entered in a new search term.

switchMap is used to cancel existing API calls if a new request is needed.
