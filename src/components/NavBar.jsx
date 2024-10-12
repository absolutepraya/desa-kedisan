import Logo from '../assets/logo/logo.svg';

const NavBar = () => {
	return (
		<nav className='fixed top-0 flex h-20 w-full flex-row items-center justify-between bg-white px-16 shadow-xl z-50 font-inter'>
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
				<a className='hover:bg-custred hover:text-white px-2 py-1 rounded-md hover:shadow-lg transform-all duration-100'>Profil Desa</a>
				<a className='hover:bg-custred hover:text-white px-2 py-1 rounded-md hover:shadow-lg transform-all duration-100'>Explore</a>
				<a className='hover:bg-custred hover:text-white px-2 py-1 rounded-md hover:shadow-lg transform-all duration-100'>Kependudukan</a>
				<a className='hover:bg-custred hover:text-white px-2 py-1 rounded-md hover:shadow-lg transform-all duration-100'>Sekolah</a>
				<a className='hover:bg-custred hover:text-white px-2 py-1 rounded-md hover:shadow-lg transform-all duration-100'>Fasilitas Kesehatan</a>
				<a className='hover:bg-custred hover:text-white px-2 py-1 rounded-md hover:shadow-lg transform-all duration-100'>Pengaduan</a>
			</div>
		</nav>
	);
};

export default NavBar;
