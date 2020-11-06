<template>
    <div class="min-h-screen flex flex-col">
        <Header></Header>

        <main class="mb-auto">
            <ThingsModal></ThingsModal>
            <Nuxt/>
        </main>

        <Footer></Footer>
    </div>
</template>

<script>
import Header from "../components/global/Header";
import Footer from "../components/global/Footer/Footer";

import ThingsModal from "../components/global/Footer/ThingsModal";

export default {
    components: {Footer, Header, ThingsModal},
    head: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://rsms.me/inter/inter.css'
            }
        ]
    }
}
</script>
