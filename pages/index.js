import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>MockBuzz - Sign Up</title>
      </Head>
      <main>
       
          <div className='absolute bg-[url("../public/ford-v-ferrari-movie.jpg")] h-screen w-full bg-cover bg-no-repeat'>
            <div className="absolute h-screen w-full bg-gradient-to-l from-[#020615] via-blue-rgba">
            <Image className='h-[42px] w-[234px] mx-10 my-7' src={logo} />
            <div className=' flex flex-col items-end mr-40 text-white leading-snug'>
              <div>
              <h2 className=' text-[25px]'>
                Start Watching
              </h2>
              <h5 className=' font-roboto font-bold text-[55px]'>
                Join with us.
              </h5>
              <h2 className='text-[25px] mb-4'>
              Already a member? <a href='#' className=' font-montserratBold underline underline-offset-4'>Log In</a> 
              </h2>
              <div className='flex justify-around'>
                <div className='mr-5'>
                  <h1 className=' text-[20px] mb-2 '>
                    First Name
                  </h1>
                  <input type="text" placeholder='Jhon' className=' mb-2 w-full p-2 rounded-md opacity-50 bg-[#0E1221] border-[#6A8AFF] border-[1px] focus:opacity-100 focus:outline-none focus:border-[#6A8AFF] focus:ring-1 placeholder:text-white' />
                </div>
                
                <div>
                  <h1 className=' text-[20px] mb-2 '>
                    Last Name
                  </h1>
                  <input type="text" placeholder='Doe' className=' mb-2 w-full p-2 rounded-md opacity-50 bg-[#0E1221] border-[#6A8AFF] border-[1px] focus:opacity-100 focus:outline-none focus:border-[#6A8AFF] focus:ring-1 placeholder:text-white'/>
                </div>
              </div>
              
              <h1 className=' text-[20px] mb-2 '>
                Email
              </h1>
              <input type="email" placeholder='example@web.com' className=' mb-2 w-full p-2 rounded-md opacity-50 bg-[#0E1221] border-[#6A8AFF] border-[1px] focus:opacity-100 focus:outline-none focus:border-[#6A8AFF] focus:ring-1 placeholder:text-white' />
              <h1 className=' text-[20px] mb-2 '>
                Password
              </h1>
              <input type="password" placeholder='*****' className=' mb-2 w-full p-2 rounded-md opacity-50 bg-[#0E1221] border-[#6A8AFF] border-[1px] focus:opacity-100 focus:outline-none focus:border-[#6A8AFF] focus:ring-1 placeholder:text-white'/>
              <h1 className=' text-[20px] mb-2 '>
              Re-Enter Password
              </h1>
              <input type="password" placeholder='*****' className=' mb-2 w-full p-2 rounded-md opacity-50 bg-[#0E1221] border-[#6A8AFF] border-[1px] focus:opacity-100 focus:outline-none focus:border-[#6A8AFF] focus:ring-1 placeholder:text-white'/>
              <div className='relative group'>
              <button className='absolute right-0 mt-4 bg-[#0E1221] p-2 px-10 rounded-lg border-[3px] border-[#6A8AFF] border-opacity-50 transition duration-700 hover:opacity-100 hover:bg-[#F90625] hover:border-[#F90625] hover:ease-in-out'>
                <span className='font-montserratBold text-[25px] align-middle transition duration-700 group-hover:text-[#020615]'>Create</span> 
              </button>
              </div>
              </div>
            </div>

            
            
          </div>
          <div className='flex justify-between text-[15px] text-white'>
            <div className='absolute m-8 bottom-0 left-0'>
              <h1 className=' italic'>
              Ford vs Ferari  (2019)
              </h1>
            </div>
            <div className='absolute m-8 bottom-0 right-0 text-center'>
              <h1>
              Copyright &copy; <span className=' font-montserratBold'> mockbuzz</span>
              </h1>
              <h1>2022</h1>
            </div>
            </div>
        </div>
        
        
      </main>
    </>
  )
}
