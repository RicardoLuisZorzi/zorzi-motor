/* ======================================================================
   MOTOR ZORZI V5.1 (zorzi-motor no GitHub) - Zorzi & Zorzi Advogados Associados
   Padrao Harvey V68 / Matriz V48. Arquivo unico: CSS, montagem da lauda,
   normalizacao do HTML, paginacao A4, fecho, selo de integridade e exportacao.
   Uso na pagina (o Maximus escreve so isto):
     <body data-modo="colorido">   (ou "pb" ou "word")
     <div class="content"> ...texto integral da peca... </div>
     <script src="https://cdn.jsdelivr.net/gh/RicardoLuisZorzi/zorzi-motor@main/motor-v5.js"></script>
   ====================================================================== */
const ZM_VERSAO = 'V5.1';
const ZM_MODO_INICIAL = (function () {
  const v = ((document.body && document.body.getAttribute('data-modo')) || window.ZM_MODO || 'colorido').toLowerCase();
  return v === 'pb' || v === 'word' ? v : 'colorido';
})();
const ZM_CSS = "\n/* ===== MATRIZ ZORZI & ZORZI - PADRAO HARVEY V68 / V48 (nao alterar) ===== */\n:root { --texto:#111827; --marca:#161B22; --cinza:#6B7280; --filete:#1F2937; --quadro:#F9FAFB; --quadro-azul: rgba(30,58,95,.07); }\n@page { size: A4; margin: 0; }\n* { box-sizing: border-box; }\nhtml, body { margin: 0; padding: 0; }\nbody { background: #525659; padding: 70px 0 40px; display: flex; flex-direction: column; align-items: center; font-family: 'Inter', Arial, sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }\n\n/* Barra de comandos (nao sai no PDF nem na impressao) */\n.barra { position: fixed; top: 0; left: 0; right: 0; min-height: 56px; background: #161B22; border-bottom: 2px solid #d4af37; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 6px 20px; z-index: 9999; font-family: 'Inter', Arial, sans-serif; }\n.barra-titulo { color: #f8e596; font-size: 9.5pt; font-weight: 700; letter-spacing: .08em; white-space: nowrap; }\n.selo { font-size: 8pt; font-weight: 600; color: #7ee787; background: rgba(255,255,255,.06); padding: 4px 9px; border-radius: 4px; border: 1px solid rgba(255,255,255,.12); flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.selo.aviso { color: #f2cc60; } .selo.erro { color: #ff7b72; }\n.botoes { display: flex; gap: 8px; flex-shrink: 0; }\n.btn { background: linear-gradient(135deg, #d4af37, #b28925); color: #111; border: none; padding: 8px 16px; border-radius: 6px; font-family: 'Inter', Arial, sans-serif; font-size: 9pt; font-weight: 700; cursor: pointer; }\n.btn.sec { background: transparent; color: #f8e596; border: 1px solid #d4af37; }\n.btn:disabled { opacity: .6; cursor: wait; }\n.painel { width: 210mm; max-width: 100%; margin: 0 0 10px; background: #fff8e1; border-left: 4px solid #d4af37; padding: 8px 12px; font-family: 'Inter', Arial, sans-serif; font-size: 9pt; color: #3d3200; display: none; }\n.painel.info { background: #eef6ee; border-left-color: #2e7d32; color: #1b3d1c; }\n.painel.erro { background: #ffecec; border-left-color: #d93025; color: #5c0b06; }\n.painel ul { margin: 4px 0 0 18px; padding: 0; }\n\n/* Lauda A4 (geometria do timbrado Harvey) */\n.page { width: 210mm; height: 297mm; position: relative; overflow: hidden; background: #fff; margin: 0 0 10mm; box-shadow: 0 0 20px rgba(0,0,0,.3); flex-shrink: 0; }\n.cab { position: absolute; top: 0; left: 0; width: 210mm; height: 38.44mm; background: #161B22; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; }\n.cab img { position: absolute; inset: 0; width: 100%; height: 100%; display: none; }\n.cab.com-imagem img { display: block; }\n.cab.com-imagem .reserva { display: none; }\n.corpo { position: absolute; top: 51.44mm; left: 25mm; right: 25mm; bottom: 33.02mm; overflow: hidden; }\n.rod { position: absolute; left: 0; bottom: 6mm; width: 210mm; height: 22.02mm; }\n.rod img { width: 210mm; height: 22.02mm; display: none; }\n.rod.com-imagem img { display: block; }\n.rod.com-imagem .reserva-rod { display: none; }\n\n/* Reserva do cabecalho e do rodape (so aparece se a imagem do GitHub falhar) */\n.reserva { display: flex; flex-direction: column; align-items: center; }\n.placas { position: relative; width: 80px; height: 70px; margin-bottom: 8px; }\n.placa { position: absolute; width: 48px; height: 60px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-family: 'Cinzel', serif; font-size: 44px; line-height: 1; color: #d4af37; border: 1px solid rgba(212,175,55,.55); }\n.placa.tras { top: 8px; left: 22px; opacity: .45; } .placa.frente { top: 0; left: 6px; background: rgba(22,27,34,.85); }\n.marca-nome { font-family: 'Cinzel', serif; font-size: 13.5pt; font-weight: 600; letter-spacing: .16em; color: #d4af37; }\n.marca-sub { font-family: 'Montserrat', Arial, sans-serif; font-size: 5.5pt; font-weight: 300; letter-spacing: .38em; color: #8b949e; margin-top: 3px; text-transform: uppercase; }\n.reserva-rod { margin: 0 auto; width: 160mm; border-top: 1.2mm solid #b8902d; padding-top: 2.2mm; text-align: center; font-size: 8pt; line-height: 1.55; color: #1F2937; }\n.reserva-rod .r1 { font-weight: 700; } .reserva-rod .r2 { font-weight: 700; color: #9C7E24; }\n\n/* ===== CORPO DA PECA ===== */\n.content { font-family: 'Inter', Arial, sans-serif; font-size: 11.5pt; line-height: 1.6; color: var(--texto); text-align: justify; hyphens: none; -webkit-hyphens: none; }\n.content > :first-child { margin-top: 0 !important; }\n.content p { margin: 0 0 12pt; text-indent: 10.58mm; }\n.content strong, .content b { font-weight: 700; }\n.content p.sem-recuo { text-indent: 0; text-align: left; }\n.enderecamento { font-weight: 700; text-transform: uppercase; font-size: 11pt; line-height: 1.625; text-align: center; border-bottom: 1.5pt solid var(--filete); padding-bottom: 9pt; margin: 0 0 12pt; }\n.autos { text-align: right; font-weight: 700; font-size: 10pt; line-height: 1.25; color: var(--marca); margin: 0 0 18pt; }\n.autos:has(+ .juizo) { margin-bottom: 0; }\n.juizo { text-align: right; font-weight: 600; font-size: 9pt; line-height: 1.25; color: var(--cinza); margin: 0 0 18pt; }\n.partes { background: var(--quadro); border-left: 3pt solid var(--marca); padding: 7pt 10pt 7pt 11.3pt; margin: 0 0 18pt; font-size: 10pt; line-height: 1.6; text-align: left; }\n.content .partes p { margin: 0; text-indent: 0; text-align: left; }\n.despacho { height: 73.6pt; }\n.despacho.sem-partes { height: 92pt; }\n.titulo-peca { text-align: center; font-weight: 700; text-transform: uppercase; font-size: 13pt; letter-spacing: .025em; line-height: 1.6; margin: 6pt 0 18pt; }\n.content h2, .secao { font-size: 11.5pt; font-weight: 700; font-variant: small-caps; letter-spacing: .05em; color: var(--texto); text-align: left; line-height: 1.6; background: rgba(184,144,45,.14); border-left: 3pt solid #B8902D; padding: 2pt 8pt 2pt 8pt; margin: 30.4pt 0 12pt 0; }\n.content h3, .subsecao { font-size: 11.5pt; font-weight: 700; color: var(--texto); text-align: left; line-height: 1.6; background: var(--quadro-azul); border-left: 3pt solid var(--marca); padding: 1.5pt 8pt; margin: 24.4pt 0 8pt; }\n\n.fecho-continuacao { margin-top: 0 !important; }\nbody.aperto-1 .content p { margin-bottom: 10pt; } body.aperto-1 .content h2 { margin-top: 24pt; } body.aperto-1 .content h3 { margin-top: 18pt; }\nbody.aperto-2 .content p { margin-bottom: 8pt; } body.aperto-2 .content h2 { margin-top: 18pt; margin-bottom: 10pt; } body.aperto-2 .content h3 { margin-top: 12pt; margin-bottom: 6pt; } body.aperto-2 .sintese, body.aperto-2 .partes, body.aperto-2 .destaque { margin-bottom: 14pt; }\nbody.aperto-3 .content p { margin-bottom: 6pt; } body.aperto-3 .content h2 { margin-top: 12pt; margin-bottom: 8pt; } body.aperto-3 .content h3 { margin-top: 8pt; margin-bottom: 4pt; } body.aperto-3 .content th, body.aperto-3 .content td { padding: 2pt 4pt; } body.aperto-3 .content table { line-height: 1.28; } body.aperto-3 .sintese, body.aperto-3 .partes, body.aperto-3 .destaque { margin-bottom: 10pt; padding-top: 5pt; padding-bottom: 5pt; }\n.page.apertada .content p { margin-bottom: 6pt; }\n.page.apertada .content h2, .page.apertada .secao { margin-top: 12pt; margin-bottom: 8pt; }\n.page.apertada .content h3, .page.apertada .subsecao { margin-top: 8pt; margin-bottom: 4pt; }\n.page.apertada .content th, .page.apertada .content td { padding: 2pt 4pt; }\n.page.apertada .content table { line-height: 1.28; margin-bottom: 6pt; }\n.page.apertada .sintese, .page.apertada .destaque, .page.apertada .partes { padding-top: 5pt; padding-bottom: 5pt; margin-bottom: 10pt; }\n.page.apertada .lista li { margin-bottom: 3pt; }\n.page.apertada .citacao, .page.apertada .content blockquote { margin-bottom: 6pt; }\n.sintese, .destaque, .quadro-anexos { background: var(--quadro-azul); border-left: 3pt solid var(--marca); padding: 7pt 10pt 7pt 11.3pt; margin: 0 0 18pt; text-align: left; }\n.content .sintese p, .content .destaque p, .content .quadro-anexos p { text-indent: 0; text-align: left; margin: 0 0 6pt; }\n.content .sintese > :last-child, .content .destaque > :last-child, .content .quadro-anexos > :last-child { margin-bottom: 0; }\n.sintese-titulo { font-weight: 700; text-transform: uppercase; letter-spacing: .03em; margin: 0 0 4pt; }\n.sintese ul, .destaque ul, .quadro-anexos ul { list-style: none; margin: 0; padding: 0; }\n.sintese li, .destaque li, .quadro-anexos li { position: relative; padding-left: 5mm; margin: 0 0 4pt; text-align: left; }\n.sintese li:last-child, .destaque li:last-child, .quadro-anexos li:last-child { margin-bottom: 0; }\n.sintese li::before, .destaque li::before, .quadro-anexos li::before { content: '\\25AA'; position: absolute; left: 0; color: var(--marca); }\n.citacao, .content blockquote { margin: 0 0 12pt 40mm; font-size: 10pt; line-height: 1.25; text-align: justify; }\n.content .citacao p, .content blockquote p { text-indent: 0; margin: 0 0 6pt; }\n.content ul.lista, .content ol.lista { list-style: none; margin: 0 0 12pt; padding: 0; }\n.lista li { margin: 0 0 6pt; padding-left: 17.58mm; text-indent: -7mm; text-align: justify; }\n.content table, .tabela { width: 100%; border-collapse: collapse; table-layout: auto; margin: 0 0 12pt; font-size: 10pt; line-height: 1.4; }\n.content th, .content td { border: .5pt solid #D1D5DB; padding: 4pt 5.5pt; text-align: left; vertical-align: top; }\n.content th { background: var(--marca); color: #fff; font-weight: 700; }\n.content tr.destaque td { background: #F3F4F6; font-weight: 700; }\n.fecho { text-align: center; margin: 24pt 0 0; }\n.content .fecho p { text-indent: 0; text-align: center; margin: 0; }\n.content .fecho .abertura { margin-bottom: 18pt; }\n.content .fecho .data { font-weight: 600; margin-bottom: 30pt; }\n.content .fecho .nome { font-weight: 700; text-transform: uppercase; font-size: 10.5pt; letter-spacing: .1em; color: var(--marca); }\n.content .fecho .oab { text-transform: uppercase; font-size: 9pt; letter-spacing: .1em; color: var(--cinza); margin-top: 1.5pt; }\n.fecho .assinante + .assinante { margin-top: 18pt; }\n.content .fecho.compacto { margin-top: 10pt; }\n.content .fecho.compacto .abertura { margin-bottom: 8pt; }\n.content .fecho.compacto .data { margin-bottom: 14pt; }\n.fecho.compacto .assinante + .assinante { margin-top: 8pt; }\n\n/* ===== MODO PRETO E BRANCO (so o timbre muda; o corpo e o mesmo) ===== */\nbody.pb .barra { background: #111; border-bottom-color: #777; }\nbody.pb .barra-titulo { color: #fff; }\nbody.pb .btn { background: #fff; color: #111; border: 1px solid #ccc; }\nbody.pb .btn.sec { background: transparent; color: #fff; border-color: #888; }\nbody.pb .cab { background: #fff; border-bottom: 1.5px solid #111; }\nbody.pb .cab.com-imagem { border-bottom: none; }\nbody.pb .placa { color: #111; border-color: #111; } body.pb .placa.frente { background: #fff; } body.pb .placa.tras { color: #888; border-color: #888; }\nbody.pb .marca-nome { color: #111; } body.pb .marca-sub { color: #555; }\nbody.pb .reserva-rod { border-top-color: #444; } body.pb .content h2, body.pb .secao { border-left-color: #555; color: #111; background: rgba(0,0,0,.07); } body.pb .content h3, body.pb .subsecao { color: #111; background: rgba(0,0,0,.04); border-left-color: #111; } body.pb .quadro-anexos { border-left-color: #111; background: rgba(0,0,0,.04); } body.pb .sintese { background: rgba(0,0,0,.04); } body.pb .content th { background: #111; } body.pb .sintese, body.pb .destaque, body.pb .partes { border-left-color: #111; } body.pb .reserva-rod .r2 { color: #333; }\n\n/* ===== MODO WORD (sem timbre, sem paginacao, margens de 25 mm) ===== */\nbody.word .barra { background: #185abd; border-bottom-color: #103f82; }\nbody.word .barra-titulo { color: #fff; }\nbody.word .btn { background: #fff; color: #185abd; }\nbody.word .btn.sec { background: transparent; color: #fff; border: 1px solid #fff; }\nbody.word { background: #f0f3f5; }\n.folha-word { width: 210mm; min-height: 297mm; background: #fff; padding: 25mm; box-shadow: 0 10px 30px rgba(0,0,0,.1); }\n\n@media print {\n  body { background: #fff !important; padding: 0 !important; display: block; }\n  .no-print { display: none !important; }\n  .page { margin: 0; box-shadow: none; break-after: page; page-break-after: always; }\n  .folha-word { box-shadow: none; }\n}\n\n.content .quadro-anexos .anexos-titulo { font-weight: 700; margin: 0 0 4pt; text-indent: 0; }\n.quadro-anexos li { padding-left: 0; }\n.quadro-anexos li::before { content: none; }\n.content table.zm-medir th, .content table.zm-medir td { white-space: nowrap; }\n.content table { width: 100%; }\n";
const ZM_NORMALIZACOES = [];
const ZM_AJUSTES = []; // ajustes de diagramacao (informativos: nao acendem o aviso)

