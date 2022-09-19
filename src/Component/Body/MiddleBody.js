import React from 'react';
import './middlebody.css'
import {IoSchoolSharp} from "react-icons/io5";
import {HiLocationMarker} from "react-icons/hi";
import {Link} from "react-router-dom";
import {kurs} from "../../data";
import {useState,useContext,useEffect} from "react";
import {FaSearch} from "react-icons/fa";
import {UserContext} from "../../App";
function MiddleBody(props) {


    useEffect(()=>{
        let a = kurs.length/2
        setpages(a)
    },[])

    const searcher = useContext(UserContext)
    const [sorter,SetSort] = useState('all')



    const [pages,setpages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
        const startIndex = (currentPage-1) * 2 - 2;
        const endIndex = startIndex + 1;

    }
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        const startIndex = (currentPage+1) * 2 - 2;
        const endIndex = startIndex + 1;
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
        const startIndex = (pageNumber) * 2 - 2;
        const endIndex = startIndex + 2;
    }
    const [isCorrect,setCorrect] = useState([])




    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pages) * pages;
        return new Array(Math.round(pages)).fill().map((_, idx) => start + idx + 1);

    }

    const viloyat = ['Andijon','Buxoro',"Samarqand",'Toshkent',
        'Surxondaryo','Qashqadaryo',"Sirdaryo",'Jizzax','Navoiy','Xorazm','Farg\'ona','Namangan','Qoraqalpog\'iston']

    return (
        <div className={'middlebody'}>
            {console.log(searcher)}
                <div className={'mb-header'}>
                    <h2 className={'mb-h-text'}>Educations</h2>
                    <select  onChange={(e)=>SetSort(e.target.value)} value={sorter} className={'select'} name="" id="">
                        <option value="all">Viloyatni tanlang</option>
                        {
                            viloyat.sort().map(item=>
                                <option value={item}>{item}</option>
                            )

                        }
                    </select>
                </div>
            {
                kurs.filter(item1=>{
                    if (sorter === 'all'){
                        if (searcher===''){
                            return item1
                        }
                        else if(item1.address.toUpperCase().includes(searcher.toUpperCase()) || item1.name.toUpperCase().includes(searcher.toUpperCase())){
                            return item1
                        }
                    }
                    else if(sorter === item1.address){
                        if (searcher===''){
                            return item1
                        }
                        else if(item1.address.toUpperCase().includes(searcher.toUpperCase()) || item1.name.toUpperCase().includes(searcher.toUpperCase())){
                            return item1
                        }
                    }
                }).slice((currentPage-1)*2,((currentPage-1)*2)+2).map(item=>
                    <div>
                        <div className={'mb-body'}>
                            <div className={'mb-body-img'}>
                                <img className={'img-fluid'} src={item.img} alt=""/>
                            </div>
                            <div className={'mb-body-info'}>
                                <div>
                                    <p className={'mb-b-text'}>
                                        <strong>{item.name}</strong>  - lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, nobis, soluta. Aspernatur doloribus esse quae quas quia quis temporibus totam?

                                    </p>

                                </div>
                                <div className={'mb-center-info'}>
                                    <div className={'mb-center'}>
                                        <HiLocationMarker className={'mb-icon'}/>
                                        {item.address}
                                    </div>
                                </div>
                                <Link to={`/batafsil/${item.id}`}>
                                    <div className={'batafsil'}>
                                        <h2>Batafsil</h2>
                                        <div className="arrows-body">
                                            <div className="arrow"></div>
                                            <div className="arrow"></div>
                                            <div className="arrow"></div>
                                        </div>
                                    </div>
                                </Link>

                            </div>

                        </div>
                        <div className="mb-footer">

                                <marquee className={'text-scroll'} behavior="scroll" direction="left">
                                    <h2>
                                        {
                                            kurs.map(item=>{
                                                    return <p>{item.name}</p>
                                                }
                                            )
                                        }
                                        {
                                            kurs.map(item=>{
                                                    return <p>{item.name}</p>
                                                }
                                            )
                                        }
                                        {
                                            kurs.map(item=>{
                                                    return <p>{item.name}</p>
                                                }
                                            )
                                        }
                                    </h2>


                                </marquee>





                        </div>
                    </div>

                )
            }

                <div className="pagination flex-wrap">
                    <button onClick={goToPreviousPage}
                            className={` prev ${currentPage === 1 ? 'disabled' : ''}`}
                            disabled={currentPage===1 ? true : false}>Previous</button>
                    {getPaginationGroup().map((item, index) =>

                        <button
                            key={index}
                            onClick={changePage}
                            className={`paginationItem ${currentPage === item ? 'activePage' : null}
                                        ${
                                isCorrect.some(number=>{
                                        return item===number
                                    }
                                ) ? 'checked':''
                            }
                                    `}
                        >
                            <span>{item}</span>
                        </button>
                    )}
                    <button  onClick={goToNextPage}
                             className={` next ${currentPage === Math.round(pages) ? 'disabled' : ''}`}
                             disabled={currentPage=== pages ? true : false}>Next</button>
                </div>



        </div>
    );
}

export default MiddleBody;
