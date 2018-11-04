<template>
  <div>
      <span class="score">{{ item.score }}</span>
      <span class="title">{{ item.title }}</span>

  </div>
</template>

<script>

export default {
    name: "hackerNewsItem",
    props: ["item"]
};
</script>

<style>

</style>