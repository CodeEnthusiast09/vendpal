import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../../pages/dashboard/page";
import { BudgetRoom } from "../../pages/budget-room/page";
import { NotFound } from "../../pages/not-found";

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow py-28 overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

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

            <Route
              path="/budget-rooom/line"
              element={<NotFound pageName="Budget line" />}
            />

            <Route
              path="/budget-rooom/centre"
              element={<NotFound pageName="Budget centre" />}
            />

            <Route
              path="/budget-rooom/control"
              element={<NotFound pageName="Budget control" />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
