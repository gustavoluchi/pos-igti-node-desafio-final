#!/bin/sh
# -e Exit immediately when a command returns a non-zero status.
# -x Print commands before they are executed
set -ex
# seeding json - last part
docker cp /home/gus/dev/igti/Modulo2-Node/desafiofinal/desafio-final-nest/prisma/json-insert.sql postgres-desafio-final:/tmp/;
docker exec postgres-desafio-final sh -c "psql -U igti -d desafiofinal -f /tmp/json-insert.sql";
