
const limpaformulario = (endereço) =>{
  document.getElementById('endereço').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';

}



const fillForm = (endereço) =>{
    limpaformulario()
  document.getElementById('endereço').value = endereço.logradouro;
  document.getElementById('bairro').value = endereço.bairro;
  document.getElementById('cidade').value = endereço.localidade;
  document.getElementById('estado').value = endereço.uf;

}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepvalido = (cep) => cep.length === 8 && eNumero(cep)

const  pesquisarCep = async () => {
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`
  if (cepvalido(cep)){
    const dados = await fetch(url);
    const endereço = await dados.json();
    if(endereço.hasOwnProperty('erro')){
        document.getElementById('endereço').value = "CEP não encontrado"
    } else {
     fillForm(endereço);
    }
  } else {
      document.getElementById('endereço').value = 'CEP incorreto!'
  }



}

document.getElementById('cep').
         addEventListener('focusout', pesquisarCep );




