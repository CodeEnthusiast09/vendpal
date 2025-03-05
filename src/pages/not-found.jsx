import { Link } from "react-router-dom";

export const NotFound = ({ pageName }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">
        {pageName ? `${pageName} Page` : "Page"} Not Found
      </p>
      <div className="flex space-x-4">
        <Link
          to="/dashboard"
          className="bg-secondary-200 hover:bg-secondary-200/80 text-secondary-100 px-4 py-2 rounded transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};
