<template>
  <div class="divide-y divide-gray-400 mx-8">
    <div class="my-10">
      <p class="text-4xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
        Последние новости ФТК</p>

      <p class="mt-2 text-gray-500 text-xl">Не выходя из дома!</p>
    </div>

    <div class="py-3">
      <div class="text-center text-2lg text-gray-500 mt-6" v-if="$fetchState.pending">Загрузка...</div>
      <div class="grid grid-cols-2">
        <News v-for="current_news in news" :key="current_news.id" :news="current_news"></News>
      </div>
    </div>
  </div>
</template>

<script>
import News from "../../components/news/News";
export default {
  data() {
    return {
      news: []
    }
  },
  components: {
    News
  },
  async fetch() {
    this.news = await this.$http.$get(
      `http://localhost:8000/api/news`
    )
  }
}
</script>

<style scoped>

</style>
