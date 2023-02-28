<template>
  <q-page>
    <q-card style="width: 100%; max-width: 100%;">
      <q-banner class="bg-secondary text-white" style="height: 140px">
        <q-card class="profile-head">
          <q-card-section class="text-black">
            <q-item>
              <q-item-section side>
                <q-avatar size="100px">
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label style="font-size: 16px;">Mary Elena Torres Odisea</q-item-label>
                <q-item-label style="font-size: 14px;" caption>SR. QA Testing App, In Izzi Telecom Corp.</q-item-label>
                <q-item-label style="font-size: 14px;" caption>Mexico, Monterrey Nuevo Leon.</q-item-label>
              </q-item-section>
              <q-separator vertical/>
              <q-item-section>
                <q-item-label style="font-size: 16px; padding-left: 125px;">Education</q-item-label>
                <q-item-label style="font-size: 14px; padding-left: 125px;" caption>UANL</q-item-label>
                <q-item-label style="font-size: 14px; padding-left: 125px;" caption>Mexico, Monterrey Nuevo Leon.</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
          <q-separator />
          <div class="q-pa-md q-gutter-sm">
            <q-btn align="left" icon-right="send" class="btn-fixed-width" color="primary" label="CONNECT" />
          </div>
        </q-card>

        <q-card class="profile-body">
          <q-expansion-item expand-separator class="text-black" label="Projects portfolio">
            <q-slide-transition>
              <div class="q-pa-md">
                <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated control-color="primary" navigation padding arrows height="300px" class="bg-grey-1 shadow-2 rounded-borders">
                  <q-carousel-slide :name="1" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                      <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/mountains.jpg"></q-img>
                      <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax1.jpg"></q-img>
                    </div>
                  </q-carousel-slide>

                  <q-carousel-slide :name="2" class="column no-wrap">
                    <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                      <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
                      <q-img class="rounded-borders col-6 full-height" src="https://cdn.quasar.dev/img/quasar.jpg"></q-img>
                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </q-slide-transition>
          </q-expansion-item>
        </q-card>
      </q-banner>
      <div class="row no-wrap items-center" style="height: 800px; background: #f5f5f5;"></div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      expanded: false,
      slide: 1
    }
  }
}
</script>
