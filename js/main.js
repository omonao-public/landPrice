var main = new Vue({
  el: "#form",
  data:{
    message: "hello",
  },
  methods: {
    send: function(event){
      // alert('住所は' + this.address);
      axios.get('https://geocoding.jp/api?q=埼玉')
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        // skip
      });
        }
  }
})