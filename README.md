<p align="center">
  <a href="">
    <img alt="Logo" src="logo.png" width="600px">
  </a>
</p>

<p align="center">
  Municipal boundaries of all Brazilian cities.
</p>

<p align="center">

  <a href="https://travis-ci.org/ythecombinator/brazilian-boundaries"><img alt="Build Status" src="https://travis-ci.org/ythecombinator/brazilian-boundaries.svg?branch=master"></a>

  <a href="https://codeclimate.com/github/ythecombinator/brazilian-boundaries"><img src="https://codeclimate.com/github/ythecombinator/brazilian-boundaries/badges/gpa.svg"></a>

  <a href="https://david-dm.org/ythecombinator/brazilian-boundaries" title="Dependency status"><img src="https://david-dm.org/ythecombinator/brazilian-boundaries.svg"/></a>

  <a href="https://david-dm.org/ythecombinator/brazilian-boundaries#info=devDependencies" title="devDependency status"><img src="https://david-dm.org/ythecombinator/brazilian-boundaries/dev-status.svg"/></a>

</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Installation

```sh
$ npm install --save brazilian-boundaries
```

## Usage

There are three ways of using this data:

- Use the NPM module to retrieve and access the data (instructions below)
- Use this repo as a submodule and write your own thing to load the data (just a bunch of json files!)
- Link directly to the files on GitHub

## API

### `list([cb])`

Returns a promise which will handle an array of boundary file paths.

> Callback is optional.

### `read(path[, cb])`

Returns a promise which will handle the boundary for the given path.

> Callback is optional.

### CLI

> Coming soon!

## Development

All the tasks needed for development automation are defined in the
[`package.json`](package.json) *scripts* property and can be run via:

`npm run <command>`

Here is a summary of all the commands:

| **Command** |      **Description**      |
|-------------|---------------------------|
| `build`     | Runs *babel.js*.          |
| `lint`      | Runs *eslint*.            |
| `test`      | Runs unit tests.          |
| `update`    | Fetches more recent data. |

## License

[brazilian-boundaries](https://github.com/ythecombinator/brazilian-boundaries) is distributed under
the MIT License, available in this repository. All contributions are assumed to
be also licensed under the MIT License.

## Credits

- Fetched data comes from [Luiz Pedone's *municipal-brazilian-geodata*](https://github.com/luizpedone/municipal-brazilian-geodata)

- Inspired by [contras's *boundaries*](https://github.com/contra/boundaries)