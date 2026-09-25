#!/bin/sh
# Monta src/index.html a partir de las piezas de src/parts/.
cd "$(dirname "$0")/src" || exit 1
{
  cat parts/p1-head.html parts/p2-body.html
  printf '<script>\n'
  cat parts/p3-data.js parts/p4-app.js
  printf '</script>\n'
} > index.html
echo "index.html: $(wc -c < index.html) bytes"
