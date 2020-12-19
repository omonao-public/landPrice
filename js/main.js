var main = new Vue({
  el: "#form",
  data:{
    message: "hello",
  },
  methods: {
    send: function(event){
      // alert('住所は' + this.address);
      axios.get('https://www.geocoding.jp/api/?q=%E5%9F%BC%E7%8E%89%E7%9C%8C%E5%8C%97%E6%9C%AC%E5%B8%82')
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