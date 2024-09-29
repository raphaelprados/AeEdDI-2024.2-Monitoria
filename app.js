const app = Vue.createApp({
    created() {
        fetch("./sample.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error
                        (`HTTP error! Status: ${res.status}`);
                }
            })
            .then((data) =>
                console.log(data))
            .catch((error) =>
                console.error("Unable to fetch data:", error));
        
    },
    data() {
        return {
            conteudo: '',
            atividade: 0,
            linguagem: ''
        }
    },
    template: '<h2>I am the template</h2>'
})

app.mount('#app')