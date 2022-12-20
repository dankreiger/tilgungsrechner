#!/usr/bin/env sh

echo "Formatting affected code..."
npx nx affected --target=format
npx nx format:write
