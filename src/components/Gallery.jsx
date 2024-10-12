import NavBar from './NavBar';

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

const Galeri = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-200 pt-20 font-inter'>
			<NavBar />
			<div className='flex w-[80%] flex-row items-center space-x-6'>
				<p className='text-5xl font-extrabold'>Galeri Desa Kedisan</p>
				<div className='h-2 w-auto flex-grow bg-gradient-to-r from-custred to-custorange' />
			</div>
		</section>
	);
};

export default Galeri;
