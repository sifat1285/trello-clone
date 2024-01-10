import React from "react";
import { OrgControl } from "@/app/(platform)/(dashboard)/organization/[organizationId]/_components/orgControl";

export default function OrganizationIdLayout (
    { children } : { children: React.ReactNode }
) {
    return (
        <div className=" h-full">
            <OrgControl />
            {children}
        </div>
    )
}