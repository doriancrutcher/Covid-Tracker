// Id Collector
let countryDom=document.getElementById('countryName');
let popDom=document.getElementById('populationNum');
let timeDom=document.getElementById('timeUpdate');
let deathDom=document.getElementById('deathCount');
let caseDom=document.getElementById('caseCount');
let recoverDom=document.getElementById('recoveredCount');


// window onload funtion
window.onload=function(){
    console.log('hi')
    getCovidInfo();
   
    
}

// Covid Information 
function getCovidInfo(){
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/225')
    .then(function(resp){return resp.json()})
    .then(function(data){ 
        let population=data.location.country_population;
        let update=data.location.last_updated;
        let confirmedCases=data.location.latest.confirmed;
        let deaths=data.location.latest.deaths
        console.log(data);
        
        countryDom.innerHTML=data.location.country;
        popDom.innerHTML=population;
        timeDom.innerHTML=update.slice(0,10);
        deathDom.innerHTML=deaths;
        caseDom.innerHTML=confirmedCases;
        recoverDom.innerHTML=data.location.latest.recovered;
        chartStuff(deaths);
        
  
        
        
        
    })
    .catch(function(){
        console.log('error');
    })
    
    
}

function chartStuff(deaths){
    // getting DOM stuff
    let jancount=0
    let febcount=jancount+10;
    let marchcount=febcount+32+51+517+2897;
    let aprilcount=8893+14287+14077+10760;
    let Maycount=deaths
    const ThisChart=document.getElementById("myChart");
    var Line= new Chart(ThisChart,{
        type:'line',
         data: {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
                {
                    label: "Covid Death Count",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75, 192, 192, 1)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHitRadius: 10,
                    maintainaspectratio:false,
                    responsive:true,
                    data: [jancount,febcount,marchcount,aprilcount,Maycount],
                }
            ]}
    })
    console.log(Chart)
}

//