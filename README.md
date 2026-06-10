# TH EMPREENDIMENTOS - Premium

Sistema React + TypeScript para gestão de empréstimos, clientes, despesas, cartões, empresas e relatório mensal em PDF.

## Tecnologias
- React + TypeScript
- Vite
- Recharts
- jsPDF
- PWA
- Google Planilhas + Apps Script como backend

## Rodar local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy Vercel
1. Suba este projeto no GitHub.
2. Entre no Vercel.
3. Import Project.
4. Framework: Vite.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.

## Conectar Google Planilhas
1. Crie uma Google Planilha.
2. Abra Extensões > Apps Script.
3. Cole o conteúdo de `backend/apps-script.gs`.
4. Rode a função `criarAbasModelo` uma vez.
5. Publique como Web App.
6. Copie a URL /exec.
7. No Vercel, crie a variável de ambiente:

```env
VITE_SHEETS_API_URL=https://script.google.com/macros/s/SEU_ID/exec
```

Sem essa URL, o app usa dados demonstrativos.
