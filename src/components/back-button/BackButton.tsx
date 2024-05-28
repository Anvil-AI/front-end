'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
    const router = useRouter()

    return (
        <a onClick={() => router.back()} className='m-0 p-0 self-start items-start'>
            <i className="bi bi-arrow-left-short text-5xl cursor-pointer"></i>
        </a>
    )
}