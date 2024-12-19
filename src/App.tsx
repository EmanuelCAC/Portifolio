import { useState } from 'react'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState<string>('Home')

  return (
    <>
      <div className="flex flex-row gap-8 bg-gray-100 py-4 px-16 static drop-shadow-md">
        <a
          href="#home"
          className={`text-black text-xl ${isActive == 'Home'? 'font-semibold' : 'font-normal'}`}
          onClick={() => {
            setIsActive('Home')
            console.log(isActive)
          }}
        >
          Home
        </a>
        <a
          href="#skills"
          className={`text-black text-xl ${isActive == 'Skills'? 'font-semibold' : 'font-normal'}`}
          onClick={() => {setIsActive('Skills')
            console.log(isActive)
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`text-black text-xl ${isActive == 'Projects'? 'font-semibold' : 'font-normal'}`}
          onClick={() => setIsActive('Projects')}
        >
          Projects
        </a>
        <a
          href="#"
          className={`text-black text-xl ${isActive == 'Contact'? 'font-semibold' : 'font-normal'}`}
          onClick={() => setIsActive('Contact')}
        >
          Contact
        </a>
      </div>

      <section id='home'>
        <div className='flex flex-row items-center justify-center w-full py-32 px-60 bg-slate-50'>
          <div className='flex flex-1 flex-col'>
            <h1 className='text-2xl font-semibold text-start text-black'>
              About me
            </h1>
            <hr className='w-[50px] border-black border-t-2'/>
            <p className='text-lg text-wrap  text-start pl-4 pt-2'>
            Systems analyst and developer, seeking the opportunity and challenges of working as a full-time developer. With strong teamwork skills and a willingness to learn new technologies, I am committed to adding value to the business and continuously growing in the development field
            </p>
          </div>
          <div className='flex flex-1 justify-center'>
              <img
                src='src/assets/eu-rosto.jpg'
                alt="Emanuel"
                className='rounded-full w-[70%]'
                />
          </div>
        </div>
      </section>

      <section id='skills'>
        <div>
          
        </div>
      </section>

      <section id='projects'>
        <div>
          
        </div>
      </section>
    </>
  )
}

export default App
