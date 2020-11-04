<template>
  <div>
    <Header></Header>

    <Nuxt/>
  </div>
</template>

<script>
import Header from "../components/global/Header";
export default {
    components: {Header},
    head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://rsms.me/inter/inter.css'
      }
    ]
  }
}
</script>
