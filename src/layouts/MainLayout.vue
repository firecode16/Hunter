<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-white shadow-2 rounded-borders">
        <q-toolbar-title>Hunter</q-toolbar-title>
        <q-input rounded dense outlined bg-color="grey-3" label-color="black" v-model="txtSearch" size="40" label="Search people and more" class="q-ml-md" v-if="this.show">
          <template v-slot:append>
            <q-icon name="search" color="black" />
          </template>
        </q-input>
        <q-space />
        <div id="id-tab" v-if="this.show">
          <q-tabs v-model="tab" dense class="text-white">
            <q-route-tab default name="home" icon="home" label="Home" to="/home" exact />
            <q-route-tab name="profile" icon="assignment_ind" label="Profile" to="/profile" exact />
            <q-route-tab name="contacts" icon="people" label="Contacts" to="/contacts" exact>
            </q-route-tab>
            <q-route-tab name="chat" icon="forum" label="Chat" to="/chat" exact>
              <q-badge color="secondary" text-color="white" floating>13</q-badge>
            </q-route-tab>
          </q-tabs>
        </div>
        <q-space />
        <div id="id-communication" v-if="this.show">
          <q-separator vertical inset />
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
            <q-menu fit>
              <q-list style="min-width: 160px">
                <q-item clickable>
                  <q-item-section>Abailable</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>
                  <q-menu anchor="top right" self="top left">
                    <q-list dense style="min-width: 150px">
                      <q-item v-ripple clickable v-close-popup>
                        <q-item-section side>
                          <q-badge color="green" style="border-radius: 10px; width: 13px; height: 13px"></q-badge>
                        </q-item-section>
                        <q-item-section>Abailable</q-item-section>
                      </q-item>
                      <q-item v-ripple clickable v-close-popup>
                        <q-item-section side>
                          <q-badge color="red" style="border-radius: 10px; width: 13px; height: 13px" transparent></q-badge>
                        </q-item-section>
                        <q-item-section>Busy</q-item-section>
                      </q-item>
                      <q-item v-ripple clickable v-close-popup>
                        <q-item-section side>
                          <q-badge color="black" style="border-radius: 10px; width: 13px; height: 13px" transparent></q-badge>
                        </q-item-section>
                        <q-item-section>Away</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
                <q-item v-ripple clickable v-close-popup>
                  <q-item-section side>
                    <q-icon color="primary" name="settings" size="22px"></q-icon>
                  </q-item-section>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item @click="logout()" clickable v-close-popup>
                  <q-item-section side>
                    <q-icon color="primary" name="exit_to_app" size="22px"></q-icon>
                  </q-item-section>
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>

            <q-badge color="orange" class="absolute-top-left" style="border-radius: 10px; width: 13px; height: 13px"></q-badge>
            <q-badge color="white" class="absolute-bottom-right" style="border-radius: 10px; width: 14px; height: 14px">
              <q-badge color="green" class="absolute-center" style="border-radius: 7px; width: 12px; height: 12px"></q-badge>
            </q-badge>
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>
    <br /><br />
    <q-separator />
    <div class="q-pa-md" v-if="this.show">
      <div class="q-gutter-y-md" style="max-width: 100%">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="home">
            <q-layout view="lHh Lpr lFf">
              <q-page-container>
                <router-view />
              </q-page-container>
            </q-layout>
          </q-tab-panel>

          <q-tab-panel name="profile">
            <q-layout view="lHh Lpr lFf">
              <q-page-container>
                <router-view />
              </q-page-container>
            </q-layout>
          </q-tab-panel>

          <q-tab-panel name="contacts">
            <q-layout view="lHh Lpr lFf">
              <q-page-container>
                <router-view />
              </q-page-container>
            </q-layout>
          </q-tab-panel>

          <q-tab-panel name="chat">
            <q-layout view="lHh Lpr lFf">
              <q-page-container>
                <router-view />
              </q-page-container>
            </q-layout>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
    <q-page-container id="id-page-container-loggin" v-if="this.showPageContainerLoggin">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainLayout',
  created () {
    this.$root.$refs.idNavBarSocial = this
    this.$root.$refs.idPageContainerLoggin = this
  },
  data () {
    return {
      tab: 'home',
      show: false,
      showPageContainerLoggin: true,
      txtSearch: ''
    }
  },
  methods: {
    hideTabSocial: function () {
      this.show = false
    },

    showTabSocial: function () {
      this.show = true
    },

    hidePageContainerLoggin: function () {
      this.showPageContainerLoggin = false
    },

    logout: function () {
      this.getHostname()
    },

    getHostname: function () {
      const protocol = location.protocol + '//'
      const host = window.location.host
      window.location.href = protocol + host
    }

  }
})
</script>
