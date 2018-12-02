module.exports = {


  friendlyName: 'View listar servidores',


  description: 'Display "Listar servidores" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/listarServidores'
    }

  },


  fn: async function (input, exits) {

    // Respond with view.
    var servidores = await Servidor.find();
    return exits.success({
      servidores: servidores
    });

  }


};