function zmCarregarScript(src) {
  return new Promise(function (ok) {
    const s = document.createElement('script'); s.src = src; s.async = true;
    s.onload = function () { ok(true); }; s.onerror = function () { ok(false); };
    document.head.appendChild(s);
  });
}

// ----- 0. Normalizacao: o motor corrige o HTML que vier fora do padrao -----
function zmTexto(el) { return (el.textContent || '').replace(/\s+/g, ' ').trim(); }
function zmUnwrap(el) { const p = el.parentNode; while (el.firstChild) p.insertBefore(el.firstChild, el); p.removeChild(el); }
const ZM_RE_DATA = /([A-ZÀ-Úa-zà-ú][A-Za-zÀ-ú' ]{1,40}\/[A-Z]{2}),\s*(\d{1,2})\s+de\s+([A-Za-zç]+)\s+de\s+(\d{4})\.?/;
function zmRestoDoFecho(t) {
  return t.replace(ZM_RE_DATA, '')
    .replace(/nestes termos,?\s*pede\s+deferimento\.?/ig, '')
    .replace(/termos em que,?\s*pede\s+(e\s+espera\s+)?deferimento\.?/ig, '')
    .replace(/rog[ée]rio\s+zorzi|ricardo\s+lu[íi]s\s+zorzi/ig, '')
    .replace(/advogad[oa]s?|oab\s*\/\s*sc|n?[º°]?\s*28\.?529|57\.?634|associados|zorzi\s*&\s*zorzi/ig, '')
    .replace(/[\s\-–—_|:.,]+/g, '');
}
function zmNormalizar(c) {
  // (a) estilos e scripts proprios do HTML gerado (o padrao visual e so o do motor)
  document.querySelectorAll('style:not(#zm-css), link[rel="stylesheet"]').forEach(function (s) {
    if (s.id === 'zm-css' || /fonts\.googleapis/.test(s.href || '')) return;
    s.remove(); ZM_NORMALIZACOES.push('estilo próprio do HTML removido');
  });
  c.querySelectorAll('[style]').forEach(function (e) { e.removeAttribute('style'); });
  c.querySelectorAll('script, link, hr').forEach(function (e) { e.remove(); });
  // (b) laudas feitas a mao: o motor pagina sozinho
  c.querySelectorAll('.page, .pagina, .lauda, .sheet').forEach(function (e) { zmUnwrap(e); ZM_NORMALIZACOES.push('lauda feita à mão desfeita (o motor pagina)'); });
  // (c) timbre e rodape digitados e numeracao de pagina
  Array.from(c.querySelectorAll('div, header, footer, p, h1, h2, span')).forEach(function (e) {
    if (!c.contains(e)) return;
    const t = zmTexto(e);
    const marca = /^(zorzi\s*&\s*zorzi)?\s*(advogados\s+associados)?$/i.test(t) && t.length > 0;
    const pagina = /^p[áa]gina\s+\d+\s+de\s+\d+/i.test(t) || /^p[áa]gina\s+\d+\s*(\|.*)?$/i.test(t);
    const rodape = /wenceslau\s+braz/i.test(t) && t.length < 260;
    if (marca || pagina || rodape || /^(header|footer|cabecalho|rodape)$/i.test(e.className || '')) {
      if (e.closest('.fecho')) return;
      e.remove(); ZM_NORMALIZACOES.push(pagina ? 'numeração de página digitada removida' : 'timbre ou rodapé digitado removido (o motor usa o do GitHub)');
    }
  });
  // (d) fecho digitado (data, linhas e assinaturas) -> fecho padrao montado pelo motor
  if (!c.querySelector('.fecho')) {
    let dataTxt = null, cidade = null; const remover = [];
    let el = c.lastElementChild;
    while (el) {
      const t = zmTexto(el);
      if (!t) { remover.push(el); el = el.previousElementSibling; continue; }
      if (zmRestoDoFecho(t).length) break;
      const m = t.match(ZM_RE_DATA);
      if (m) { cidade = m[1].trim(); dataTxt = parseInt(m[2], 10) + ' de ' + m[3].toLowerCase() + ' de ' + m[4]; }
      remover.push(el); el = el.previousElementSibling;
    }
    if (remover.length && dataTxt) {
      remover.forEach(function (r) { r.remove(); });
      const f = document.createElement('div'); f.className = 'fecho';
      f.setAttribute('data-cidade', cidade); f.setAttribute('data-data', dataTxt);
      c.appendChild(f);
      ZM_NORMALIZACOES.push('fecho digitado trocado pelo fecho padrão (' + cidade + ', ' + dataTxt + ')');
    }
  }
  // (e) papeis reconhecidos pelo conteudo, quando faltam as classes do padrao
  const blocos = Array.from(c.children);
  if (!c.querySelector('.enderecamento')) {
    const e = blocos.find(function (b) { const t = zmTexto(b); return /^(ao|à|a\s|excelent|exmo|ilustr|egr[ée]gio)/i.test(t) && t === t.toUpperCase() && t.length < 400; });
    if (e) { e.className = 'enderecamento'; ZM_NORMALIZACOES.push('endereçamento reconhecido'); }
  }
  blocos.forEach(function (b) {
    const t = zmTexto(b);
    if (/^s[íi]ntese/i.test(t) || /synop|sinopse|sintese|síntese|sinotico/i.test(b.className || '')) {
      if (!b.classList.contains('sintese')) { b.className = 'sintese'; ZM_NORMALIZACOES.push('quadro síntese reconhecido'); }
      const tit = b.querySelector('strong, b, h3, h4');
      if (tit && b.firstElementChild === tit && !tit.classList.contains('sintese-titulo')) {
        const p = document.createElement('p'); p.className = 'sintese-titulo'; p.textContent = zmTexto(tit); tit.replaceWith(p);
      } else if (tit && tit.parentNode === b && !tit.closest('li')) {
        const p = document.createElement('p'); p.className = 'sintese-titulo'; p.textContent = zmTexto(tit); tit.replaceWith(p);
      }
    } else if (!b.className && b.tagName === 'DIV' && /\b(autos|processo)\b/i.test(t.slice(0, 40)) && t.length < 600 && !c.querySelector('.partes')) {
      b.className = 'partes';
      Array.from(b.childNodes).forEach(function (n) { if (n.nodeType === 3 && !n.nodeValue.trim()) n.remove(); });
      if (!b.querySelector('p')) {
        const partes = b.innerHTML.split(/<br\s*\/?>/i);
        b.innerHTML = partes.filter(function (x) { return x.trim(); }).map(function (x) { return '<p>' + x.trim() + '</p>'; }).join('');
      }
      ZM_NORMALIZACOES.push('quadro dos autos e das partes reconhecido');
    } else if (b.tagName === 'DIV' && /(process|partes|info)/i.test(b.className || '') && !b.classList.contains('partes')) {
      b.className = 'partes';
      if (!b.querySelector('p')) {
        const partes = b.innerHTML.split(/<br\s*\/?>/i);
        b.innerHTML = partes.filter(function (x) { return x.trim(); }).map(function (x) { return '<p>' + x.trim() + '</p>'; }).join('');
      }
      ZM_NORMALIZACOES.push('quadro dos autos e das partes reconhecido');
    }
  });
  if (!c.querySelector('.despacho')) {
    const ref = c.querySelector('.partes') || c.querySelector('.juizo') || c.querySelector('.autos') || c.querySelector('.enderecamento');
    if (ref) { const d = document.createElement('div'); d.className = 'despacho'; ref.after(d); ZM_NORMALIZACOES.push('espaço do despacho (5 linhas) inserido'); }
  }
  // (f) assinaturas digitadas que sobraram no meio do texto
  c.querySelectorAll('.signature-line, .signature-block, .assinatura, .linha-assinatura').forEach(function (e) {
    if (!e.closest('.fecho') && !zmRestoDoFecho(zmTexto(e)).length) { e.remove(); ZM_NORMALIZACOES.push('linha de assinatura removida'); }
  });
}


// ----- 0-B. Preserva os destaques do texto (negrito, italico, sublinhado) antes de tirar os estilos do HTML -----
function zmMarcarDestaques(raiz) {
  const fortes = /^(B|STRONG|TH|H1|H2|H3|H4|H5|H6)$/;
  raiz.querySelectorAll('*').forEach(function (e) {
    if (/^(SCRIPT|STYLE|LINK|BR|IMG|HR)$/.test(e.tagName)) return;
    const cs = getComputedStyle(e), pai = e.parentElement ? getComputedStyle(e.parentElement) : null;
    const w = parseInt(cs.fontWeight, 10) || 400, wp = pai ? (parseInt(pai.fontWeight, 10) || 400) : 400;
    if (w >= 600 && wp < 600 && !fortes.test(e.tagName)) e.setAttribute('data-zm-b', '1');
    if (cs.fontStyle === 'italic' && (!pai || pai.fontStyle !== 'italic') && !/^(I|EM)$/.test(e.tagName)) e.setAttribute('data-zm-i', '1');
    const td = cs.textDecorationLine || cs.textDecoration || '';
    const tdp = pai ? (pai.textDecorationLine || pai.textDecoration || '') : '';
    if (/underline/.test(td) && !/underline/.test(tdp) && e.tagName !== 'U' && e.tagName !== 'A') e.setAttribute('data-zm-u', '1');
  });
}
function zmAplicarDestaques(c) {
  [['data-zm-b', 'strong'], ['data-zm-i', 'em'], ['data-zm-u', 'u']].forEach(function (par) {
    c.querySelectorAll('[' + par[0] + ']').forEach(function (e) {
      e.removeAttribute(par[0]);
      if (e.matches('.enderecamento, .autos, .juizo, .sintese-titulo, h1, h2, h3, h4')) return;
      const w = document.createElement(par[1]);
      while (e.firstChild) w.appendChild(e.firstChild);
      e.appendChild(w);
    });
  });
  // **negrito** e __sublinhado__ escritos em Markdown dentro do HTML
  const walker = document.createTreeWalker(c, NodeFilter.SHOW_TEXT, null, false); const nos = []; let n;
  while ((n = walker.nextNode())) if (/\*\*[^*]+\*\*|__[^_]+__/.test(n.nodeValue)) nos.push(n);
  nos.forEach(function (t) {
    const span = document.createElement('span');
    span.innerHTML = t.nodeValue.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/__([^_]+)__/g, '<u>$1</u>');
    while (span.firstChild) t.parentNode.insertBefore(span.firstChild, t);
    t.remove();
  });
}


// ----- 0-C. Subtitulos numerados pelo titulo (IV -> IV.1, IV.2 ...) - ordem do Doutor, 03/11/2026 -----
function zmNumerarSubtitulos(c) {
  let romano = null, k = 0, mudou = false;
  const reAntigo = /^\s*(?:[IVXLCDM]+(?:\.\d+)?|\d+(?:\.\d+)*|[a-z])\s*[\.\-–—:)]\s*(?:[\-–—]\s*)?/i;
  c.querySelectorAll('h2, .secao, h3, .subsecao').forEach(function (h) {
    if (h.matches('h2, .secao')) {
      const m = zmTexto(h).match(/^([IVXLCDM]+)\s*[\.\-–—:)\s]/);
      romano = m ? m[1] : null; k = 0; return;
    }
    if (!romano) return;
    k++;
    const w = document.createTreeWalker(h, NodeFilter.SHOW_TEXT, null, false);
    let t = w.nextNode(); while (t && !t.nodeValue.trim()) t = w.nextNode();
    if (!t) return;
    const novo = romano + '.' + k + ' – ';
    const antes = t.nodeValue;
    t.nodeValue = antes.replace(/^\s+/, '').replace(reAntigo, '');
    t.nodeValue = novo + t.nodeValue;
    if (t.nodeValue !== antes) mudou = true;
  });
  if (mudou) ZM_NORMALIZACOES.push('subtítulos numerados pelo título (ex.: IV.1, IV.2)');
}
// ----- 0-D. Rol de anexos em quadro, no formato da sintese -----
function zmQuadroAnexos(c) {
  Array.from(c.children).forEach(function (el) {
    if (!c.contains(el) || el.matches('.sintese, .partes, .fecho, .quadro-anexos, h1, h2, h3, h4')) return;
    const t = zmTexto(el);
    if (!/^(rol\s+de\s+(anexos|documentos)|documentos\s+anexos|anexos\s*[:(])/i.test(t)) return;
    let titulo, itens = [];
    if (el.tagName === 'P' && el.querySelector('br')) {
      const partes = el.innerHTML.split(/<br\s*\/?>/i).map(function (x) { return x.trim(); }).filter(function (x) { return x.replace(/<[^>]+>/g, '').trim(); });
      titulo = partes.shift(); itens = partes;
    } else { titulo = el.innerHTML; }
    let nx = el.nextElementSibling;
    while (nx) {
      const tx = zmTexto(nx);
      if (nx.matches('ul, ol')) { Array.from(nx.children).forEach(function (li) { itens.push(li.innerHTML); }); const r = nx; nx = nx.nextElementSibling; r.remove(); continue; }
      if (nx.tagName === 'P' && /^(\d+\s*[\)\.\-–]|anexo\s*\d+|doc(umento)?\.?\s*\d+|[a-z]\s*\))/i.test(tx) && tx.length < 500) { itens.push(nx.innerHTML); const r = nx; nx = nx.nextElementSibling; r.remove(); continue; }
      break;
    }
    if (!itens.length) return;
    const box = document.createElement('div'); box.className = 'quadro-anexos';
    const pt = document.createElement('p'); pt.className = 'anexos-titulo'; pt.innerHTML = titulo.replace(/<\/?(strong|b)>/gi, '');
    const ul = document.createElement('ul');
    itens.forEach(function (h) { const li = document.createElement('li'); li.innerHTML = h; ul.appendChild(li); });
    box.appendChild(pt); box.appendChild(ul); el.replaceWith(box);
    ZM_NORMALIZACOES.push('rol de anexos posto em quadro');
  });
}
// ----- 0-E. Tabelas: maior corpo de letra (10 a 7,5 pt) em que cada linha cabe numa so linha -----
function zmAjustarTabelas() {
  document.querySelectorAll('.content table').forEach(function (tb) {
    const largura = tb.parentElement.getBoundingClientRect().width;
    let escolhido = null;
    for (let pt = 10; pt >= 7.5; pt -= 0.5) {
      tb.style.fontSize = pt + 'pt'; tb.classList.add('zm-medir');
      const w = tb.getBoundingClientRect().width;
      tb.classList.remove('zm-medir');
      if (w <= largura + 0.5) { escolhido = pt; break; }
    }
    tb.style.fontSize = (escolhido === null ? 7.5 : escolhido) + 'pt';
    if (escolhido !== null && escolhido < 10) ZM_AJUSTES.push('tabela em ' + String(escolhido).replace('.', ',') + ' pt para cada linha caber na largura');
    if (escolhido === null) ZM_AJUSTES.push('tabela larga: em 7,5 pt algumas células ainda quebram linha');
  });
  // rol de anexos: cada item numa linha so, com fonte uniforme no quadro (piso de 9 pt)
  document.querySelectorAll('.content .quadro-anexos').forEach(function (q) {
    const itens = Array.from(q.querySelectorAll('li'));
    if (!itens.length) return;
    const base = Math.round(parseFloat(getComputedStyle(q).fontSize) * 0.75 * 2) / 2;
    let escolhido = null;
    for (let pt = base; pt >= 9 - 0.01; pt -= 0.5) {
      q.style.fontSize = pt + 'pt';
      itens.forEach(function (li) { li.style.whiteSpace = 'nowrap'; });
      const cabe = itens.every(function (li) { return li.scrollWidth <= li.clientWidth + 0.5; });
      itens.forEach(function (li) { li.style.whiteSpace = ''; });
      if (cabe) { escolhido = pt; break; }
    }
    if (escolhido === null) { q.style.fontSize = '9pt'; ZM_AJUSTES.push('rol de anexos: item longo quebra linha mesmo em 9 pt'); }
    else if (escolhido < base - 0.01) ZM_AJUSTES.push('rol de anexos em ' + String(escolhido).replace('.', ',') + ' pt para cada item caber numa linha');
    q.querySelectorAll('.anexos-titulo').forEach(function (t) { t.style.fontSize = base + 'pt'; });
  });
}

