import NavBar from './NavBar';
import Footer from './Footer';

import AirTerjunUlu from '/assets/images/AirTerjunUlu.webp';
import AirTerjunUlu2 from '/assets/images/AirTerjunUlu2.webp';
import AirTerjunUlu3 from '/assets/images/AirTerjunUlu3.webp';
import BanjarDinasBayad from '/assets/images/BanjarDinasBayad.webp';
import BanjarDinasCebok from '/assets/images/BanjarDinasCebok.webp';
import BanjarDinasKebon from '/assets/images/BanjarDinasKebon.webp';
import BanjarDinasKedisanKaja from '/assets/images/BanjarDinasKedisanKaja.webp';
import BanjarDinasKedisanKelod from '/assets/images/BanjarDinasKedisanKelod.webp';
import BanjarDinasTakup from '/assets/images/BanjarDinasTakup.webp';
import ParasPetanuGroundVillage from '/assets/images/ParasPetanuGroundVillage.webp';
import ParasPetanuGroundVillage2 from '/assets/images/ParasPetanuGroundVillage2.webp';
import TerasAbian from '/assets/images/TerasAbian.webp';
import TerasTegallang from '/assets/images/TerasTegallang.webp';
import TerasTegallang2 from '/assets/images/TerasTegallang2.webp';

import { IconInfoSquareRounded } from '@tabler/icons-react';

const images = [
	{ name: 'Air Terjun Ulu', src: AirTerjunUlu },
	{ name: 'Air Terjun Ulu 2', src: AirTerjunUlu2 },
	{ name: 'Air Terjun Ulu 3', src: AirTerjunUlu3 },
	{ name: 'Banjar Dinas Bayad', src: BanjarDinasBayad },
	{ name: 'Banjar Dinas Cebok', src: BanjarDinasCebok },
	{ name: 'Banjar Dinas Kebon', src: BanjarDinasKebon },
	{ name: 'Banjar Dinas Kedisan Kaja', src: BanjarDinasKedisanKaja },
	{ name: 'Banjar Dinas Kedisan Kelod', src: BanjarDinasKedisanKelod },
	{ name: 'Banjar Dinas Takup', src: BanjarDinasTakup },
	{ name: 'Paras Petanu Ground Village', src: ParasPetanuGroundVillage },
	{ name: 'Paras Petanu Ground Village 2', src: ParasPetanuGroundVillage2 },
	{ name: 'Teras Abian', src: TerasAbian },
	{ name: 'Teras Tegallang', src: TerasTegallang },
	{ name: 'Teras Tegallang 2', src: TerasTegallang2 },
];

const Galeri = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar activePage='Galeri' />

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

			<div className='flex w-[80%] flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0'>
				<p className='text-4xl font-extrabold md:text-5xl'>Galeri Desa Kedisan</p>
				<div className='h-2 w-full bg-gradient-to-r from-custred to-custorange md:w-auto md:flex-grow' />
			</div>

			<div className='grid w-[80%] grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
				{images.map((image, index) => (
					<div
						key={index}
						className='flex flex-col items-center transition-all duration-200 hover:rotate-1'
					>
						<img
							src={image.src}
							alt={`Galeri ${image.name}`}
							className='aspect-square w-full rounded-lg object-cover md:h-96'
						/>
						<div className='max-w-[70%] rounded-b-lg bg-custred px-2 py-1 md:px-4 md:py-2'>
							<p className='text-sm font-medium text-white md:text-lg'>{image.name}</p>
						</div>
					</div>
				))}
			</div>

			{/* Agar footer selalu berada di bawah */}
			<div className='flex flex-grow' />

			<Footer />
		</section>
	);
};

export default Galeri;
