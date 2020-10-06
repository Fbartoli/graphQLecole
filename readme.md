# GRAPHQL with a postgresql database on a dockerfile

## Requirements :

- Docker
- NODE LTS 12
- docker compose

## How to use :

- npm install --production
- open a new terminal cd src/db docker-compose -f postgresql.yml up
- npm start

The GraphQL schema's name is school.
By default the request will load 10 items, this can be changed by using the parameter limit: Int
See the schema.js for more details.

Adminer : <http://localhost:8080>
dbname : school
username: postgres
password: postgres
portDb: 5432

### Using:

Postgres
docker

### Geolocation filter done

### Improvements

-Cache requests
-Let the database do the pagination instead of JS (not scalable on big dataset)
Originally I was doing the pagination on postgres request using LIMIT and OFFSET but it was colliding with the filtering afterhand in JS.
-Unit testing
They were done at the start of the exercise using the TDD technique, however since I was not familiar with the graphql and the returns of the libraries and because I changed my way of solving the exercises I had to remove the unit tests.
