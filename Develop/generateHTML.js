function generateHTML(managerArr, enginArr, internArr) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Page</title>
    </head>
        <style>
            .card {
                    padding: 20px;
                    border-radius: 6px;
                    margin: 20px;
                    }
            .manage {
                background-color: rgba(51, 255, 0, 0.849);
                color: black;
            }
            .engine {
                background-color: rgba(0, 247, 255, 0.856);
                color:black;
            }
            .intern {
                background-color: rgba(159, 109, 216, 0.856);
                color:black;
            }
            .col {
                flex: 1;
                text-align: center;
                float:left;
                }
            body {
                background-color:#aa9e9e;
            }
            header {
                background-color:#883043;
                color:white;
                padding:20px;
                text-align:center;
                font-size: 25px;
            }
            footer {
                background-color:#883043;
                color:white;
                border-top:5px;
                border-top-color: #aa9e9e;
                padding:20px;
                text-align: center;
                position: relative;
                margin-top:700px;
            }
             a:hover {
                background-color:#aa9e9e;
                font-weight: bold;
            }
            .wrapper {
                min-height: 100%;
                grid-template-rows: auto 1fr auto; }

            @media screen and (max-width: 640px) {
                .wrapper{
                    display:grid;
                }
                footer{
                    margin-top:0px;
            }
            }

            @media screen and (min-width: 641px) and (max-width: 768px) {
                .wrapper{
                    display:grid;
                }
                footer{
                    margin-top:0px;
                }
            }

            @media screen and (min-width: 769px) and (max-width: 980px) {
                .wrapper{
                    display:grid;
                }
                footer{
                    margin-top:0px;
                }
            }
            
    
        </style>
    <body>
    <div class="wrapper">
    <header>Presenting Your Team!</header>
    ${managerArr
    .map(member =>
        `
    <div class="card manage col">
    <h3>Team Manager</h3>
    <h4>Name: ${member.name} </h4>
    <h5>Position: Manager</h5>
    <h5>ID: ${member.id}</h5>
    <h5>Email: ${member.email}</h5>
    <h5>Office Number: ${member.officeNumber}
    </div>
    `.trim()
    )
    .join("")}
    ${enginArr
    .map(member =>
        `
    <div class="card engine col">
    <h3>Team Member</h3>
    <h4>Name: ${member.name} </h4>
    <h5>Position: Engineer</h5>
    <h5>ID: ${member.id}</h5>
    <h5>Email: ${member.email}</h5>
    <h5>Github:<a href="https://github.com/${member.github}"> ${member.github}</a></h5>
    </div>
    `.trim()
    )
    .join("")}
    ${internArr
    .map(member =>
        `
    <div class="card intern col">
    <h3>Team Member</h3>  
    <h4>Name: ${member.name} </h4>
    <h5>Position: Intern</h5>
    <h5>ID: ${member.id}</h5>
    <h5>Email: ${member.email}</h5>
    <h5>School: ${member.school}</h5>
    </div>
    `.trim()
    )
    .join("")}
    <footer>Powered by magic, and copyright Daniel Nester, STACKato Solutions, 2019</footer>
    </div>
    </body>
    </html>`;
}

module.exports = generateHTML;
