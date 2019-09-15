<template>
  <div id="spot-map"></div>
</template>

<script>
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
    spot: Object
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
#spot-map {
  height: 50vh;
  margin-bottom: 50px;
}
</style>
