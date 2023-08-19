* Link vs NavLink

<Link> ใช้สร้างลิงก์ที่ไม่สนใจสถานะของ URL หรือการตรวจสอบลิงก์ Active. ลิงก์ที่สร้างด้วย <Link> จะเป็นลิงก์ที่สามารถกดเพื่อเปลี่ยนเส้นทางไปยัง URL ที่ระบุใน to โดยที่ไม่มีการตรวจสอบเส้นทางปัจจุบันหรือการเปรียบเทียบเส้นทาง
<NavLink> ใช้สร้างลิงก์แบบเจาะจงซึ่งสามารถตรวจสอบเส้นทางปัจจุบันและแสดงสถานะ Active ได้. ตัวอย่างเช่นเมื่อคุณใช้ <NavLink> เพื่อสร้างลิงก์ Active ลิงก์จะได้รับคลาส CSS ที่คุณกำหนดให้เมื่อเส้นทางปัจจุบันเป็นเส้นทางของลิงก์นั้น ๆ

สรุป <NavLink> จะรู้ว่า Link ตัวไหน active อยู่
แต่ <Link> จะไม่รู้ว่า Link ตัวไหน active อยู่

Navigate ใช้ในการเปลี่ยนเส้นทางหลังจากการประมวลผล


0. install project
    npm create vite@latest
    project name: reactjs-router-tutorial
    reactjs, javascript

    cd reactjs-router-tutorial
    npm install
    npm run dev

    npm i react-router-dom@6

    ปัจจุบันในการจัดการเส้นทางในแอปพลิเคชันเว็บด้วย React Router มี 3 ประเภทหลักของ Router:

    BrowserRouter: ใช้ในการจัดการเส้นทางในแอปพลิเคชันเว็บแบบสมจริง (real URLs) โดยอาศัยการใช้งานของ History API ในการเปลี่ยน URL โดยไม่ต้องโหลดหน้าเว็บใหม่ นี่เป็นส่วนที่ส่งค่า URL จริงไปยังเซิร์ฟเวอร์และตอบกลับด้วยหน้าเว็บที่ถูกต้อง

    HashRouter: ใช้ในการจัดการเส้นทางด้วยการใช้งานแท็ก window.location.hash ที่เปลี่ยนไปเมื่อเส้นทางเปลี่ยน นี่เป็นการใช้เส้นทางที่มีการกำหนดด้วยเครื่องหมาย # หลัง URL เพื่อไม่ให้เกิดการร้องขอใหม่จากเซิร์ฟเวอร์เมื่อเปลี่ยนเส้นทาง

    MemoryRouter: ใช้สำหรับการทดสอบและการใช้งานที่ไม่เกี่ยวข้องกับ URL จริง โดยไม่มีการเปลี่ยนแปลง URL จริง แต่จะใช้กับเมมโมรี่ประเภทของเส้นทาง

    การใช้งาน exact และ end ใน <NavLink> ของ React Router จะมีลักษณะที่คล้ายคลึงกันเนื่องจากทั้งคู่เป็นพารามิเตอร์ที่ใช้เพื่อกำหนดเงื่อนไขในการตรวจสอบลิงก์ Active แต่มีหน้าที่และการทำงานที่เล็กน้อยต่างกัน:

    exact: เมื่อใช้ exact กับลิงก์ ลิงก์จะเป็น Active ถ้า การใช้งาน exact และ end ใน <NavLink> ของ React Router จะมีลักษณะที่คล้ายคลึงกันเนื่องจากทั้งคู่เป็นพารามิเตอร์ที่ใช้เพื่อกำหนดเงื่อนไขในการตรวจสอบลิงก์ Active แต่มีหน้าที่และการทำงานที่เล็กน้อยต่างกัน:

        exact: เมื่อใช้ exact กับลิงก์ ลิงก์จะเป็น Active ถ้าเส้นทางของ URL ตรงกันแม้แค่ครั้งเดียว นั่นหมายความว่าเมื่อเราใช้ exact ลิงก์จะถูกกำหนดให้ Active ก็ต่อเมื่อ URL ตรงกันแบบแม่นยำ ไม่มีเส้นทางย่อย
            <NavLink exact to="/about" activeClassName="active-link">
                About
            </NavLink>
        ถ้า URL เป็น /about ลิงก์จะเป็น Active แต่ถ้า URL เป็น /about/team ลิงก์จะไม่เป็น Active


        end: เมื่อใช้ end กับลิงก์ ลิงก์จะเป็น Active ถ้า URL เริ่มต้นด้วยเส้นทางใน to แต่สามารถมีเส้นทางย่อยเพิ่มเติมได้
        <NavLink to="/about" end activeClassName="active-link">
            About
        </NavLink>
        ถ้า URL เป็น /about หรือ /about/team ลิงก์จะเป็น Active แต่ถ้า URL เป็น /about-us ลิงก์จะไม่เป็น Active

    ขั้นตอนการใช้งาน router
    1. BrowserRouter ครอบ component ตัวอื่นๆ

