<template>
  <main>
    <nav class="spot-story-title"><router-link v-bind:to="{ name : 'story', params : { id: story.id }}">{{ story.title }}</router-link></nav>
    <SpotContent class="single" v-bind:spot=spot></SpotContent>
    <div id="spot-map"></div>
  </main>
</template>

<script>
import SpotContent from '@/components/SpotContent'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default {
  props: {
    id: Number
  },
  components: {
    SpotContent
  },
  data () {
    var spot = this.$dataset.spots[this.$route.params.id]
    return {
      spot: spot,
      story: this.$dataset.stories[spot.storyID]
    }
  },
  mounted () {
    var spot = this.$dataset.spots[this.$route.params.id]
    if (spot.position) {
      const pos = L.latLng(spot.position[0], spot.position[1])
      L.map(
        'spot-map',
        {
          center: pos,
          zoom: 17
        }
      ).addLayer(
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
      ).addLayer(L.marker(pos))
    }
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

#spot-map {
  height: 50vh;
  margin-bottom: 50px;
}
</style>
