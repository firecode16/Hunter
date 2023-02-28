<template>
  <q-page>
    <q-card style="width: 100%; max-width: 100%;">
      <q-banner class="bg-secondary text-white" style="height: 140px">
        <q-card class="contacts-head">
          <q-toolbar class="text-black shadow-2">
            <q-toolbar-title>CONTACTS</q-toolbar-title>
          </q-toolbar>
          <q-list bordered>
            <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  {{ contact.letter }}
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ contact.name }}</q-item-label>
                <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="chat_bubble" color="green"></q-icon>
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item-label header>Offline</q-item-label>
            <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ contact.name }}</q-item-label>
                <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="chat_bubble" color="grey"></q-icon>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </q-banner>
      <div class="row no-wrap items-center" style="height: 800px; background: #f5f5f5;"></div>
    </q-card>
  </q-page>
</template>

<script>
const contacts = [
  {
    id: 1,
    name: 'Ruddy Jedrzej',
    email: 'rjedrzej0@discuz.net',
    letter: 'R'
  }, {
    id: 2,
    name: 'Mallorie Alessandrini',
    email: 'malessandrini1@marketwatch.com',
    letter: 'M'
  }, {
    id: 3,
    name: 'Elisabetta Wicklen',
    email: 'ewicklen2@microsoft.com',
    letter: 'E'
  }, {
    id: 4,
    name: 'Seka Fawdrey',
    email: 'sfawdrey3@wired.com',
    letter: 'S'
  }
]

const offline = [
  {
    id: 5,
    name: 'Brunhilde Panswick',
    email: 'bpanswick4@csmonitor.com',
    avatar: 'avatar2.jpg'
  }, {
    id: 6,
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    avatar: 'avatar6.jpg'
  }
]
export default {
  data () {
    return {
      contacts,
      offline
    }
  }
}
</script>
