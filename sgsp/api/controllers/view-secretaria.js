module.exports = {


  friendlyName: 'View secretaria',


  description: 'Display "Secretaria" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/secretaria'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success(); 

  }


};
