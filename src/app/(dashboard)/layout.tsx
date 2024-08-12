"use client"
import React from "react"

import { cx } from "@/lib/utils"

import { Sidebar } from "@/components/ui/navigation/Sidebar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      {/* @CHRIS: check whether <main> is used twice */}
      <main
        className={cx(
          isCollapsed ? "lg:pl-[60px]" : "lg:pl-64",
          "ease transform-gpu transition-all duration-100 will-change-transform lg:bg-gray-50 lg:py-3 lg:pr-3 lg:dark:bg-gray-950",
        )}
      >
        <div className="dark:bg-gray-925 bg-white p-4 sm:p-6 lg:rounded-lg lg:border lg:border-gray-200 lg:dark:border-gray-900">
          {children}
        </div>
      </main>
    </div>
  )
}
