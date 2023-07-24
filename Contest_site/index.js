let container = document.getElementById("container");

let url = "https://kontests.net/api/v1/all"

let response = fetch(url);

let pics = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"];

response.then((value) =>{
        return value.json();
}).then((contests) =>{
        console.log(contests);
        
        iHTML = ""
        for(item in contests)
        {
                console.log(contests[item])

                iHTML += 
                `
                <div class = "box">
                <img src="../contest_image/${pics[Math.floor(Math.random() * 24)]}.jpeg" alt="img">
                <h4>Name:  ${contests[item].name}</h4>
                <p>
                    Site:   ${contests[item].site} <br>
                    Start Time :   ${contests[item].start_time} <br>
                    End Time :   ${contests[item].end_time} <br>
                    In next 24 hours :   ${contests[item].in_24_hours} <br>
                    <h3 id = "btn"><a href="${contests[item].url}" target ="_blank">Visit contest</a></h3> 
                </p>
                </div>
                `
                }
                container. innerHTML = iHTML;
                
        }) 
        