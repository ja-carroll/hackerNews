<template>
  <div class="item">
      <span class="score">
          {{ item.score }}
      </span>
      <span class="title">
          {{ item.title }}
      </span>
      <br />
      <span class="meta">
          by {{item.by}}
      </span>
      <span>
          | {{item.descendants}} comments
      </span>
  </div>
</template>

<script>

export default {
    name: "hackerNewsItem",
    props: ["item"]
};
</script>

<style>

.item {
    background-color: #fff;
    padding: 20px 30px 20px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 20px;
}

.score {
    font-size: 2rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
}

.meta {
    font-size: 0.8rem;
    color: #828282;
}
</style>