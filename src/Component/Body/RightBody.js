import React from 'react';
import './rigthbody.css'
import {kurs} from "../../data";
import {AiTwotoneStar} from 'react-icons/ai'
function RightBody(props) {
    return (
        <div className={'rightbody'}>
            <h2 className={'rb-text'}>Reyting</h2>
            <div className={'top-educenter'}>
                {
                    kurs.sort(function(a, b){return b - a}).map(item=>
                        <div className={'course'}>

                            <div className={'top-footer'}>
                                <div>
                                    <div className={'top-center'}>
                                        <p>
                                            {item.name}
                                    </p>
                                        <div>
                                            <AiTwotoneStar className={item.persons >= 3000 ? 'center-icon' : "center-icon2"}/>
                                            <AiTwotoneStar className={'center-icon'}/>
                                            <AiTwotoneStar className={'center-icon'}/>
                                            <AiTwotoneStar className={'center-icon'}/>
                                            <AiTwotoneStar className={'center-icon'}/>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default RightBody;
