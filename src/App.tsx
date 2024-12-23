import { useState } from 'react'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState('Home')
  const [scrollDown, setScrollDown] = useState(false)

  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY > 0) {
      setScrollDown(true)
    }

    if (window.scrollY <= 0) {
      setScrollDown(false)
    }

    if (window.scrollY < 800) {
      setIsActive('Home')
    }

    if (window.scrollY >= 800) {
      setIsActive('Skills')
    }
  })

  return (
    <>
      <div className={`flex flex-row gap-8 bg-gray-100 py-4 px-16 fixed top-0 w-full z-20 ${scrollDown && 'drop-shadow-md'}`}>
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
        <div className='flex flex-row items-center justify-center w-full px-60 bg-slate-100 h-[100dvh]'>
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
        <div className='flex flex-col items-center w-full px-60 bg-slate-200 h-[93dvh] py-16'>
          <h1>
            Skills
          </h1>

          <table className='my-auto border-separate border-spacing-0 drop-shadow-xl'>
            <tr>
              <th className='rounded-tl-xl'>Backend</th>
              <th>Frontend</th>
              <th>Mobile</th>
              <th>Database</th>
              <th className='rounded-tr-xl'>Other</th>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>HTML</td>
              <td>React Native</td>
              <td>PostgreSQL</td>
              <td>Docker</td>
            </tr>
            <tr>
              <td>TypeScript</td>
              <td>CSS</td>
              <td>Expo</td>
              <td>MySQL</td>
              <td>AWS</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>JavaScript</td>
              <td>Nativewind</td>
              <td>SQLite</td>
              <td></td>
            </tr>
            <tr>
              <td>Java</td>
              <td>TypeScript</td>
              <td></td>
              <td>MongoDB</td>
              <td></td>
            </tr>
            <tr>
              <td>Node.js</td>
              <td>React</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Nest.js</td>
              <td>Tailwind</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Express.js</td>
              <td>Bootstrap</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className='rounded-bl-xl'>Flask</td>
              <td></td>
              <td></td>
              <td></td>
              <td className='rounded-br-xl'></td>
            </tr>
          </table>
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
