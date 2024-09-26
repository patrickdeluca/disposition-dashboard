# CarCapital LEADS Disposition Administration Dashboard

## Overview

The **CarCapital LEADS Disposition Administration Dashboard** is a web-based application designed to manage and administer dispositions used within the CarCapital LEADS system. It allows administrators to view, add, edit, and delete dispositions, as well as configure actions and drip campaigns associated with each disposition.

This documentation provides a comprehensive overview of the application's functionality, architecture, and components to facilitate rapid development and deployment by your development team.

---

## Application Architecture

The application is built using the following technologies:

- **Frontend**: HTML, CSS (Tailwind CSS), and Vanilla JavaScript.
- **Backend**: Node.js with Express.js for the server and API endpoints.
- **Database**: SQLite3 for data storage, using the `sqlite3` Node.js package.

The project structure consists of the following key files:

- `index.html`: The main frontend interface for the dashboard.
- `index.js`: The Express.js server handling API requests and serving static files.
- `database.js`: The database initialization script setting up SQLite tables and initial data.
- `dispositions_data.js`: The initial data for dispositions, exported as a module.

---

## Functionality Breakdown

### 1. Dashboard Interface (`index.html`)

#### Features:

- **Responsive UI**: Designed with Tailwind CSS for a modern and responsive interface.
- **Disposition List**: Displays a table of all dispositions with options to enable/disable and edit each one.
- **Add New Disposition**: Provides a modal form to add new dispositions to the system.
- **Edit Dispositions**: Allows editing of disposition details, including description, contact settings, actions, and drip campaigns.
- **Actions Management**: Enables adding/removing actions associated with a disposition.
- **Drip Campaigns**: Supports toggling drip campaigns and specifying a campaign UUID.

#### Key Components:

- **Header**: Includes the CarCapital logo and a "SIGN OUT" button.
- **Disposition Table**: Dynamically populated using JavaScript by fetching data from the backend API.
- **Modal for Adding Dispositions**: A hidden modal that appears when adding a new disposition.
- **Scripts**:
  - **API Interaction**: Fetches dispositions from the backend and handles CRUD operations.
  - **Dynamic Rendering**: Renders dispositions and their editable fields.
  - **Event Listeners**: Handles user interactions such as clicking buttons and toggling switches.

---

### 2. Server and API (`index.js`)

#### Features:

- **Express.js Server**: Serves the frontend and handles API requests.
- **Static File Serving**: Serves static files from the `public` directory (which includes `index.html`).
- **RESTful API Endpoints**:
  - `GET /api/dispositions`: Retrieves all dispositions with their associated actions.
  - `POST /api/dispositions`: Adds a new disposition to the database.
  - `PUT /api/dispositions/:id`: Updates an existing disposition and its actions.
  - `DELETE /api/dispositions/:id`: Deletes a disposition and its associated actions.
- **Fallback Route**: Redirects all unspecified routes to `index.html` to support client-side routing.

#### Key Components:

- **Middleware**:
  - `cors()`: Enables Cross-Origin Resource Sharing.
  - `express.json()`: Parses incoming JSON payloads.
- **Database Integration**: Uses `db` (from `database.js`) to perform CRUD operations.
- **Asynchronous Handling**: Ensures all database operations are handled asynchronously with proper callbacks.

---

### 3. Database Initialization (`database.js`)

#### Features:

- **SQLite3 Database**: Initializes the database and sets up the necessary tables.
- **Tables Created**:
  - `dispositions`: Stores disposition details.
  - `actions`: Stores actions associated with dispositions.
- **Data Insertion**: Populates the `dispositions` table with initial data from `dispositions_data.js`.

#### Key Components:

- **Database Connection**: Establishes a connection to an SQLite database file (`dispositions.db`).
- **Table Definitions**:
  - `dispositions`:
    - Fields: `id`, `name`, `description`, `enabled`, `contactOn`, `dripCampaign`, `dripCampaignUUID`, `createdAt`, `updatedAt`.
  - `actions`:
    - Fields: `id`, `dispositionId`, `target`, `templateId`, `actionType`.
