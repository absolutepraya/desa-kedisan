// Import gambar
import Logo from '/assets/logo/logo.svg';
// Import useState dan useEffect dari React
import { useState, useEffect } from 'react';
// Import IconX dan IconMenu2 dari Tabler Icons
import { IconX, IconMenu2 } from '@tabler/icons-react';

const NavBar = ({ activePage }) => {
	const [page, setPage] = useState(activePage); // State variable untuk handle active page
	const [menuOpen, setMenuOpen] = useState(false); // State variable untuk handle menu open/close

	// Set active page ketika activePage berubah
	useEffect(() => {
		setPage(activePage);
	}, [activePage]);

	// Fungsi untuk mendapatkan class link, jika page sama dengan linkPage maka gunakan class active, jika tidak gunakan class hover
	const getLinkClass = (linkPage) => {
		return `transform-all rounded-md px-2 text-nowrap py-1 duration-100 ${page === linkPage ? 'bg-custred text-white shadow-lg' : 'hover:bg-custred hover:text-white hover:shadow-lg'}`;
	};

	return (
		<nav className='fixed top-0 z-50 w-full bg-white shadow-xl'>
			<div className='flex h-20 w-full flex-row items-center justify-between px-4 lg:px-16'>
				{/* Logo dan Nama Desa */}
				<div className='flex flex-row space-x-1'>
					<img
						src={Logo}
						alt='Logo'
						className='h-16 w-16'
					/>
					<div className='flex flex-col justify-center space-y-0'>
						<p className='text-nowrap text-2xl font-extrabold'>DESA KEDISAN</p>
						<p className='text-nowrap text-xs'>Kec. Tegallang, Kab. Gianyar, Prov. Bali</p>
					</div>
				</div>

				{/* Burger Icon untuk Mobile View */}
				<div className='lg:hidden'>
					{/* Jika menuOpen true maka tampilkan icon X, jika tidak tampilkan icon Menu */}
					<button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <IconX className='h-6 w-6' /> : <IconMenu2 className='h-6 w-6' />}</button>
				</div>

				{/* Links untuk Desktop View */}
				<div className='hidden flex-row space-x-3 lg:flex'>
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
			</div>

			{/* Dropdown untuk Mobile View */}
			{menuOpen && (
				<div className='flex flex-col space-y-2 bg-white px-4 py-2 lg:hidden'>
					<a
						className={getLinkClass('Profil Desa')}
						href='/profil-desa'
						onClick={() => setMenuOpen(false)} // Close menu on click
					>
						Profil Desa
					</a>
					<a
						className={getLinkClass('Explore')}
						href='/explore'
						onClick={() => setMenuOpen(false)}
					>
						Explore
					</a>
					<a
						className={getLinkClass('Kependudukan')}
						href='/kependudukan'
						onClick={() => setMenuOpen(false)}
					>
						Kependudukan
					</a>
					<a
						className={getLinkClass('Sekolah')}
						href='/sekolah'
						onClick={() => setMenuOpen(false)}
					>
						Sekolah
					</a>
					<a
						className={getLinkClass('Fasilitas Kesehatan')}
						href='/fasilitas-kesehatan'
						onClick={() => setMenuOpen(false)}
					>
						Fasilitas Kesehatan
					</a>
					<a
						className={getLinkClass('Galeri')}
						href='/galeri'
						onClick={() => setMenuOpen(false)}
					>
						Galeri
					</a>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
