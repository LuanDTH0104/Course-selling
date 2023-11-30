import React from 'react';
import CourseContainer from '../Components/CourseContainer';
import HeaderTemplate from '../DefaultTemplate/HeaderTemplate';
import CarouselHome from '../Components/Carousel';


function Home() {
    const array = [
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React cho người mới bắt đầu',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: './logo192.png',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        },
        {
            courseImage: 'https://ik.imagekit.io/tvlk/blog/2021/09/du-lich-anh-8-1024x576.jpg?tr=dpr-2,w-675',
            courseName: 'Lập trình React',
            coursePrice: '100.000đ',
            courseRate: 5
        }
    ];
return (
    <>
        <HeaderTemplate children={[<CarouselHome picArray={array}/>, <CourseContainer array={array} msg={'Khóa học bán chạy: '}/>]}/>
    </>
);
}


export default Home;