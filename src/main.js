// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import CurrencyInfo from '@/components/CurrencyInfo'
import CurrencyList from '@/components/CurrencyList'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, CurrencyInfo, CurrencyList }
})

// https://files.coinmarketcap.com/static/img/coins/32x32/ethereum.png
// https://api.coinmarketcap.com/v1/ticker/?limit=100
/**
 * {
    "id": "bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": "1",
    "price_usd": "4309.77",
    "price_btc": "1.0",
    "24h_volume_usd": "1282620000.0",
    "market_cap_usd": "71553654608.0",
    "available_supply": "16602662.0",
    "total_supply": "16602662.0",
    "percent_change_1h": "-0.27",
    "percent_change_24h": "-2.3",
    "percent_change_7d": "9.95",
    "last_updated": "1507079952"
  }
 */
