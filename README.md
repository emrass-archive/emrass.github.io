# emrass.github.io - The repo for emrass.de

## Installation

```shell
bundle install
npm install && bower install
```

## Usage

Use the following tasks:

- `grunt serve` to serve the site locally using browserSync
- `grunt build` to build the website; optionally run `grunt browserSync:dist` afterwards to serve the build site
- `grunt deploy` to build the site and deploy it to Github Pages. Requires a clean Git staging area

## Credits

- The build process is heavily inspired by [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb)
- The template is based on [Clean Blog by Start Bootstrap - Jekyll Version](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll) which is available under the [MIT license](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll/blob/gh-pages/LICENSE)
