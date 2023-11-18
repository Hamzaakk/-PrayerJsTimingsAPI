     //  "Errachidia","Fès", "Meknès","Al Hoceïma"
        let cities = [ 
            {
                name : "Rabat",
                isocode : "Rabat"
            },
            {
                
                name : "Casablanca",
                isocode : "Casablanca"
            },
            {
                name : "Errachidia",
                isocode : "Errachidia"
            },
            {
                name : "Fès",
                isocode : "Fès"
            },
            {
                name : "Al Hoceïma",
                isocode : "Al Hoceïma"
            }
    
         ]
       
        for(let city of cities)
        {
       
            const content = `
            <option >${city.name}</option>
         `
        //  console.log(content)
        document.getElementById('select').innerHTML += content
        }
       
      function timeOfpray(cityname)
      {
        let params = {
        country : "MA",
        city : cityname,
        method : 3
       }
        axios.get('http://api.aladhan.com/v1/timingsByCity',{
            params : params
        })
            .then(function (response) {
                // handle success
                   console.log(response.data.data)
                   let datenow = response.data.data.date.readable
                  document.getElementById('nowdate').innerText = datenow
                  const timings = response.data.data.timings
                    fillTime("fajr",timings.Fajr)
                    fillTime("dohr",timings.Dhuhr)
                    fillTime("asr",timings.Asr)
                    fillTime("sunri",timings.Sunrise)
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

      }

  onload = () =>{
            let select = document.getElementById('select')
             select.addEventListener('change', function() {
                document.getElementById('headcity').innerText= select.value
                let lastcity = ""
                for(let city of cities)
                {
                    if(city.name == select.value){
                        lastcity = city.isocode
                         console.log(lastcity)
                         timeOfpray(city.isocode);
                    }
                      
                }
             })
        }
        function fillTime(id,time){
    document.getElementById(id).innerText =time
  }
        timeOfpray("Rabat");
       
