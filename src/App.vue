<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <main>
      <router-view></router-view>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
},
};
</script>

<style lang="scss" >
main{
  height: 100%;
  background: rgb(96, 130, 146);
  background: linear-gradient(
    180deg,
    rgba(96, 130, 146, 1) 0%,
    rgba(76, 86, 99, 1) 100%
  );
}
.gold{
  color:gold;
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
