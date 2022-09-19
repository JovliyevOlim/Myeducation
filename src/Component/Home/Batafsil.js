import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import './batafsil.css'
import {kurs,development} from "../../data";
import {BiCube} from 'react-icons/bi'
function Batafsil() {

    const params  = useParams()

    const [data,setData] = useState([])
    useEffect(()=>{
       let a = kurs.filter(item=>{
            if(item.id == params.id){
                return item
            }
        })
        setData(a)
    },[])



    return (
        <div className={'b-body'}>
            <div className={'text-run'}>
                <marquee className={'text-scroll'} behavior="scroll" direction="up">
                    <h2>
                        {
                            data.map(item=>{
                                    return item.name
                                }
                            )
                        }
                    </h2>


                </marquee>

            </div>
            {
                data.map(item=>
                    <div className={'info'}>
                        <div key={item.id} className={'education-info'}>
                            <div >
                                <img className={'info-img'} src={item.img} alt=""/>
                            </div>
                            <div>
                                <h1 className={'batafsil-text'}> <strong >{item.name}</strong></h1>
                                <p className={'edu-text'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, asperiores debitis delectus deleniti deserunt dolorum ea fuga in odit officiis perspiciatis, quia quo quod repellendus tempora tempore temporibus voluptate voluptates. Aliquam eius excepturi maiores perspiciatis quam quia soluta vel voluptatibus.
                                </p>
                                <h3 className={'manzil'}>
                                    Manzil : {item.address}
                                </h3>
                            </div>
                        </div>
                    </div>

                )
            }
            <div className={'text-run'}>
                <marquee className={'text-scroll'} behavior="scroll" direction="down">
                    <h2>
                        {
                            data.map(item=>{
                                    return item.name
                                }
                            )
                        }
                    </h2>


                </marquee>

            </div>


        </div>
    );
}

export default Batafsil;
