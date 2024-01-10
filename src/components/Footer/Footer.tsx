import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='w-full px-5 sm:px-[100px] py-6 sm:py-[50px] flex items-start justify-start custom-lg:items-center custom-lg:justify-center bg-secondary-200 '>
                <div className='w-full max-w-[1440px] flex flex-col gap-6 custom-lg:gap-0 custom-lg:flex-row items-center custom-lg:justify-between text-white font-semibold'>
                    <div className='flex flex-col'>
                        <div className='flex justify-start'>
                            <img
                                src='/logo.svg'
                                alt='logo'
                                className='h-[70px] mb-4 float-left object-fill'
                            />
                        </div>
                        <div className='text-secondary-400 text-xl mb-8'>
                            Enjoy the Leading of the<br />NFT Token Creator
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='bg-primary-200 rounded-xl px-6 py-2 flex items-center justify-center gap-2'>
                                <Image
                                    src='/icons/white_twitter.svg'
                                    alt='twitter_icon'
                                    width={20}
                                    height={20}
                                    className='object-cover object-center '
                                />
                                <div className=''>
                                    Twitter
                                </div>
                            </button>
                            <button className='bg-primary-200 rounded-xl px-6 py-2 flex items-center justify-center gap-2'>
                                <Image
                                    src='/icons/white_discord.svg'
                                    alt='discord_icon'
                                    width={20}
                                    height={20}
                                    className='object-cover object-center '
                                />
                                <div className=''>
                                    Discord
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center items-start gap-10 grow max-w-[400px] lg:max-w-[500px]  xl:max-w-[600px]'>
                        <div className='flex flex-col font-normal items-start gap-4 grow '>
                            <div className='text-base '>
                                Market
                            </div>
                            <Link href='' className='text-sm text-secondary-400' >
                                Home
                            </Link>
                            <Link href='' className='text-sm text-secondary-400' >
                                About Us
                            </Link>
                            <Link href='' className='text-sm text-secondary-400' >
                                How it works?
                            </Link>
                        </div>
                        <div className='flex flex-col font-normal items-start gap-4 grow '>
                            <div className='text-base '>
                                Collections
                            </div>
                            <Link href='' className='text-sm text-secondary-400' >
                                Creator
                            </Link>
                            <Link href='' className='text-sm text-secondary-400' >
                                Collections
                            </Link>
                            <Link href='' className='text-sm text-secondary-400' >
                                Minted
                            </Link>
                        </div>
                        <div className='flex flex-col font-normal items-start gap-4 grow '>
                            <div className='text-base '>
                                Resources
                            </div>
                            <Link href='' className='text-sm text-secondary-400' >
                                Help
                            </Link>
                            <Link href='' className='text-sm text-secondary-400' >
                                Guide
                            </Link>
                            <Link href='' className='text-sm text-secondary-400' >
                                Affiliate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-5 sm:px-[100px] py-4 border-t border-t-secondary-600 flex items-center justify-center bg-secondary-200 '>
                <div className='w-full max-w-[1440px] flex-col custom-lg:flex-row gap-4 flex items-center justify-between text-secondary-400 text-sm font-semibold'>
                    <div className=' hidden custom-lg:block'>
                        ©2024 NFT SPL Token
                    </div>
                    <div className='flex items-center gap-4'>
                        <div>
                            Terms & Conditions
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                    </div>
                    <div className=' block custom-lg:hidden'>
                        ©2024 NFT SPL Token
                    </div>
                </div>
            </div>
        </>
    )
}
