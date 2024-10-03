function lowerCaseWords(arr) 
{
    return new Promise((resolve, reject) => 
    {
        if (Array.isArray(arr)) 
        {
            const filteredWords = arr.filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());
            resolve(filteredWords);
        } 
        else
        {
            reject('Input is not an array');
        }
    });
}


lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
    .then(result => console.log(result))
    .catch(error => console.log(error));