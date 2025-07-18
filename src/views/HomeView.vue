<template>
  <div class="Main">
    <HelloWorld msg="Agenda de contactos" />
    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Phone</th>
          <th scope="col">Country</th>
          <th scope="col">City</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in obtenerLista" :key="item.id">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.city }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="abrirModal(index)"
            >
              Editar
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="eliminar(index)"
            >
              eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
      contacts: getContacts(),
      modalBootstrapInstance: null,
      modalMode: "crear",
      itemSeleccionado: null,
    };
  },
  mounted() {},
  methods: {
    abrirModal(index) {
      //this.autoSeleccionado = null;
      //this.indiceSeleccionado = index;
      //this.modalMode = "editar";
      //setTimeout(() => {
      /*
        if (this.modalBootstrapInstance) {
          this.modalBootstrapInstance.show();
          this.autoSeleccionado = { ...this.items[index] };
        } else {
          console.error("modalBootstrapInstance no está inicializado");
        }*/
      //});
      console.log(`editando ${index}`);
    },
    eliminar(index) {
      console.log(`eliminando ${index}`);
      /*
      if (confirm("¿Está seguro de eliminar este auto?")) {
        this.items.splice(index, 1);
      }
      */
    },
  },
  computed: {
    obtenerLista() {
      let results = [...this.contacts];
      return results;
    },
  },
};
</script>
