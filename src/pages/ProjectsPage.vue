<template>
  <div id="projects" class="p-5">
    <h1 class="text-center ">Lista dei progetti</h1>

    <div class="container">
      <div class=" d-flex">
        <div v-for="(project, index) in projects" :key="index" class="col-4 my-5">
          <CardComponent class=""  :project="project"></CardComponent>
        </div>
      </div>
      <nav aria-label="Page navigation example mt-5">
        <ul class="pagination">
          <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <button class="page-link" :disabled="currentPage === 1"  @click="getPosts(currentPage - 1)" >
              Previous
            </button>
          </li>
          <li class="page-item" v-for="n in lastPage">
            <a class="page-link" @click="getPosts(n)">{{ n }}</a>
          </li>
          <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
            <button class="page-link" :disabled="currentPage === lastPage"  @click="getPosts(currentPage + 1)" >
              next
            </button>
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
          this.projects = response.data.results.data;
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

<style lang="scss" scoped >
#project{
  height: 100%;

}


</style>
