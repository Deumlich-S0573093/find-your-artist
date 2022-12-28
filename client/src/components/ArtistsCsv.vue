<template>
  <div class="card" style="width: 400px">
    <div class="card-header">Save</div>
    <div class="card-body">
      <p class="card-text">Save search results to csv file</p>
      <div class="form-inline">
        <input
          id="csv_name"
          class="form-control"
          type="text"
          v-model="csv_name"
          placeholder="filename"
        />
        <small id="passwordHelpInline" class="text-muted"> .csv </small>
      </div>
      <button @click="download" class="btn btn-primary">Download</button>
    </div>
  </div>
</template>

<script>
import Papa from "papaparse";

export default {
  data() {
    return {
      csv_name: "",
    };
  },
  props: {
    artists: {
      type: Array,
      required: true,
    },
  },
  methods: {
    download() {
      if (this.csv_name != "") {
        if (this.artists != "") {
          let filename = this.csv_name + ".csv";
          let text = Papa.unparse(this.artists);

          let element = document.createElement("a");
          element.setAttribute(
            "href",
            "data:text/csv;charset=utf-8," + encodeURIComponent(text)
          );
          element.setAttribute("download", filename);

          element.style.display = "none";
          document.body.appendChild(element);

          element.click();
          document.body.removeChild(element);
        } else {
          alert("No results to save");
        }
      } else {
        alert("Please enter a filename!");
      }
    },
  },
};
</script>

<style scoped>
#csv_name {
  margin: 5px;
  width: 321px;
}
</style>
