<template>
  <div class="Main">
    <HelloWorld msg="Agenda de contactos" />
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="item">
        {{ contact.name }} - {{ contact.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getContacts } from "@/services/contacts.data";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      title: "Contacts",
      contacts: [],
      modalBootstrapInstance: null,
      modalMode: "crear",
      itemSeleccionado: null,
    };
  },
  mounted() {
    this.obtenerLista();
  },
  methods: {
    obtenerLista() {
      this.contacts = getContacts();
    },
  },
};
</script>
