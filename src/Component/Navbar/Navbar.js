import React, {useState,useRef,useContext,useEffect} from 'react';
import './Navbar.css'
import {FaSearch} from 'react-icons/fa'
import {ImCancelCircle} from 'react-icons/im'
import {Link,useParams,useLocation} from 'react-router-dom'
import {IoMdSchool} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GiCancel} from 'react-icons/gi'

function Navbar({func,search}) {

    const navbarlist = ['HOME', 'COURSES', "ABOUT", "CONTACT"]

    const location = useLocation()
    useEffect(()=>{

       let a = navbarlist.some(item=>{
            return (location.pathname === `/${item=== "HOME" ? '': item.toLowerCase()}`)
        })
        if (a === false){
            SetActiveClass('')
        }
        else{
            let a = location.pathname.slice(1).toUpperCase();
            console.log(a)
            SetActiveClass(a == "" ? 'HOME':a)
        }



    },[location])

    const [activeclass, SetActiveClass] = useState('HOME')

    function search2(e){
        func(e.target.value)
    }

    function setClass(item) {
        setNavbarTwo()
        SetActiveClass(item)
    }

    const Ref = useRef()

    function changeBtn(e){
        Ref.current.focus()
        let a = document.getElementById('btn-search')
        a.classList.add('clicked')
    }
    function changeBtntwo(e){
        e.stopPropagation()
        let a = document.getElementById('btn-search')
        a.classList.toggle('clicked')
    }


        window.addEventListener('scroll', function() {
            setNavbarTwo()
            if (window.scrollY >50) {
                document.getElementById('navbar').classList.add('navbar2');

               let navbar_height = document.querySelector('.navbar').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
            } else {
                document.getElementById('navbar').classList.remove('navbar2');
                document.body.style.paddingTop = '0';
            }
        });




    const [mini,setMini] = useState(true)

 function setNavbar(){
        let a  =document.getElementById('navbar-mini')
        a.classList.add('navbar-mini2')
     setMini(false)
 }
    function setNavbarTwo(){
        let a  =document.getElementById('navbar-mini')
        a.classList.remove('navbar-mini2')
        setMini(true)
    }




    return (
        <div>
            <div  id={'navbar'} className={'navbar'}>
                <div className={'nav-left'}>
                    <IoMdSchool className={'logo'}/>
                    <h2>MY <br/> EDUCATION</h2>
                </div>
                <div className={'nav-middle'}>
                    <div  onClick={changeBtn} id={'btn-search'} className={'btn-search'}>
                        <div className="btn-wrapper">
                            <div className="btn-front">Search <FaSearch className={'icon'}/></div>
                            <div className="btn-top"></div>
                            <div className="btn-right"></div>
                            <div className="btn-bottom"></div>
                            <div className="btn-left"></div>
                            <div className="btn-back">
                                <div className="input-group">
                                    {console.log(search)}
                                    <input ref={Ref} value={search} onChange={search2}  className={'input-search'} type="text"/>
                                    <ImCancelCircle className={'icon2'} onClick={changeBtntwo}/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'nav-right'}>
                    <ul>
                        {
                            navbarlist.map(item =>
                                <Link  className={ `li ${activeclass == item ? 'active' : ''}`} onClick={() => setClass(item)} to={`/${item=== "HOME" ? '': item.toLowerCase() }`}>
                                    <li>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        {item}
                                    </li>
                                </Link>
                            )
                        }
                        <div className={activeclass === '' ? "indicator2" : 'indicator'}
                        ></div>
                    </ul>
                </div>
                <div className="menu">
                    <GiHamburgerMenu onClick={setNavbar} className={'menu-icon'}/>

                </div>
            </div>



            <div id={'navbar-mini'} className={'navbar-mini'}>
                <div className={'menu'}>
                    <GiCancel onClick={setNavbarTwo} className={'menu-icon'}/>
                </div>
                <ul>
                        {
                            navbarlist.map(item =>
                                <Link  className={ `mini-li`} onClick={() => setClass(item)} to={`/${item=== "HOME" ? '': item.toLowerCase() }`}>
                                    <li>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        {item}
                                    </li>
                                </Link>
                            )
                        }

                    </ul>


            </div>


        </div>

    );
}

export default Navbar;
