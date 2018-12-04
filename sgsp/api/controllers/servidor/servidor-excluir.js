module.exports = {
  friendlyName: 'Salvar',
  description: 'Salva registro.',

  inputs: {
    regSendoExcluido:{
      type: 'string',
    },
  },

  exits: {
    redirect: {
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {

      servidor = await Servidor.findOne({
        matricula: inputs.regSendoExcluido
      });

      if(servidor != null){
        //Apagar
        await Servidor.destroy({
          matricula: inputs.regSendoExcluido
        });
      }
      
      return exits.redirect('/pesquisar');
  }
};
