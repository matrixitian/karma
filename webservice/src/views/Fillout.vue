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
    background-color: black !important;
}

$headerHeight: 70px;
$footerHeight: 50px;

#Header {
    height: $headerHeight;
    background-color: red;
}

#container {
    height: calc(100% - #{$headerHeight} - #{$footerHeight});
    background-color: green;
}

#Footer {
    bottom: 0;
    height: $footerHeight;
    width: 100%;
    background-color: blue !important;
}
</style>