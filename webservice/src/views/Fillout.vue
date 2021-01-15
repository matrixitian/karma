<template>
    <div id="main">
        <Header id="Header" />
        <div id="container">
            <keep-alive>
                <component :is="mainComponent"></component>
            </keep-alive>
        </div>
        <Footer id="Footer" :curPage="currentPage" />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import * as Pages from '@/components/pages'

export default {
    created() {
        this.$store.subscribe(async(mutation) => {
            if (mutation.type === 'requestNextPage') {
                this.currentPage++
                this.switchPage()
            }
        })
    },
    components: {
        Header, Footer, ...Pages
    },
    data() {
        return {
            currentPage: 1,
            mainComponent: 'Page1'
        }
    },
    methods: {
        switchPage() {
            this.mainComponent = `Page${this.currentPage}`
        }
    }
}

</script>

<style lang="scss" scoped>
#main {
    height: 100vh;
    width: 100vw;
    // background: rgb(49, 51, 158);
    // background: linear-gradient(130deg, rgb(90, 11, 255) 0%, rgb(254, 103, 203) 100%);
    background: rgb(49, 51, 158);
    background: linear-gradient(130deg, rgb(69, 49, 158) 0%, rgb(103, 161, 254) 100%);
}

$headerHeight: 70px;
$footerHeight: 120px;

#Header {
    height: $headerHeight;
}

#container {
    height: calc(100% - #{$headerHeight} - #{$footerHeight});
    // background-color: rgba(0, 0, 0, 0.4);
}

#Footer {
    bottom: 0;
    height: $footerHeight;
    width: 100%;
}
</style>