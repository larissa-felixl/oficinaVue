const {createApp} = Vue;

const componentBotao = {
    template: '<button @click="alert()">{{mensagem}}</button>',
    methods: {
        alert() {
            alert(this.mensagem);
        }
    },
    props: {
        mensagem: {
            type: String,
            default: 'olá, mundo!'
        }
    }
}

const app = createApp({
    components:{
        'botao-clique': componentBotao
    },
    data(){
        return {
            numero: 0,           
            resultadosoma: 0,
            valorNumero: 0,
            itens: [{nome: 'item 1', preco:10 },
                    {nome: 'item 2', preco:20 }, 
                    {nome: 'item 3', preco:30 }]   
        }
    },                          
    methods: {
        somar(){
            this.resultadosoma += this.numero;
            this.numero = 0;
        },
        alertaMensagem(){
            alert('Texto enviado!');
        }
    },
    watch: {
            valorNumero(novoValor, valorAntigo){
                if(novoValor >=10){
                    alert('Valor máximo atingido!');
                    this.valorNumero = 0;
                }else{
                    alert(`O valor mudou para ${valorAntigo} para ${novoValor}`);
                }
            }
}});                          

app.mount('#app');