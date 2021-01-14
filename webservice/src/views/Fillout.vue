<template>
    <div id="main">
        <Header id="Header" />
        <div id="container">

        </div>
        <Footer id="Footer" />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    components: {
        Header, Footer
    }
}

</script>

<style lang="scss" scoped>
#main {
    height: 100vh;
    width: 100vw;
    background: rgb(6,8,98);
    background: linear-gradient(180deg, rgb(90, 11, 255) 0%, rgb(254, 103, 203) 100%);
}

$headerHeight: 70px;
$footerHeight: 120px;

#Header {
    height: $headerHeight;
}

#container {
    height: calc(100% - #{$headerHeight} - #{$footerHeight});
}

#Footer {
    bottom: 0;
    height: $footerHeight;
    width: 100%;
}
</style>