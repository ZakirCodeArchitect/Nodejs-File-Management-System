# FileMaster Pro - Node.js File Management System

A robust Node.js application for managing files with features like creating, appending, deleting, retrieving data, and more, all while ensuring strong validation throughout.

## Features

- **Complete File System Operations**:
  - Create new files with data.
  - Append data to existing files.
  - Retrieve and view file data.
  - Delete specific data from files.
  
- **Validation Mechanisms**:
  - **Route Validation**: Ensures routes are correctly accessed.
  - **Access Validation**: Validates user access before actions are performed.
  - **Found/Not Found Validation**: Ensures files exist or gives proper feedback if not found.
  - **UUID Validation**: Uses Regular Expressions to validate unique User IDs (UUIDs).

- **Random ID Generator**: A unique ID is assigned to each input using a custom random ID generator function.

- **Regular Expressions**: Applied for UUID validation, ensuring proper format and consistency.

- **Body Parsing**: Body parser is used to handle request bodies (strings) efficiently.

## Technologies Used

- **Node.js**: Backend server and file operations.
- **Body-Parser**: To parse incoming request bodies.
- **Regular Expressions**: For UUID validation.
- **UUID**: Used for unique user identification.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/FileMaster-Pro.git
    ```

2. Navigate to the project directory:

    ```bash
    cd FileMaster-Pro
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

### Create File / Insert Data

- **Endpoint**: `POST /create`
- **Description**: Inserts new data into a file.
- **Request Body**:
    ```json
    {
      "filename": "example.txt",
      "data": "Sample data to be inserted"
    }
    ```

### Append Data to File

- **Endpoint**: `PUT /append`
- **Description**: Appends data to an existing file.
- **Request Body**:
    ```json
    {
      "filename": "example.txt",
      "data": "Additional data to append"
    }
    ```

### Retrieve Data from File

- **Endpoint**: `GET /file/:filename`
- **Description**: Retrieves data from a specified file.

### Delete Data from File

- **Endpoint**: `DELETE /delete/:filename/:dataId`
- **Description**: Deletes specific data from a file based on the provided data ID.

## Validations

- **Route Validation**: Ensures routes are correctly structured and data is formatted.
- **Access Validation**: Verifies user permissions before allowing file modifications.
- **Found/Not Found Validation**: Provides feedback when files are not found.
- **UUID Validation**: Uses Regular Expressions to ensure the User ID matches the UUID format.

## Random ID Generator

A custom function is used to generate unique IDs for each input entry, ensuring traceability and preventing duplicates.

## Why Body-Parser?

The `body-parser` middleware is used to parse incoming request bodies, especially helpful when handling POST and PUT requests where data is sent in the body. It makes the data accessible as `req.body`.

## How to Contribute

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out via [email](mailto:webdeveloper.zakir152@gmail.com).
