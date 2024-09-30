<img src="http://i.imgur.com/EgdbmwO.png" width="40%"></img>


[![](https://img.shields.io/github/release/WhitestormJS/whitestorm.js.svg?style=flat-square)](https://github.com/WhitestormJS/whitestorm.js/releases)
[![Three][three]][three-url]

## Table of Contents
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Features](#features)
- [Featured Projects](#featured-projects)
- [Contributing](#contributing)
- [External Modules](#external-modules)
- [Donate](#donate)
- [Backers](#backers)


## Installation

> `whs` is currently at v2 major version. We had plans for v3 yet but development isn't active. So v2 will probably remain the main stable version until further notice.

> We try to publish **minor update releases** for bug fixes, we will review PRs.

You can install the library using npm or by downloading the library directly.

#### Install via npm

For the latest stable version:
```bash
# Install npm version
$ npm install whs
```
For the beta version use @beta tag

```bash
# Install npm version
$ npm install whs@beta
```

[![NPM Version][npm]][npm-url]


## Getting Started

Download the [minified library](https://raw.githubusercontent.com/WhitestormJS/whs.js/dev/build/whs.min.js) or link the one from [CDN](https://cdnjs.com/libraries/whitestorm.js)

The code below shows you how to include these libraries using the script tag in your HTML files.
```html
<script src="js/three.min.js"></script>
<script src="js/whs.min.js"></script>
```

The code below makes a `WHS.App` instance which handles all your [modules](modules) and components for better work with `WebGL`. This one creates a _scene_, _camera_ and _renderer_ - we add the following modules to the App. The _scene_ holds all the object you would want to display such as models or animations. The _camera_ defines what is visible to the user/viewer. The _renderer_ draws the scene.  

```js
const app = new WHS.App([
  new WHS.ElementModule(), // Apply to DOM.
  new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.

  new WHS.DefineModule('camera', new WHS.PerspectiveCamera({ // Apply a camera.
    position: new THREE.Vector3(0, 0, 50)
  })),

  new WHS.RenderingModule({bgColor: 0x162129}), // Apply THREE.WebGLRenderer
  new WHS.ResizeModule() // Make it resizable.
]);

app.start(); // Run app.
```

## Features

- 💎 **User-Friendly** – Designed to be simple and intuitive to use.
- 🚀 **Fast Prototyping** – Quickly test and refine your 3D designs with minimal setup
- 🔌 **Component-Based Scene Graph** – Organize your scene using a architecture that makes managing 3D objects easy.
- 💣 **High-Performance Physics Integration** – Simple integration of any **high performance physics** even with `Worker` (Multithreading).
- ✨ **Automated Rendering** – Automatically handle rendering tasks. 
- 🆕 **Modern JavaScript (ES2015+)** – Built with ES2015+ standards.
- 🔧 **Extensible with Modules** – Customize and extend functionality using the modular extension system, giving you flexibility in how you build your scenes.
- 📦 **Webpack and Three.js Friendly** – Integration with [Webpack](https://whs.io/Usage%20with%20webpack.html) and [Three.js](https://threejs.org/)
- ❤️ **Interoperable with WhitestormJS and Three.js** – Work with both libraries side-by-side


<a href="http://codepen.io/sasha240100/pen/JELBGX"><img src="http://blog.codepen.io/wp-content/uploads/2012/06/TryItOn-CodePen.png" height="50" /></a>

## Featured Projects

<a href="https://moxy.studio/">
  <img src="https://i.imgur.com/c9bmEDd.jpg?1" alt="https://moxy.studio/" width="30%" />
</a>

<a href="https://rmallick6806.github.io/SolarSystemBuilder/">
  <img src="https://i.imgur.com/z4wfhXb.png" alt="https://rmallick6806.github.io/SolarSystemBuilder/" width="30%" />
</a>

<a href="http://www.tpain.com/">
  <img src="https://i.imgur.com/38bdu6G.jpg" alt="http://www.tpain.com/" width="30%" />
</a>

<a href="http://artifacts.zone/lorenzav/">
  <img src="https://i.imgur.com/rKx39eY.png" alt="http://artifacts.zone/lorenzav/" width="30%" />
</a>

<a href="http://artifacts.zone/tree/">
  <img src="https://i.imgur.com/y0ZwWVi.png" alt="http://artifacts.zone/tree/" width="30%" />
</a>

### Contributing

Here’s how you can contribute to Whs.js:

1. Fork the repository and create your feature branch: `git checkout -b feature/my-feature`.
2. Make your changes and commit them: `git commit -m 'Add my feature'`.
3. Push to your branch: `git push origin feature/my-feature`.
4. Open a pull request to the `develop` branch.

Please make sure your code passes all tests by running:

```bash
npm test
```

## External Modules

|Name|Status|Description|
|:--:|:----:|:----------|
|[physics-module-ammonext][physics-ammonext]|[![NPM Version](https://img.shields.io/npm/v/physics-module-ammonext.svg?style=flat-square)](https://www.npmjs.com/package/physics-module-ammonext)|Physics module based on [Ammo.js](https://github.com/kripken/ammo.js/)|

[physics-ammonext]: https://github.com/WhitestormJS/physics-module-ammonext
[physics-ammonext-npm]: https://img.shields.io/npm/v/physics-module-ammonext.svg?style=flat-square

## Donate

[![OpenCollective Backers][backer-badge]][backer-url]
[![OpenCollective Sponsors][sponsor-badge]][sponsor-url]

### Backers

Support us with a monthly donation and help us continue framework development🎉 and adding new features💡🎁.


<a href="https://opencollective.com/whitestormjs/backer/0/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/0/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/1/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/1/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/2/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/2/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/3/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/3/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/4/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/4/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/5/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/5/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/6/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/6/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/7/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/7/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/8/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/8/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/9/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/9/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/10/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/10/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/11/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/11/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/12/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/12/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/13/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/13/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/14/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/14/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/15/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/15/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/16/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/16/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/17/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/17/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/18/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/18/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/19/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/19/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/20/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/20/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/21/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/21/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/22/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/22/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/23/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/23/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/24/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/24/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/25/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/25/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/26/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/26/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/27/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/27/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/28/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/28/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/29/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/29/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/30/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/30/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/31/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/31/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/32/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/32/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/33/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/33/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/34/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/34/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/35/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/35/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/36/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/36/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/37/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/37/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/38/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/38/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/39/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/39/avatar"></a>
<a href="https://opencollective.com/whitestormjs/backer/40/website" target="_blank"><img src="https://opencollective.com/whitestormjs/backer/40/avatar"></a>

[xo]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square
[xo-url]: https://github.com/sindresorhus/xo

[three]: https://img.shields.io/badge/three-r86-blue.svg?style=flat-square
[three-url]: https://github.com/mrdoob/three.js/

[npm]: https://img.shields.io/npm/v/whs.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/whs

[travis]: https://img.shields.io/travis/WhitestormJS/whs.js.svg?style=flat-square
[travis-url]: https://travis-ci.org/WhitestormJS/whs.js?branch=develop

[discord]: https://discordapp.com/api/guilds/238405369859145729/widget.png
[discord-url]: https://discord.gg/frNetGE

[backer-url]: https://opencollective.com/whitestormjs
[backer-badge]: https://opencollective.com/whitestormjs/backers/badge.svg?color=blue
[support-url]: https://opencollective.com/whitestormjs#support
[sponsor-url]: https://opencollective.com/whitestormjs
[sponsor-badge]: https://opencollective.com/whitestormjs/sponsors/badge.svg?color=blue
