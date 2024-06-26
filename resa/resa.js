
function AddData() {
    console.log("Add Data");
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const pp = document.getElementById("pass").value;
    const title = document.getElementById("title").value;
    const link = document.getElementById("link").value;
    const desc = document.getElementById("desc").value;
    document.getElementById("errror").textContent = "";

    // Make an AJAX request to fetch the data
    fetch("https://senior-a261.onrender.com/data")
    .then(response => response.json())
    .then(data => {
        // Loop through the data and add rows to the table
   
        const datta = [];
            data.forEach(item => {
            datta.push([item.fname,item.lname,item.type,item.a,item.c])
            });
        const user = isUser(datta,fname,lname,pp);
        if(user != -1){
            if(user == 1){
                document.getElementById("errror").textContent = "User account has not been activated please vistit:";
                return;
            }
            if(user == 2){
                document.getElementById("errror").textContent = "Listing resource privilege revoked";
                return;
            }
            if(user == 3){
                document.getElementById("errror").textContent = "Password is wrong";
                return;
            }
            if(user == 4){
                document.getElementById("errror").textContent = "User dosent exsist";
                return;
            }
        }else{

            let array = [];
            const requestBody = {
                fname: fname,
                lname: lname,
                type:"resour",
                a:  title ,
                b: link,
                c: desc,
                d: "",
                e: ""
            };
            array.push(requestBody);
            fetch("https://senior-a261.onrender.com/data",
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(array)
                }
            ) 
            .then(response => {
                console.log(response);
            })
            .catch(response => {
                console.error(response);
            })
            window.location.href = '../home/home.html' 
        }
    })
    .catch(error => {
    console.error('Error fetching data:', error);
    });
    
    }
    function isUser(datta,fname,lname,pass){
        for(i = 0; i < datta.length;i++){
            if(datta[i][0] == fname && datta[i][1]  == lname && datta[i][2] == "cred"){
                if(datta[i][3] == "password"){
                    return 1;
                }
                if(datta[i][4] == "false"){
                    return 2;
                }
                if(datta[i][3] != pass){
                    return 3;
                }
                return -1;
            }
        }
        return 4;
    }
    document.getElementById("sname").addEventListener("click", AddData);
    //&& datta[i][3] == "password" && datta[i][3] == pass && datta[i][4] == true