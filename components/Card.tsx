import Image from 'next/image'
import React from 'react'
import LinkList from './LinkList'

const links = [
  { linkTitle: "Github", url: "https://github.com/" },
  { linkTitle: "Frontend Mentor", url: "https://frontendmentor.com/" },
  { linkTitle: "LinkedIn", url: "https://LinkedIn.com/" },
  { linkTitle: "Twitter", url: "https://twitter.com/" },
  { linkTitle: "Instagram", url: "https://instagram.com/" },
]

const Card = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-grey-800 p-[2rem] rounded-[0.75rem]'>
      <Image
        src="/assets/avatar-jessica.jpeg"
        alt="profile picture"
        height={88}
        width={88}
        className='rounded-full mb-[1.5rem] '
      />
      <h1 className='text-[2.24rem] mb-[0.5rem]'>Jessica Randal</h1>
      <h2 className='neon font-bold mb-[1.5rem] '>London, United Kingdom</h2>
      <p>"Front-end developer and avid reader."</p>

      {links.map((link) => (
          <LinkList linkData={link} key={link.url} />
        ))}

    </div>
  )
}

export default Card
