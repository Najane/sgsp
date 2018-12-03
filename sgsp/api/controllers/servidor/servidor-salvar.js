module.exports = {
    friendlyName: 'Salvar',
    description: 'Salva registro.',
  
    inputs: {
        matricula: { type: 'string'},        
        nome: { type: 'string' },
        dataNascimento: { type: 'string' },
        dataAdmissao: { type: 'string'},
        estadoCivil: { type: 'string' },
        telefone1: { type: 'string' },
        telefone2: { type: 'string' },
        nomePai: { type: 'string' },
        nomeMae: { type: 'string' },
        sexo: { type: 'string' },
        cor: { type: 'string' },
        numeroEnd : { type: 'string' },
        logradouroEnd: { type: 'string' },
        bairroEnd: { type: 'string' },
        cidadeEnd: { type: 'string' },
        estadoEnd: { type: 'string' },
        cepEnd: { type: 'string' },
        nomeBanco: { type: 'string' },
        agenciaBanco: { type: 'string' },
        numeroConta: { type: 'string' },
        numeroRG: { type: 'string' },
        dataExpedicao: { type: 'string' },
        orgaoExpeditor: { type: 'string' },
        cpf: { type: 'string' },
        tituloEleitor: { type: 'string' },
        pispasep: { type: 'string' },
        ctps: { type: 'string' },
        certificadoReservista: { type: 'string' },
        grauInstrucao: { type: 'string' },
        pais: { type: 'string' },
        estado: { type: 'string' },
        cidade: { type: 'string' },
        vencimentoServidor: { type: 'string' },
        dataPosse: { type: 'string' },
        cargo: { type: 'string' },
        custo: { type: 'string'},
        secretaria: { type: 'string'}
    },
  
    exits: {
      redirect: {
        responseType: 'redirect'
      }
    },
  
    fn: async function (inputs, exits) {
        servidor = await Servidor.findOne({
          matricula: inputs.matricula
        });

        if(servidor == null){
          //Novo
          await Servidor.createEach([
            inputs,
          ]);
        }else{
          //Atualizar
          var mat = inputs.matricula;
          delete inputs.matricula;
          console.log('UPDATE'+JSON.stringify(inputs));
          var updatedUsers = await Servidor.update({matricula: mat})
          .set({
            inputs
          });
          console.log(JSON.stringify(updatedUsers));
        }
        
        //throw { redirect: '/pesquisar'};
        return exits.redirect('/pesquisar');
    }
  };
  