<template>
  <div class="home">
    <img alt="FindMyArtist logo" src="../assets/mevn.png" width="150" />
    <HelloWorld msg="Welcome to the Find my Artist App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  },
};
</script>
