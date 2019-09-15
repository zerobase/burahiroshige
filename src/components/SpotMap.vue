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
    const spot = this.$dataset.spots[this.$route.params.id]
    if (spot.position) {
      const spotPos = L.latLng(spot.position[0], spot.position[1])
      const map = L.map('spot-map', {center: spotPos, zoom: 17})
        .addLayer(L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png'))
        .addLayer(L.marker(spotPos))
      navigator.geolocation.getCurrentPosition((location) => {
        const userCurPos = new L.LatLng(location.coords.latitude, location.coords.longitude)
        const myIcon = L.divIcon({
          className: 'spot-map-cur-pos-icon',
          html: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" version="1.1" viewBox="-12 -12 24 24"><circle r="9" style="stroke:#fff;stroke-width:3;fill:#2A93EE;fill-opacity:1;opacity:1;"></circle></svg>',
          iconSize: [24, 24]
        })
        map.addLayer(L.marker(userCurPos, {icon: myIcon}))
        map.addLayer(L.circle(userCurPos, location.accuracy, {
          color: '#136AEC', fillColor: '#136AEC', fillOpacity: 0.15, weight: 0}))
      })
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

<style>
.spot-map-cur-pos-icon circle {
  animation: spot-map-cur-pos-icon-throb 4s ease infinite;
}

@keyframes spot-map-cur-pos-icon-throb {
    0% { r: 9; stroke-width: 1; }
   50% { r: 7; stroke-width: 3; }
  100% { r: 9; stroke-width: 1; }
}
</style>
