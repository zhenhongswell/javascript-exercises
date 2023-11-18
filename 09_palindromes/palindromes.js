const palindromes = function (string="") {
    string = string
                .replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,'')
                .replaceAll(' ','')
                .toLowerCase();
    let index_1 = 0;
    let index_2 = string.length - 1;
    while(index_1 <= index_2){
        if (string[index_1])
        if (string[index_1] != string[index_2]) return false;
        index_1++;
        index_2--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
