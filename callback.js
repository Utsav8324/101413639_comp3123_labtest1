
function resolvedPromise() 
{
    return new Promise(resolve => 
    {
        setTimeout(() => 
        {
            resolve('Success: Promise resolved');
        }, 500);
    });
}


function rejectedPromise()
{
    return new Promise((_, reject) => 
    {
        setTimeout(() => 
        {
            reject('Error: Promise rejected');
        }, 500);
    });
}


resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));


rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error)); 