// ----- 0-A. Monta a pagina: barra, painel e a lauda-modelo em volta do .content -----
function zmMontarPagina() {
  zmMarcarDestaques(document.body);
  if (!document.getElementById('zm-css')) {
    const f = document.createElement('link'); f.rel = 'stylesheet'; f.id = 'zm-fontes';
    f.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:wght@400;500;600;700&family=Montserrat:wght@300&display=swap';
    document.head.appendChild(f);
    const st = document.createElement('style'); st.id = 'zm-css'; st.textContent = ZM_CSS; document.head.appendChild(st);
  }
  if (!document.querySelector('meta[name="viewport"]')) { const m = document.createElement('meta'); m.name = 'viewport'; m.content = 'width=device-width, initial-scale=1.0'; document.head.appendChild(m); }
  let c = document.querySelector('.content');
  if (!c) {
    // HTML sem .content: todo o corpo vira conteudo (o motor normaliza em seguida)
    c = document.createElement('div'); c.className = 'content';
    Array.from(document.body.childNodes).forEach(function (n) { if (!(n.nodeType === 1 && n.tagName === 'SCRIPT')) c.appendChild(n); });
    ZM_NORMALIZACOES.push('HTML sem <div class="content">: o corpo inteiro foi tratado como conteúdo');
  }
  zmNormalizar(c);
  zmAplicarDestaques(c);
  zmNumerarSubtitulos(c);
  zmQuadroAnexos(c);
  const barra = document.createElement('div'); barra.className = 'barra no-print';
  barra.innerHTML = '<span class="barra-titulo" id="barra-titulo">ZORZI &amp; ZORZI · MOTOR ' + ZM_VERSAO + '</span><span class="selo" id="selo">Carregando timbre do GitHub...</span><div class="botoes" id="botoes"></div>';
  const painel = document.createElement('div'); painel.className = 'painel no-print'; painel.id = 'painel';
  const pg = document.createElement('div'); pg.className = 'page'; pg.id = 'lauda-modelo';
  pg.innerHTML = '<div class="cab"><img alt="Zorzi &amp; Zorzi Advogados Associados"><div class="reserva"><div class="placas"><div class="placa tras">Z</div><div class="placa frente">Z</div></div><div class="marca-nome">ZORZI &amp; ZORZI</div><div class="marca-sub">Advogados Associados</div></div></div>' +
    '<div class="corpo"></div>' +
    '<div class="rod"><img alt="Rodapé Zorzi &amp; Zorzi"><div class="reserva-rod"><div class="r1">Rua Wenceslau Braz, nº 1066, Centro, Catanduvas/SC – CEP 89.670-000</div><div class="r2">mzadvogados@hotmail.com</div><div>WhatsApp: (49) 9 9900-3201 – Rogério Zorzi | WhatsApp: (49) 9 9951-5476 – Ricardo Luís Zorzi</div></div></div>';
  pg.querySelector('.corpo').appendChild(c);
  Array.from(document.body.children).forEach(function (n) { if (n.tagName !== 'SCRIPT') n.remove(); });
  document.body.insertBefore(pg, document.body.firstChild);
  document.body.insertBefore(painel, pg);
  document.body.insertBefore(barra, painel);
}

