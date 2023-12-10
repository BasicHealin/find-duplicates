# Array Analyzer Web App

Array Analyzer is a React web application that allows users to manage and analyze numerical arrays. Users can add elements to the array, identify duplicated elements, view their occurrence count, and highlight occurrences and indexes.
 - Demo :`https://6mzhmd.csb.app/`

## Features

1. **State Management:**
   - Utilizes the `useReducer` hook for efficient state management.
   - Initializes state using `initialState` and a reducer function from the `reducer` module.

2. **Duplicate Detection:**
   - Implements a `findDuplicates` function to identify duplicated elements within the array.
   - Displays duplicated elements along with their occurrence count.

3. **Rendering Lists:**
   - Defines a `renderList` function for rendering arrays with optional borders.
   - Renders arrays and indexes with optional titles for a clear and organized display.

4. **User Input Handling:**
   - Allows users to add numerical elements to the array via an input field.
   - Validates input and displays an error message for invalid inputs.

5. **Interactive Duplicates Display:**
   - Displays duplicated elements with occurrence counts in a visually appealing layout.
   - Highlights the selected duplicated element, updating the state accordingly.

6. **Technologies Used:**
   - React
   - Mantine Hooks (for `useShallowEffect`)
   - Styled Components (for styling)

## Usage

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
