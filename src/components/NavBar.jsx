import Logo from '../assets/logo/logo.svg';

const NavBar = () => {
	return (
		<nav className='fixed top-0 z-50 flex h-20 w-full flex-row items-center justify-between bg-white px-16 font-inter shadow-xl'>
			<div className='flex flex-row space-x-1'>
				<img
					src={Logo}
					alt='Logo'
					className='h-16 w-16'
				/>
				<div className='flex flex-col justify-center space-y-0'>
					<p className='text-2xl font-extrabold'>DESA KEDISAN</p>
					<p className='text-xs'>Kec. Kintamani, Kab. Bangli, Prov. Bali</p>
				</div>
			</div>

			<div className='flex flex-row space-x-3'>
				<a
					className='transform-all rounded-md px-2 py-1 duration-100 hover:bg-custred hover:text-white hover:shadow-lg'
					href='/profil-desa'
				>
					Profil Desa
				</a>
				<a
					className='transform-all rounded-md px-2 py-1 duration-100 hover:bg-custred hover:text-white hover:shadow-lg'
					href='/explore'
				>
					Explore
				</a>
				<a
					className='transform-all rounded-md px-2 py-1 duration-100 hover:bg-custred hover:text-white hover:shadow-lg'
					href='/kependudukan'
				>
					Kependudukan
				</a>
				<a
					className='transform-all rounded-md px-2 py-1 duration-100 hover:bg-custred hover:text-white hover:shadow-lg'
					href='/sekolah'
				>
					Sekolah
				</a>
				<a
					className='transform-all rounded-md px-2 py-1 duration-100 hover:bg-custred hover:text-white hover:shadow-lg'
					href='/fasilitas-kesehatan'
				>
					Fasilitas Kesehatan
				</a>
				<a
					className='transform-all rounded-md px-2 py-1 duration-100 hover:bg-custred hover:text-white hover:shadow-lg'
					href='/pengaduan'
				>
					Pengaduan
				</a>
				<a
					className='transform-all rounded-md px-2 py-1 duration-100 hover:bg-custred hover:text-white hover:shadow-lg'
					href='/galeri'
				>
					Galeri
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