async function zmIniciar() {
  window.__zmDeps = Promise.all([
    (typeof html2canvas !== 'undefined') ? true : zmCarregarScript('https://cdn.jsdelivr.net/npm/html2canvas-pro@1.5.0/dist/html2canvas-pro.min.js'),
    (window.jspdf && window.jspdf.jsPDF) ? true : zmCarregarScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
  ]);
  zmMontarPagina();
  await inicializar();
}

// ===== MOTOR (paginacao, fecho, selo, exportacao) =====
// ===== UNICA LINHA QUE O MAXIMUS ALTERA: 'colorido' (opcao 1), 'pb' (opcao 2) ou 'word' (opcao 3) =====
const MODO = ZM_MODO_INICIAL;

// ===== MOTOR ZORZI V5.1 (copiar literalmente; nao resumir, nao renomear) =====
const ZM_FONTES = [
  'https://cdn.jsdelivr.net/gh/RicardoLuisZorzi/zorzi-motor@main/',
  'https://raw.githubusercontent.com/RicardoLuisZorzi/zorzi-motor/main/'
];
const ARQUIVOS = {
  colorido: { cab: ['cab.png'], rod: ['rod-v2.png', 'rod.png'] },
  pb:       { cab: ['cab_pb.png'], rod: ['rod_pb.png', 'rod-v2.png', 'rod.png'] }
};
const ROD_NUMERO_ANTIGO = 'rod.png';   // traz "nº 1006"; o correto e 1066 (rod-v2.png / rod_pb.png)
const CAB_ALTURA_MM = 38.44, ROD_ALTURA_MM = 22.02, ROD_BASE_MM = 6;
const FECHO_ABERTURA = 'Nestes termos, pede deferimento.';
const CIDADE_PADRAO = 'Catanduvas/SC';
const ASSINANTES = [['ROGÉRIO ZORZI', 'Advogado - OAB/SC 28.529'], ['RICARDO LUÍS ZORZI', 'Advogado - OAB/SC 57.634']];
const MESES = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const NAO_DIVIDIR = 'h1, h2, h3, h4, .titulo-peca, .enderecamento, .autos, .juizo, .despacho, .fecho, .nao-dividir';
const TITULOS = 'h1, h2, h3, h4, .titulo-peca, .sintese-titulo, .anexos-titulo';

