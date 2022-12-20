#!/usr/bin/env sh


npx concurrently -n api,web -c bgBlue.bold,bgMagenta.bold "nx run loans-api:serve" "nx run loans-web:serve"
