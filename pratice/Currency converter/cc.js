document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currency-convertor").addEventListener("submit",  async (event) => {
      event.preventDefault();
 
      const { target : {from , to , amount}} = event


      let myHeaders = new Headers();
      myHeaders.append("apikey", "Ly8hVRSboJoiPqEf0JkVUcEEBYj78Dz0");
      var requestOptions = {
        method: 'GET',
        headers: myHeaders }

      await fetch(`https://api.apilayer.com/currency_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`,
      requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      
    
      });




});
  
