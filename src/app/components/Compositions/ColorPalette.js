'use client'

import { Palette, Color, getColor } from 'color-thief-react';
import { GetColorName } from 'hex-color-to-color-name';

export default function ColorPalette(props) {
    const Loading = () => <div className="text-white text-center">Loading...</div>;

    return (
        <section>
            {/* Predominant color:
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
            </Color> */}
            <Palette src={props.image} crossOrigin="anonymous" format="hex" colorCount={10}>
                {({ data, loading }) => {
                    if (loading) return <Loading />;

                    const dataNew = data.map((color, index) => (
                        <div className="h-full max-w-full" key={index}>
                            <div className="h-[200px] md:h-[350px] w-full text-white flex justify-center items-center text-center uppercase tracking-widest font-light text-sm hover:text-opacity-100 text-opacity-0 transition-text-opacity duration-500 ease-in-out"
                                style={{ backgroundColor: color }}>
                                {GetColorName(color)}</div>
                        </div>
                    ));
                    return (
                        <section className="bg-[#3a3a3e]">
                            <div className="text-xl md:text-2xl text-[#c8a16e] uppercase p-5 text-center font-extralight tracking-widest">Палитра композиции {props.title}</div>
                            <div className="text-lg md:text-xl pb-5 px-10 text-left font-extralight md:max-w-[75%] w-[90%] leading-relaxed md:leading-relaxed space-y-5 mb-10">
                                <p>
                                    Создайте свою историю цветов из элегантной архитектуры STURM, от жилых интерьеров до городов будущего.
                                </p>
                                <p>    
                                    Velit occaecat excepteur in est tempor reprehenderit consequat proident nulla irure cillum aute. Ipsum esse sint incididunt ex eiusmod incididunt eu nulla esse do. Aliqua dolore consectetur occaecat nulla culpa eiusmod eu culpa. Aute culpa laboris in amet officia laboris excepteur incididunt fugiat consequat ipsum ullamco.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:pb-5 md:px-10">
                                {dataNew}
                            </div>
                        </section>
                    );
                }}
            </Palette>
        </section>
    )
}