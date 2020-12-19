// var app = new Vue({
//     el: "#app",
//     data:{
//       message: "Vue.js"
//     }
//   })
// var example1 = new Vue({
//   el: '#send',
//   data: {
//     counter: 0
//   },
//   methods: {
//     count: function(event){
//       alert('Hello' + this.name)
//       if(event){
//         alert(event.target.tagName)
//       }
//     }
//   }
// })
var main = new Vue({
  el: "#form",
  data:{
    message: "hello",
  },
  methods: {
    send: function(event){
      alert('住所は' + this.address);
      axios.get('/api/?q=東京')
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