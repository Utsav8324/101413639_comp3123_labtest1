const fs = require('fs');

function removeLogs() 
{
    if (fs.existsSync('Logs')) 
    {
        fs.readdirSync('Logs').forEach(file => fs.unlinkSync('Logs/' + file));
        fs.rmdirSync('Logs');
        console.log('Logs deleted');
    }
}

removeLogs();


function createLogs() 
{
    if (!fs.existsSync('Logs')) 
    {
        fs.mkdirSync('Logs');
    }
    for (let i = 1; i <= 10; i++) 
    {
        fs.writeFileSync(`Logs/log${i}.txt`, `Log ${i}`);
        console.log(`log${i}.txt created`);
    }
}

createLogs();