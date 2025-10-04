"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { AppSidebar } from "@/components/app-sidebar";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ContactList from "@/components/ContactList";

export default function Page() {
  const [activePage, setActivePage] = useState("Products");
  const [loading, setLoading] = useState(true); // 👈 Add loading state
  const router = useRouter();

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.replace("/"); // replace = back nahi le jaa paayega
    } else {
      setLoading(false); // login confirmed -> dashboard dikhado
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    router.replace("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar onSelectPage={setActivePage} />

      <SidebarInset className="bg-white text-black dark:bg-[#181819] dark:text-white h-screen flex flex-col overflow-hidden">
        {/* Sticky Header */}
        <header className="sticky top-0 z-10 bg-gray-50 dark:bg-[#181819] flex justify-between pr-4 h-16 shrink-0 items-center gap-2 border-b border-gray-200 dark:border-[white]/5">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 hover:cursor-pointer" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem className="text-gray-800 dark:text-gray-100 text-xs">
                  <p>{activePage}</p>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded text-xs hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 px-4 min-h-0">
          {activePage === "Products" && "ProductsContent coming soon..."}
          {activePage === "Our-Work" && "OurWorkContent coming soon..."}
          {activePage === "Blog" && "Blog content coming soon..."}
          {activePage === "Contact-user" && <ContactList />}
          {activePage === "Subscribe-user" && "SubscribeTable coming soon..."}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
