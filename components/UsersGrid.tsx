import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'
import FormApply from "./Form"
import FormResponse from "./formResponse"
export default function UsersGrid({ items, fields, fieldnames, showPop, close, formResponse }: any){
    const item = items && items[0]
    const [hidden, setHidden] = useState(true)
    function handleHidden(){
        console.log(hidden)
        setHidden(!hidden)
    }
    return (
        <section className="text-gray-600 body-font bg-sky-200 w-full">
  <div className={`${hidden ? "hidden" : "flex" } fixed bg-sky-400 flex-col items-center w-screen md:mx-36 lg:mx-48 xl:mx-64 md:mt-24 md:w-1/2`}><FormApply fields={fields} fieldnames={fieldnames} clicked={handleHidden}/></div>
  <div className={`${showPop ? "flex" : "hidden" } fixed bg-white border border-green-600 flex-col items-center w-screen md:ml-36 md:mr-36 md:mt-24 md:w-1/2`}><FormResponse formResponse={formResponse} clicked={close}/></div>
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-wrap -m-2">
        {items && items.map((item: any) => (
                <div className="p-2 md:w-1/3 w-full" key={item}>
                  <div className="h-full flex items-center border-sky-300 border z-40 p-4 rounded-lg bg-white">
                    <Image alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={item.image}/>
                    <div className="flex flex-col w-full">
                      <h2 className="text-blue-900 title-font font-medium">{item.name}</h2>
                      <div className=" flex flex-row justify-between">
                          <div className="flex flex-col">
                            {Object.values(item).map((value: any) => (
                              <p key={value} className="text-gray-900">{value}</p>
                            ))}
                          </div>
                          <div className='justify-self-end flex flex-col justify-end'>
                              <Link href="/" className='text-green-800 font-bold'>Edit</Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
        ))}
    </div>
  </div>
  <button onClick={handleHidden} className={`${hidden ? "flex": "hidden"} fixed z-90 bottom-6 right-6 bg-green-600 w-14 h-14 rounded-full drop-shadow-lg justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl`}>
    <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-10 h-10 inline-block">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
    </svg>
  </button>
</section>
    )
}