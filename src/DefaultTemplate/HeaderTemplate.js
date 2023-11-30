import React from 'react';
import Header from '../Components/Header';
function HeaderTemplate({ children, keyword }) {
    return (
        <>
            <Header key={keyword} />
            <br />
            <br />
            <br />
            <br />
            {Array.of(children).map((child, index) => {
                return (
                    <>
                    <div key={index}>
                        {child}
                    </div>
                    <br />
                    </>
                )
            })}
        </>
    )
}


export default HeaderTemplate;