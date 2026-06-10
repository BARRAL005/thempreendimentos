# Colunas da planilha backend

## Clientes
id | nome | cpf | telefone | whatsapp | endereco | status | observacoes

## Emprestimos
id | clienteId | cliente | valor | jurosPercentual | jurosMensalPago | parcelas | vencimento | multa | jurosDiario | garantia | status

## Pagamentos
id | clienteId | emprestimoId | cliente | data | valor | tipo

## Despesas
id | data | categoria | descricao | valor | tipo | empresa

## Cartoes
id | banco | limite | fechamento | vencimento | valorFatura | limiteDisponivel | status

## Empresas
id | nome | tipo | receitaMensal | despesaMensal | lucroLiquido
