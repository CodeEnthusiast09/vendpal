# VendPal Dashboard

## Navigation

The application uses React Router for navigation between different sections:

- Dashboard
- Approval Workflow
- Budget Room
- Analytics

## Technical Implementation

### Component Design and Reusability

The application is structured with reusable components (widgets, tables, navigation elements) that promote maintainability and modularity.

### State Management

The application handles state across components to ensure changes to the simulated API data are reflected accurately in the dashboard.

### API Integration (Simulated)

Sample data arrays are used to represent information displayed in the dashboard, with proper handling of asynchronous operations, loading states, and error handling.

### Styling and Responsiveness

The application is designed to be responsive across different screen sizes, ensuring usability on both desktop and mobile devices.

### Routing and Navigation

React Router is implemented for navigation between different views within the dashboard.

### Accessibility and Performance

Basic accessibility practices are applied, and performance optimization techniques like lazy loading components are utilized.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

``` bash
git clone https://github.com/CodeEnthusiast09/vendpal.git
cd vendpal
```

1. Install dependencies

```bash
npm install
```

1. Start the development server

```bash
npm run dev
```

The application will be available at <http://localhost:5173/dashboard>
