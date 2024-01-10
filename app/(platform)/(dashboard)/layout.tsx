import React from "react";
import { Navbar } from "@/app/(platform)/(dashboard)/_components/Navbar";

const DashboardLayout = (
    { children }: { children : React.ReactNode}
) => {
    return ( 
        <div className=" h-full">
            <Navbar />
            {children}
        </div>
     );
}
 
export default DashboardLayout;