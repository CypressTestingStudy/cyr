# CYR Learning

[![CypressLearn](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/nnkyhr&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/nnkyhr/runs)

[![Chrome headless](https://github.com/CypressTestingStudy/cyr/actions/workflows/main.yml/badge.svg)](https://github.com/CypressTestingStudy/cyr/actions/workflows/main.yml)

## SetUp

1. Configure a `cypress.json` file based on [cypress.sample.json](./cypress.sample.json)

1. Run

```bash
npm ci
```

## Running

#### Using cypress UI mode

```bash
npx cypress open
```

#### Using Headless mode

```bash
npx cypress run
```

#### Run specific test in Headless mode

```bash
npx cypress run --testFile.js
```

#### Run Headless mode with Dashboard Analysis

```bash
npx cypress run --record --key 49bfa993-ad20-464c-b7ab-d9d27ae262c0
```

Generate With Reports:

```bash
npx cypress run --reporter mochawesome
```

Combine the reports:

```bash
npx mochawesome-merge "cypress/results/*.json" > mochawesome.json
```

Generate the HTML Report:

```bash
npx merge mochawesome.json
```

Project Structure

- All in English
- All in CamelCase

---

**Variables Names:**
Button: btn
Click: clk
Screen: scr
Source: src
List: List
Dropdown list: ddl

---

**Constrains:**
The first letter should will not go in UpperCase (class, methods, variables, etc)
It does not use VAR type, hyphen, and underlines.
Pointers must go in variables.

---

**Nomination:**
Integration
cartFuncionality
cartBuynow
buyNow.spect.js
cartKeepbuying
keepBuying.spect.js

---

**FashionPage:**
Cypress.Commands.add("loginFashionPage", function (user)
