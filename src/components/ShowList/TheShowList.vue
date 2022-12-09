<script setup lang="ts">
import { ref } from "vue";
import { useShows } from "./useShowList";
import ShowCard from "./TheShowCard.vue";

const props = defineProps<{
  genre: string;
}>();
const { isLoading, isError, data: showList, error } = useShows(props.genre);

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}
const title = ref(capitalize(props.genre));
</script>

<template>
  <div class="show-list">
    <h3>{{ title }} TV SHOWS</h3>
    <template v-if="!isLoading">
      <ShowCard
        v-for="showItem in showList"
        :key="showItem.id"
        :item="showItem"
      />
    </template>
  </div>
</template>

<style scoped lang="css">
.show-list {
  overflow: auto;
  white-space: nowrap;
}
.show-list::-webkit-scrollbar {
  width: 1em;
}
.show-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.show-list::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

@media (min-width: 1024px) {
}
</style>
