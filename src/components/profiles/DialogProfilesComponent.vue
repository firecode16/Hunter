<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <q-dialog ref="dialogProfile" v-model="modelDialogProfile" @hide="onDialogHide" persistent>
        <q-card style="width: 700px; max-width: 80vw;">
          <q-card-section class="row text-white bg-primary q-pa-sm">
            <div class="text-h6 q-pl-sm">You Profile</div>
          </q-card-section>
          <q-card-section class="text-center">
            <div class="text-h6">Casi Hemos teminado :)</div>
          </q-card-section>
          <q-card-section class="text-center">
            <q-input v-model="nombres" label="Nombres" :dense="dense" />
            <q-input v-model="apellidoPaterno" label="Apellido Paterno" :dense="dense" />
            <q-input v-model="apellidoMaterno" label="Apellido Materno" :dense="dense" />
            <q-select v-model="modelSelectProfile" :options="optionsProfile" label="Perfil" />
          </q-card-section>
          <q-card-section class="text-center">
            <q-radio left-label v-model="shape" val="line" label="Hombre" />
            <q-radio left-label v-model="shape" val="rectangle" label="Mujer" />
          </q-card-section>
          <q-card-section class="text-center">
            <div class="q-gutter-md row">
              <q-select label="Pais" transition-show="flip-up" transition-hide="flip-down" filled v-model="modelPais" :options="options" style="width: 250px" />
              <q-select label="Ciudad" transition-show="scale" transition-hide="scale" filled v-model="modelCiudad" :options="options" style="width: 250px" />
            </div>
          </q-card-section>
          <q-card-section class="text-center">
            <div style="min-width: 250px; max-width: 300px">
              <q-select transition-show="flip-up" transition-hide="flip-down" filled v-model="modelMultiple" multiple :options="optionsIdiomas" use-chips label="Idiomas" />
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" @click="onCancelClick()" />
            <q-btn flat label="Accept" @click="onOKClick()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DialogProfilesComponent',
  data () {
    return {
      modelDialogProfile: false,
      nombres: '',
      modelCiudad: '',
      modelPais: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      password: null,
      modelSelectProfile: null,
      optionsProfile: [
        'Tecnico en Climas', 'Tecnico en Plomeria', 'Niñera', 'Jardinero', 'Tecnico en Electronica', 'FullStack Java SR.'
      ],
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      optionsIdiomas: [
        'Español Mexico', 'Ingles', 'Portugues', 'Frances', 'Ruso'
      ],
      modelMultiple: ['Español Mexico'],
      shape: 'line',
      dense: false
    }
  },
  methods: {
    onReset () {
      this.email = null
      this.password = null
    },
    show () {
      this.$refs.dialogProfile.show()
    },

    hide () {
      this.$refs.dialogProfile.hide()
    },

    onDialogHide () {
      this.$emit('hide')
    },

    onOKClick () {
      this.onClickHidePageContainerLoggin()
      this.$emit('ok')
      this.$router.push('/home')
      this.hide()
    },

    onCancelClick () {
      this.onClickHideTabSocial()
      this.hide()
    },

    onClickHideTabSocial: function () {
      this.$root.$refs.idNavBarSocial.hideTabSocial()
    },

    onClickHidePageContainerLoggin: function () {
      this.$root.$refs.idPageContainerLoggin.hidePageContainerLoggin()
    }

  }
}
</script>
