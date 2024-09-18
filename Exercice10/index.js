//votre code ici

export default printNumbers
//export default printNumbers


function printNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        result += i + ' ';
    }
    return result.trim(); // Supprime l'espace final
 }
 
 
 export default printNumbers;
 
 
 //export default printNumbers;
 