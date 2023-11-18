axios.get('http://api.aladhan.com/v1/timingsByCity?country=MA&city=Rabat&method=4')
  .then(function (response) {
    // handle success
    console.log(response.data.data);
    let datenow = response.data.data.date.readable
    document.getElementById('nowdate').innerText = datenow

    console.log(response.data.data.timings.Fajr)
    const timings = response.data.data.timings
    fillTime("fajr",timings.Fajr)
    fillTime("dohr",timings.Dhuhr)
    fillTime("asr",timings.Asr)
    fillTime("mghrib",timings.Maghrib)
    fillTime("asha",timings.Isha)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  
  function fillTime(id,time){
    document.getElementById(id).innerText =time
  }
