<template>
  <div id="homepage">
    <div class="container">
      <div class="text-home">
        <h1 class="display-4">Welcome</h1>

        <p class="lead">This is my online portfolio</p>
        <hr class="m4-4" />
        <p class="mt-3">Qualcosa da scrivere qua dentro che poi vedrò</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="scss" scoped>
#homepage {
  background-image: url("/img/hdr.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    position: relative;
    padding-top: 500px;
    .text-home {
      background-color: rgba(0, 0, 0, 0.514);
      border: 5px solid rgba(0, 0, 0, 0.709);
      text-align: center;
      position: absolute;
      width: 100%;
      top: 50%;
      left: 0;
      margin: 0 auto;
      color: gold;
      padding: 50px;
    }
  }
}
</style>
