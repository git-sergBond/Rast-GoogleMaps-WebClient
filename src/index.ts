import Vue from "vue";
import HelloComponent from "./components/helloSF.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent
    }
});
