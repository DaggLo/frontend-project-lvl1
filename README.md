# Brain Games (practice package).

[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)

This is my first practice project at the [Hexlet.io front-end JS course](https://ru.hexlet.io/professions/frontend/projects/44).
It's main goal was to get experience of clean coding, building full-fledged app architecture and how to setup dev environment.

## Requirements
- Node.js
- Make (optional)

Developed and tested on Ubuntu 16.04.6 LTS, NODE version 13.2.0 and NPM version 6.13.1.

## Installation
While this is a practice package it is not meant to be published into NPM repository. Due to that follow these steps to install:
1. Download this repo.
2. Run inside dowloaded directory: `npm install` or `make install` (if you have `make`).
3. Run `npx babel-node src/bin/brain-games.js` or `make start`.

## Usage
Just type answers to the questions into you terminal after program starts.

The package uses [readlineSync](https://github.com/anseki/readline-sync) under the hood.
So for more advanced understanding of what you can do here feel free to checkout it's [official documentatin](https://github.com/anseki/readline-sync/blob/master/README.md).

## License
ISC License

Copyright (c) 2019, Evgeny A. Degtev

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
