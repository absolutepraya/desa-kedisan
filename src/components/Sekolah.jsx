// Import komponen yang diperlukan
import NavBar from './NavBar';
import Footer from './Footer';
// Import data sekolah
import sekolah from '../data/sekolah.json';
// Import gambar SD Negeri di Desa Kedisan
import SDBali from '/assets/images/SDBali.webp';
// Import IconInfoSquareRounded dari Tabler Icons
import { IconInfoSquareRounded } from '@tabler/icons-react';

const Sekolah = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			{/* NavBar, mengarahkan activePage ke 'Sekolah' */}
			<NavBar activePage='Sekolah' />

			{/* Tombol Pusat Bantuan */}
			<a
				className='fixed bottom-8 right-8 z-40 flex flex-row items-center justify-center space-x-2 rounded-full bg-custorange px-3 py-1 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-orange-500'
				href='/pusat-bantuan'
			>
				<IconInfoSquareRounded
					size={20}
					stroke={1.5}
					className='text-white'
				/>
				<p className='font-semibold text-white'>Pusat Bantuan</p>
			</a>

			{/* Judul Sekolah */}
			<div className='flex w-[80%] flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0'>
				<p className='text-4xl font-extrabold md:text-5xl'>Sekolah di Desa Kedisan</p>
				<div className='h-2 w-full bg-gradient-to-r from-custred to-custorange md:w-auto md:flex-grow' />
			</div>

			<div className='flex w-[80%] flex-col items-center space-y-8'>
				{/* Gambar SD Negeri di Desa Kedisan */}
				<img
					src={SDBali}
					alt='SD Negeri 1 Kedisan'
					className='h-auto w-full rounded-xl'
				/>

				{/* Informasi Sekolah */}
				<div className='flex w-full rounded-lg bg-gray-200 px-6 py-8 shadow-md md:px-16'>
					{/* List sekolah, ditampilkan menggunakan grid */}
					<div className='grid w-full grid-cols-1 gap-8 md:grid-cols-2'>
						{/* Iterate data sekolah menggunakan map, untuk setiap sekolah akan ditampilkan informasi berikut */}
						{sekolah.map((school, index) => (
							<div
								key={index}
								className='flex flex-col space-y-1'
							>
								<p className='text-lg font-bold'>{school.name}</p>
								<div className='w-fit rounded bg-custred px-2 text-sm text-white'>
									<p>
										Akreditasi: <b>{school.accreditation}</b>
									</p>
								</div>
								<p>
									<b>Alamat:</b> {school.address}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Agar footer selalu berada di bawah */}
			<div className='flex flex-grow' />

			{/* Footer */}
			<Footer />
		</section>
	);
};

export default Sekolah;
