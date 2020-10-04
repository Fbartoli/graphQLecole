# GRAPHQL with a postgresql database on a dockerfile

## Requirements :

- Docker
- NODE LTS 12

## How to use :

- npm install
- open a new terminal cd src/db docker-compose -f postgresql.yml up
- npm start

Adminer : <http://localhost:8080>
dbname : school
username: postgres
password: postgres
portDb: 5432

Design choice:
graphql requirement
Apollo server
Postgres
docker
ORM: - Sequelize simplicity

To improve:
Type on schemas
