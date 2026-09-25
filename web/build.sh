#!/bin/sh
# Monta src/index.html a partir de las piezas de src/parts/.
cd "$(dirname "$0")/src" || exit 1
{
  printf '<!doctype html>\n<html lang="es">\n<head>\n'
  printf '<meta charset="utf-8">\n'
  printf '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
  cat parts/p1-head.html
  printf '</head>\n<body>\n'
  cat parts/p2-body.html
  printf '<script>\n'
  cat parts/p3-data.js parts/p4-app.js
  printf '</script>\n</body>\n</html>\n'
} > index.html
echo "index.html: $(wc -c < index.html) bytes"
