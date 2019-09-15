<template>
  <div class="spot-content">
    <h1 class="spot-title">{{ spot.title }}</h1>
    <p class="spot-lead">{{ spot.lead }}</p>
    <SpotImage v-bind:image="spot.image"></SpotImage>
    <p class="spot-description">{{ spot.description }}</p>
    <div id="spot-map"></div>
  </div>
</template>

<script>
import SpotImage from '@/components/SpotImage'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
  components: {
    SpotImage
  },
  props: {
    spot: Object
  },
  mounted () {
      L.map( 'app', { center: L.latLng( 35.6825, 139.752778 ), zoom: 15 } ).addLayer(
          L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' )
        )
  }
}
</script>

<style scoped>
main {
  margin: 10px;
}

.spot-story-title {
  font-size: 18px;
  margin: 10px 0;
}

.spot-title {
  font-size: 24px;
  margin: 20px 0;
}

.spot-lead {
  font-size: 16px;
}

.spot-figure-image {
  margin: 30px 0;
  object-fit: contain;
  max-height: 40vh;
}

.spot-figure-caption {
  color: #6c757d;
}
</style>
