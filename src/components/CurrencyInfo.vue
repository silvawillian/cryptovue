<template>
  <tr>
    <td width="10">{{ currency.rank }}</td>
    <td><img :src="imageLink(currency.id)"/></td>
    <td>{{ currency.symbol }}</td>
    <td>{{ currency.name }}</td>
    <td>{{ currency.price_usd }}</td>
    <td>{{ currency.price_btc }}</td>
  </tr>
</template>

<script>
export default {
  props: ['currency'],
  data () {
    return {
      currency: this.currency
    }
  },
  methods: {
    imageLink
  }
}

function imageLink (id) {
  return 'https://files.coinmarketcap.com/static/img/coins/32x32/' + id + '.png'
}
</script>

<style>
tr {
  text-align: center
}
</style>
