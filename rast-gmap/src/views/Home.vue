<template>
  <div class="home">
    <template>
<gmap-map :center="center" :zoom="7" style="width: 100%; height: 500px">
      <gmap-cluster>
        <gmap-marker v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true" :draggable="true"
          @click="center=m.position"
          :key="index"
          ></gmap-marker>
      </gmap-cluster>
    </gmap-map>
</template>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import GmapCluster from 'vue2-google-maps/dist/components/cluster' // replace src with dist if you have Babel issues
Vue.component('GmapCluster', GmapCluster)
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCtsOk0uU5L9qaB7usCiLVHgWGuyAqWOCA',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})
Vue.component('gmap-cluster', VueGoogleMaps.Cluster);
export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    async sdfasfasfasf(){
       let res = await axios.get('http://192.168.1.197/ServicesAPI/getServices?typeQuery=5');
       console.log(res)
       let services = res.data.services
       for(let {points} of services){
         for(let {latitude, longitude} of points){
           
           this.markers.push({
             position: {
              lat: Number(latitude),
              lng: Number(longitude)
              }
            })
         }
       }
       
    }
  },
  created() {
    this.sdfasfasfasf();
  },
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
    /*
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({lat: 1.38, lng: 103.80})
    })*/
  },
  data(){
    return {
                center: {
            lat: 10.0,
            lng: 10.0
          },
          markers: []
    }
  }
});
</script>
