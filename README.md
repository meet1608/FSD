### Food ordering application 
### pending work place food orders, then track the status of their orders
The main purpose of the application is to enable users to view restaurant menu, which can be updated by employees. The system consists of three user roles with specific capabilities:
- ADMIN
- EMPLOYEE
- USER

without login you can use the following abilities:
- Register an account
- Browse the menu, select a type of the meal, and view the complete offerings within that type
- Specify quantities and then add items to the cart
- Confirm the final order by inserting their address and phone number
- After successfully placing the final order, users will receive a message containing a link to track the status of their order

*USER* can do  the following things after logging in:
- Update their personal information
- Order food similar to unregistered users, but without the need to enter their address and phone number since their data is already saved in the database.
- Receive a 10% discount on every order
- View their active orders (with *ORDERED* and *IN PREPARATION* status)
- View the history of their orders (with *IN DELIVERY* status)

*EMPLOYEE* can do  the following things after logging in:
- Review all incoming orders and change their status to *IN PREPARATION* or *IN DELIVERY*, depending on whether the orders are being prepared or in the process of delivery.
- View the history of all orders.

*ADMIN* can do  the following things after logging in:
- Create, delete (logically) and update meal types in the database (including uploading images)
- Create, delete (logically) and update meals (including uploading images)
- Logically delete users (change their isDeleted status, their data remains in the database)
- View active final orders
- Delete final orders and all their ordered items from the database
- View the order history
- Create, delete, and update employee data (users with the *EMPLOYEE* role)

Application has fully responsive design for users who order the food.

### Application UI preview:

Users first need to select the specific category, then they can see complete offers for that category.



After choosing category (meal type), available meals (offers) will be listed.



Users can add items (meals) to the cart after they specify quantity. Default and minimum value for quantity is 1 and users can't go below that value. 
After clicking on *Confirm* button, item is successfully added to the cart.



Clicking on the cart button or icon in the navigation, users can see items from the cart.



Users that are not logged-in, need to insert details such as address and phone number.


Without inserting details, not logged-in users can't confirm the final order 


Validation if inserted phone number is a number or it has less than 5 digits



After valid input, final order will be confirmed and not logged-in users can track their order status clicking on the link.
Clicking on *Show items* button, user can see all items from the (final) order that he ordered.



Logged-in users get 10% discount on the final price of their order. Also they don't need to insert details, such as address and phone number, because it's stored in the database after registration. Logged-in users also have more tabs and options.



Logged-in users can track their active orders (*IN PREPARATION* and *ORDERED* status) clicking on *My active orders tab*. Final orders with *IN DELIVERY* status will be visible clicking on *My order history* tab.

Clicking on *Show items* button, user can see his ordered items



Admin have option to delete final order and all its ordered items from the database, but he doesn't have an option to change status as employee can do (same component shows for both roles, but they don't have same available actions).


Employee can see and change status of the final order depending on real status of the order, which user can track (but they can't delete them as Admin can do).


Clicking on *Show items* button, employee can see all items from the (final) order.


All orders with status *IN DELIVERY* are placed in order history, they aren't considered active anymore


Login component shows when the app starts.



Logged-in users can access their profile page where they edit profile or change password if necessary.


Edit profile



When user wants to change password, he needs to insert old password as well.


If inserted old password and password from the database don't match, he won't be allowed to save new password.


If they match, new password will be saved successfully (will be encripted and saved in the database)


Registration (unregistered users can sign up and they will have 10% off on every order)


Validation and alert if username already exists in the database.


Validation and alert if email already exists in the database.


Registration design for mobile screen size

