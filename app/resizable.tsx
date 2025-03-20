"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

interface ResizablePanelProps {
  children: React.ReactNode
  rightPanel: React.ReactNode
  defaultWidth?: number
  minWidth?: number
  maxWidth?: number
}

export default function ResizablePanel({
  children,
  rightPanel,
  defaultWidth = 400,
  minWidth = 300,
  maxWidth = 800,
}: ResizablePanelProps) {
  const [rightPanelWidth, setRightPanelWidth] = useState(defaultWidth)
  const resizeHandleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizeHandle = resizeHandleRef.current
    const container = containerRef.current
    if (!resizeHandle || !container) return

    let startX = 0
    let startWidth = 0
    let containerWidth = 0

    const onMouseDown = (e: MouseEvent) => {
      startX = e.clientX
      startWidth = rightPanelWidth
      containerWidth = container.offsetWidth
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseup", onMouseUp)
      document.body.style.cursor = "ew-resize"
      document.body.style.userSelect = "none"
    }

    const onMouseMove = (e: MouseEvent) => {
      const dx = startX - e.clientX
      const newWidth = Math.min(Math.max(startWidth + dx, minWidth), maxWidth)
      setRightPanelWidth(newWidth)
    }

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
      document.body.style.cursor = ""
      document.body.style.userSelect = ""
    }

    resizeHandle.addEventListener("mousedown", onMouseDown)

    return () => {
      resizeHandle.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }
  }, [rightPanelWidth, minWidth, maxWidth])

  return (
    <div ref={containerRef} className="flex-1 flex relative">
      <div className="flex-1 flex flex-col">{children}</div>

      {/* Resize Handle */}
      <div
        ref={resizeHandleRef}
        className="absolute left-0 top-0 w-1 h-full bg-blue-600 cursor-ew-resize hover:bg-blue-400 z-10"
        style={{
          left: `calc(100% - ${rightPanelWidth}px - 1px)`,
        }}
      />

      {/* Right Panel */}
      <div className="border-l border-border bg-[#1e1e1e]" style={{ width: `${rightPanelWidth}px` }}>
        {rightPanel}
      </div>
    </div>
  )
}

