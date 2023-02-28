<template>
  <div class="container" id="q-app">
    <br/><br/>
    <q-toolbar-title class="text-center">
      Welcome<br />Sign In, With:
    </q-toolbar-title>
    <br/>
    <div class="row justify-center">
      <div class="q-pa-md q-gutter-sm">
        <q-btn round color="deep-orange" @click="openDialogGmail()"><i class="lab la-2x la-google-plus-g"/></q-btn>
        <q-btn round color="secondary" @click="openDialogFacebook()"><i class="lab la-2x la-facebook-f"/></q-btn>
        <q-btn round color="purple"><i class="lab la-2x la-github"/></q-btn>
        <q-btn round color="primary" @click="openDialogNewUser()"><i class="las la-2x la-user-plus"/></q-btn>
      </div>
    </div>
    <br/>
    <br/>
    <q-separator inset />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Todo } from './models'
import DialogUserGmailComponent from 'components/usersgmail/DialogUserGmailComponent.vue'
import DialogUserFacebookComponent from 'components/usersfacebook/DialogUserFacebookComponent.vue'
import DialogAddUsersComponent from 'components/newusers/DialogAddUsersComponent.vue'

export default defineComponent({
  name: 'CompositionComponent',
  methods: {
    clickedTheButton () {
      console.log('Hello...')
    },
    openDialogGmail () {
      this.$q.dialog({
        title: 'Google Account Login',
        component: DialogUserGmailComponent,
        parent: this
      })
    },
    openDialogFacebook () {
      this.$q.dialog({
        title: 'Facebook Account Login',
        component: DialogUserFacebookComponent,
        parent: this
      })
    },
    openDialogNewUser () {
      this.$q.dialog({
        title: 'Create Account Login',
        component: DialogAddUsersComponent,
        parent: this
      })
    }
  },
  props: {
    title: {
      type: String,
      required: false
    },
    todos: {
      type: (Array as unknown) as PropType<Todo[]>,
      default: () => []
    },
    active: {
      type: Boolean
    }
  }
})
</script>
