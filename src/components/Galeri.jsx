import NavBar from './NavBar';
import Footer from './Footer';

import AirTerjunUlu from '../assets/images/AirTerjunUlu.webp';
import AirTerjunUlu2 from '../assets/images/AirTerjunUlu2.webp';
import AirTerjunUlu3 from '../assets/images/AirTerjunUlu3.webp';
import BanjarDinasBayad from '../assets/images/BanjarDinasBayad.webp';
import BanjarDinasCebok from '../assets/images/BanjarDinasCebok.webp';
import BanjarDinasKebon from '../assets/images/BanjarDinasKebon.webp';
import BanjarDinasKedisanKaja from '../assets/images/BanjarDinasKedisanKaja.webp';
import BanjarDinasKedisanKelod from '../assets/images/BanjarDinasKedisanKelod.webp';
import BanjarDinasTakup from '../assets/images/BanjarDinasTakup.webp';
import ParasPetanuGroundVillage from '../assets/images/ParasPetanuGroundVillage.webp';
import ParasPetanuGroundVillage2 from '../assets/images/ParasPetanuGroundVillage2.webp';
import TerasAbian from '../assets/images/TerasAbian.webp';
import TerasTegallang from '../assets/images/TerasTegallang.webp';
import TerasTegallang2 from '../assets/images/TerasTegallang2.webp';

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
			<NavBar />
			<div className='flex w-[80%] flex-row items-center space-x-6'>
				<p className='text-5xl font-extrabold'>Galeri Desa Kedisan</p>
				<div className='h-2 w-auto flex-grow bg-gradient-to-r from-custred to-custorange' />
			</div>

			<div className='grid w-[80%] grid-cols-2 gap-6'>
				{images.map((image, index) => (
					<div
						key={index}
						className='flex flex-col items-center space-y-3'
					>
						<img
							src={image.src}
							alt={`Galeri ${image.name}`}
							className='h-96 w-full rounded-lg object-cover'
						/>
						<p className='text-lg font-bold'>{image.name}</p>
					</div>
				))}
			</div>

			<Footer />
		</section>
	);
};

export default Galeri;
