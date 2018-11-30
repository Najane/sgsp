module.exports = {


  friendlyName: 'View servidor',


  description: 'Display "Servidor" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/servidor'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success(); 

  }


};
