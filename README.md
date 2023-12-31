# React + Storybook + Pandacss

## Tools

- [vite](https://vitejs.dev/guide/)
- [pandacss](https://panda-css.com/)
- [storybook](https://storybook.js.org/docs/react/get-started/why-storybook)
- [axios](https://axios-http.com/)

## Vscode plugin

- [react-snippet](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [color-highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

## Frontend Roadmap

- [html](https://www.w3schools.com/html/default.asp)
- [css](https://www.w3schools.com/css/default.asp)
- [javascript](https://www.w3schools.com/js/default.asp)
- [react](https://react.dev/learn)

## Cheat Sheet

- [python-to-js](https://medium.com/geekculture/javascript-vs-python-syntax-cheatsheet-9bc7c59599c6)
- [typescript-cheat-sheet](https://devhints.io/typescript)

## Installation

- [nodejs](https://nodejs.org/en)

## Project Structure

```
📦
└─ src (application code)
   ├─ main.tsx <-- root of react app
   ├─ index.css <-- global.css
   ├─ providers/ <-- react provider
   ├─ assets/ (raw file e.g. svg, png, jpeg)
   ├─ lib/ <-- library code
   │  ├─ ...
   │  └─ axios.ts <-- axios library
   ├─ pages/ (all pages in webapp)
   │  ├─ index.tsx < --- root page
   │  └─ dashboard
   │     └─ index.tsx <--- dashboard page
   └─ components/ (all componen
      └─ Component/ (Component)
         ├─ Component.stories.tsx (storybook)
         ├─ Component.tsx (react code)
         └─ index.ts (entry file of this components
```

©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

## Commands

### Install all dependencies

```bash
npm install
```

### Run development

start a development server

```bash
npm run dev
```

### Run storybook

start a storybook

```bash
npm run storybook
```

### Run build

bundle a production

```bash
npm run build
```
