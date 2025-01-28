import Link from "next/link"

interface LinkProp {
  linkData: { linkTitle: string, url: string }
}

const LinkList = ({ linkData }: LinkProp) => {
  return (
    <div className='flex justify-center items-center text-white w-[19.5rem] py-3 px-[5.625rem] bg-grey-700 my-2 
    rounded-md transition-all duration-200 hover:bg-[#c4f82a] hover:text-black active:text-black cursor-pointer'>
      <Link 
        href={linkData.url} 
        target='_blank' 
        rel='noopener noreferrer'
        className='no-underline font-semibold transition-all duration-200'
      >
        {linkData.linkTitle}
      </Link>
    </div>
  )
}

export default LinkList
