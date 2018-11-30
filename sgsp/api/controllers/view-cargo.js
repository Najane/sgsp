module.exports = {


  friendlyName: 'View cargo',


  description: 'Display "Cargo" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cargo'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success(); 

  }


};
