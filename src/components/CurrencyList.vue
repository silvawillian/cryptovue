<template>
  <div id="currency-list">
    <table class="ui celled padded table">
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Logo</th>
          <th>Symbol</th>
          <th>Coin</th>
          <th>Price (USD)</th>
          <th>Price (BTC)</th>
        </tr>
      </thead>
      <tbody>
        <currency-info v-for="currency in data" v-bind:key="currency.rank" :currency="currency"></currency-info>
      </tbody>
    </table>
  </div>
</template>

<script>
import CurrencyInfo from './CurrencyInfo'
import axios from 'axios'

export default {
  components: {
    CurrencyInfo
  },
  data () {
    return {
      data: ''
    }
  },
  methods: {
    fetchData
  },
  mounted () {
    this.fetchData()
  }
}

function fetchData () {
  axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=150').then(response => {
    this.data = response.data
    console.log(this.data)
  })
  .catch(err => {
    console.error(err)
  })
}
</script>

<style>
#currency-list {
  padding-left: 24px;
  padding-right: 24px;
}
</style>
