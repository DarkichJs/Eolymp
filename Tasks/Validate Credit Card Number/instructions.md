
In this Kata, you will implement the  [Luhn Algorithm](http://en.wikipedia.org/wiki/Luhn_algorithm), which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return  `true`  if it is a valid credit card number, and  `false`  if it is not.

Here is the algorithm:

-   Double every other digit, scanning  **from right to left**, starting from the second digit (from the right).
    
    Another way to think about it is: if there are an  **even**  number of digits, double every other digit starting with the  **first**; if there are an  **odd**  number of digits, double every other digit starting with the  **second**:
    
    ```
    1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
    
    12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
    
    891 ==> [8, 9*, 1] ==> [8, 18, 1]
    
    ```
    
-   If a resulting number is greater than  `9`, replace it with the sum of its own digits (which is the same as subtracting  `9`  from it):
    

```
[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]

or:

[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]

```

-   Sum all of the final digits:
    
    ```
    [8, 9, 1] ==> 8 + 9 + 1 = 18
    
    ```
    
-   Finally, take that sum and divide it by  `10`. If the remainder equals zero, the original credit card number is valid.
    
    ```
    18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
    ```

---
_Пояснення від автора українською мовою_  
  
**Розглянемо коректне число "5062 8212 3456 7892":**

```plaintext
5 0 6 2 8 2 1 2 3 4 5 6 7 8 9 2
↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   // множимо кожне друге число на 2
10  12  16  2   6   10  14  18
↓   ↓   ↓           ↓   ↓   ↓
1   3   7           1   5   9   // від чисел понад 9 віднімаємо 9
1 0 3 2 7 2 2 2 6 4 1 6 5 8 9 2 // беремо всі непарні цифри
                                // та отриманий результат парних
1+0+3+2+7+2+2+2+6+4+1+6+5+8+9+2 = 60
```

*   Зрештою отримуємо суму рівну 60. Це число ділиться на 10 без залишку, отже, номер введений правильно.

**Тепер перевіримо некоректне число "5062 8217 3456 7892":**

```plaintext
5 0 6 2 8 2 1 7 3 4 5 6 7 8 9 2
↓   ↓   ↓   ↓   ↓   ↓   ↓   ↓   // множимо кожне друге число на 2
10  12  16  2   6   10  14  18
↓   ↓   ↓           ↓   ↓   ↓
1   3   7           1   5   9   // від чисел понад 9 віднімаємо 9
1 0 3 2 7 2 2 7 6 4 1 6 5 8 9 2 // беремо всі непарні цифри
                                // та отриманий результат парних
1+0+3+2+7+2+2+7+6+4+1+6+5+8+9+2 = 65
```

Таким чином ми отримали інформацію про те, що початкове число неправильно написано, а значить, необхідно перевірити порядок цифр і виправити помилку.