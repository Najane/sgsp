module.exports = {


  friendlyName: 'View servidor',


  description: 'Display "Servidor" page.',

  inputs: {
    nome: {
      type: 'string',
    },
    matricula: {
      //description: 'The ID of the user to look up.',
      type: 'string',
    },
    dataNascimento: {
      //description: 'The ID of the user to look up.',
      type: 'string',
    },
    cargo: {
      //description: 'The ID of the user to look up.',
      type: 'string',
    },
 },

  exits: {

    success: {
      viewTemplatePath: 'pages/servidor'
    }

  },



  fn: async function (inputs, exits) {
    // Respond with view.
    console.log('POST->'+JSON.stringify(inputs));
    console.log('NOME->'+inputs.nome);

    if(typeof(inputs.nome) !== 'undefined'){
      await Servidor.createEach([
        inputs,
      ]);
    }

    var servidores = await Servidor.find().limit(1);
    var nome = null;
    var matricula = null;
    var dataNascimento = null;

    var servidor;
    if(typeof(servidores[0]) !== 'undefined'){
      servidor = servidores[0];
      nome = servidor.nome;
      matricula = servidor.matricula;
      dataNascimento = servidor.dataNascimento;
    }

    var cargos = await Cargo.find();
    console.log('LEN->'+typeof(servidores));
    console.log('SERS ->'+JSON.stringify(servidores));
    console.log('SER 0->'+JSON.stringify(servidor));
    return exits.success({
      cargos: cargos,
      nome: nome,
      matricula: matricula,
      dataNascimento: dataNascimento,
    }); 
  }
};
