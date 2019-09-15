<template>
  <div class="spot-content">
    <h1 class="spot-title">{{ spot.title }}</h1>
    <p class="spot-lead">{{ spot.lead }}</p>
    <SpotImage v-bind:image="spot.image"></SpotImage>
    <p class="spot-description">{{ spot.description }}</p>
  </div>
</template>

<script>
import SpotImage from '@/components/SpotImage'

export default {
  components: {
    SpotImage
  },
  props: {
    spot: Object
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
