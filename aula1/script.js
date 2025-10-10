const { createApp } = Vue;

createApp({
    data() {
        return {
            mensagem: 'oficina de Vue.js',
            nome: 'Larissa',
            palavra: '',
            palavraCorreta: 'oficina'
        }
    }
}).mount('#app')