const est = { cab: null, cabArq: '', cabAlturaMm: CAB_ALTURA_MM, rod: null, rodArq: '', antes: 0, depois: 0,
  transbordo: [], fechos: 0, depoisFecho: false, fechoDigitado: false, sintese: false, semSintese: false,
  dataAuto: false, pronto: false };
let identidade = null;

function novo(tag, cls, txt) { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
function contarCaracteres(nos) { let n = 0; nos.forEach(c => { n += (c.textContent || '').replace(/\s+/g, '').length; }); return n; }
function dataPorExtenso(d) { return d.getDate() + ' de ' + MESES[d.getMonth()] + ' de ' + d.getFullYear(); }

// ----- 1. Fecho padrao (montado pelo motor: o Maximus so escreve <div class="fecho">) -----
function montarFecho() {
  const c = document.querySelector('.content');
  const fechos = c.querySelectorAll('.fecho');
  est.fechos = fechos.length;
  est.sintese = !!c.querySelector('.sintese');
  est.semSintese = c.getAttribute('data-sem-sintese') === 'sim';
  c.querySelectorAll('p, div, li').forEach(p => {
    if (!p.closest('.fecho') && /pede\s+(e\s+espera\s+)?deferimento/i.test(p.textContent)) est.fechoDigitado = true;
  });
  if (!fechos.length) return;
  const f = fechos[0];
  let data = (f.getAttribute('data-data') || '').trim().replace(/\.$/, '');
  if (!data || data.charAt(0) === '[') { data = dataPorExtenso(new Date()); est.dataAuto = true; }
  const cidade = (f.getAttribute('data-cidade') || CIDADE_PADRAO).trim();
  f.textContent = '';
  f.appendChild(novo('p', 'abertura', FECHO_ABERTURA));
  f.appendChild(novo('p', 'data', cidade + ', ' + data + '.'));
  ASSINANTES.forEach(a => { const b = novo('div', 'assinante'); b.appendChild(novo('p', 'nome', a[0])); b.appendChild(novo('p', 'oab', a[1])); f.appendChild(b); });
  let irmao = f.nextElementSibling;
  while (irmao) { if ((irmao.textContent || '').trim()) est.depoisFecho = true; irmao = irmao.nextElementSibling; }
  const desp = c.querySelector('.despacho');
  if (desp && !c.querySelector('.partes')) desp.classList.add('sem-partes');
}

// ----- 2. Timbre do GitHub zorzi-motor (fonte unica de cabecalho e rodape) -----
async function baixarComoDataURL(url) {
  const ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const t = setTimeout(() => { if (ctrl) ctrl.abort(); }, 8000);
  try {
    const r = await fetch(url, ctrl ? { mode: 'cors', signal: ctrl.signal } : { mode: 'cors' });
    if (!r.ok) return null;
    const blob = await r.blob();
    if (!blob || blob.size < 1000) return null;
    return await new Promise(res => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = () => res(null); fr.readAsDataURL(blob); });
  } catch (e) { return null; } finally { clearTimeout(t); }
}
function carregarImg(src, anonimo) {
  return new Promise(r => {
    const img = new Image(); if (anonimo) img.crossOrigin = 'anonymous';
    const t = setTimeout(() => r(null), 8000);
    img.onload = () => { clearTimeout(t); r(img.naturalWidth > 100 ? img : null); };
    img.onerror = () => { clearTimeout(t); r(null); };
    img.src = src;
  });
}
async function carregarImagemZM(arquivos) {
  for (const arq of arquivos) {
    for (const base of ZM_FONTES) {
      const d = await baixarComoDataURL(base + arq);
      let img = d ? await carregarImg(d, false) : null;
      if (!img) img = await carregarImg(base + arq, true);
      if (img) return { img: img, arq: arq };
    }
  }
  return null;
}
function imagemParaPNG(img, fundo, cinza) {
  const w = img.naturalWidth, h = img.naturalHeight;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  ctx.fillStyle = fundo; ctx.fillRect(0, 0, w, h); ctx.drawImage(img, 0, 0, w, h);
  if (cinza) {
    const px = ctx.getImageData(0, 0, w, h), d = px.data;
    for (let k = 0; k < d.length; k += 4) {
      const l = 0.299 * d[k] + 0.587 * d[k + 1] + 0.114 * d[k + 2];
      const v = Math.max(0, Math.min(255, Math.round(255 - (255 - l) * 1.25)));
      d[k] = d[k + 1] = d[k + 2] = v; d[k + 3] = 255;
    }
    ctx.putImageData(px, 0, 0);
  }
  return c.toDataURL('image/png');
}
function aplicarTimbre() {
  document.querySelectorAll('.cab').forEach(cb => {
    cb.style.height = est.cabAlturaMm + 'mm';
    if (est.cab) { cb.querySelector('img').src = est.cab; cb.classList.add('com-imagem'); }
  });
  document.querySelectorAll('.rod').forEach(rd => {
    if (est.rod) { rd.querySelector('img').src = est.rod; rd.classList.add('com-imagem'); }
  });
}
async function carregarTimbre() {
  const a = ARQUIVOS[MODO];
  const [rc, rr] = await Promise.all([carregarImagemZM(a.cab), carregarImagemZM(a.rod)]);
  if (rc) {
    try {
      est.cab = imagemParaPNG(rc.img, MODO === 'pb' ? '#ffffff' : '#161B22', false); est.cabArq = rc.arq;
      est.cabAlturaMm = Math.round(210 * rc.img.naturalHeight / rc.img.naturalWidth * 100) / 100;
    } catch (e) { est.cab = null; }
  }
  if (rr) {
    try { est.rod = imagemParaPNG(rr.img, '#ffffff', MODO === 'pb' && rr.arq !== 'rod_pb.png'); est.rodArq = rr.arq; }
    catch (e) { est.rod = null; }
  }
  aplicarTimbre();
  atualizarSelo();
}

// ----- 3. Paginacao A4 (texto ate o rodape; paragrafos, listas, tabelas e quadros se partem) -----
function folgaInferior(el) { const cs = getComputedStyle(el); return (parseFloat(cs.paddingBottom) || 0) + (parseFloat(cs.borderBottomWidth) || 0); }
function alturaLinha(el) { const cs = getComputedStyle(el); return parseFloat(cs.lineHeight) || (parseFloat(cs.fontSize) * 1.6) || 20; }

function dividirElementoPorRange(el, limiteY) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  const pontos = []; let node;
  while ((node = walker.nextNode())) {
    const re = /\S+/g; let m;
    while ((m = re.exec(node.nodeValue)) !== null) pontos.push({ node: node, offset: m.index + m[0].length });
  }
  if (pontos.length < 2) return null;
  const linha = alturaLinha(el);
  // o retangulo do Range e o da letra; a linha (entrelinha 1,6) desce meia entrelinha abaixo dele
  const meia = Math.max(0, (linha - (parseFloat(getComputedStyle(el).fontSize) || 15) * 1.21) / 2) + 0.5;
  const topo = el.getBoundingClientRect().top;
  const fundoTotal = el.getBoundingClientRect().bottom - folgaInferior(el);
  const r = document.createRange();
  r.setStart(el, 0);
  let limite = limiteY - meia;
  for (let tentativa = 0; tentativa < 3; tentativa++) {
    let lo = 0, hi = pontos.length - 1, melhor = -1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      r.setEnd(pontos[mid].node, pontos[mid].offset);
      if (r.getBoundingClientRect().bottom <= limite) { melhor = mid; lo = mid + 1; } else { hi = mid - 1; }
    }
    if (melhor <= 0 || melhor >= pontos.length - 1) return null;
    r.setEnd(pontos[melhor].node, pontos[melhor].offset);
    const fundoParte = r.getBoundingClientRect().bottom;
    if (fundoParte - topo < linha * 1.4) return null;          // no minimo 2 linhas no pe da lauda
    if (fundoTotal - fundoParte < linha * 0.6) return null;    // nada sobraria para a lauda seguinte
    if (fundoTotal - fundoParte >= linha * 1.4 || tentativa === 2) {
      const sr = document.createRange();
      sr.setStart(pontos[melhor].node, pontos[melhor].offset);
      sr.setEndAfter(el.lastChild);
      const resto = sr.extractContents();
      el.style.textAlignLast = 'justify';
      const clone = el.cloneNode(false);
      clone.removeAttribute('id'); clone.style.textAlignLast = ''; clone.style.textIndent = '0px';
      clone.classList.add('continuacao');
      clone.appendChild(resto);
      const w2 = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT, null, false);
      const t1 = w2.nextNode(); if (t1) t1.nodeValue = t1.nodeValue.replace(/^\s+/, '');
      return clone;
    }
    limite -= linha;   // sobraria 1 linha solta no topo da lauda seguinte: desce mais uma linha
  }
  return null;
}
function dividirLista(el, limiteY) {
  const itens = Array.from(el.children);
  const m = itens.findIndex(li => li.getBoundingClientRect().bottom > limiteY);
  if (m < 0) return null;
  const restoLi = dividirBloco(itens[m], limiteY);
  if (!restoLi && m === 0) return null;
  const lr = el.cloneNode(false); lr.removeAttribute('id');
  lr.appendChild(restoLi || itens[m]);
  for (let n = m + 1; n < itens.length; n++) lr.appendChild(itens[n]);
  if (el.tagName === 'OL') lr.setAttribute('start', String((el.start || 1) + m));
  return lr;
}
function dividirTabela(tb, limiteY) {
  const corpo = tb.tBodies[0]; if (!corpo) return null;
  const linhas = Array.from(corpo.rows);
  const i = linhas.findIndex(tr => tr.getBoundingClientRect().bottom > limiteY);
  if (i <= 0) return null;
  const nova = tb.cloneNode(false); nova.removeAttribute('id');
  if (tb.tHead) nova.appendChild(tb.tHead.cloneNode(true));
  const nc = corpo.cloneNode(false); nova.appendChild(nc);
  for (let k = i; k < linhas.length; k++) nc.appendChild(linhas[k]);
  return nova;
}
function dividirContainer(el, limiteY) {
  const filhos = Array.from(el.children);
  const idx = filhos.findIndex(f => f.getBoundingClientRect().bottom > limiteY);
  if (idx < 0) return null;
  const resto = dividirBloco(filhos[idx], limiteY);
  if (!resto && (idx === 0 || (idx === 1 && filhos[0].matches(TITULOS)))) return null;
  const clone = el.cloneNode(false); clone.removeAttribute('id');
  clone.appendChild(resto || filhos[idx]);
  for (let n = idx + 1; n < filhos.length; n++) clone.appendChild(filhos[n]);
  return clone;
}
function dividirBloco(el, limiteY) {
  if (!el || el.nodeType !== 1 || el.matches(NAO_DIVIDIR)) return null;
  const lim = limiteY - folgaInferior(el);
  if (el.tagName === 'TABLE') return dividirTabela(el, lim);
  if (el.tagName === 'UL' || el.tagName === 'OL') return dividirLista(el, lim);
  const temFilhoBloco = Array.from(el.children).some(f => /^(P|DIV|UL|OL|TABLE|BLOCKQUOTE|H\d)$/.test(f.tagName));
  if (temFilhoBloco) return dividirContainer(el, lim);
  return dividirElementoPorRange(el, lim);
}

