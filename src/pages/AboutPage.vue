<template>
  <div id="contact" class="container">
    <div class="p-3">
      <div class="box-img text-center">
        <img class="avatar" src="../../public/img/melogo.jpeg" alt="myavatar" />
      </div>
      <div class="text-center gold">
        <h1 class="">Chi sono</h1>
        <p>
          <q>
            Tutto ciò che farai nella vita lascerà una traccia: impegnati per
            avere piena coscienza di ogni tua azione.</q>
          <br />
          <strong>Pablo Coelho</strong>
        </p>
      </div>
    </div>
    <div class="d-flex">
      <div class="d-flex">
        <div class="mycard m-5 " v-for="(item, index) in servizi" :key="index">
          <div class="card">
            <div class="card-img text-center p-3">
              <img class="" :src="item.pathimg" :alt="item.servizio" />
            </div>
            <div class="card-desc mt-3 text-center p-4">
              <h3>{{ item.servizio }}</h3>
              <p>{{truncatetext( item.desc_serv )}}</p> 
              <router-link :to="{name: item.routerName}" class="myButton">
                {{ item.btn }}
            </router-link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",

  data() {
    return {
      servizi: [
        {
          pathimg: "../../public/img/dev.png",
          servizio: "Developer",
          desc_serv:"Come sviluppatore web, offro servizi di design, sviluppo e manutenzione di siti web per aziende e privati. Utilizzo le ultime tecnologie web, come HTML5, CSS3, JavaScript e PHP, per creare siti web dinamici e funzionali che offrono agli utenti un'esperienza di navigazione piacevole. Creo anche siti web reattivi che si adattano automaticamente a vari dispositivi come desktop, laptop, tablet e smartphone. Inoltre, fornisco servizi di ottimizzazione del motore di ricerca per aiutare il sito web a raggiungere una posizione migliore nei risultati di ricerca. Offro anche servizi di manutenzione, come la risoluzione di problemi di compatibilità, aggiornamenti di sicurezza e risoluzione di bug.",
          btn:"vai ai progetti",
          routerName:"projects"
        },
        {
          pathimg: "../../public/img/photo.png",
          servizio: "Fotografo",
          desc_serv:"Come fotografo, offro servizi di fotografia per aziende e privati. Utilizzo l'ultima tecnologia e attrezzature per catturare immagini di alta qualità. Offro servizi di fotografia di matrimoni, eventi, ritratti, fotografia di prodotti, fotografia di interni e di paesaggi. Lavoro con i clienti per capire le loro esigenze e fornire lavori personalizzati in base alle loro richieste. Offro anche servizi di post-produzione, come la correzione dei colori, l'aggiunta di effetti, l'editing di testo e l'aggiunta di filtri. Utilizzo la mia esperienza e competenze per creare le migliori immagini possibili.",
          btn:"vai alle foto",
          routerName:"not-found",
        },
      ],
      contentMaxLen:100,
    };
  },
  methods: {
    truncatetext(text) {
      if (text.length > this.contentMaxLen) {
        return text.substr(0, this.contentMaxLen) + "...";
      }
      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.box-img {
  border-radius: 100%;

  .avatar {
    border-radius: 100%;
    width: 150px;
    border: 5px solid black;
  }
}
.gold {
  text-shadow: 2px 2px #160707c7;
}
.card-img {
  img {
    width: 150px;
  }
}




</style>
