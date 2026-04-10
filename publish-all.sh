#!/bin/bash
set -e

for pkg in ./packages/core ./packages/drei ./packages/postprocessing ./packages/rapier ./packages/test-renderer ./packages/eslint-plugin; do
  echo "Publishing $pkg..."
  npm publish "$pkg" --access public
  echo ""
done

echo "Done! All packages published."
