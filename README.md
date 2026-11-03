# zorzi-motor

Motor do timbrado oficial do escritório **Zorzi & Zorzi Advogados Associados** (matriz V48, padrão Harvey V68/V69).

## Vigente: `motor-v5.js` (V5.1, 03/11/2026)

Usado pela habilidade `maximus-auditoria-v5` (Gemini). O Maximus escreve só o esqueleto abaixo; o motor busca tudo o mais aqui no GitHub:

```html
<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="UTF-8"><title>Peça</title></head>
<body data-modo="colorido">   <!-- colorido | pb | word -->
<div class="content">
  ... texto integral da peça ...
</div>
<script src="https://cdn.jsdelivr.net/gh/RicardoLuisZorzi/zorzi-motor@main/motor-v5.js"></script>
</body></html>
```

O motor: aplica o CSS do padrão (Inter 11,5 / 1,6, recuo 10,58 mm, margens de 25 mm), coloca `cab.png` e `rod-v2.png` (P&B: `cab_pb.png` e `rod_pb.png`), pagina em A4 até o rodapé, monta o fecho ("Nestes termos, pede deferimento.", cidade e data, assinaturas centralizadas sem linha), confere o texto (contagem de caracteres antes e depois da paginação) e mostra o selo que bloqueia o download se algo falhar. Se o HTML vier fora do padrão (estilo próprio, laudas feitas à mão, timbre ou rodapé digitados, "Página X de Y", linhas de assinatura), o motor corrige e lista no painel o que corrigiu.

Sem dados de clientes: o arquivo contém só o desenho e o código; o texto da peça fica no navegador de quem a abre.

## Versões antigas (mantidas para as peças que as citam)

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
