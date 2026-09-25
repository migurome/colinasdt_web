const fs = require('fs');
const src = fs.readFileSync('web/src/parts/p3-data.js', 'utf8');
const c = {};
new Function(src + '\nthis.E = EVENTOS;').call(c);
const pl = (t) => String(t || '').replace(/<[^>]+>/g, '');
const ev = c.E.filter((e) => !e.sil && e.p);

let pal = 0, fr = 0, largas = 0;
const dur = [];
ev.forEach((e) => {
  const t = pl(e.p);
  const ff = t.split(/(?<=[.:;»!?])\s+/).filter((x) => x.trim());
  ff.forEach((f) => {
    const n = f.split(/\s+/).length;
    pal += n; fr++;
    if (n > 30) largas++;
  });
  // densidad de cifras, siglas y nombres propios en mitad de frase
  const cifras = (t.match(/\d/g) || []).length;
  const siglas = (t.match(/\b[A-ZÁÉÍÓÚÑ]{3,}\b/g) || []).length;
  const propios = (t.match(/(?!^)\b[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{2,}/g) || []).length;
  dur.push({ y: e.y, pal: t.split(/\s+/).length, fr: ff.length,
             media: +(t.split(/\s+/).length / ff.length).toFixed(1),
             cifras, siglas, propios,
             carga: +((cifras + siglas * 3 + propios * 2) / ff.length).toFixed(1) });
});
console.log('entradas con texto:', ev.length);
console.log('palabras por frase (media):', (pal / fr).toFixed(1));
console.log('frases de más de 30 palabras:', largas, 'de', fr);
console.log('');
console.log('Las diez más cargadas de datos por frase:');
dur.sort((a, b) => b.carga - a.carga).slice(0, 10).forEach((d) => {
  console.log('  ' + (d.y + '            ').slice(0, 13),
    'carga', String(d.carga).padStart(5),
    '| frases', String(d.fr).padStart(2),
    '| pal/frase', String(d.media).padStart(5),
    '| cifras', String(d.cifras).padStart(3),
    '| nombres', d.propios);
});
