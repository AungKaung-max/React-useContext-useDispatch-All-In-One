
import React, { useState } from 'react'

function Box({ children, color, position, onMove }) {
    const [lastCoordinates, setLastCoordinates] = useState(null);

    function handlePointerDown(e) {
        console.log("HANDLE_POINTER", e);
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
            x: e.clientX,
            y: e.clientY,
        });

        console.log("lastcoordinate", lastCoordinates)

    }

    function handlePointerMove(e) {
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    function handlePointerUp(e) {
        setLastCoordinates(null);
    }
    return (
        <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                width: '100px',
                height: '100px',
                backgroundColor: `${color}`,
                position: 'absolute',
                border: '1px solid black',
                cursor: 'grab',
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >{children}</div>
    )
}

export default Box;