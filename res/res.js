fetch("https://senior-a261.onrender.com/data")
    .then(response => response.json())
    .then(data => {
        // Loop through the data and add rows to the table
            data.forEach(item => {
            if(item.type == "resour")
            {
                const theDiv = document.getElementById("resources");
                const resour = document.createElement('div');
                const title = document.createElement('h1');
                const des = document.createElement('h2');
                const link = document.createElement('a');
                title.textContent = item.a;
                link.textContent = item.b;
                link.href = item.b;
                link.setAttribute("target","_blank");
                des.textContent = item.c;
                resour.className = "resource";
                resour.appendChild(title);
                resour.appendChild(link);
                resour.appendChild(des);
                theDiv.append(resour);
            }
            
            });
    })
    .catch(error => {
        console.error(error);
    });