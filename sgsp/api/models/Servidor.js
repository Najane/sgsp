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

    //Dados básicos
    matricula: { type: 'string', unique: true },
    nome: { type: 'string' },
    dataNascimento: { type: 'string', columnType: 'date' },
    dataAdmissao: { type: 'string', columnType: 'date' },
    estadoCivil: { type: 'string' },
    telefone1: { type: 'string' },
    telefone2: { type: 'string' },
    nomePai: { type: 'string' },
    nomeMae: { type: 'string' },
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
    numeroRG: { type: 'string', required: true, unique: true },
    dataExpedicao: { type: 'string', columnType: 'date' },
    orgaoExpeditor: { type: 'string', required: true },
    cpfServidor: { type: 'string', required: true, unique: true},
    tituloEleitor: { type: 'string' },
    pispasep: { type: 'string' },
    ctps: { type: 'string' },
    certificadoReservista: { type: 'string' },

    //Grau de instrucao
    grauInstrucao: { type: 'string' },

    //Nacionalidade
    pais: { type: 'string' },

    //Naturalidade
    estado: { type: 'string' },
    cidade: { type: 'string' },

    //codigoEnd: { type: 'Endereco' },

    //codigoCargo: { type: 'Cargo' },

    //codigoCusto: { type: 'Custo' },

    //codigoSec: { type: 'Secretaria' },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

