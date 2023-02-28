<template>
  <q-dialog ref="dialogGmail" v-model="accountGmail" @hide="onDialogHide" persistent>
    <q-card style="min-width: 350px">
      <q-card-section class="row text-white bg-primary q-pa-sm">
        <div class="text-h6 q-pl-sm">{{ title }}</div>
        <q-space />
      </q-card-section>
      <br />
      <q-form ref="formGmail" @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-card-section class="q-pt-none">
          <q-input
            dense
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
          <q-btn flat label="Calcel" @click="onCancelClick()"></q-btn>
          <q-btn flat label="Accept" type="submit"></q-btn>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import DialogProfilesComponent from 'components/profiles/DialogProfilesComponent.vue'

export default {
  name: 'DialogUserGmailComponent',
  props: ['title'],
  data () {
    return {
      accountGmail: false,
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$refs.formGmail.validate().then(success => {
        if (success) {
          this.onClickShowTabSocial()
          this.openDialogProfile()
          this.hide()
        } else {
          console.log('<<------- fail @submit ------->>')
        }
      })
      this.$refs.formGmail.resetValidation()
    },
    openDialogProfile () {
      this.$q.dialog({
        component: DialogProfilesComponent,
        parent: this
      })
    },
    onReset () {
      this.email = null
      this.password = null
    },
    show () {
      this.$refs.dialogGmail.show()
    },

    hide () {
      this.$refs.dialogGmail.hide()
    },

    onDialogHide () {
      this.$emit('hide')
    },

    onOKClick () {
      this.$emit('ok')
      this.hide()
    },

    onCancelClick () {
      this.hide()
    },

    onClickHideTabSocial: function () {
      this.$root.$refs.idNavBarSocial.hideTabSocial()
    },

    onClickShowTabSocial: function () {
      this.$root.$refs.idNavBarSocial.showTabSocial()
    }

  }

}
</script>
