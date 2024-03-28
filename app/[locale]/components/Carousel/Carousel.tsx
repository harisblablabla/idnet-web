import Image from 'next/image'
import React from 'react'

interface Attribute {
    source: string,
    alt: string,
    width: number,
    height: number
}

interface AttributeArray {
    items: Attribute[]
}

const Carousel = ({ items }: AttributeArray) => {
    return (
        <div className="carousel carousel-end rounded-box">
            {items.map((value: any, index: number) => (
                <div className="carousel-item" key={index}>
                    <Image src={value.source} alt={value.alt} width={value.width} height={value.height} className='object-cover' />
                </div>
            ))}
        </div>
    )
}

export default Carousel