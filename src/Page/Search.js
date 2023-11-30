import React from 'react';
import HeaderTemplate from '../DefaultTemplate/HeaderTemplate';
import CourseContainer from '../Components/CourseContainer';
import { useParams } from 'react-router-dom';

function Search(){
    const {keyword} = useParams();


    return(
        <HeaderTemplate key={keyword} children={<CourseContainer msg={'Kết quả tìm kiếm khóa học: '} array={null} />}/>
    )
}

export default Search;