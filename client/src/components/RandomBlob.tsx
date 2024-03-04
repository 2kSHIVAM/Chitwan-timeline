import React, {JSX, useEffect, useState} from 'react';

export default function RandomBlob({ size = 0.2 }:{size?:number}){

    const [numPoints,setNumPoints] = useState(Math.floor(Math.random() * 6) + 3) // Random number of points between 3 and 8
    const generateRandomBlob = () => {
        const viewBox = `-${size / 2} -${size / 2} ${size} ${size}`;
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Generate random color

        // Generate random points for the quadratic Bezier curves
        const points = [];
        const numPoints = Math.floor(Math.random() * 6) + 3; // Random number of points between 3 and 8
        for (let i = 0; i < numPoints; i++) {
            const x = (Math.random() * size) - (size / 2);
            const y = (Math.random() * size) - (size / 2);
            points.push(`${x},${y}`);
        }

        // Constructing the d attribute string for the path
        let d = `M${points[0]}`;
        for (let i = 1; i < points.length - 1; i++) {
            const xc = (parseFloat(points[i].split(",")[0]) + parseFloat(points[i + 1].split(",")[0])) / 2;
            const yc = (parseFloat(points[i].split(",")[1]) + parseFloat(points[i + 1].split(",")[1])) / 2;
            d += `Q${points[i].split(",")[0]},${points[i].split(",")[1]},${xc},${yc}`;
        }
        // Connect the last point with the first point using a quadratic Bezier curve
        const xc = (parseFloat(points[points.length-1-1].split(",")[0]) + parseFloat(points[0].split(",")[0])) / 2;
        const yc = (parseFloat(points[points.length-1-1].split(",")[1]) + parseFloat(points[0].split(",")[1])) / 2;
        d += `Q${points[points.length-1-1].split(",")[0]},${points[points.length-1-1].split(",")[1]},${xc},${yc}`;
        return (
            <svg className={'absolute'} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
                <path fill={randomColor} d={d} />
            </svg>
        );
    };
    useEffect(() => {
        console.log("numPoints",numPoints)
        const res = generateRandomBlob()

    }, []);

    const Blob = () => {
        return(
            <>
                {generateRandomBlob()}
            </>
        )
    }

    return(
        <Blob/>
    )
};
