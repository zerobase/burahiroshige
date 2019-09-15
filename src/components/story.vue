<template>
  <main>
    <h1 class="story-title">{{ story.title }}</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="ストーリー" active>
        <figure class="story-figure">
          <b-img class="story-figure-image" v-bind:src=story.image fluid alt="カバーアート画像"></b-img>
          <figcaption class="story-figure-caption">{{ story.imageCaption }} <small>(Credit: {{ story.imageCredit }})</small></figcaption>
        </figure>
        <p class="story-description text-body">{{ story.description }}</p>
        <ul class="spot-list">
          <li class="spot-list-item" v-for="spot in spots" v-bind:key="spot.id">
            <router-link v-bind:to="{ name : 'spot', params : { id: spot.id }}">
              <b-img class="spot-thumbnail" thumbnail v-bind:src=spot.image alt=""></b-img>
              <p class="spot-title">{{ spot.title }}</p>
              <p class="spot-lead">{{ spot.lead }}</p>
            </router-link>
          </li>
        </ul>
      </b-tab>
      <b-tab title="マップ">
        <p>マップ</p>
      </b-tab>
    </b-tabs>
  </main>
</template>

<script>
import dataset from '../dataset'
import _ from 'lodash'

export default {
  data () {
    var storyID = this.$route.params.id
    var story = dataset.stories[storyID]
    var spots = _.filter(dataset.spots, (spot) => spot.storyID === storyID)
    return {
      story: story,
      spots: spots
    }
  }
}
</script>

<style scoped>
main {
  margin: 10px;
}

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
  font-size: 16px;
}

.spot-lead {
  font-size: 13px;
}
</style>
