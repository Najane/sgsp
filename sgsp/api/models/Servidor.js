/**
 * Servidor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    codigoServidor: { type: 'string' },

    matriculaServidor: { type: 'string' },

    nomeCompleto: { type: 'string' },

    dataNascimento: { type: 'string', columnType: 'date' },

    dataAdmissao: { type: 'string', columnType: 'date' },

    estadoCivil: { type: 'string' },

    telefone1: { type: 'string' },

    telefone2: { type: 'string' },

    nomePai: { type: 'string' },

    nomeMae: { type: 'string' },

    idadeServidor: { type: 'number' },

    sexoServidor: { type: 'string' },

    vencimentoServidor: { type: 'string' },

    dataPosse: { type: 'string', columnType: 'date' },

    //Cor
    cor: { type: 'string' },

    //Dados Bancarios
    nomeBanco: { type: 'string' },
    agenciaBanco: { type: 'string' },
    numeroConta: { type: 'string' },

    //Documentos
    cpfServidor: { type: 'string', required: true},
    tituloEleitor: { type: 'string' },
    pispasep: { type: 'string' },
    ctps: { type: 'string' },
    servicoMilitar: { type: 'string' },

    //Grau de instrucao
    grauInstrucao: { type: 'string' },

    //Nacionalidade
    pais: { type: 'string' },

    //codigoEnd: { type: 'Endereco' },

    //codigoCargo: { type: 'Cargo' },

    //numeroRG: { type: 'RegistroGeral' },

    //codNatural: { type: 'Naturalidade' },

    //codigoCusto: { type: 'Custo' },

    //codigoSec: { type: 'Secretaria' },

    //servidorcol: { type: 'string' },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝



  },

};

