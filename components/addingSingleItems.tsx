import { useFormSubmit, Form } from 'next-runtime/form';

export default function AddSingle({ clicked, fields }: any){
    const data: string[] = fields
    return (
<section className="text-gray-600 body-font justify-self-center w-full">
  <Form className="container py-6 mx-auto" method='POST'>
    <div className="flex lg:w-5/6 w-full  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      {data.map((item =>(
        <div className="relative flex-grow w-full" key={item}>
          <label htmlFor={item} className="leading-7 text-sm text-gray-600">{item}</label>
          <input type="text" id={item} name={item} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
      )))}
      <div className="relative flex flex-col w-full h-20 justify-end">
        <div className="flex flex-row justify-between">
            <button onClick={clicked} type="reset" className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Cancel</button>
            <button onClick={clicked} type="submit" className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Commit</button>
        </div>
      </div>
    </div>
  </Form>
</section>
    )
}