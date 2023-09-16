1: Course Section Display: The project displays a list of courses in a grid format. Each course is represented by an image, course name, details, price, and credit hours. Users can view various available courses.
2: Course Selection: Users can select courses by clicking the "Select" button on each course card in the Section component. The selected courses are added to the Calculate component for further processing.
3: Credit Hour Calculation: The Calculate component calculates the total credit hours of the selected courses. It also displays the remaining credit hours to ensure that users do not exceed a maximum limit of 20 credit hours. If the limit is exceeded, a toast message is displayed.
4: Toast Notifications: The project utilizes the react-toastify library to provide toast notifications for actions like trying to add a course that already exists or exceeding the maximum credit hours. These notifications enhance the user experience by providing feedback on their interactions.
5: Fetching Data from JSON: You are fetching course data from a JSON file named "blogs.json" using the fetch API and displaying it in your application. This demonstrates data retrieval and integration.



App Component (App.jsx):

The App component is the top-level component that renders the main user interface.
It doesn't manage any course-related state but rather acts as the container for rendering other components.
Section Component (Section.jsx):

The Section component manages two main pieces of state using the useState hook:

sections: This state variable holds an array of course sections fetched from the "blogs.json" file. It is initialized as an empty array and is updated with the data fetched from the JSON file using the setSection function when the component mounts.

items: This state variable holds an array of selected courses. It is also initialized as an empty array and is updated whenever a user selects a course using the handleButton function. New course objects are added to the items array to keep track of selected courses.

Calculate Component (Calculate.jsx):

The Calculate component is responsible for displaying the calculated information about the selected courses, including the total credit hours and total price.
It receives the items array as a prop, which contains the selected course data.
Inside the component, the total and totalTaka variables are used to calculate the total credit hours and total price by iterating over the items array.
If the total credit hours exceed 20, a toast notification is triggered using the react-toastify library to inform the user.
Toast Notifications:

Toast notifications for error messages are displayed using the ToastContainer and toast components from the react-toastify library.
These components are used in both the Section and Calculate components to display messages such as "Already Exist!" and "Remaining credit."