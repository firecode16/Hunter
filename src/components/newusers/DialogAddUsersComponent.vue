<template>
  <q-dialog ref="dialogAddUser" v-model="accountAddUsers" @hide="onDialogHide" persistent>
    <q-card style="min-width: 350px">
      <q-card-section class="row text-white bg-primary q-pa-sm">
        <div class="text-h6 q-pl-sm">{{ title }}</div>
        <q-space />
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Email</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="address"
          autofocus
          @keyup.enter="accountAddUsers = false"
        ></q-input>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Password</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-input
          dense
          v-model="age"
          autofocus
          @keyup.enter="accountAddUsers = false"
        ></q-input>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup></q-btn>
        <q-btn flat label="Add" v-close-popup></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'DialogAddUsersComponent',
  props: ['title'],
  data () {
    return {
      accountAddUsers: false,
      address: '',
      age: ''
    }
  },
  methods: {
    show () {
      this.$refs.dialogAddUser.show()
    },

    hide () {
      this.$refs.dialogAddUser.hide()
    },

    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    },

    onOKClick () {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit('ok')
      // or with payload: this.$emit('ok', { ... })
      // then hiding dialog
      this.hide()
    },

    onCancelClick () {
      // we just need to hide dialog
      this.hide()
    }
  }
}
</script>
