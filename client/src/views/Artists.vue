<template>
  <div id="header">
    <h1>Find your artist</h1>
    <input
      id="search_field"
      class="form-control"
      type="text"
      v-model="search"
      @input="fetchAPIData"
      placeholder="enter artist name"
    />
    <ArtistsCsv id="csv" :artists="artists" />
    <div id="container">
      <ArtistsList id="artist_lst" :artists="artists" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "debounce";
import ArtistsList from "@/components/ArtistsList.vue";
import ArtistsCsv from "@/components/ArtistsCsv.vue";

const jsonFile = require("@/assets/artists.json");
const api = "cf5d9c7e3239b8c79869f788fccfb78b";

export default {
  components: {
    ArtistsList,
    ArtistsCsv,
  },
  data() {
    return {
      section: "Artists",
      search: "",
      artists: [],
    };
  },
  methods: {
    async fetchAPIData() {
      if (this.search != "") {
        try {
          const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${this.search}&api_key=${api}&format=json`;
          const response = await axios.get(url);
          const results = response.data.results;
          if (results["opensearch:totalResults"] != "0") {
            this.artists = results.artistmatches.artist.map((artist) => ({
              name: artist.name,
              mbid: artist.mbid,
              url: artist.url,
              image_small: artist.image_small,
              image: artist.image[0]["#text"],
            }));
          } else {
            const max = jsonFile.artists.length;
            this.search = jsonFile.artists[Math.floor(Math.random() * max)];
            await this.fetchAPIData();
          }
        } catch (err) {
          if (err.response) {
            // client received an error response (5xx, 4xx)
            /* eslint-disable no-console */
            console.log("Server Error:", err);
          } else if (err.request) {
            // client never received a response, or request never left
            console.log("Network Error:", err);
          } else {
            console.log("Client Error:", err);
            /* eslint-enable no-console */
          }
        }
      }
    },
  },
  created() {
    //delaying the API call
    this.fetchAPIData = debounce(this.fetchAPIData, 450);
  },
};
</script>

<style scoped>
#search_field {
  margin: 7px;
  grid-row: 2;
  height: 25px;
  width: 400px;
  justify-self: center;
}

#artist_lst {
}

#csv {
  width: 250px;

  justify-self: end;
  grid-column: 2;
  margin: 20px;
  grid-row: 1;
  grid-row-end: 4;
}

#header {
  margin: 30px;
  display: grid;
  grid-template-columns: 70% auto;
  grid-template-rows: 65px 30px;
}
</style>
