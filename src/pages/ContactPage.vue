<template>
    <div id="contact" class="container">
       <div class="d-flex p-5">
        <div>
            <img src="../../public/img/melogo.jpeg" alt="my avatar">
        </div>
        <div class="contacts ms-5">
            <h3>I miei contatti </h3>
            <ul>

                <li v-for="(social,index ) in socials" :key="index">
             
                <a  class="gold" :href="social.url"> {{ social.site }}</a>

                </li>
            </ul>
            
        </div>
        
       </div>
    </div>
        
    
</template>

<script>
    export default {
        name:'ContactPage',
        data(){
            return{
                socials:[
                    {
                        site:"linkedin",
                        url:"https://www.linkedin.com/in/alessio-bonadonna-714b38251/",

                    },
                    {
                        site:"github",
                        url:"https://github.com/AlessioBonadonna"
                    }
                ]
            }
        }
    }
</script>


<style lang="scss" scoped>
.box-img{
   .avatar{
    border-radius: 100%;
    width:150px;
   }
}
</style>