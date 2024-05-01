## Part 1. A Quick Introduction
1. 
values added:  20

2. 
final result:  20

3. 
values added:  20

4. 
The error occurs because the result variable is declared with let inside the if block, which limits its scope to that block. So when you try to access result outside of the if block, JS throws an error since it can't recognize it.

5. 
The error occurs because when you declare a variable with the const keyword, that means that it cannot be reassigned after intialization. Since we tried to reassign the variable, JS throws an error.

6. 
The error occurs because the 'result' variable is delcared inside the if block with the const keyword, which means it can only exist within the block it was decalred. So JS cannot access it outside the block, which is why it throws an error.
