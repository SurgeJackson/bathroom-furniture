import React from 'react'

const CompanyFeatures = () => {
    return (
        <div className="bg-white flex flex-col px-[5%] pb-10">
            <div className="text-4xl py-[50px] font-extralight">Почему мебель STURM</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 text-sm">
                <div className="flex flex-col items-start">
                    <div className="text-2xl pb-6 font-extralight">Осознанность</div>
                    <div className="flex flex-col items-start">
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/h2o-139.svg" width={50} height={50} />
                            <figcaption className="pl-5">Покрытия на водной основе полностью не содержащие стирола для всей мебели</figcaption>
                        </figure>
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/origine-bio-01.svg" width={50} height={50}/>
                            <figcaption className="pl-5">Умывальники и ванны БИО происхождения с выбросом летучих веществ сертифицироваными по нормам ЕС</figcaption>
                        </figure>
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/reciclabile-01.svg" width={50} height={50}/>
                            <figcaption className="pl-5">Умывальники и ванны из перерабатываемых материалов</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="text-2xl pb-6 font-extralight">Качество</div>
                    <div className="flex flex-col items-start">
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/multistrato-01.svg" width={50} height={50}/>
                            <figcaption className="pl-5">Мебель из березовой фанеры AW100, водонепроницаемого ДСП, МДФ, массива дуба</figcaption>
                        </figure>
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/laccatura-manuale-01.svg" width={50} height={50}/>
                            <figcaption className="pl-5">Бесконтактное ручное лакирование</figcaption>
                        </figure>
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/controllo-qualita-01.svg" width={50} height={50}/>
                            <figcaption className="pl-5">Контроль качества каждого отдельного предмета мебели</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="text-2xl pb-6 font-extralight">Технологичность</div>
                    <div className="flex flex-col items-start">
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/lavorazionea45-01.svg" width={50} height={50}/>
                            <figcaption className="pl-5">Обработка под 45°</figcaption>
                        </figure>
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/misura-01.svg" width={50} height={50}/>
                            <figcaption className="pl-5">Изготовление мебели и зеркал в заданый размер</figcaption>
                        </figure>
                        <figure className="h-[100px] flex gap-2 justify-center items-center p-2 font-extralight">
                            <img src="images/bathroom-furniture/company-features/finiture-01.svg" width={50} height={50}/>
                            <figcaption className="pl-5">Глянцевая и матовая лакировка, отделки деревом</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyFeatures