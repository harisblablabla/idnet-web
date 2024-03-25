
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Size {
    width: number;
    height: number;
  }

const Logo = ({width, height}: Size) => {

    return (
        <Link href={'/'} className='pt-5 pb-2.5 md:py-2.5'>
            <Image src="/assets/ideanet_logo.webp" alt={'logo ideanet'} width={width} height={height} />
        </Link>
    )
}

export default Logo