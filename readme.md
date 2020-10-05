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
