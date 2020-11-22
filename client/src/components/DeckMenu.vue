<template>
  <div id="deck-menu">
    <div
      v-if="$store.state.decks.decks.length && menuType == 'learn'"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="(n, deck) in $store.state.decks.decks"
        :key="deck.key"
        class="my-4 mr-4 col-span-1"
      >
        <div class="p-8 text-center md:p-12 bg-nord10 rounded-md">
          <div class="text-xl font-normal">
            {{ $store.state.decks.decks[deck].title }}
          </div>
          <div>{{ $store.state.decks.decks[deck].description }}</div>
        </div>
      </div>
    </div>

    <div
      v-if="$store.state.decks.decksAssigned.length && menuType == 'assigned'"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="(n, deck) in $store.state.decks.decksAssigned"
        :key="deck.key"
        class="my-4 mr-4 col-span-1"
      >
        <div class="p-8 text-center md:p-12 bg-nord10 rounded-md">
          <div class="text-xl font-normal">
            {{ $store.state.decks.decksAssigned[deck].title }}
          </div>
          <div>{{ $store.state.decks.decksAssigned[deck].description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'DeckMenu',
    props: {
      menuType: {
        type: String,
        required: true,
        validator: (value: string): boolean => {
          return ['learn', 'assigned'].includes(value)
        },
      },
    },
  })
</script>

<style scoped></style>