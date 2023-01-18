<template>
    <div>
        <h1>Lista dei post</h1>
    <div class="row">
        <div>
           
            

        </div>
            <div class="col-12 col-md-4" v-for="(project, index) in projects" :key="index">
                <div class="card" style="width: 18rem;">
                    
                    <img :src="`${store.imagBasePath}${project.cover_image}`" class="card-img-top" :alt="project.name_proj">
                    <div class="card-body">
                        <h5 class="card-title">{{project.name_proj}}</h5>
                        <p class="card-text">{{ truncateContent(project.description) }}</p>
                        <router-link class="btn btn-primary" :to="{name: 'project-single', params:{slug: project.slug}}">
                        Vedi il post
                        </router-link>                    
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios' ;
import { store } from '../store'
    export default {
        name:'ProjectsPage',
        data(){
            return {
                store,
                projects: [],
                currentPage: 1,
                lastPage: null,
                total: 0,
                contentMaxLen: 100
            }
        },
        methods:{
            getPosts(pagenum){
                axios.get(`${this.store.apiBaseUrl}/projects`,{params:{
                   page: pagenum 
                }}).then((response)=>{
                    //console.log(response.data.results);
                    
                   this.projects = response.data.results;
                   console.log(this.projects)
                   console.log(response)
                   this.currentPage = response.data.results.current_page;
                  this.lastPage = response.data.results.last_page;
                   this.total = response.data.results.total;
                })
            },
           truncateContent(text){
            if(text.length > this.contentMaxLen){
                return text.substr(0,this.contentMaxLen) + '...';
            }
            return text;
           }
        
        },
        mounted(){
            this.getPosts(1);
        }
    }
</script>

<style lang="scss" scoped>

</style>