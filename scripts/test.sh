#!/usr/bin/env sh

echo "Testing affected code..."
npx nx affected --target=test
