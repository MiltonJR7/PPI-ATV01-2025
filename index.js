import express from "express";

const porta = 3000;
const host = "0.0.0.0";
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", (requisicao, resposta) => {
    resposta.send(`
            <html>
                <head>
                    <title>Pagina Inicial</title>
                </head>
                <body>
                    <h1>Pagina Inicial!</h1>
                    <p>Para acessar informe na url os seguintes dados:</p> 
                    <p>http://localhost:3000/validIdade?idade=(USE SEUS DADOS)&sexo=(USE SEUS DADOS)&salario_base=(USE SEUS DADOS)&anoContratacao=(USE SEUS DADOS)&matricula=(USE SEUS DADOS)</p><br>
                    <p>Exemplo: http://localhost:3000/validIdade?idade=28&sexo=M&salario_base=2000&anoContratacao=2020&matricula=123</p>

                </body>
            </html>
        `);
});

app.get("/validIdade", (requisicao, resposta) => {

    let data = new Date();
    let anoAtual = data.getFullYear();

    let idade = requisicao.query.idade;
    let sexo = requisicao.query.sexo;
    let salarioBase = requisicao.query.salario_base;
    let anoContratacao = requisicao.query.anoContratacao;
    let matricula = requisicao.query.matricula;
    
    idade = Number(idade);
    sexo = String(sexo);
    salarioBase = Number(salarioBase);
    anoContratacao = Number(anoContratacao);
    matricula = Number(matricula);

    if(!isNaN(idade) && idade >= 16) {
        if(sexo === 'M' || sexo === 'F') {
            if(!isNaN(salarioBase) && salarioBase > 0) {
                if(!isNaN(anoContratacao) && anoContratacao >= 1960) {
                    if(!isNaN(matricula) && matricula > 0) {

                        let tempoDeEmpresa = anoAtual - anoContratacao;


                        if(idade >= 18 && idade <= 39) {
                            if(tempoDeEmpresa <= 10) {
                                if(sexo === 'M') {
                                    
                                    let salarioComDesconto = salarioBase - 10;
                                    let salarioReajustado = (salarioComDesconto * 1.10).toFixed(2);

                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                } else {
                                    let salarioComDesconto = salarioBase - 11;
                                    let salarioReajustado = (salarioComDesconto * 1.08).toFixed(2);
 
                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                }
                            } else {
                                if(sexo === 'M') {
                                    
                                    let salarioComDesconto = salarioBase + 17;
                                    let salarioReajustado = (salarioComDesconto * 1.10).toFixed(2);

                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                } else {
                                    let salarioComDesconto = salarioBase - 16;
                                    let salarioReajustado = (salarioComDesconto * 1.08).toFixed(2);
                                    
                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;
                                }
                            }

                        } else if(idade >= 40 && idade <= 69) {
                            if(tempoDeEmpresa <= 10) {
                                if(sexo === 'M') {
                                    
                                    let salarioComDesconto = salarioBase - 5;
                                    let salarioReajustado = (salarioComDesconto * 1.08).toFixed(2);

                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                } else {
                                    let salarioComDesconto = salarioBase - 7;
                                    let salarioReajustado = (salarioComDesconto * 1.10).toFixed(2);
                                    
                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;
                                }
                            } else {
                                if(sexo === 'M') {
                                    
                                    let salarioComDesconto = salarioBase + 15;
                                    let salarioReajustado = (salarioComDesconto * 1.08).toFixed(2);

                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                } else {
                                    let salarioComDesconto = salarioBase - 14;
                                    let salarioReajustado = (salarioComDesconto * 1.10).toFixed(2);
                                    

                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;
                                }
                            }

                        } else if(idade >= 70 && idade <= 99) {
                            if(tempoDeEmpresa <= 10) {
                                if(sexo === 'M') {
                                    
                                    let salarioComDesconto = salarioBase - 15;
                                    let salarioReajustado = (salarioComDesconto * 1.15).toFixed(2);

                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                } else {
                                    let salarioComDesconto = salarioBase - 17;
                                    let salarioReajustado = (salarioComDesconto * 1.17).toFixed(2);
                                    
                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                }
                            } else {
                                if(sexo === 'M') {
                                    
                                    let salarioComDesconto = salarioBase + 13;
                                    let salarioReajustado = (salarioComDesconto * 1.15).toFixed(2);

                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                } else {
                                    let salarioComDesconto = salarioBase - 12;
                                    let salarioReajustado = (salarioComDesconto * 1.17).toFixed(2);
                                    
                                    resposta.send(`
                                        <html>
                                        <head>
                                            <title>Dados reajustados</title>
                                        </head>
                                        <body>
                                            <h2>Dados apos o reajuste:</h2>
                                            <p>Idade: ${idade}</p>
                                            <p>Sexo: ${sexo}</p>
                                            <p>Salario base: ${salarioReajustado}</p>
                                            <p>Ano de contratacao: ${anoContratacao}</p>
                                            <p>Matricula: ${matricula}</p>
                                        </body>
                                    </html>
                                `);
                                return;

                                }
                            }

                            resposta.send(`
                                <html>
                                <head>
                                    <title>Dados do usuario</title>
                                </head>
                                <body>
                                    <h2>Dados fornecidos pelo usuario:</h2>
                                    <p>Idade: ${idade}</p>
                                    <p>Sexo: ${sexo}</p>
                                    <p>Salario base: ${salarioBase}</p>
                                    <p>Ano de contratacao: ${anoContratacao}</p>
                                    <p>Matricula: ${matricula}</p>
                                </body>
                            </html>
                        `);  

                        }

                    } else {
                        resposta.send(`
                            <html>
                                <head>
                                    <title>Matricula</title>
                                </head>
                                <body>
                                    <h1>ERRO: Matricula Invalida!</h1>
                                    <p>Possivelmente a matricula nao e um numero positivo ou nao e um numero!</p>
                                </body>
                            </html>
                        `);
                        return;
                    }

                } else {
                    resposta.send(`
                        <html>
                            <head>
                                <title>Ano de contratacao</title>
                            </head>
                            <body>
                                <h1>ERRO: Ano de contratacao Invalido!</h1>
                                <p>Possivelmente o ano de contratacao esta abaixo do permido sendo ele 1960 ou nao e um numero!</p>
                            </body>
                        </html>
                    `);
                    return;
                }

            } else {
                resposta.send(`
                    <html>
                        <head>
                            <title>Salario Base</title>
                        </head>
                        <body>
                            <h1>ERRO: Salario base Invalido!</h1>
                            <p>Possivelmente o salario base esta como negativo ou nao e um numero!</p>
                        </body>
                    </html>
                `);
                return;
            }

        } else {
            resposta.send(`
                <html>
                    <head>
                        <title>Sexo</title>
                    </head>
                    <body>
                        <h1>ERRO: Sexo Invalido!</h1>
                        <p>Possivelmente o sexo foi digitado minusculo tente usar: M para masculino e F para feminino!</p>
                    </body>
                </html>
            `);
            return;
        }

    } else {
        resposta.send(`
                <html>
                    <head>
                        <title>Idade</title>
                    </head>
                    <body>
                        <h1>ERRO: Idade Invalida!</h1>
                        <p>Possivelmente idade menor que 16 anos ou idade nao e um numero!</p>
                    </body>
                </html>
        `);
        return;
    }

});

app.listen(porta, host, () => {
    console.log('Servidor escutando na porta 3000');
});