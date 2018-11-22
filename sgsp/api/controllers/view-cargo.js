module.exports = {


  friendlyName: 'View cargo',


  description: 'Display "Cargo" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cargo'
    }

  },


  fn: async function () {

    // Respond with view.
    //return {};
    return exits.success(); 

  }


};
