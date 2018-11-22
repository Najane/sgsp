module.exports = {


  friendlyName: 'View servidor',


  description: 'Display "Servidor" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/servidor'
    }

  },


  fn: async function () {

    // Respond with view.
    //return {};
    return exits.success(); 

  }


};
