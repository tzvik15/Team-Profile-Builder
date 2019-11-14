


 function generateHTML(team) {
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
                    background-color: red;
                    color:black ;
                    margin: 20px;
                    }
    
        </style>
    <body>
    ${team.map((member) => `
    <div class="card">
    <h3>Team Member</h3>  
      <h4>${member.name}</h4>
    </div>
    `.trim()).join('')}
    </body>
    </html>`
}










module.exports = generateHTML;