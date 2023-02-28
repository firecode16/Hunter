<template>
  <q-dialog ref="dialogFacebook" v-model="accountFacebook" @hide="onDialogHide" persistent>
    <q-card style="min-width: 350px">
      <q-card-section class="row text-white bg-primary q-pa-sm">
        <div class="text-h6 q-pl-sm">{{ title }}</div>
        <q-space />
      </q-card-section>
      <br />
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-card-section class="q-pt-none">
          <q-input
            dense
            type="email"
            v-model="email"
            label="Your Email *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type you email']"
          />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            dense
            type="password"
            v-model="password"
            label="Your Password *"
            lazy-rules
            :rules="[
              val => (val !== null && val !== '') || 'Please type your password'
            ]"
          />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Accept" type="submit"></q-btn>
          <q-btn flat label="Calcel" v-close-popup></q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'DialogUserFacebookComponent',
  props: ['title'],
  data () {
    return {
      accountFacebook: false,
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    },
    onReset () {
      this.email = null
      this.password = null
    },
    show () {
      this.$refs.dialogFacebook.show()
    },

    hide () {
      this.$refs.dialogFacebook.hide()
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
