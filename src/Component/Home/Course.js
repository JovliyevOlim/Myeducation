import React from 'react';
import {kurs} from "../../data";
import {BsCalendarDateFill} from "react-icons/bs";
import {IoSchoolSharp} from "react-icons/io5";
import {HiLocationMarker} from "react-icons/hi";
import './course.css'
function Course(props) {
    return (
        <div className={'leftbody2'}>
            <div>
                <h2 className={'lb-text'}>Tanlov</h2>
            </div>
            <div className={'kurslar'}>
                {
                    kurs.map(item=>
                        <div className={'courselar'}>
                            <h2 className={'course-name'}>{item.coursename}</h2>
                            <p className={'course-text'}>
                                Lorem ipsum dolor sit amet, consec adipisicing elit.
                            </p>
                            <div className={'course-center'}>
                                <BsCalendarDateFill className={'course-icon'}/>
                                {item.data}
                            </div>
                            <div className={'course-footer'}>
                                <div>
                                    <div className={'course-center'}>
                                        <IoSchoolSharp className={'course-icon'}/>
                                        {item.name}
                                    </div>
                                    <div className={'course-center'}>
                                        <HiLocationMarker className={'course-icon'}/>
                                        {item.address}
                                    </div>
                                </div>
                                <div>
                                    <button className={'btn-green'}>Batafsil</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default Course;
