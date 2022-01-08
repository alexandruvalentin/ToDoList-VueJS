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
    }
})

const mountedApp = app.mount("#app");