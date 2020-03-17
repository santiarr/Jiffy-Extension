function hello() {
    document.getElementById('test').innerHTML="Success!"
    console.log("Success!")
  }
  
  document.getElementById('logo').addEventListener('click', hello);