<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <img src="/img/bph.png" alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(item, index) in menuNav" :key="index">
              <router-link :to="{ name: item.routeName }" class="nav-link gold">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuNav: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Projects",
          routeName: "projects",
        },
        {
          label: "About Me ",
          routeName: "about",
        },
        {
          label: "Contact",
          routeName: "contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background: rgb(96, 130, 146);
  background: linear-gradient(
    180deg,
    rgba(96, 130, 146, 1) 0%,
    rgba(76, 86, 99, 1) 100%
  );
  nav {
    .container {
      img {
        width: 100px;
      }
      ul {
        margin: 0 auto;
        li {
          .gold {
            color: gold;
          }
        }
      }
    }
  }
}
</style>
