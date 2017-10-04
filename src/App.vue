<template>
  <div id="app">
    <img src="https://fthmb.tqn.com/7x-FiY9Xh-nlYGOS2pYLorHtMRQ=/735x0/cryptocoins-56a6a4595f9b58b7d0e41b00.jpg">
    <h1>Cryptocurrencies</h1>
    <p>A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange using cryptography to secure the transactions and to control the creation of additional units of the currency.</p>
    <p>Cryptocurrencies are classified as a subset of digital currencies and are also classified as a subset of alternative currencies and virtual currencies.</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 24px;
}

img {
  width: 20%;
}
</style>
