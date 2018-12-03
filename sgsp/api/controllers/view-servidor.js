module.exports = {
  friendlyName: 'View servidor',
  description: 'Display "Servidor" page.',

  inputs: {

    regSendoEditado:{
      type: 'string',
    },

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
    //Combo
    var cargos = await Cargo.find();
    var servidor;

    console.log('POST->'+JSON.stringify(inputs));

    
    if(typeof(inputs.regSendoEditado) !== 'undefined'){
      //Exibir cadastro para alterar

      servidor = await Servidor.findOne({
        matricula: inputs.regSendoEditado
      });

      console.log(JSON.stringify(servidor));

      return exits.success({
        regSendoEditado: inputs.regSendoEditado,
        cargos: cargos,
        cargo: servidor.cargo,
        nome: servidor.nome,
        matricula: servidor.matricula,
        dataNascimento: servidor.dataNascimento,
        
      });

    }else{
      return exits.success({
        cargos: cargos,
        cargo: '',
        nome: '',
        matricula: '',
        dataNascimento: null,
      });
    }

    /*
    if(typeof(inputs.nome) !== 'undefined'){
      var serv = clone(inputs);
      delete serv.regSendoEditado;
      await Servidor.createEach([
        inputs,
      ]);

      
    }else{
      
    }

    
    var servidores = await Servidor.find().limit(1);
    var nome = null;
    var matricula = null;
    var dataNascimento = null;

    
    if(typeof(servidores[0]) !== 'undefined'){
      servidor = servidores[0];
      nome = servidor.nome;
      matricula = servidor.matricula;
      dataNascimento = servidor.dataNascimento;
    }*/

    

  }
};
