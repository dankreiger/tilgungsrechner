#!/usr/bin/env sh

echo "Linting affected code..."
npx nx affected --target=lint
