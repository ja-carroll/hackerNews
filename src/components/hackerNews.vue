<template>
  <div>
      <div>{{ msg }}</div>
      <div>
          <ul >
              <li v-for="story in topStories" :key="story.id">{{ story }}</li>
          </ul>
      </div>      
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "hackerNews",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      topStories: null
    };
  },
  mounted() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(response => {
          this.topStories = response.data;
          console.log(response);
      }
    )
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
