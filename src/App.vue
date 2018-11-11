<template>
    <div>
      <header>      
        <toolbar />
      </header>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import toolbar from "./components/toolbar"

export default {
  name: "app",
  data() {
    return {
    };
  },
  components: {
    toolbar
  }
};
</script>

<style>
</style>
