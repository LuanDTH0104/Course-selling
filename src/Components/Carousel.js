import Carousel from 'react-bootstrap/Carousel';

function CarouselHome({ picArray }) {
    // Xử lí bất đồng bộ trong việc lấy ảnh từ API
    async function getPic() {
        try {
            const response = await fetch('https://fastly.picsum.photos/id/782/800/400.jpg?hmac=nP35F4_SV_cd80TrJjnIuXSc8OzyeQgzGZQaWtPbMME');
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Carousel slide={true} className='border rounded-xl ml-[5%] w-[90%] md:ml-[20%] md:w-[60%]'>
                {
                    picArray.map((item, index) => {
                        return (
                            <Carousel.Item>
                                <img key={index} className="d-block w-100" src={getPic()} alt="First slide" />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            <br />
        </>
    );
}

export default CarouselHome;