import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

function Register() {
    const email = React.useRef();
    const password = React.useRef();
    const tel = React.useRef();
    const address = React.useRef();
    const navigate = useNavigate();

    async function handleRegister() {
        console.log(email.current.value);
        axios.post('http://localhost:3001/hoc-vien', {
            email: email.current.value,
            password: password.current.value,
            username: email.current.value,
            phone: tel.current.value,
            address: address.current.value,
            avatar: '123'
        }).then(res => console.log(res)).then(data => console.log(data)).catch(err => console.log(err));
        
    }




    return (
        <div className='flex flex-row items-center h-screen w-[90%] ml-[5%] lg:w-[75%] lg:ml-[12.5%] m-auto'>
            {/* Login form */}
            <div className='border border-white h-auto w-full md:w-[50%] md:h-[90%] shadow-xl shadow-slate-500 rounded-xl md:rounded-l-xl p-2'>
                <div className='text-2xl font-semibold p-[5%] text-center'>Chào mừng bạn đến với ULearn</div>
                <div className='italic ml-[7%]'>Đăng kí tài khoản người dùng mới</div>
                {/* đăng nhập */}
                <div className='flex mt-[5%] ml-[7%] flex-col items-start'>
                    <label htmlFor='email' className='text-normal '>Email</label>
                    <input type='email' id='email' name='email' placeholder='Nhập email của bạn' ref={email} className='w-[95%] h-[10%] border border-black rounded p-2 bg-[#374151] text-white'></input>
                    <label htmlFor='password' id='password' className='text-normal '>Mật khẩu</label>
                    <input type='password' name='password' placeholder='******' ref={password} className='w-[95%] h-[10%] border border-black rounded p-2 bg-[#374151] text-white'></input>
                    <label htmlFor='tel' id='tel' className='text-normal '>Số điện thoại</label>
                    <input type='tel' name='tel' placeholder='Điền số điện thoại của bạn' ref={tel} className='w-[95%] h-[10%] border border-black rounded p-2 bg-[#374151] text-white'></input>
                    <label htmlFor='address' id='address' className='text-normal '>Địa chỉ của bạn</label>
                    <input type='address' name='address' placeholder='Điền địa chỉ của bạn' ref={address} className='w-[95%] h-[10%] border border-black rounded p-2 bg-[#374151] text-white'></input>
                    <button type='submit' onClick={() => handleRegister()} className='mt-2 w-[95%] h-[10%] border border-white rounded p-2 bg-indigo-600 text-white'>Đăng kí</button>
                </div>
                <div className='flex justify-center items-center mt-[5%]'>
                    <div className='text-normal'>Bạn đã có tài khoản?</div>
                    <Link to={'/login'} className='font-semibold no-underline ml-2'>Đăng nhập</Link>
                </div>
            </div>
            {/* Banner */}
            <div className='bg-indigo-600 w-[50%] h-[90%] shadow-xl shadow-slate-500 rounded-r-xl text-center hidden md:block'>
                <div className='flex flex-col items-center'>
                    <img src='./logo192.png' alt='logo' className='w-auto h-auto'></img>
                </div>
                <div className='text-white text-3xl font-semibold italic p-2'>
                    <Typewriter
                        options={{
                            strings: ['<span>ULearn Nguồn học online lớn nhất Việt Nam</span>'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 4000
                        }}
                    />
                </div>
            </div>
        </div>
    );

}

export default Register;