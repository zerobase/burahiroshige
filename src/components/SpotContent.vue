<template>
  <div class="spot-content">
    <h1 class="spot-title">{{ spot.title }}</h1>
    <p class="spot-lead">{{ spot.lead }}</p>
    <figure class="spot-figure" v-if="spot.image">
      <b-img class="spot-figure-image" v-bind:src=spot.image.url fluid-grow alt="スポット画像"></b-img>
      <figcaption v-if="spot.image.caption" class="spot-figure-caption">
          {{ spot.image.caption }}
          <small v-if="spot.image.credit">(Credit: {{ spot.image.credit }})</small>
        </figcaption>
    </figure>
    <p class="spot-description">{{ spot.description }}</p>
  </div>
</template>

<script>
import dataset from '../dataset'

export default {
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
