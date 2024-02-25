'use client'

import React, { useState } from 'react'
import CardInternet from './CardInternet'
import { dataArray } from '../../retail/internet/data'

const TabInternet = () => {

    const [tabOne, setTabOne] = useState(true)
    const [tabTwo, setTabTwo] = useState(false)
    const [tabThree, setTabThree] = useState(false)

    const toggleTab = (num: number) => {
        const states = [setTabOne, setTabTwo, setTabThree];
        states.forEach((setState, index) => setState(index === num - 1));
    }

    return (
        <div className='w-full'>
            <div role="tablist" className="flex overflow-x-auto flex-col sm:flex-row items-center tabs tabs-boxed bg-white border-2 border-primary-800 mb-10 w-4/5 md:w-1/2 mx-auto">
                <button role="tab" onClick={() => toggleTab(1)} className={`whitespace-nowrap tab text-primary-800 font-semibold ${tabOne ? 'tab-active' : ''}`}>Internet Fiber</button>
                <button role="tab" onClick={() => toggleTab(2)} className={`whitespace-nowrap tab text-primary-800 font-semibold ${tabTwo ? 'tab-active' : ''} `}>Combo Internet + IPTV/Phone</button>
                <button role="tab" onClick={() => toggleTab(3)} className={`whitespace-nowrap tab text-primary-800 font-semibold ${tabThree ? 'tab-active' : ''} `}>Combo Internet + IPTV + Phone</button>
            </div>

            {/* package internet */}
            <div className="flex flex-row flex-wrap gap-6 mx-auto justify-center items-center">
                {dataArray.map((card: any, index: any) => (
                    <CardInternet key={index} tab1={tabOne} tab2={tabTwo} tab3={tabThree} paket={card.paket} value={card.value} />
                ))}
            </div>
        </div>
    )
}

export default TabInternet