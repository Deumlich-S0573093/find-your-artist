<template>
  <section class="p-4 rounded-lg shadow-lg bg-gray-50 w-80">
    <div class="h-96">
      <a
        class="text-xl font-bold text-center text-green-800 hover:text-green-600 hover:underline"
        :href="artist.url"
        target="_blank"
        rel="noreferrer"
      >
        {{ artist.name }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    artist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