function paginarDocumentoA4() {
  const modelo = document.getElementById('lauda-modelo');
  const c0 = modelo.querySelector('.content');
  const fila = [];
  while (c0.firstChild) {
    const n = c0.removeChild(c0.firstChild);
    if (n.nodeType === 1) fila.push(n);
    else if (n.nodeType === 3 && n.nodeValue.trim()) { const p = document.createElement('p'); p.textContent = n.nodeValue.trim(); fila.push(p); }
  }
  let pag = modelo, cont = c0;
  function novaLauda() {
    const nv = modelo.cloneNode(true); nv.removeAttribute('id'); nv.classList.remove('apertada'); nv.removeAttribute('data-zm-antes-fecho');
    nv.querySelector('.content').textContent = '';
    pag.after(nv); pag = nv; cont = nv.querySelector('.content');
  }
  let guarda = 0;
  while (fila.length && guarda++ < 5000) {
    const el = fila.shift();
    cont.appendChild(el);
    const limiteY = pag.querySelector('.corpo').getBoundingClientRect().bottom;
    if (el.getBoundingClientRect().bottom <= limiteY) continue;
    const resto = dividirBloco(el, limiteY);
    if (resto) { fila.unshift(resto); novaLauda(); continue; }
    // fecho que nao coube por pouco: tenta o espacamento compacto antes de descer
    if (el.classList.contains('fecho') && !el.classList.contains('compacto')) {
      // tentativa 2: fecho com espacamento compacto
      el.classList.add('compacto');
      if (el.getBoundingClientRect().bottom <= limiteY) continue;
      // tentativa 3: lauda apertada (paragrafos, titulos, tabelas e quadros com espacos menores)
      if (!pag.classList.contains('apertada')) {
        pag.classList.add('apertada');
        if (el.getBoundingClientRect().bottom <= pag.querySelector('.corpo').getBoundingClientRect().bottom) continue;
        pag.classList.remove('apertada');
      }
      el.classList.remove('compacto');
    }
    if (cont.firstElementChild === el) {
      // Excecao extrema (regra do Doutor, 03/11/2026): o fecho e sempre um bloco unico; so se parte se,
      // depois de todas as tentativas (normal, compacto, lauda nova com o fim do texto), nem numa lauda vazia couber.
      if (el.classList.contains('fecho')) {
        const ass = Array.from(el.querySelectorAll('.assinante'));
        if (ass.length) {
          const resto2 = el.cloneNode(false); resto2.classList.add('fecho-continuacao');
          ass.forEach(function (a) { resto2.appendChild(a); });
          fila.unshift(resto2); novaLauda(); ZM_NORMALIZACOES.push('exceção extrema: o fecho não coube nem numa lauda inteira e as assinaturas seguiram juntas para a lauda seguinte');
          continue;
        }
      }
      continue;            // bloco indivisivel maior que a lauda: o selo acusa
    }
    el.remove(); fila.unshift(el);
    // titulos nunca ficam sozinhos no pe da lauda
    while (cont.lastElementChild && cont.lastElementChild.matches(TITULOS) && cont.children.length > 1) fila.unshift(cont.removeChild(cont.lastElementChild));
    // o fecho leva consigo o paragrafo anterior, se for curto (padrao Harvey: assinaturas nunca sozinhas)
    if (el.classList.contains('fecho')) {
      // Padrao Harvey: o fecho nunca desce sozinho. Leva junto o fim do texto anterior:
      // as 2 ultimas linhas do bloco (que se parte), ou o bloco inteiro se for curto (ate 3 linhas).
      const ant = cont.lastElementChild;
      if (ant && cont.children.length > 1 && !ant.matches('.despacho')) {
        const linha = alturaLinha(ant);
        const r = ant.getBoundingClientRect();
        let resto = null;
        if (r.height > linha * 3.5) resto = dividirBloco(ant, r.bottom - folgaInferior(ant) - linha * 2.2);
        if (resto) fila.unshift(resto); else fila.unshift(cont.removeChild(ant));
        while (cont.lastElementChild && cont.lastElementChild.matches(TITULOS) && cont.children.length > 1) fila.unshift(cont.removeChild(cont.lastElementChild));
      }
      pag.setAttribute('data-zm-antes-fecho', '1');
    }
    novaLauda();
  }
}


// ----- 3-A. Sobra no pe da lauda: distribui o espaco em vez de deixar o vazio no fim -----
function zmDistribuirSobras() {
  const pags = Array.from(document.querySelectorAll('.page'));
  for (let i = 0; i < pags.length - 1; i++) {
    const corpo = pags[i].querySelector('.corpo'), cont = pags[i].querySelector('.content');
    if (pags[i].classList.contains('apertada')) continue;
    const filhos = Array.from(cont.children); if (filhos.length < 2) continue;
    const ult = filhos[filhos.length - 1];
    const linha = alturaLinha(cont);
    const fundo = corpo.getBoundingClientRect().bottom;
    let sobra = fundo - ult.getBoundingClientRect().bottom - 2;
    if (sobra < linha * 1.5) continue;
    const guardados = filhos.map(function (f) { return f.style.marginTop; });
    const vaoAtual = function (f) {
      const ant = f.previousElementSibling; if (!ant) return 0;
      return Math.max(parseFloat(getComputedStyle(ant).marginBottom) || 0, parseFloat(getComputedStyle(f).marginTop) || 0);
    };
    const titulos = filhos.filter(function (f, k) { return k > 0 && f.matches('h2, h3, h4, .titulo-peca'); });
    const outros = filhos.filter(function (f, k) { return k > 0 && !f.matches('h2, h3, h4, .titulo-peca, .despacho, .fecho') && !f.previousElementSibling.matches('h2, h3, h4, .titulo-peca'); });
    // fase 1: ate meia linha a mais antes de cada titulo (o espaco duplo ja e o padrao)
    if (titulos.length) {
      const extra = Math.min(linha * (pags[i].hasAttribute('data-zm-antes-fecho') ? 1 : 0.5), sobra / titulos.length);
      titulos.forEach(function (f) { f.style.marginTop = (vaoAtual(f) + extra) + 'px'; f.setAttribute('data-zm-dist', '1'); });
      sobra -= extra * titulos.length;
    }
    // fase 2: ate 8 pt a mais entre os demais blocos
    if (sobra > 2 && outros.length) {
      const extra = Math.min(pags[i].hasAttribute('data-zm-antes-fecho') ? linha : 10.7, sobra / outros.length);
      outros.forEach(function (f) { f.style.marginTop = (vaoAtual(f) + extra) + 'px'; f.setAttribute('data-zm-dist', '1'); });
    }
    if (ult.getBoundingClientRect().bottom > fundo + 0.5) filhos.forEach(function (f, k) { f.style.marginTop = guardados[k]; });
  }
}

// Revalida as laudas depois que tudo carregou (fonte tardia, imagem): se a sobra distribuida
// empurrar o texto para alem do rodape, desfaz a distribuicao naquela lauda. Nunca corta texto.
function zmRevalidarLaudas() {
  if (typeof est !== 'undefined' && est.pronto && !zmFonteNaPaginacao && zmInterCarregada()) { zmFonteNaPaginacao = true; zmRepaginar(); }
  const transb = [];
  document.querySelectorAll('.page').forEach(function (pg, i) {
    const corpo = pg.querySelector('.corpo'), ct = pg.querySelector('.content');
    if (!corpo || !ct) return;
    const passou = function () { return ct.getBoundingClientRect().bottom > corpo.getBoundingClientRect().bottom + 1; };
    if (passou()) ct.querySelectorAll('[data-zm-dist]').forEach(function (f) { f.style.marginTop = ''; f.removeAttribute('data-zm-dist'); });
    if (passou()) transb.push(i + 1);
  });
  if (transb.length && zmRepaginacoes < 2 && typeof est !== 'undefined' && est.pronto) { zmRepaginar(); return zmRevalidarLaudas(); }
  if (typeof est !== 'undefined' && est.pronto) { est.transbordo = transb; atualizarSelo(); }
  return transb;
}


