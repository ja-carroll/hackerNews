<template>
  <div class="toolbar-container">
      <router-link class="nav-link" v-for="link in links" :key="link.href" :to="link.href">
          {{ link.label }}
      </router-link>
  </div>
</template>

<script>

export default {
  name: "toolbar",
  data() {
      return {
          links: [
              {href: "/top", label: "Top"},
              {href: "/new", label: "New"},
              {href: "/best", label: "Best"},
              {href: "/about", label: "About"}
          ]
      }
  }
}
</script>

<style>

.toolbar-container {
  background-color: cadetblue;
  margin: 0;
  height: 2rem;
}

.nav-link {
    color: white;
    margin-right: 1rem;
    font-weight: 500;
    line-height: 32px;
    display: inline-block;
}

</style>
