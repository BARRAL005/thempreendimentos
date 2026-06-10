const SHEET_NAMES = ['Clientes', 'Emprestimos', 'Pagamentos', 'Despesas', 'Cartoes', 'Empresas'];

function doGet(e) {
  const rota = e.parameter.rota || 'todos';
  const payload = rota === 'todos' ? getAllData() : getSheetData(rota);
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function getAllData() {
  return {
    clientes: getSheetData('Clientes'),
    emprestimos: getSheetData('Emprestimos'),
    pagamentos: getSheetData('Pagamentos'),
    despesas: getSheetData('Despesas'),
    cartoes: getSheetData('Cartoes'),
    empresas: getSheetData('Empresas')
  };
}

function getSheetData(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(name);
  if (!sheet) return [];
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0].map(h => String(h).trim());
  return values.slice(1).filter(row => row.some(cell => cell !== '')).map(row => {
    const obj = {};
    headers.forEach((header, index) => obj[header] = row[index]);
    return obj;
  });
}

function criarAbasModelo() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const modelos = {
    Clientes: ['id','nome','cpf','telefone','whatsapp','endereco','status','observacoes'],
    Emprestimos: ['id','clienteId','cliente','valor','jurosPercentual','jurosMensalPago','parcelas','vencimento','multa','jurosDiario','garantia','status'],
    Pagamentos: ['id','clienteId','emprestimoId','cliente','data','valor','tipo'],
    Despesas: ['id','data','categoria','descricao','valor','tipo','empresa'],
    Cartoes: ['id','banco','limite','fechamento','vencimento','valorFatura','limiteDisponivel','status'],
    Empresas: ['id','nome','tipo','receitaMensal','despesaMensal','lucroLiquido']
  };
  Object.keys(modelos).forEach(nome => {
    let sheet = ss.getSheetByName(nome);
    if (!sheet) sheet = ss.insertSheet(nome);
    sheet.clear();
    sheet.getRange(1, 1, 1, modelos[nome].length).setValues([modelos[nome]]);
    sheet.setFrozenRows(1);
  });
}
