<template>
  <div class="card mx-2  ">
    <div class="box-img">
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
    <div class="card-body">
      <h5 class="card-title">{{ project.name_proj }}</h5>
      <p class="card-text">
        {{ truncateContent(project.description) }}
      </p>
      <router-link
        class="btn btn-success"
        :to="{ name: 'project-single', params: { slug: project.slug } }"
      >
        Vedi il post
      </router-link>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CardComponent",
  props: ["project"],
  data() {
    return {
      store,
      contentMaxLen: 100,
    };
  },
  methods: {
    truncateContent(text) {
      if (text.length > this.contentMaxLen) {
        return text.substr(0, this.contentMaxLen) + "...";
      }
      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.card{
  max-height: 800px;
  height: 600px;
  
  .box-img{
    height: 350px;
    overflow:hidden;

    .img-proj{
     
    
    }
  }

}
</style>
