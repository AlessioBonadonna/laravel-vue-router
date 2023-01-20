<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss" scoped>
main{
  height: 50vw;
  background: rgb(96, 130, 146);
  background: linear-gradient(
    180deg,
    rgba(96, 130, 146, 1) 0%,
    rgba(76, 86, 99, 1) 100%
  );
}

</style>
