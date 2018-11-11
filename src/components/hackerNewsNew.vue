<template>
  <div>
      <div>
          <ul >
              <hackerNewsItem v-for="story in topStories" :key="story.id" :item="story"></hackerNewsItem>
          </ul>
      </div>      
  </div>
</template>

<script>
import HackerNewsApi from "../classes/HackerNewsApi"
import hackerNewsItem from "./hackNewsItem"

export default {
  name: "hackerNewsNew",
  components: {
    hackerNewsItem
  },
  data() {
    return {
      topStories: null
    };
  },
  mounted() {
    const hackerNewsApi = new HackerNewsApi()
    hackerNewsApi.getStories("newstories")
    .then(response => {
      const pages = splitIntoPages(response);
      hackerNewsApi.getAllItems(pages[0])
          .then(response => {
            this.topStories = response;
          });
    });

    function splitIntoPages(itemIds) {
      var tmpArray = [];
      var pages = [];
      console.log(itemIds);
      var i, j, chunk = 25;
      for (i=0, j=itemIds.length; i<j; i+=chunk) {
        tmpArray = itemIds.slice(i, i+chunk);
        pages.push(tmpArray);
      }
      console.log(pages);
      return pages;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