// ----- Fontes: a paginacao so acontece com a Inter carregada (metricas certas) -----
let zmOriginal = null, zmFonteNaPaginacao = false, zmRepaginacoes = 0;
function zmInterCarregada() {
  if (!document.fonts) return true;
  const faces = Array.from(document.fonts).filter(function (f) { return /inter/i.test(f.family); });
  return faces.length > 0 && faces.some(function (f) { return f.status === 'loaded'; }) && document.fonts.check('400 11.5pt Inter') && document.fonts.check('700 11.5pt Inter');
}
async function zmEsperarFontes() {
  try {
    const link = document.getElementById('zm-fontes');
    if (link && !link.sheet) await new Promise(function (r) { link.addEventListener('load', r); link.addEventListener('error', r); setTimeout(r, 6000); });
    const t0 = Date.now();
    while (Date.now() - t0 < 9000) {
      if (document.fonts) { try { await Promise.all(['400 11.5pt Inter', '600 11.5pt Inter', '700 11.5pt Inter'].map(function (f) { return document.fonts.load(f); })); } catch (e) {} }
      if (zmInterCarregada()) break;
      await new Promise(function (r) { setTimeout(r, 150); });
    }
    if (document.fonts) await document.fonts.ready;
  } catch (e) {}
}
function zmPaginarDoOriginal() {
  const modelo = document.getElementById('lauda-modelo');
  modelo.classList.remove('apertada'); modelo.removeAttribute('data-zm-antes-fecho');
  document.querySelectorAll('.page').forEach(function (pg) { if (pg !== modelo) pg.remove(); });
  const c = modelo.querySelector('.content'); c.replaceWith(zmOriginal.cloneNode(true));
  aplicarTimbre();
  paginarDocumentoA4();
  zmDistribuirSobras();
  est.depois = contarCaracteres(Array.from(document.querySelectorAll('.page .content')));
}
// Possibilidades para o fecho ficar num bloco unico sem descer sozinho: aperto global em 3 niveis sutis
let zmNivelAperto = 0;
function zmFechoDesceu() { return !!document.querySelector('.page[data-zm-antes-fecho]') || !!document.querySelector('.fecho-continuacao'); }
function zmTentarNiveis() {
  if (!zmOriginal || !zmFechoDesceu()) return;
  for (let nivel = 1; nivel <= 3; nivel++) {
    document.body.classList.remove('aperto-1', 'aperto-2', 'aperto-3'); document.body.classList.add('aperto-' + nivel);
    zmPaginarDoOriginal();
    if (!zmFechoDesceu()) { zmNivelAperto = nivel; return; }
  }
  document.body.classList.remove('aperto-1', 'aperto-2', 'aperto-3'); zmNivelAperto = 0;
  zmPaginarDoOriginal();
}
// Repaginacao completa a partir da copia original (se a fonte chegou depois da paginacao)
function zmRepaginar() {
  if (!zmOriginal || zmRepaginacoes >= 2) return;
  zmRepaginacoes++;
  zmPaginarDoOriginal();
  zmTentarNiveis();
}

// ----- 4. Conferencias (texto integro, transbordo, fecho, sintese, timbre) -----
function conferir() {
  const erros = [], avisos = [];
  if (!est.fechos) erros.push('peça sem fecho (falta o <div class="fecho">)');
  if (MODO !== 'word') {
    if (est.antes !== est.depois) erros.push('texto alterado na paginação (' + est.antes + ' → ' + est.depois + ' caracteres)');
    if (est.transbordo.length) erros.push('texto cortado na(s) lauda(s) ' + est.transbordo.join(', '));
    if (MODO === 'colorido' && !est.cab) erros.push('cabeçalho cab.png do GitHub não carregou');
    if (MODO === 'colorido' && !est.rod) erros.push('rodapé do GitHub não carregou');
    if (MODO === 'pb' && !est.cab) avisos.push('cabeçalho P&B em reserva (cab_pb.png ausente no GitHub)');
    if (MODO === 'pb' && !est.rod) avisos.push('rodapé em texto de reserva');
    if (est.rodArq === ROD_NUMERO_ANTIGO) avisos.push('rodapé antigo do GitHub (nº 1006): suba o rod-v2.png');
  }
  if (est.fechos > 1) avisos.push('há ' + est.fechos + ' fechos; vale o primeiro');
  if (est.depoisFecho) avisos.push('há texto depois das assinaturas');
  if (est.fechoDigitado) avisos.push('"pede deferimento" digitado fora do fecho: fecho duplicado');
  if (!est.sintese && !est.semSintese) avisos.push('quadro síntese ausente (obrigatório, salvo ordem do Doutor)');
  if (est.dataAuto) avisos.push('data do fecho preenchida com a de hoje: confira contra o prazo');
  Array.from(new Set(ZM_NORMALIZACOES)).forEach(function (n) { avisos.push('o motor corrigiu: ' + n); });
  return { erros, avisos };
}
function atualizarSelo() {
  if (!est.pronto) return;
  const selo = document.getElementById('selo'), painel = document.getElementById('painel');
  const r = conferir();
  const okTimbre = MODO === 'word' ? 'sem timbre' : ('cabeçalho ' + (est.cab ? '✔' : '✖') + ' · rodapé ' + (est.rod ? '✔' : '✖'));
  const base = okTimbre + ' · texto íntegro ' + ((MODO === 'word' || (est.antes === est.depois && !est.transbordo.length)) ? '✔' : '✖') +
    ' (' + est.antes + ' caract.) · fecho ' + (est.fechos ? '✔' : '✖') + ' · síntese ' + (est.sintese ? '✔' : (est.semSintese ? 'dispensada' : '✖'));
  selo.className = 'selo' + (r.erros.length ? ' erro' : (r.avisos.length ? ' aviso' : ''));
  selo.textContent = (r.erros.length ? '✖ ' : (r.avisos.length ? '⚠ ' : '✔ ')) + base;
  selo.title = r.erros.concat(r.avisos).join('\n');
  if (r.erros.length || r.avisos.length) {
    painel.className = 'painel no-print' + (r.erros.length ? ' erro' : '');
    painel.innerHTML = '<strong>' + (r.erros.length ? 'Download bloqueado. Corrija antes de baixar:' : 'Confira antes de baixar:') + '</strong><ul>' +
      r.erros.concat(r.avisos, Array.from(new Set(ZM_AJUSTES)).map(t => 'diagramação: ' + t)).map(t => '<li>' + t.replace(/</g, '&lt;') + '</li>').join('') + '</ul>';
    painel.style.display = 'block';
  } else if (ZM_AJUSTES.length) {
    painel.className = 'painel no-print info';
    painel.innerHTML = '<strong>Diagramação ajustada pelo motor (não exige ação):</strong><ul>' +
      Array.from(new Set(ZM_AJUSTES)).map(t => '<li>' + t.replace(/</g, '&lt;') + '</li>').join('') + '</ul>';
    painel.style.display = 'block';
  } else { painel.style.display = 'none'; }
  if (ZM_AJUSTES.length) selo.title = (selo.title ? selo.title + '\n' : '') + Array.from(new Set(ZM_AJUSTES)).join('\n');
  console.log('[Motor Zorzi V5.1]', JSON.stringify({ modo: MODO, cab: est.cabArq, rod: est.rodArq, antes: est.antes, depois: est.depois, laudas: document.querySelectorAll('.page').length, erros: r.erros, avisos: r.avisos }));
}

// ----- 5. Inicializacao -----
function montarBotoes() {
  const b = document.getElementById('botoes'), t = document.getElementById('barra-titulo');
  if (MODO === 'word') {
    t.textContent = 'MODELO EDITÁVEL · WORD (.DOC)';
    b.innerHTML = '<button class="btn sec" onclick="copiarTextoFormatado()">Copiar texto formatado</button><button class="btn" id="btn-word" onclick="exportarWord()">Baixar Word (.doc)</button>';
  } else {
    t.textContent = MODO === 'pb' ? 'ZORZI & ZORZI · P&B IMPRESSÃO A4' : 'ZORZI & ZORZI · COLORIDO OFICIAL A4';
    b.innerHTML = '<button class="btn sec" onclick="imprimir()" title="Abre a impressão do navegador; escolha Salvar como PDF para texto pesquisável">Imprimir</button><button class="btn" id="btn-pdf" onclick="baixarPDF()">Baixar PDF Oficial</button>';
  }
}
async function inicializar() {
  document.body.classList.add(MODO);
  montarBotoes();
  montarFecho();
  await zmEsperarFontes();
  zmAjustarTabelas();
  const c = document.querySelector('.content');
  est.antes = contarCaracteres([c]);
  if (MODO === 'word') {
    const pg = document.getElementById('lauda-modelo');
    const folha = novo('div', 'folha-word'); folha.id = 'conteudo-word';
    folha.appendChild(c); pg.replaceWith(folha);
    est.depois = est.antes; est.pronto = true; atualizarSelo();
    return;
  }
  identidade = carregarTimbre();
  await Promise.race([identidade, new Promise(r => setTimeout(r, 12000))]);
  aplicarTimbre();
  zmOriginal = document.querySelector('#lauda-modelo .content').cloneNode(true);
  zmFonteNaPaginacao = zmInterCarregada();
  paginarDocumentoA4();
  zmDistribuirSobras();
  zmTentarNiveis();
  const conts = Array.from(document.querySelectorAll('.page .content'));
  est.depois = contarCaracteres(conts);
  est.transbordo = [];
  document.querySelectorAll('.page').forEach((p, i) => {
    const corpo = p.querySelector('.corpo'), ct = p.querySelector('.content');
    if (ct.getBoundingClientRect().bottom > corpo.getBoundingClientRect().bottom + 1) est.transbordo.push(i + 1);
  });
  est.pronto = true;
  atualizarSelo();
  zmRevalidarLaudas();
  window.addEventListener('load', zmRevalidarLaudas);
  if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', zmRevalidarLaudas);
  setTimeout(zmRevalidarLaudas, 1500); setTimeout(zmRevalidarLaudas, 4000);
}


