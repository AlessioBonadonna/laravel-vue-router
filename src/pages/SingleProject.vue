<template>
    <section v-if="project">
        <h1>{{ project.name_proj }}</h1>
        <img :src="`${store.imagBasePath}${project.cover_image}`" class="card-img-top" :alt="project.name_proj">
        <p>{{ project.name }}</p>
        <div v-if="project.type">
            <h5>Category: {{ project.category.workflow}}</h5>
            
        </div>
        <div v-if="project.language && project.language.length > 0">
    <h5>language</h5>
    <div>
        <span v-for="(language,index) in post.languages" :key="index" class="badge text-bg-info">{{ languages.name }}</span>
    </div>
   </div>
   </section>
    

</template>

<script>
import axios from 'axios ';
import {store} from '../store';
    export default {
        name:'SingleProject',
        data(){
           
           return{

            store,
            project:null,
        }
    },
    methods: {
        getProject(){
            console.log(this.$route);
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((response=>{
                //console.log(response.data.results);
                if(response.data.success){
                    this.project=response.data.results;
                }else{
                    this.$route.push({name: 'not-found'})
                }
            }));
        }
    },
    mounted(){
        this.getProject();
    }
    }
</script>

<style lang="scss" scoped>

</style>