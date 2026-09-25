# M324 – Node.js & npm Exercises

This repository contains my solutions and work steps for the exercises of module M324.

## Requirements

* Docker
* Docker Compose
* Git
* Node.js is used inside the Docker container
* npm is used inside the Docker container

## Docker Setup

The project uses a Node.js Docker image.

### Dockerfile

The project uses `node:22-slim` as the base image.

The container stays running so that Node.js and npm commands can be executed inside the container.

### Docker Compose

Docker Compose mounts the project directory into the container.

Start the container:

```bash
docker compose up -d
```

Open the container:

```bash
docker compose exec node bash
```

Node.js and npm can be checked inside the container:

```bash
node -v
npm -v
```

---

# Exercise 1

The exercises are located in:

```text
Exercise1/
```

The folder contains, among other files:

```text
Exercise1/
├── index.js
├── package.json
└── package-lock.json
```

## Task 2 – Hello World

For the first Node.js application, an npm project was created.

The following output is created in `index.js`:

```javascript
console.log("Hello, World!");
```

The program can be started with the following npm script:

```bash
npm run start
```

Output:

```text
Hello, World!
```

---

## Task 3 – Chalk

The npm package **chalk** was installed for the output.

Used version:

```text
chalk 6.0.0
```

Because Chalk is used as an ES module, the following was added to `package.json`:

```json
"type": "module"
```

The package is then imported in the JavaScript code.

The application was tested with:

```bash
npm run start
```

The corresponding Git commit is:

```text
Exercise1_Task3
```

---

## Task 4 – npm-check-updates

The package **npm-check-updates** was installed to check for available package updates.

Used version:

```text
npm-check-updates 23.1.0
```

Before installation, the package version and release date were checked. At the time of the work, the version was more than three days old.

The check is performed with:

```bash
npx ncu --cooldown 3
```

To test the update process, the Chalk version in `package.json` was manually changed to:

```json
"chalk": "^5.2.0"
```

After that, `npm-check-updates` detected the available update:

```text
chalk  ^5.2.0  →  ^6.0.0
```

The update was then performed with:

```bash
npx ncu --cooldown 3 -u
```

and installed with:

```bash
npm install
```

An npm script was also created:

```json
"check-updates": "ncu --cooldown 3"
```

It can be run with:

```bash
npm run check-updates
```

The corresponding Git commit is:

```text
Exercise1_Task4
```

---

## Task 5 – npm and npx

In this task, the difference between `npm` and `npx` was examined.

### npm

`npm` is used, among other things, to manage and install Node.js packages.

Examples:

```bash
npm install
npm install chalk
npm run start
```

### npx

`npx` is used to run CLI programs from npm packages.

For example, the following command was used in this task:

```bash
npx ncu --cooldown 3
```

An npm script was also created to demonstrate `npx`:

```json
"npx-demo": "npx ncu --version"
```

It can be executed with:

```bash
npm run npx-demo
```

The following version was displayed:

```text
23.1.0
```

The corresponding Git commit is:

```text
Exercise1_Task5
```

---

# Git Commits

The individual tasks were documented with separate commits:

```text
Exercise1_Task3
Exercise1_Task4
Exercise1_Task5
```

This makes it possible to track the individual steps and changes in the Git history.

# Current Status

The application can be started inside the Docker container with:

```bash
npm run start
```

The available npm scripts are:

```text
npm run start
npm run check-updates
npm run npx-demo
```
