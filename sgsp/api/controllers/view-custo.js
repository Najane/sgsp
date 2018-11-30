module.exports = {


  friendlyName: 'View custo',


  description: 'Display "Custo" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/custo'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success(); 

  }


};
