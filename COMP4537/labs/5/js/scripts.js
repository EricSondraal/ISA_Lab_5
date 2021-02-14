function writeRequest(){
    const xhttp= new XMLHttpRequest();

    //input fields
    let nameTextbox = document.getElementById("name-textbox");
    let scoreTextbox = document.getElementById("score-textbox");

    //get the user's input
    let userName = nameTextbox.value;
    let userScore = scoreTextbox.value;

    //check for an invalid score
    let userScoreInt = parseInt(userScore);
    if(isFinite(userScoreInt)){
        //create the get message over AJAX
        const str = "?name="+userName
            +  "&age="+userScoreInt;
        xhttp.open("GET", "https://rishamjo.space/COMP4537/labs/5/readFile/writeDB.html"+str,true);
        xhttp.send();
        //update on our request
        xhttp.onreadystatechange = function(){
            //when our request is done
            if((this.readyState==4)&&(this.status==200)){
                //tell the user the db request has been fulfilled
                document.getElementById("db-update-text").innerHTML=userName +":"+ userScoreInt + " was stored in the DB";
            }
        };
    }
}



function readRequest(){
    const xhttp= new XMLHttpRequest();

    //create the get message over AJAX
    xhttp.open("GET", "https://rishamjo.space/COMP4537/labs/5/readFile/readDB.html",true);
    xhttp.send();
    //update on our request
    xhttp.onreadystatechange = function(){
        //when our request is done
        if((this.readyState==4)&&(this.status==200)){
            //convert string to json object
            let serverResponce = JSON.parse(this.responseText);

            //display the json object on the page
            let dbHtml = "";
            for (let key in serverResponce) {
                dbHtml += "<div>"+key + ":" + serverResponce[key]+"</div>";
            }


            document.getElementById("read-div").innerHTML=dbHtml;
        }
    };
}