<template>
    <div>
      <header class="header">
        <nav>
          <a href="#">Top</a>
          <a href="#">New</a>
        </nav>
      </header>
      <hackerNews></hackerNews>
    </div>
</template>

<script>
import hackerNews from "./components/hackerNews";

export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    hackerNews
  }
};
</script>

<style>

.header {
  background-color: cadetblue;
  position: fixed;
  height: 2rem;
  top: 0;
  left: 0;
  right: 0;
}

</style>
