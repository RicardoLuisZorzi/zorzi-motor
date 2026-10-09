# zorzi-motor

Motor do timbrado oficial do escritório **Zorzi & Zorzi Advogados Associados** (matriz V48).

`motor_v48.min.js` monta a peça no timbrado a partir do texto: faixa azul com monograma dourado, rodapé, tipografia Inter 11,5 / entrelinha 1,6. Na mesma página, oferece os modos **Digital Ouro** (protocolo), **Físico P&B** (impressão) e **Rascunho** (Word), além dos botões **Gerar PDF** e **Baixar .DOC** e da contagem para conferência. É usado pelo protocolo Maximus (Gemini) na ejeção das peças.

- **Endereço fixo, versão v1.0:** `https://cdn.jsdelivr.net/gh/RicardoLuisZorzi/zorzi-motor@v1.0/motor_v48.min.js`
- **Versão v1.1 (09/10/2026):** `motor_v48_v1.1.min.js`. Mesmo visual da v1.0; corrige a leitura do texto:
  - peças compostas (ex.: recurso especial com petição de interposição e razões): o bloco de assinaturas fecha depois da última linha OAB, e o texto seguinte volta a ser texto (na v1.0, tudo depois do primeiro "Nestes termos" virava assinatura);
  - quebra de página com `@quebra` ou com uma linha `---`;
  - o último parágrafo fica junto do bloco de assinaturas (a assinatura nunca fica sozinha numa página);
  - tabela escrita em Markdown (`| a | b |`, com a linha `|---|` ignorada) e itens no formato `(a)`.
  O arquivo `motor_v48.min.js` (v1.0) não foi alterado: as peças que o citam continuam iguais.
- **Visual travado:** qualquer mudança no timbre gera uma versão nova (v1.1…), criada só por ordem do escritório. As peças continuam presas à versão que citam.
- **Sem dados de clientes:** o arquivo contém apenas o desenho do timbre e o código que monta a página. O texto de cada peça fica no navegador de quem a abre.
