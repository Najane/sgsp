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

      servidor.regSendoEditado = inputs.regSendoEditado;
      servidor.cargos = cargos;


      console.log(JSON.stringify(servidor));

      return exits.success(servidor);
      

      /*return exits.success({
        regSendoEditado: inputs.regSendoEditado,
        cargos: cargos,

        cargo: servidor.cargo,
        nome: servidor.nome,
        matricula: servidor.matricula,
        dataNascimento: servidor.dataNascimento, 
      });*/

    }else{
      return exits.success({
        cargos: cargos,

        matricula: '',
        nome: '',
        dataNascimento: null,
        dataAdmissao: null,
        estadoCivil: '',
        telefone1: '',
        telefone2: '',
        nomePai: '',
        nomeMae: '',
        sexo: '',
        cor: '',
        //Endereço
        numeroEnd: '',
        logradouroEnd: '',
        bairroEnd: '',
        cidadeEnd: '',
        estadoEnd: '',
        cepEnd: '',
        
        //Dados Bancarios
        nomeBanco: '',
        agenciaBanco: '',
        numeroConta: '',

        //Documentos
        numeroRG: '',
        dataExpedicao: '',
        orgaoExpeditor: '',
        cpf: '',
        tituloEleitor: '',
        pispasep: '',
        ctps: '',
        certificadoReservista: '',

        //Grau de instrucao
        grauInstrucao: '',
        //Nacionalidade
        pais: '',
        //Naturalidade
        estado: '',
        cidade: '',
        //
        vencimentoServidor: '',
        dataPosse: null,
        cargo: '',
        custo: '',
        secretaria: ''

      });
    }

  }
};
