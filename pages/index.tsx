import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { handle, json, redirect } from 'next-runtime';
import { useFormSubmit, Form } from 'next-runtime/form';
import baseUrl from '../components/baseUrl';
import LoginComponent from '../components/LoginComponent';
import FormResponse from '../components/formResponse';
import Image from 'next/image';
import Logo from '../public/images/logo.webp'
export const getServerSideProps = handle({
  async get() {
    return json({});
  },
  async post({ req: { body }, cookies}: any) {
    const result = await axios.post(`${baseUrl}/login`, body, {headers : {"content-type": "multipart/form-data"}})
    const token = result.data
    cookies.set("token", token)
    const user = await axios.get(`${baseUrl}/current`, {headers: {"Authorization": token}})
    const user_info = user.data
    cookies.set("userid", user_info.Id)
    cookies.set("role", user_info.Role)
    cookies.set("email", user_info.Email)
    return json({...user_info});
  },
});

export default function Home() {
  const fields = ["Email or Phone ", "Password"]

  const router = useRouter()
  const [show, setShow] = useState(false)
  const form = useFormSubmit("login")
  useEffect(() => {
    if (form.isError){
      setShow(true)
    };
    if (form.isSuccess){
      router.push("/home")
    }
  }, [form, router]);
  function handleShow(){
    setShow(false)
  }

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
    <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
        <div className="w-full p-12 sm:w-11/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-10 sm:px-10 sm:py-6
            bg-white rounded-lg shadow-md lg:shadow-lg">
            <div className="text-center mb-4">
                <h6 className="font-semibold text-[#063970] text-xl">Login</h6>
                <Image src={Logo} alt="image" className='w-10 md:w-14 h-10 md:h-14 lg:w-20 lg:h-20 justify-self-center mx-auto'/>
                <div onClick={handleShow} className={`${ show ? "inline-block": "hidden"} px-6 text-lg font-bold text-red-600 mt-2 pt-4 rounded-lg`}>You supplied Invalid Credentials</div>
            </div>
            <div className="space-y-5 tex-lg">
              <LoginComponent/>
            </div>
        </div>
</div>
</div>
  );
}