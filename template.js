const template = team => {
    console.log(team);
    const teamArray = [];
    const manager = team.filter(employee => {
        return employee.getRole() === 'Manager'
    }).map(manager => {
        return `<div class="card">
                    <div class="card-header">
                        <h2>${manager.getName()}</h2>
                        <h3>${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <p class="info">ID: ${manager.getId()}</p>
                        <p class="info">Email: ${manager.getEmail()}</p>
                        <p class="info">Office Number: ${manager.getOffice()}</p> 
                    </div>
                </div>`
    });
    teamArray.push(manager);
    const engineer = team.filter(employee => {
        return employee.getRole() === 'Engineer'
    }).map(engineer => {
        return `<div class="card">
                    <div class="card-header">
                        <h2>${engineer.getName()}</h2>
                        <h3>${engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <p class="info">ID: ${engineer.getId()}</p>
                        <p class="info">Email: ${engineer.getEmail()}</p>
                        <p class="info">Office Number: ${engineer.getGithub()}</p>  
                    </div>
                </div>`
    });
    teamArray.push(engineer)
    const intern = team.filter(employee => {
        return employee.getRole() === 'Intern'
    }).map(intern => {
        return `<div class="card">
                    <div class="card-header">
                        <h2>${intern.getName()}</h2>
                        <h3>${intern.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <p class="info">ID: ${intern.getId()}</p>
                        <p class="info">Email: ${intern.getEmail()}</p>
                        <p class="info">Office Number: ${intern.getSchool()}</p>  
                    </div>
                </div>`
    });
    teamArray.push(intern)
    return teamArray.join("")
}
    






module.exports = (team) => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <title>Profile Generator</title>
                <link rel="stylesheet" type="text/css" href="./style.css" />
            </head>
            <body>
                <nav class="navbar">
                    <h1>My Team</h1>
                </nav>
                <div class="card-grid">
                ${template(team)}
                </div>
            </body>
            </html>`
}