1. creat folders

    src > pages > Home.jsx
        import React from 'react'

        const Home = () => {
            return (
                <div>
                    This is the Home Page
                </div>
            )
        }

        export default Home

    src > pages > About.jsx

        import React from 'react'

        const About = () => {
            return (
                <div>
                    This is the About Page
                </div>
            )
        }

        export default About
            
    src > pages > Contact.jsx

        import React from 'react'
        import {Link} from 'react-router-dom'

        const Contact = () => {
            return (
                <div>
                    <p>This is the Contact Page</p>
                    <Link to = '/'>Back to Home Page</Link>
                </div>
            )
        }

        export default Contact

    src > pages > Error.jsx

        import React from 'react'

        const Error = () => {
            return (
                <div>
                    This is the Error Page
                </div>
            )
        }

        export default Error

2. แก้ไข index.css

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

3. แก้ไข app.css

    .container{

    }

    .nav-active{
        color: red;
        font-weight: bold;
    }

    nav{
        width: 100%;
        border: solid black 1px;
        background: black;
        color: white;
        padding: 1rem;
    }

    nav div{
        display: flex;
        gap: 2rem;
    }

    nav div a{
        color: white;
        text-decoration: none;
    }

    footer{
        position:fixed;
        bottom:0;
        left:0;
        width: 100%;
        border: black solid 1px;
        background: #000;
        color: white;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

4. แก้ไข App.jsx

    import { useState } from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    import './App.css'
    import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'

    // Pages
    import Home from './pages/Home'
    import About from './pages/About'
    import Contact from './pages/Contact'
    import Error from './pages/Error'


    function App() {
    const [count, setCount] = useState(0)

    let activeClassName = "nav-active"

    return (
        <BrowserRouter>
            <div className='container'>
                <nav>
                    <div>
                        <NavLink end to = "/" className={({isActive})=> isActive ? activeClassName : undefined}>Home</NavLink>
                        <NavLink to = "/about" className={({isActive})=> isActive ? activeClassName : undefined}>About</NavLink>
                        <NavLink to = "/contact" className={({isActive})=> isActive ? activeClassName : undefined}>Contact</NavLink>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
                <footer>
                    <div>footer</div>
                </footer>
            </div>
        </BrowserRouter>
    )
    }

    export default App

4. การ redirecting ไปหน้าอื่น มี 2 วิธี 
    1.Nevigate

        -App.jsx

            <nav>
            <div>
                <NavLink end to = "/" className={({isActive})=> isActive ? activeClassName : undefined}>Home</NavLink>
                <NavLink to = "/about" className={({isActive})=> isActive ? activeClassName : undefined}>About</NavLink>
                <NavLink to = "/contact" className={({isActive})=> isActive ? activeClassName : undefined}>Contact</NavLink>
                <NavLink to = "/dashboard" className={({isActive})=> isActive ? activeClassName : undefined}>Dashboard</NavLink>
            </div>
            </nav>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/dashboard' element={<Navigate to = "/"/>}/>
            <Route path='*' element={<Error/>}/>
            </Routes>

    2.ใช้ hook useNevigate

        -About.jsx

            import React from 'react'
            import { useNavigate } from 'react-router-dom'

            const About = () => {

            let navigate = useNavigate()

            const handleClick = () => {
                navigate('/')
            }
            
            return (
                <div>
                    This is the About Page
                    <br />
                    <button onClick = {handleClick}>redirect to homepage</button>
                </div>
            )
            }

            export default About



            export default About

5. การส่ง state with router 
    
    ตัวอย่างการส่ง state จากหน้า contact ไปหน้า home ด้วย Link

        -contact.jsx

            import React from 'react'
            import {Link} from 'react-router-dom'

            const Contact = () => {
            return (
                <div>
                    <p>This is the Contact Page</p>
                    <Link to = '/'>Back to Home Page</Link>
                    <br />
                    <Link to = '/' state = {"this is state data"}>Back to home page and send state</Link>
                </div>
            )
            }

            export default Contact

        -home.jsx ใช้ useLocation

            import React from 'react'
            import {useLocation} from 'react-router-dom'

            const Home = () => {
            let location = useLocation()
            return (
                <div>
                    This is the Home Page
                    <br />
                    {location.state}
                </div>
            )
            }

        export default Home

    ตัวอย่างการส่ง state จากหน้า dashboard ไปหน้า home ด้วย Navigate
    
        -app.jsx

            <Route path='/dashboard' element={<Navigate to = "/" state={"From dashboard"}/>}/>

        -home.jsx

            import React from 'react'
            import {useLocation} from 'react-router-dom'

            const Home = () => {
            let location = useLocation()
            return (
                <div>
                    This is the Home Page
                    <br />
                    {location.state}
                </div>
            )
            }

            export default Home
    
    ตัวอย่างการส่ง state จากหน้า about ไปหน้า home ด้วย Navigate

        -about.jsx

            import React from 'react'
            import { useNavigate } from 'react-router-dom'

            const About = () => {

            let navigate = useNavigate()

            const handleClick = () => {
                navigate('/', {state: 'from the about page'})
            }
            
            return (
                <div>
                This is the About Page
                <br />
                <button onClick = {handleClick}>redirect to homepage</button>
                </div>
            )
            }

            export default About
        
        -home.jsx

            import React from 'react'
            import {useLocation} from 'react-router-dom'

            const Home = () => {
            let location = useLocation()
            return (
                <div>
                This is the Home Page
                <br />
                {location.state}
                </div>
            )
            }

            export default Home

6. การ protect route จะเห็นได้ว่าหากไม่ทำการ login จะใช้ path welcome ไม่ได้

    ทำการสร้างปุ่ม login ที่หน้า home

        import React from 'react'
        import {useLocation} from 'react-router-dom'

        const Home = ({login}) => {
        let location = useLocation()
        return (
            <div>
            This is the Home Page
            <button onClick={login}>Login</button>
            </div>
        )
        }

        export default Home

    ทำการสร้าง src > pages > welcome.jsx สำหรับเมื่อผู้ใช้งานกด login เข้ามาแสดงข้อความ welcome และมีปุ่ม logout

        -welcome.jsx

            import React from 'react'

            const Welcome = ({logout}) => {
                return (
                    <div>
                        <h3>welcome user</h3>
                        <button onClick={logout}>logout</button>
                    </div>
                )
            }

            export default Welcome
    
    ทำการ import หน้า welcome สร้าง state เก็บสถานะ login
    สร้าง function 
    เปลี่ยนสถานะเป็น true เมื่อกด login
    เปลี่ยนสถานะเป็น false เมื่อกด logout
    จากนั้นให้ route path = '/' ตรวจสถานะ login หากมีสถานะ true แสดงหน้า welcome หากไม่มี แสดงหน้า home และส่ง function ผ่าน prop เพื่อเปลี่ยนสถานะเมื่อคลิก login <Route path='/' element={loggedIn ?  <Navigate to = "/welcome"/>:<Home login = {handleLogin}/>}/>
    จากนั้นให้ route path = '/welcome' ตรวจสถานะ login หากมีสถานะ true แสดงหน้า welcome และส่ง function ผ่าน prop เพื่อเปลี่ยนสถานะเมื่อคลิก logout, หากสถานะเป็น false แสดงหน้า home <Route path='/Welcome' element={loggedIn ? <Welcome logout={handleLogout}/>:<Navigate to = "/"/>}/>

        -App.jsx

            import { useState } from 'react'
            import reactLogo from './assets/react.svg'
            import viteLogo from '/vite.svg'
            import './App.css'
            import {BrowserRouter, NavLink, Routes, Route, Navigate} from 'react-router-dom'

            // Pages
            import Home from './pages/Home'
            import About from './pages/About'
            import Contact from './pages/Contact'
            import Error from './pages/Error'
            import Welcome from './pages/Welcome'

            function App() {
            const [loggedIn, setLoggedIn] = useState(null)

            function handleLogin(){
                setLoggedIn(true)
                console.log(loggedIn)
            }
            function handleLogout(){
                setLoggedIn(false)
                console.log(loggedIn)
            }

            let activeClassName = "nav-active"

            return (
                <BrowserRouter>
                <div className='container'>
                    <nav>
                    <div>
                        <NavLink end to = "/" className={({isActive})=> isActive ? activeClassName : undefined}>Home</NavLink>
                        <NavLink to = "/about" className={({isActive})=> isActive ? activeClassName : undefined}>About</NavLink>
                        <NavLink to = "/contact" className={({isActive})=> isActive ? activeClassName : undefined}>Contact</NavLink>
                        <NavLink to = "/dashboard" className={({isActive})=> isActive ? activeClassName : undefined}>Dashboard</NavLink>
                    </div>
                    </nav>
                    <Routes>
                        <Route path='/' element={loggedIn ?  <Navigate to = "/welcome"/>:<Home login = {handleLogin}/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/Contact' element={<Contact/>}/>
                        <Route path='/Welcome' element={loggedIn ? <Welcome logout={handleLogout}/>:<Navigate to = "/"/>}/>
                        <Route path='/dashboard' element={<Navigate to = "/" state={"From dashboard"}/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                    <footer>
                    <div>footer</div>
                    </footer>
                    </div>
                </BrowserRouter>
            )
            }

            export default App
    
7. การ protect route ด้วย useNavigate

    -App.jsx

        import {useNavigate} from 'react-router-dom'
        <button onClick = {()=>{
            login()
            Navigate('/dashboard')
        }}>Login with useNavigate</button>
    
8. การสร้าง route ที่ซ้อนกัน (Nested Route)

    -App.jsx

        <Route path='/Welcome' element={loggedIn ? <Welcome logout={handleLogout}/>:<Navigate to = "/"/>}>
            <Route path='settings' element={<p>This is the nested settings route</p>} />
        </Route>

    -Welcome.jsx ทำการใช้ Outlet เพื่อให้ link ใช้งานได้, มีการใช้ Link to = '/settings' เพื่อ link ไปยัง /welcome/settings

        import React from 'react'
        // Outlet is component for render child route elements
        import {Outlet, Link} from 'react-router-dom'
        const Welcome = ({logout}) => {
        return (
            <div>
                <h3>welcome user</h3>
                <Link to="settings">Setting</Link>
                <Outlet/>
                <button onClick={logout}>logout</button>
            </div>
        )
        }

        export default Welcome

9. useParams
    
    -App.jsx

        // /profile/1234
        <Route path='/profile'>
            <Route path=':userId' element={<Profile/>}/>
        </Route>

    -src > component > Profile.jsx

        import React from 'react'
        import { useParams } from 'react-router-dom'

        const Profile = () => {

        let {userId} = useParams()
        return (
            <div>
                <h2>Profile</h2>
                <p>The id of this user is {userId}</p>
            </div>
        )
        }

        export default Profile


        
    