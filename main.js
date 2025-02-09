document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('#teamOne').value
  const otherChoice = document.querySelector('#teamTwo').value
  const year = document.querySelector('#yearOfSeason').value
  console.log(choice)
  console.log(otherChoice)
  const url = `https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=${choice}_vs_${otherChoice}&s=${year}-${Number(year) + 1}`
    console.log(url)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        // if(data.media_type === 'image'){
        //     document.querySelector('img').src = data.hdurl
        // }else if(data.media_type === 'video'){
        //     document.querySelector('iframe').src = data.url
        // }
        
        document.querySelector('h2').innerText = data.event[0].strEvent
        document.querySelector('h3').innerText = data.event[0].strFilename
        document.querySelector('#leagueBadge').src = data.event[0].strLeagueBadge
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}