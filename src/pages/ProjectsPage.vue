<template>
  <div>
    <h1>Lista dei post</h1>

    <div class="container">
      <div class="row">
        <div v-for="(project, index) in projects" :key="index">
          <CardComponent :project="project"></CardComponent>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item" v-for="n in lastPage">
            <a class="page-link" @click="getPosts(n)">{{ n }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardComponent from "../components/CardComponent.vue";
import { store } from "../store";
export default {
  name: "ProjectsPage",
  data() {
    return {
      store,
      projects: [],
      currentPage: 1,
      lastPage: null,
      total: 0,
    };
  },
  methods: {
    getPosts(pagenum) {
      axios
        .get(`${this.store.apiBaseUrl}/projects`, {
          params: {
            page: pagenum,
          },
        })
        .then((response) => {
          //console.log(response.data.results);
          this.projects = response.data.results;
          console.log(this.projects);
          console.log(response);
          this.currentPage = response.data.results.current_page;
          this.lastPage = response.data.results.last_page;
          this.total = response.data.results.total;
        });
    },
  },
  mounted() {
    this.getPosts();
  },
  components: { CardComponent },
};
</script>

<style lang="scss" scoped>
.container {
  .card {
    width: calc(100% / 3);

    .img-proj {
      width: 90px !important;
    }
  }
}
</style>
