<template>
  <q-page>
    <q-card style="width: 100%; max-width: 100%;">
      <q-card-section class="bg-secondary text-white">
        <div style="padding-left: 74%" class="text-h6">210</div>
        <div style="padding-left: 74%" class="text-subtitle2">People viewed you Profile, in the past 7 days</div>
        <br />
        <div style="padding-left: 74%" class="text-h6">344</div>
        <div style="padding-left: 74%" class="text-subtitle2">Contacts in your network</div>

        <q-card class="home-head">
          <q-card-section class="text-black">
            <div class="text-h6">Share Post</div>
          </q-card-section>
          <q-separator />
          <q-card-section class="text-black">
            <q-input bottom-slots v-model="text" :placeholder="placeholder" maxlength="50" :dense="dense">
              <template v-slot:before>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
              </template>

              <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer"></q-icon>
                <q-fab v-model="fab1" flat icon="add" direction="down" padding="xs">
                  <q-fab-action color="primary" @click="onClick" icon="add_a_photo" padding="5px"></q-fab-action>
                  <q-fab-action color="primary" @click="onClick" icon="video_settings" padding="5px"></q-fab-action>
                </q-fab>
              </template>

              <template v-slot:after>
                <q-btn round dense flat icon="send">
                  <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
                    <strong>Sharing my Post</strong>
                  </q-tooltip>
                </q-btn>
              </template>
            </q-input>
          </q-card-section>
        </q-card>

        <q-card class="home-body">
          <q-item>
            <q-item-section side>
              <q-avatar size="33px">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
            </q-item-section>
            <q-item-section class="text-black">
              <q-item-label>Mary Elena Torres Odisea</q-item-label>
            </q-item-section>
          </q-item>
          <q-video :ratio="16/9" src="https://www.youtube.com/embed/3n1NpmtJ5G8" />
        </q-card>
      </q-card-section>

      <div class="row no-wrap items-center" style="height: 800px; background: #f5f5f5;">
        <div class="col text-h6 ellipsis">
          <q-card-section class="text-black"></q-card-section>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      fab1: false,
      text: '',
      placeholder: ["What's on your mind?"],
      dense: false
    }
  },

  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    }
  }
}
</script>
