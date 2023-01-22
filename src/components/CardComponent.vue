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
        class="myButton"
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
.myButton {
	box-shadow: 3px 4px 0px 0px #276873;
	background:linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
	background-color:#599bb3;
	border-radius:18px;
	border:1px solid #29668f;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
}
.myButton:hover {
	background:linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
	background-color:#408c99;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>
