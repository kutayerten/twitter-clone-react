import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar";

export default function MainLayout() {
  return (
    <div className="w-[1265px] mx-auto flex">
        <Sidebar />
        <main className="flex-1 flex gap-[30px]">
            <main className="flex-1 border-x border-gray-700 max-w-[600px]">
                <Outlet />
            </main>
            <RightBar />
        </main>
    </div>
  )
}
