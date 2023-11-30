import React from 'react';

function Login() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center w-[30%]'>
                <div className='text-4xl font-semibold'>Đăng nhập</div>
                <div className='text-xl font-semibold'>Đăng nhập để theo dõi khóa học của bạn</div>
                <div className='flex flex-col justify-center items-center w-[80%]'>
                    <div className='text-xl font-semibold'>Tài khoản</div>
                    <input className='border-2 border-gray-400 rounded-md w-[100%] h-[50px] px-[10px] outline-none' type='text' placeholder='Nhập tài khoản' />
                </div>
                <div className='flex flex-col justify-center items-center w-[80%]'>
                    <div className='text-xl font-semibold'>Mật khẩu</div>
                    <input className='border-2 border-gray-400 rounded-md w-[100%] h-[50px] px-[10px] outline-none' type='password' placeholder='Nhập mật khẩu' />
                </div>
                <div className='flex flex-col justify-center items-center w-[80%]'>
                    <button className='bg-blue-500 text-white font-semibold rounded-md w-[100%] h-[50px]'>Đăng nhập</button>
                </div>
                <div className='flex flex-col justify-center items-center w-[80%]'>
                    <div className='text-xl font-semibold'>Bạn chưa có tài khoản?</div>
                    <button className='bg-blue-500 text-white font-semibold rounded-md w-[100%] h-[50px]'>Đăng ký</button>
                </div>
            </div>
        </div>
    ) ;
        
    
}

export default Login;