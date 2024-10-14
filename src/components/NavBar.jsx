import Logo from '/assets/logo/logo.svg';
import { useState, useEffect } from 'react';

const NavBar = ({ activePage }) => {
	const [page, setPage] = useState(activePage);

	useEffect(() => {
		setPage(activePage);
	}, [activePage]);

	const getLinkClass = (linkPage) => {
		return `transform-all rounded-md px-2 py-1 duration-100 ${page === linkPage ? 'bg-custred text-white shadow-lg' : 'hover:bg-custred hover:text-white hover:shadow-lg'}`;
	};

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
					className={getLinkClass('Profil Desa')}
					href='/profil-desa'
				>
					Profil Desa
				</a>
				<a
					className={getLinkClass('Explore')}
					href='/explore'
				>
					Explore
				</a>
				<a
					className={getLinkClass('Kependudukan')}
					href='/kependudukan'
				>
					Kependudukan
				</a>
				<a
					className={getLinkClass('Sekolah')}
					href='/sekolah'
				>
					Sekolah
				</a>
				<a
					className={getLinkClass('Fasilitas Kesehatan')}
					href='/fasilitas-kesehatan'
				>
					Fasilitas Kesehatan
				</a>
				<a
					className={getLinkClass('Galeri')}
					href='/galeri'
				>
					Galeri
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
