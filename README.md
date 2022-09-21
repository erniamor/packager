# Packager

> Packager is a minimalist JavaScript library that provide an example for NPM package.

* 💪 Immutable
* 📦 No dependancies
* 👫 All browsers supported

---

## Getting Started

### Installation

```console
npm install @erniamor/packager
```

### Usage

1. Import function from package

```javascript
import { sayHello } from '@erniamor/packager';
```

2. Call function with expected arguments

```javascript
sayHello('Martin'); // return "Hello Martin !"
```

## API

It's easy to use Packager APIs.

### sayHello

Say Hello to the name passed in argument

**Arguments**

name (string) : The name to say hello

**Return**

(string) : The hello to the name

**Example**

```javascript
sayHello('Martin'); // return "Hello Martin !"
```

---

## How to deploy to NPM

### Print Package files

To see the contents that will be included in the published version of the package.

```console
npx npm-packlist
```

### Print Package details

To see what would be done when actually running the command.

```console
npm publish --dry-run
```

### Publish package

To actually publish the package to npm.

```console
npm publish --access=public
```

## License

Packager is licensed under a [MIT License](./LICENSE).