import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import axios from 'axios';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const remember = React.useRef();
    
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/hoc-vien/login', {
            email: email,
            password: password
        }).then(res => {
            // kiểm tra response phản hồi từ server
            if(res.status === 200){
                if(remember.current.checked){
                    localStorage.setItem('email', JSON.stringify(res.data.data.email));
                    localStorage.setItem('password', JSON.stringify(res.data.data.password));
                }
                sessionStorage.setItem('user', JSON.stringify(res.data.data));
                navigate('/');
            }
        }).catch(err => {
            console.log(err);
        });
    }



    return (
        <div className='flex flex-row items-center h-screen w-[90%] ml-[5%] lg:w-[75%] lg:ml-[12.5%] m-auto'>
            {/* Login form */}
            <div className='border border-white h-auto w-full md:w-[50%] md:h-[90%] shadow-xl shadow-slate-500 rounded-xl md:rounded-l-xl p-2'>
                <div className='text-2xl font-semibold p-[5%] '>Chào mừng trở lại</div>
                <div className='flex flex-row w-[95%] justify-between ml-[5%] px-3'>
                    <div className='p-2 border-b-2 text-sm lg:text-center border-black '>
                        <button className='bg-[#374151]  p-2 rounded-xl border border-white text-white'><i className="fa-brands fa-google  p-2"></i><span className='hidden lg:inline'>Đăng nhập bằng</span> Google</button>
                    </div>
                    <div className='p-2 border-b-2 text-sm lg:text-center border-black'>
                        <button className=' bg-[#374151]  p-2 rounded-xl border border-white text-white'><i className="fa-brands fa-square-facebook p-2"></i><span className='hidden lg:inline'>Đăng nhập bằng</span>  Facebook</button>
                    </div>
                </div>
                {/* đăng nhập */}
                <div className='flex mt-[5%] ml-[7%] flex-col items-start'>
                    <label htmlFor='email' className='text-normal '>Email</label>
                    <input type='email' id='email' name='email' placeholder='Nhập email của bạn' onChange={e => setEmail(e.target.value)} className='w-[95%] h-[10%] border border-black rounded p-2 bg-[#374151] text-white'></input>
                    <label htmlFor='password' id='password' className='text-normal '>Mật khẩu</label>
                    <input type='password' name='password' placeholder='******' onChange={e => setPassword(e.target.value)} className='w-[95%] h-[10%] border border-black rounded p-2 bg-[#374151] text-white'></input>
                    <div className='flex justify-between w-[95%]'>
                        <div>
                            <input type='checkbox' name='remember' ref={remember} className='mt-[5%] mr-2'></input>
                            <label htmlFor='remember' className='text-normal'>Nhớ mật khẩu</label>
                        </div>
                        <div>
                            <Link to={''} className='font-semibold no-underline'>Quên mật khẩu</Link>
                        </div>
                    </div>
                    <button type='submit' onClick={(e) => handleLogin(e)} className='w-[95%] h-[10%] border border-white rounded p-2 bg-indigo-600 text-white'>Đăng nhập</button>
                </div>
                <div className='flex justify-center items-center mt-[5%]'>
                    <div className='text-normal'>Bạn chưa có tài khoản?</div>
                    <Link to={''} className='font-semibold no-underline ml-2'>Đăng ký</Link>
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

export default Login;