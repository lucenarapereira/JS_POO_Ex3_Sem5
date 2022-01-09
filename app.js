/*Exercicio 3 */

class Endereco {
    log
    num
    cid
    est
    pai
    cep
}

constructor(log, num, cid, est, pai, cep) {
    const STR = 'string'
    msg = 'Endereco inválido'

    if ( typeof log == STR ||
        typeof num == STR ||
        typeof cid == STR ||
        typeof est == STR ||
        typeof pai == STR ||
        typeof cep == STR
    ) {
        throw 'endereço invalido'
    }
}

this.logradouro == log
this.numero=num
this.cidade = cid
this.estado = est
this.pai = pai
this.cep = cep

new Endereco(
    'logradouro',
    'numero', 
    'cidade',
    'estado'  ,
    'pai',
    'cep'
)