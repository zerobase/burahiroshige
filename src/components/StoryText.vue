<template>
  <div class="story-text-content">
    <h1 class="story-title">{{ story.title }}</h1>
    <figure class="story-figure">
      <b-img class="story-figure-image" v-bind:src=story.image fluid alt="カバーアート画像"></b-img>
      <figcaption class="story-figure-caption">{{ story.imageCaption }} <small>(Credit: {{ story.imageCredit }})</small></figcaption>
    </figure>
    <p class="story-description text-body">{{ story.description }}</p>
    <ul class="spot-list">
      <li class="spot-list-item" v-for="spot in spots" v-bind:key="spot.id">
        <router-link v-bind:to="{ name : 'spot', params : { id: spot.id }}">
          <div class="spot-content collection">
            <h1 class="spot-title">{{ spot.title }}</h1>
            <p class="spot-lead">{{ spot.lead }}</p>
            <SpotImage v-bind:image="spot.image"></SpotImage>
            <p class="spot-description">{{ spot.description }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import SpotImage from '@/components/SpotImage'

export default {
  components: {
    SpotImage
  },
  props: {
    'story': Object,
    'spots': Array
  }
}
</script>

<style scoped>
.story-title {
  font-size: 24px;
  margin: 10px 0;
}

.story-figure-image {
  margin: 10px 0;
  height: 200px;
}

.story-figure-caption {
  color: #6c757d;
}

.spot-list {
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
}

.spot-list-item {
  list-style: none;
  flex-basis: 300px;
  padding: 20px;
}

.spot-title {
  padding-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
}

.spot-lead {
  font-size: 16px;
}
</style>
