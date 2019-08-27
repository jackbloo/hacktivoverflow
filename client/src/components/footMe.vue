<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >



      <v-card-actions class="grey darken-1 justify-center">
        {{ new Date().getFullYear() }} — <strong>jackbloo</strong>
                <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          disabled
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
      ],
    }),
  }
</script>