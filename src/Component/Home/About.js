import React from 'react';
import {IoMdSchool} from "react-icons/io";
import './about.css'
function About(props) {
    return (
        <div className={'about'}>
            <h2 className={'about-text'}>About</h2>
            <div className={'about-div'}>
                <div className={'about-col'}>
                    <IoMdSchool className={'about-logo'}/>
                </div>
                <div className={'about-col'}>
                    <div>
                        <h2>MY  EDUCATION</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti modi nesciunt obcaecati sequi? Aliquid asperiores autem delectus deserunt earum, ex excepturi fugit id itaque nihil quisquam, repellat sapiente tempora veniam voluptatum. Ab adipisci asperiores aspernatur aut, cupiditate delectus dicta distinctio dolore earum error eum explicabo fugiat illum inventore ipsa iste iure laboriosam natus non officiis quia quis sed suscipit tenetur totam ullam vero voluptate. Ab, asperiores atque blanditiis corporis delectus dolorem error explicabo fugit hic iure laboriosam molestiae natus necessitatibus nobis quasi quidem repellendus sit voluptates? Ab adipisci delectus explicabo laboriosam laborum odio officia qui quos sunt totam. Consectetur, ex.</p>

                    </div>
            </div>
            </div>

        </div>
    );
}

export default About;
