import React, { useState, useEffect } from "react";

const DynamicContainerCurve = ({ endCoordinate, startCoordinate }) => {
  // Start and end points
  const [start, setStart] = useState({ x: 50, y: 50 });
  const [end, setEnd] = useState({ x: 300, y: 300 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0, left: 0, top: 0 });
  const [path, setPath] = useState("");

  useEffect(() => {

    const left = Math.min(start.x, end.x) - 10;
    const top = Math.min(start.y, end.y) - 10;
    const width = Math.abs(end.x - start.x) + 20;
    const height = Math.abs(end.y - start.y) + 20;

    setContainerSize({ width, height, left, top });

    const relativeStart = { x: start.x - left, y: start.y - top };
    const relativeEnd = { x: end.x - left, y: end.y - top };
    const controlPoint1 = { x: relativeStart.x + (relativeEnd.x - relativeStart.x) / 2, y: relativeStart.y };
    const controlPoint2 = { x: relativeStart.x + (relativeEnd.x - relativeStart.x) / 2, y: relativeEnd.y };

    const newPath = `M${relativeStart.x},${relativeStart.y} C${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${relativeEnd.x},${relativeEnd.y}`;
    setPath(newPath);
  }, [start, end]);

  useEffect(() => {
      setEnd(endCoordinate);
      setStart(startCoordinate);
  }, [JSON.stringify(endCoordinate), JSON.stringify(startCoordinate)]);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: containerSize.left,
          top: containerSize.top,
          width: containerSize.width,
          height: containerSize.height,
          pointerEvents: "none",
        }}
      >
        <svg
          width={containerSize.width}
          height={containerSize.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <path d={path} fill="none" stroke="#0066FF" strokeOpacity="0.31" strokeWidth="7" strokeLinecap="round"/>
        </svg>
      </div>

    </div>
  );
};

export default DynamicContainerCurve;
