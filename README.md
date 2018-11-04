# homelike

## Running Locally

### Installing Node.js and npm

This application has been tested on Node.js 10.9.0 and npm 6.4.1.     
These packages available here for download [here](https://nodejs.org/en/).  
Choose the "Current" version for download.

To run the app:
- Clone the git repository.
- `cd` into the directory.
- Then install the dependencies

``` bash
# this cmd will install client and server
# dependencies at the same time.
$ npm run install
```

### Dev Setup

``` bash
# serve with hot reload at localhost:3000
# this cmd will start the client and server
# at once time.
$ npm run dev
```

## What I did

1. I've refactored the code and fixed some issue related to the server
    - the git commits describe the steps that I followed.

2. I didn't add a webpack, because the projects created using ```create-react-app``` already had webpack configuration.

3. I've Added information about owner to apartment view page.

4. I've created a new page "Locations", that displays the apartments filtered by location.

5. I've created a new page "search page", that provides the abilities to search by location and filter by [size, price, amenities, details, services].
