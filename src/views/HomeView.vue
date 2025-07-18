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

        <tr>
          <th scope="col">
            <button type="button" class="btn btn-primary" @click="crearNuevo()">
              Guardar
            </button>
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="newContactName"
              class="form-control"
              placeholder="Ingresar nombre"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="newContactEmail"
              class="form-control"
              placeholder="Ingresar correo"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="newContactAddress"
              class="form-control"
              placeholder="Ingresar Dirección"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="newContactPhone"
              class="form-control"
              placeholder="Ingresar teléfono"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="newContactCountry"
              class="form-control"
              placeholder="Ingresar País"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="newContactCity"
              class="form-control"
              placeholder="Ingresar Ciudad"
            />
          </th>
          <th></th>
        </tr>
        <tr>
          <th scope="col">
            <button
              type="button"
              class="btn btn-primary"
              @click="confirmarEditar()"
            >
              Editar
            </button>
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="editContactName"
              class="form-control"
              placeholder="Ingresar nombre"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="editContactEmail"
              class="form-control"
              placeholder="Ingresar correo"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="editContactAddress"
              class="form-control"
              placeholder="Ingresar Dirección"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="editContactPhone"
              class="form-control"
              placeholder="Ingresar teléfono"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="editContactCountry"
              class="form-control"
              placeholder="Ingresar País"
            />
          </th>
          <th scope="col">
            <input
              type="text"
              v-model="editContactCity"
              class="form-control"
              placeholder="Ingresar Ciudad"
            />
          </th>
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
              @click="startEditing(item)"
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
import HelloWorld from "@/components/HelloWorld.vue";
import Contact from "@/features/Contact.model";
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
      newID: 0,
      newContactName: "",
      newContactEmail: "",
      newContactAddress: "",
      newContactPhone: "",
      newContactCountry: "",
      newContactCity: "",
      newContact: null,
      editContactName: "",
      editContactEmail: "",
      editContactAddress: "",
      editContactPhone: "",
      editContactCountry: "",
      editContactCity: "",
    };
  },
  mounted() {},
  methods: {
    abrirModal(index) {
      console.log(`editando ${index}`);
    },
    eliminar(index) {
      console.log(`eliminando ${index}`);
    },

    assignID() {
      if (this.contacts.length === 0) return 1;
      const maxId = Math.max(...this.contacts.map((c) => c.id));
      return maxId + 1;
    },

    borrarCampos() {
      this.newContactName = "";
      this.newContactEmail = "";
      this.newContactAddress = "";
      this.newContactPhone = "";
      this.newContactCountry = "";
      this.newContactCity = "";
      this.editContactName = "";
      this.editContactEmail = "";
      this.editContactAddress = "";
      this.editContactPhone = "";
      this.editContactCountry = "";
      this.editContactCity = "";
    },

    crearNuevo() {
      if (
        this.newContactName.trim() &&
        this.newContactEmail.trim() &&
        this.newContactAddress.trim() &&
        this.newContactPhone.trim() &&
        this.newContactCity.trim() &&
        this.newContactCountry.trim()
      ) {
        this.newID = this.assignID();
        this.newContact = new Contact(
          this.newID,
          this.newContactName,
          this.newContactEmail,
          this.newContactAddress,
          this.newContactPhone,
          this.newContactCountry,
          this.newContactCity
        );
        console.log(this.newContact);
        this.contacts.push(this.newContact);
        this.borrarCampos();
      } else {
        this.newContact = null;
        this.borrarCampos();
      }
    },
    startEditing(contact) {
      this.editingContactId = contact.id;
      this.editContactName = contact.name;
      this.editContactEmail = contact.email;
      this.editContactAddress = contact.address;
      this.editContactPhone = contact.phone;
      this.editContactCountry = contact.country;
      this.editContactCity = contact.city;
    },
    confirmarEditar() {
      if (
        this.editContactName.trim() &&
        this.editContactEmail.trim() &&
        this.editContactAddress.trim() &&
        this.editContactPhone.trim() &&
        this.editContactCity.trim() &&
        this.editContactCountry.trim()
      ) {
        const contact = this.contacts.find(
          (c) => c.id === this.editingContactId
        );
        if (contact) {
          contact.name = this.editContactName;
          contact.email = this.editContactEmail;
          contact.address = this.editContactAddress;
          contact.phone = this.editContactPhone;
          contact.country = this.editContactCountry;
          contact.city = this.editContactCity;
          this.editingContactId = null;
        }
        console.log(contact);
        this.borrarCampos();
      } else {
        this.borrarCampos();
      }
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
