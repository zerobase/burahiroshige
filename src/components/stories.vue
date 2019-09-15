<template>
  <div>
    <p class="lead-text">古地図を見ながら街歩き。足で読む歴史。</p>
    <ul class="story-list">
      <li class="story-list-item" v-for="story in stories" v-bind:key="story.id">
        <router-link class="story-link" v-bind:to="{ name : 'story', params : { id: story.id }}">
          <b-img class="story-thumbnail" thumbnail v-bind:src=story.image alt=""></b-img>
          <p class="story-title">{{ story.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import dataset from '../dataset'

export default {
  data () {
    return {
      stories: dataset.stories
    }
  }
}
</script>

<style scoped>
.lead-text {
  margin: 15px;
}

.story-list {
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
}

.story-list-item {
  list-style: none;
  flex-basis: 300px;
  padding: 20px;
}

.story-title {
  padding-top: 10px;
}
</style>
