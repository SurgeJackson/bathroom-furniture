'use client'

import React from 'react'
import { Palette, Color } from 'color-thief-react';
import { GetColorName } from 'hex-color-to-color-name';

export default function ColorPalette(props) {
    const Loading = () => <div>Loading...</div>;

    return (
        <div>
            Predominant color:
            <Color src={props.image} crossOrigin="anonymous" format="hex">
                {({ data, loading }) => {
                    if (loading) return <Loading />;
                    return (
                        <div className="h-[150px] w-[150px]"
                            style={{ backgroundColor: data }}>
                            <p>{GetColorName(data)}</p>
                        </div>
                    );
                }}
            </Color>
            <Palette src={props.image} crossOrigin="anonymous" format="hex" colorCount={9}>
                {({ data, loading }) => {
                    if (loading) return <Loading />;

                    const dataNew = data.map((color, index) => (
                        <div className="h-full max-w-full rounded-lg" key={index}>
                            <div className="h-full max-w-full">
                                <div className="h-[200px] w-full rounded-3xl"
                                    style={{ backgroundColor: color }} />
                                {/* <div>{GetColorName(color)} {index}</div> */}
                            </div>
                        </div>
                    ));
                    return (
                        <div className="grid grid-cols-3 gap-1 py-5 px-20">
                            {dataNew}
                        </div>
                    );
                }}
            </Palette>
        </div>
    )
}