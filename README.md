# String Calculator TDD Kata

This project demonstrates the implementation of the String Calculator using the **Test-Driven Development (TDD)** approach with **NestJS**. The goal of the Kata is to build a string calculator that can take a string of numbers and perform operations based on those numbers.

## Problem Description

You are tasked with creating a **String Calculator** that should be able to:

- Add numbers provided as a string separated by commas.
- Handle multiple numbers (e.g., `1,2,3` should return `6`).
- Handle newlines as separators as well (e.g., `1\n2,3` should return `6`).
- Support optional custom delimiters (e.g., `//[delimiter]\n[numbers]`).
- Throw an exception if a negative number is passed (e.g., `-1`).
  
For more detailed problem breakdown, refer to [String Calculator Kata](https://osherove.com/tdd-kata-1).

## Steps to Start

Follow the steps below to set up and run this project locally.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/geekrishabh/tdd-string-calculator
cd tdd-string-calculator


## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.
