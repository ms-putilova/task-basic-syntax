export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    let romanArray = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let intArray = [1, 5, 10, 50, 100, 500, 1000];

    let i = 0,
        j = 0;
    let n = str.length;

    for (i = n - 1; i >= 0; i--) {
        for (j = 0; j < 7; j++) {
            if (romanArray[j] == str[i]) {
                if (intArray[j] > result || str[i] == str[i + 1]) {
                    result += intArray[j];
                } else {
                    result -= intArray[j];
                }
            }
        }
    }

    return result;
}
