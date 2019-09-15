<template>
  <div class="spot-image">
    <figure class="spot-figure" v-if="image">
      <a v-bind:href=image.url>
        <b-img class="spot-figure-image" v-bind:src=image.url fluid-grow alt="スポット画像"></b-img>
      </a>
      <figcaption v-if="image.caption" class="spot-figure-caption">
          {{ image.caption }}
          <small v-if="image.credit">(Credit: {{ image.credit }})</small>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    image: Object
  }
}
</script>

<style scoped>
.spot-figure-image {
  margin: 30px 0;
  object-fit: contain;
  max-height: 80vh;
}

.spot-content.collection .spot-figure-image {
  object-fit: contain;
  max-height: 50vh;
}

.spot-figure-caption {
  color: #6c757d;
}
</style>
