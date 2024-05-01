## Part 2. A Little More of a Challenge

1. 3

2. 150

3. 150

4. 
It returns nothing. The code works perfectly, but in order to return the array, you need to add console.log to show it. If added, then the function would return an array with all the prices discounted, so [50,100,150].

5. 
This throws an error since the variable 'i' is declared with the let keyword, which means that it can only be accessible in the block. Which means that when we try to access i outside the block, JS throws an error.

6. 
Same explanation as 5.

7. 150

8. 
Same explanation as 4.

9. 
Same explanation as 5.

10. 3

11. 
Same explanation as 4.

12. 
a. student.name
b. student['Grad Year']
c. student.greeting()
d. student['Favorite Teacher'].name
e. student.courseload[0]


13. 
a. 32 - this is becase integers to to their exact string representation.
b. 1 - we first convert 3 to a number and then the subtraction operation is done.
c. 3 - the null gets converted to 0
d. 3null - same explanation as a.
e. 4 - true maps to 1
f. 0 - false and null gets converted to 0
g. 3undefined - same explanation as a.
h. Nan - undefined is converted to Nan and anything subtraced from Nan is Nan

14. 
a. true - '2' is turned into a number so 2>1 gives true
b. false - since we compare the lexigraphucally and 2 is greater than 12
c. true - '2' is converted toa  string
d. false - === compares both the value and type and these are different types
e. false - true is converted to 1 so it is not equal to 2
f. true - they are both boolean types

15. 
The difference between == and === is that == converts the operands to the same type before comparing. === will not do type coercion and compare both the value and type of the operands.

16. 
In the .js file

17. 
The exact code doesn't return anything since there is no console.log. However, if there were, then the result would be [ 2, 4, 6 ]. The reason for that would be becase the function modifyArray iterates over all the elements in the array and then applies the doSomething function which multiplies each number.

18. 
In the .js file

19. 
1
4
3
2
