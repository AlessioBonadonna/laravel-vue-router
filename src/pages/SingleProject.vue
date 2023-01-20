<template>
  <div class="container p-5">
    <section v-if="project" class="mt-5 ">
    <h1 class="text-center gold">{{ project.name_proj }}</h1>

<div class="d-flex ">


   <div class="img-box p-5">
    <img
       :src="`${store.imagBasePath}${project.cover_image}`"
       class="img-proj card-img-top"
       :alt="project.name_proj"
       v-if="project.cover_image"
     />
     <img
       src="https://via.placeholder.com/100x100.png?text=Placeholder"
       class="card-img-top "
       :alt="project.name_proj"
       v-else
     />
  </div> 



    <div class="desc-box p-5">

      
      <div v-if="project.description">
        <h5>Descrizione:</h5>
        <p>{{ project.description }}</p>
      </div>
      <div v-if="project.dev_framework">
        <h5>framework usati :</h5>
        <p>{{ project.dev_framework }}</p>
      </div>
      <div v-if="project.team">
        <h5>ho lavorato in team con  :</h5>
        <p>{{ project.team }}</p>
      </div>
      <div v-if="project.lvl_dif">
        <h5>livello di dificolta </h5>
        <p>{{ stars(project.lvl_dif) }}</p> 
        <!-- devo implementare la funzione che mi stampi le stelline -->
      </div>
      <!-- <ul>
     <li v-for="lvl in lvls">{{stars(project.lvl_dif)}}</li>
      </ul> -->
      <div v-if="project.link_git">
        <h5>GitHub link:</h5>
        <a v-bind:href=project.link_git ><img class="logogit" src="../../public/img/github-mark.png" alt="logo-github"></a>

        
      </div>
      
      <div v-if="project.type" class="mt-3">
        <h5>Category:</h5>
          <p>
            {{ project.type.workflow }}
          </p> 
      </div>
      <div v-if="project.language && project.language.length > 0">
        <h5>Language:</h5>
        <div>
          <span
            v-for="(language, index) in project.languages" :key="index" class="badge text-bg-info" >{{ language.name }}</span>

        </div>
      </div>
    </div>
</div>

  </section>

  </div>
  
</template>

<script>
import axios from "axios ";
import { store } from "../store";
export default {
  name: "SingleProject",
  data() {
    return {
      store,
      project: null,
      // ratings: project.lvl_dif,
    
      
    };
  },
  methods: {
    getProject() {
      console.log(this.$route);
      axios
        .get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`)
        .then((response) => {
          //console.log(response.data.results);
          if (response.data.success) {
            this.project = response.data.results;
          } else {
            this.$route.push({ name: "not-found" });
          }
        });
    },stars(rating) {
      let stars = '';
      for (let i = 0; i < 5; i++) {
        if (i < (rating/2.5) ) {
          stars += '★';
        } else {
          stars += '☆';
        }
      }
      return stars;
    }
  },
  
  mounted() {
    this.getProject();
  },
  
  }


;
</script>

<style lang="scss" scoped>
.gold{
  color:gold;
}
img{
  width: 500px;
}
.logogit{
  width:30px;
}
</style>