// ----- 6. Exportacao PDF (o corpo e fotografado; cabecalho e rodape sao os PNGs originais do GitHub) -----
async function baixarPDF() {
  const btn = document.getElementById('btn-pdf'), txt = btn.textContent;
  if (window.__zmDeps) { try { await window.__zmDeps; } catch (e) {} }
  if (identidade) await identidade;
  aplicarTimbre(); zmRevalidarLaudas(); atualizarSelo();
  const r = conferir();
  if (r.erros.length) { alert('PDF não gerado:\n\n- ' + r.erros.join('\n- ')); return; }
  if (est.rodArq === ROD_NUMERO_ANTIGO && !confirm('O rodapé carregado do GitHub é o antigo (nº 1006). Gerar o PDF assim mesmo?')) return;
  const JsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : (window.jsPDF || null);
  const h2c = (typeof html2canvas !== 'undefined') ? html2canvas : (window.html2canvasPro || null);
  if (!JsPDF || !h2c) { alert('Bibliotecas de PDF indisponíveis. Use o botão Imprimir e escolha "Salvar como PDF".'); return; }
  btn.disabled = true;
  try {
    const pdf = new JsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4', compress: true });
    const paginas = document.querySelectorAll('.page');
    for (let i = 0; i < paginas.length; i++) {
      btn.textContent = 'Lauda ' + (i + 1) + '/' + paginas.length + '...';
      const canvas = await h2c(paginas[i], { scale: 2, useCORS: true, backgroundColor: '#ffffff', logging: false,
        onclone: function (doc) {
          const pg = doc.querySelectorAll('.page')[i]; if (!pg) return;
          pg.style.boxShadow = 'none';
          if (est.cab) pg.querySelector('.cab').style.visibility = 'hidden';
          if (est.rod) pg.querySelector('.rod').style.visibility = 'hidden';
        } });
      if (i > 0) pdf.addPage('a4', 'portrait');
      pdf.addImage(canvas.toDataURL('image/jpeg', 0.88), 'JPEG', 0, 0, 210, 297, 'corpo' + i, 'FAST');
      if (est.cab) pdf.addImage(est.cab, 'PNG', 0, 0, 210, est.cabAlturaMm, 'zm-cab', 'FAST');
      if (est.rod) pdf.addImage(est.rod, 'PNG', 0, 297 - ROD_BASE_MM - ROD_ALTURA_MM, 210, ROD_ALTURA_MM, 'zm-rod', 'FAST');
    }
    pdf.save(MODO === 'pb' ? 'Peticao_Zorzi_PB.pdf' : 'Peticao_Zorzi_Colorido.pdf');
    btn.textContent = '✔ PDF baixado';
  } catch (e) { console.error(e); btn.textContent = 'Erro no PDF'; alert('Falha ao gerar o PDF: ' + e.message + '\nUse o botão Imprimir e escolha "Salvar como PDF".'); }
  setTimeout(() => { btn.textContent = txt; btn.disabled = false; }, 2500);
}
function imprimir() { zmRevalidarLaudas(); const r = conferir(); if (r.erros.length) { alert('Impressão bloqueada:\n\n- ' + r.erros.join('\n- ')); return; } window.print(); }

// ----- 7. Exportacao Word (mesma tipografia, sem timbre, margens de 25 mm) -----
const CSS_WORD = "@page WordSection1 { size:21.0cm 29.7cm; margin:2.5cm 2.5cm 2.5cm 2.5cm; } div.WordSection1 { page:WordSection1; }" +
  " body { font-family:'Inter', Arial, sans-serif; font-size:11.5pt; color:#111827; }" +
  " p { margin:0cm 0cm 12pt 0cm; text-indent:10.58mm; text-align:justify; line-height:160%; font-family:'Inter', Arial, sans-serif; font-size:11.5pt; }" +
  " .enderecamento { font-weight:bold; text-transform:uppercase; font-size:11pt; text-align:center; border-bottom:1.5pt solid #1F2937; padding-bottom:9pt; margin-bottom:12pt; line-height:162%; }" +
  " .autos { text-align:right; font-weight:bold; font-size:10pt; color:#161B22; margin:0; line-height:125%; }" +
  " .juizo { text-align:right; font-weight:bold; font-size:9pt; color:#6B7280; margin:0 0 18pt 0; line-height:125%; }" +
  " .partes { background:#F9FAFB; border-left:3pt solid #161B22; padding:7pt 10pt 7pt 11pt; margin:0 0 18pt 0; } .sintese, .destaque, .quadro-anexos { background:#EEF1F5; border-left:3pt solid #161B22; padding:7pt 10pt 7pt 11pt; margin:0 0 18pt 0; }" +
  " .partes p { font-size:10pt; text-indent:0; text-align:left; margin:0; }" +
  " .sintese p, .destaque p, .sintese li, .destaque li, .quadro-anexos p, .quadro-anexos li { text-indent:0; text-align:left; margin:0 0 4pt 0; }" +
  " .sintese-titulo { font-weight:bold; text-transform:uppercase; }" +
  " .titulo-peca { text-align:center; font-weight:bold; text-transform:uppercase; font-size:13pt; margin:6pt 0 18pt 0; }" +
  " h2 { font-size:11.5pt; font-weight:bold; font-variant:small-caps; letter-spacing:.5pt; color:#111827; background:#F4ECD9; border-left:3pt solid #B8902D; padding:2pt 8pt; margin:30.4pt 0 12pt 0; text-align:left; }" +
  " h3 { font-size:11.5pt; font-weight:bold; color:#111827; background:#EEF1F5; border-left:3pt solid #161B22; padding:1.5pt 8pt; margin:24.4pt 0 8pt 0; text-align:left; }" +
  " .citacao, blockquote { margin:0 0 12pt 40mm; font-size:10pt; line-height:125%; }" +
  " .lista li { margin:0 0 6pt 0; text-align:justify; }" +
  " table { width:100%; border-collapse:collapse; font-size:10pt; } th { background:#161B22; color:#ffffff; font-weight:bold; text-align:left; border:.5pt solid #D1D5DB; padding:4pt 5.5pt; } td { text-align:left; border:.5pt solid #D1D5DB; padding:4pt 5.5pt; vertical-align:top; }" +
  " .fecho p { text-align:center; text-indent:0; margin:0; } .fecho .abertura { margin:24pt 0 18pt 0; } .fecho .data { font-weight:bold; margin-bottom:30pt; }" +
  " .fecho .nome { font-weight:bold; text-transform:uppercase; font-size:10.5pt; letter-spacing:1pt; color:#161B22; } .fecho .oab { text-transform:uppercase; font-size:9pt; letter-spacing:.9pt; color:#6B7280; margin-bottom:18pt; }";
function exportarWord() {
  const r = conferir();
  if (r.erros.length) { alert('Word não gerado:\n\n- ' + r.erros.join('\n- ')); return; }
  const clone = document.querySelector('.content').cloneNode(true);
  clone.querySelectorAll('.despacho').forEach(d => {
    const n = d.classList.contains('sem-partes') ? 5 : 4, frag = document.createDocumentFragment();
    for (let k = 0; k < n; k++) { const p = document.createElement('p'); p.innerHTML = '&nbsp;'; p.setAttribute('style', 'text-indent:0;margin:0'); frag.appendChild(p); }
    d.replaceWith(frag);
  });
  clone.querySelectorAll('.sintese li, .destaque li, .quadro-anexos li').forEach(li => { li.insertBefore(document.createTextNode('▪ '), li.firstChild); });
  const html = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>Peça Zorzi &amp; Zorzi</title>' +
    '<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom></w:WordDocument></xml><![endif]-->' +
    '<style>' + CSS_WORD + '</style></head><body><div class="WordSection1">' + clone.innerHTML + '</div></body></html>';
  const blob = new Blob([String.fromCharCode(0xFEFF), html], { type: 'application/msword' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'Peticao_Zorzi_Editavel.doc';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}
function copiarTextoFormatado() {
  const area = document.querySelector('.content');
  const sel = window.getSelection(), rg = document.createRange();
  rg.selectNodeContents(area); sel.removeAllRanges(); sel.addRange(rg);
  let ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
  sel.removeAllRanges();
  alert(ok ? 'Texto copiado com a formatação. Cole no Word com Ctrl+V.' : 'Não foi possível copiar automaticamente: selecione o texto e use Ctrl+C.');
}

if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', zmIniciar); else zmIniciar();
