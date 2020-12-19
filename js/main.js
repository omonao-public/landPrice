var main = new Vue({
  el: "#form",
  data:{
    message: "hello",
  },
  methods: {
    send: function(event){
      // alert('住所は' + this.address);
      axios.get('https://www.geocoding.jp/api/?q=埼玉県さいたま市')
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