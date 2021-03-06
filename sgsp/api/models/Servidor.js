/**
 * Servidor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  
  primaryKey: 'matricula',

  attributes: {
    id: false,

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    //Dados básicos
    matricula: { type: 'string', required:true, unique: true },
    nome: { type: 'string' },
    dataNascimento: { type: 'ref', columnType: 'date' },
    dataAdmissao: { type: 'ref', columnType: 'date' },
    estadoCivil: { type: 'string' },
    telefone1: { type: 'string' },
    telefone2: { type: 'string' },
    nomePai: { type: 'string' },
    nomeMae: { type: 'string' },
    sexo: { type: 'string' },
    cor: { type: 'string' },
    

    //Endereço
    numeroEnd : { type: 'string' },
    logradouroEnd: { type: 'string' },
    bairroEnd: { type: 'string' },
    cidadeEnd: { type: 'string' },
    estadoEnd: { type: 'string' },
    cepEnd: { type: 'string' },
    

    //Dados Bancarios
    nomeBanco: { type: 'string' },
    agenciaBanco: { type: 'string' },
    numeroConta: { type: 'string' },

    //Documentos
    numeroRG: { type: 'string', required: false, unique: true },
    dataExpedicao: { type: 'ref', columnType: 'date' },
    orgaoExpeditor: { type: 'string', required: false },
    cpf: { type: 'string', required: false, unique: true},
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

    //
    vencimentoServidor: { type: 'string' },
    dataPosse: { type: 'ref', columnType: 'date' },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    cargo: {
      model: 'Cargo'
    },
    custo: {
      model: 'Custo'
    },
    secretaria: {
      model: 'Secretaria'
    }

  },

};