- **Data Import**: Imports initial dispositions from `dispositions_data.js` and inserts them into the database.
- **Exports**: Exports the `db` object for use in other modules (e.g., `index.js`).

---

### 4. Dispositions Data (`dispositions_data.js`)

#### Features:

- **Initial Dispositions**: Provides an array of disposition objects representing various customer interaction outcomes.
- **Data Structure**:
  - Each disposition object includes:
    - `id`: Unique identifier.
    - `name`: Disposition name.
    - `description`: Detailed description.
    - `enabled`: Boolean flag indicating if the disposition is active.
    - `contactOn`: Boolean flag indicating if contact should be made.
    - `dripCampaign`: Boolean flag for drip campaign association.
    - `dripCampaignUUID`: UUID for the drip campaign.
    - `actions`: Array of actions (empty by default).

#### Key Components:

- **Module Export**: Exports `dispositionsData` for use during database initialization.

---

## Setup and Deployment Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your development machine.
- **SQLite3**: Install SQLite3 if you wish to interact with the database directly.

### Installation Steps

1. **Clone the Repository**: Obtain the project files from your source control system.
   
2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Database Initialization**:

   - The database is automatically initialized when the server starts.
   - If you need to reset the database, delete the `dispositions.db` file or ensure that the `DROP TABLE` statements are active in `database.js`.

4. **Start the Server**:

   ```bash
   npm start
   ```

   - The server will run on port `5000` by default.
   - Access the application by navigating to `http://localhost:5000` in your web browser.

### Development Tips

- **Automatic Server Restarts**: Install `nodemon` for automatic restarts during development.

  ```bash
  npm install --save-dev nodemon
  ```

  - Update the `dev` script in `package.json`:

    ```json
    "dev": "nodemon index.js"
    ```

- **CORS Issues**: If accessing the API from a different origin, ensure CORS is properly configured.

- **Environment Variables**: Use environment variables for configuration settings like the API URL or port number.

---

## Important Considerations

- **Data Consistency**: The `id` field in dispositions is manually set. Ensure that when adding new dispositions, IDs are unique and correctly assigned.
- **Error Handling**: The frontend provides basic error handling with console logs and alerts. Consider enhancing this with user-friendly notifications.
- **Security**:
  - **Input Validation**: Implement server-side validation to prevent SQL injection or other attacks.
  - **Authentication**: Currently, there's a "SIGN OUT" button, but no authentication logic is implemented. Integrate authentication mechanisms as needed.
- **Scalability**:
  - **Database Choice**: SQLite is suitable for development and small-scale applications. For larger deployments, consider migrating to a more robust database system like PostgreSQL or MySQL.
  - **API Structure**: The current API is simple and may need to be expanded with additional endpoints or middleware for larger applications.
- **UI/UX Enhancements**: The frontend is functional but could benefit from additional styling and responsiveness improvements.

---

## File Structure Overview

```
project-root/
├── index.js                # Express.js server and API routes
├── database.js             # Database initialization script
├── dispositions_data.js    # Initial dispositions data
├── package.json            # Project metadata and dependencies
├── public/
│   └── index.html          # Main frontend interface
└── node_modules/           # Installed dependencies
```

---

## Next Steps for Developers

- **Review the Codebase**: Familiarize yourself with the code in each file to understand the logic and flow.
- **Implement Authentication**: Add user authentication to secure the dashboard.
- **Enhance Error Handling**: Improve error messages and exception handling on both frontend and backend.
- **Optimize Database Queries**: Ensure that database interactions are efficient and consider indexing frequently queried fields.
- **Refactor and Modularize**: As the application grows, consider refactoring code into smaller modules or components.
- **Testing**: Write unit and integration tests to ensure the application functions as expected.

---

## Conclusion

This documentation provides a high-level overview of the CarCapital LEADS Disposition Administration Dashboard. By understanding the application's architecture and functionality, developers can efficiently continue development, implement additional features, and maintain the system effectively.

For any further assistance or clarification, please refer to the code comments within each file or contact the project lead.

---

**Note**: This documentation assumes that all necessary files and dependencies are provided and that the development environment is properly set up.
