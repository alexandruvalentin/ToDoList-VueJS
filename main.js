const app = Vue.createApp({
    data() {
        return {
            tasks: []
        }
    },
    computed: {
        taskCount() {
            return this.tasks.length;
        }
    },
    methods: {
        addNewTask(newTask) {
            this.tasks.push(newTask);
        },
        removeTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
    }
})

app.component("to-do", {
    props: {
        tasks: {
            type: Array,
            required: true
        },
        remaining: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            error: null,
            newTask: null
        }
    },
    template: `
        <div class="container my-2">
            <p><strong>Remaining tasks: {{ remaining }}</strong></p>
        </div>
    `
})

const mountedApp = app.mount("#app");