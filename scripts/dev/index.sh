#!/usr/bin/env sh


npx concurrently -n api,web,gql -c bgBlue.bold,bgMagenta.bold,bgYellow.bold "nx run loans-api:serve" "nx run loans-web:serve" "nx run loans-api:generate"
