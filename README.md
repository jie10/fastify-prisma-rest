# fastify-prisma-rest

<div align="center">
<img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="450" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web SIte](https://github.com/fastify/fastify/workflows/website/badge.svg)](https://github.com/fastify/fastify/actions/workflows/website.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/fastify/fastify/badge.svg)](https://snyk.io/test/github/fastify/fastify)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=main)](https://coveralls.io/github/fastify/fastify?branch=main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://standardjs.com/)

</div>

## Installation

1. Copy repo to your local directory:
```
git clone https://github.com/jie10/fastify-prisma-rest.git
```
2. Go to your clone repo:
```
cd fastify-prisma-rest
```
3. Install `package.json` dependencies:
```
npm install
```
## Update dependencies

> This is optional.
1. To update all `package.json` dependencies:
```
npx npm-check-updates -u
```
2. Install all dependencies:
```
npm install
```
## Connect prisma to db

1. Create `.env` file to your root directory:
> Copy & paste the code below.
```
PORT = 3001
DATABASE_URL="mysql://root:password@localhost:3306/your_db"
```
> `PORT` to change your port.
> `DATABASE_URL` to change your database ex: mongodb, mysql, etc..
2. Change your db provider:
> Go to prisma folder > schema.prisma.
```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```
> You can change db provider mongodb, mysql, etc..
> Note: visit [Prisma ORM](https://www.prisma.io/) to view supported databases.
3. Database migration:
```
npx prisma migrate dev --name init
```
> To migrate database
4. Reset migration:
> This is optional.
```
npx prisma migrate reset
```
> Note: you can't `delete/empty` all data table manually on phpmyadmin.