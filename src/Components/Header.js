import React, { useEffect } from 'react';
import { SearchIcon, UserIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ key }) => {
  const [keyword, setKeyword] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword === '') return;
    navigate(`/search/${keyword}`);
  }


  function handleController() {
    if (window.innerWidth < 640) {
      document.getElementById('controller').style.display = 'block';
      document.getElementById('controller').style.transition = 'all 1s ease-in-out';
    }
  }

  function handleClose() {
    document.getElementById('controller').style.display = 'none';
  }

  useEffect(() => {
    const input = document.getElementById('search-input');
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        document.getElementById('search-btn').click();
      }
    });


    
  }, []);



  return (
    <header className="bg-white shadow fixed z-10 w-screen" >
      {/* Mobile Controller */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className='mt-[6%] sm:hidden' onClick={() => { handleController() }}>
            <i class="fa-solid fa-bars"></i>
          </div>

          <div className='h-screen w-[50%] bg-white fixed justify-center left-0 hidden shadow-lg shadow-slate-400' id='controller'>
            <div className='flex flex-col '>
              <div className='mt-[10%] sm:hidden ml-[15%]' onClick={() => { handleClose() }}>
                <i class="fa-solid fa-bars"></i>
              </div>
              <Link to={'/home'} className='p-2 border-b-2 border-white no-underline text-sm ml-[15%] bg-indigo-600 text-white py-1 px-1' onClick={() => { handleClose() }}>
                <i class="fa-solid fa-house px-2"></i>Trang chủ
              </Link>
              <Link to={'/home'} className='p-2 no-underline text-sm ml-[15%] bg-indigo-600 text-white py-1 px-1' onClick={() => { handleClose() }}>
                <i class="fa-solid fa-qrcode px-2"></i>Kích hoạt khóa học
              </Link>
            </div>
          </div>

          {/* Tablet Controller */}
          <div className="hidden sm:flex items-center ">
            <Link to={'/home'} className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="/logo192.png"
                alt="Your Company Logo"
              />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex items-center lg:space-x-4 space-x-1">
                <li>
                  <Link
                    to={'/home'}
                    className="no-underline text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 hidden md:inline-block"
                  >
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className=" text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 no-underline hidden md:inline-block"
                  >
                    Kích hoạt khóa học
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <ShoppingCartIcon className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              value={key}
              placeholder="Tìm kiếm khóa học, giảng viên..."
              className="w-full rounded-md border-gray-300 px-2 py-2 text-sm"
              onChange={e => setKeyword(e.target.value)}
              id='search-input'
            />
            <button
              onClick={() => { handleSearch() }}
              id='search-btn'
              type="button"
              className="ml-2 p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              <SearchIcon className="h-5 w-5" />
            </button>

            <div className="ml-4 flex items-center ">
              <button
                onClick={() => { navigate('/login') }}
                className=" px-2 py-1 sm:px-5 sm:py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Đăng nhập
              </button>

              <button
                className="ml-2 px-2 py-1 sm:px-3 sm:py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                Đăng ký
              </button>

              <button className="ml-2 p-2 rounded-md text-gray-400 hover:text-gray-500">
                <UserIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
