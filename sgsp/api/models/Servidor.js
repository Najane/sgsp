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

    descricaoCor: { type: 'string' },

    //codigoGrau: { type: 'GrauInstrucao' },

    //codigoCargo: { type: 'Cargo' },

    //numeroRG: { type: 'RegistroGeral' },

    //codigoDadosBanco: { type: 'DadosBancarios' },

    //codigoCor: { type: 'Cor' },

    //codigoPais: { type: 'Nacionalidade' },

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

    cpfServidor: {
      collection:'Documentos',
      via: 'owner',
    },

  },

};

