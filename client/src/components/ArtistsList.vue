<template>
  <div id="artist_lst">
    <ArtistCard
      v-for="(artist, index) in artists"
      :key="index"
      :artist="artist"
    />
  </div>
</template>

<script>
import ArtistCard from "@/components/ArtistCard.vue";

export default {
  props: {
    artists: {
      type: Array,
      required: true,
    },
  },
  components: {
    ArtistCard,
  },
};
</script>

<style scoped>
#artist_lst {
  margin: 30px;
}
</style>
