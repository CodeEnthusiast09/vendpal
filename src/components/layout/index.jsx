import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard/dashboard";
import { BudgetRoom } from "../../pages/budget-room/budget-room";
import { NotFound } from "../../pages/not-found";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/budget-room" element={<BudgetRoom />} />
            <Route
              path="/approval-workflow"
              element={<NotFound pageName="Approval Workflow" />}
            />
            <Route
              path="/analytics"
              element={<NotFound pageName="Analytics" />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
