module.exports = {


  friendlyName: 'View listar servidores',


  description: 'Display "Listar servidores" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/listar-servidores'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
