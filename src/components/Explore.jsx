import NavBar from './NavBar';
import Footer from './Footer';
import Pin from '/assets/elements/Pin.webp';
import Island from '/assets/elements/Island.webp';
import destinasiWisata from '../data/destinasiWisata.json';
import usahaLokal from '../data/usahaLokal.json';
import makanan from '../data/makanan.json';
import penginapan from '../data/penginapan.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import { IconArrowBigRightLine, IconArrowBigLeftLine, IconInfoSquareRounded } from '@tabler/icons-react';

const Explore = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar activePage='Explore' />

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

			<div className='flex w-[80%] flex-col space-y-2'>
				<div className='flex w-full flex-row items-center space-x-6'>
					<p className='text-5xl font-extrabold'>Temukan Harta Karun di Desa Kedisan</p>
					<div className='h-2 w-auto flex-grow bg-gradient-to-r from-custred to-custorange' />
				</div>
				<p className='font-semibold'>Jelajahi atraksi utama mulai dari tujuan wisata hingga pilihan penginapan dan adat istiadat setempat, temukan yang terbaik dari desa kami.</p>
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Destinasi Wisata</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='relative w-[80%] rounded-xl bg-gray-800 px-4 py-8'>
				<img
					src={Island}
					alt='Island'
					className='absolute -bottom-4 -left-8 h-36 w-36 -rotate-12'
				/>
				<img
					src={Pin}
					alt='Pin'
					className='absolute -right-4 -top-8 h-24 w-24'
				/>
				<Swiper
					modules={[Navigation]}
					className='relative w-full'
					slidesPerView={1}
					centeredSlides={true}
					centeredSlidesBounds={true}
					loop={true}
					navigation={{
						nextEl: '.swiper-next',
						prevEl: '.swiper-prev',
					}}
				>
					{destinasiWisata.map((destination, index) => (
						<SwiperSlide key={index}>
							<div className='flex w-auto flex-col items-center justify-center space-y-4 text-white'>
								<div className='h-[30rem] w-[80%] rounded-xl bg-white'>
									<img
										src={destination.image}
										alt={`Destinasi Wisata ${destination.name}`}
										className='h-full w-full rounded-xl object-cover'
									/>
								</div>
								<div className='flex max-w-[40rem] flex-col items-center space-y-2 text-center'>
									<p className='text-xl font-bold'>{destination.name}</p>
									<div className='h-0.5 w-1/2 bg-white' />
									<p>{destination.description}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
					<div className='swiper-prev absolute bottom-1/2 left-0 z-10 flex h-24 w-16 translate-y-1/2 items-center justify-center rounded bg-custred text-white'>
						<IconArrowBigLeftLine size={30} />
					</div>
					<div className='swiper-next absolute bottom-1/2 right-0 z-10 flex h-24 w-16 translate-y-1/2 items-center justify-center rounded bg-custred text-white'>
						<IconArrowBigRightLine size={30} />
					</div>
				</Swiper>
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Usaha Lokal</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='grid w-[80%] grid-cols-2 gap-6'>
				{usahaLokal.map((localBusiness, index) => (
					<div
						key={index}
						className='flex flex-col space-y-3'
					>
						<img
							src={localBusiness.image}
							alt={`Usaha Lokal ${localBusiness.name}`}
							className='h-96 w-full rounded-lg object-cover transition-all duration-200 hover:rotate-1'
						/>
						<div className='flex flex-col space-y-1'>
							<p className='text-lg font-bold'>{localBusiness.name}</p>
							<p className='text-sm'>{localBusiness.description}</p>
						</div>
					</div>
				))}
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Makanan</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='grid w-[80%] grid-cols-2 gap-6'>
				{makanan.map((food, index) => (
					<div
						key={index}
						className='flex flex-col space-y-3'
					>
						<img
							src={food.image}
							alt={`Makanan ${food.name}`}
							className='h-96 w-full rounded-lg object-cover transition-all duration-200 hover:rotate-1'
						/>
						<div className='flex flex-col space-y-1'>
							<p className='text-lg font-bold'>{food.name}</p>
							<p className='text-sm'>{food.description}</p>
						</div>
					</div>
				))}
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Penginapan</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='grid w-[80%] grid-cols-2 gap-6'>
				{penginapan.map((accommodation, index) => (
					<div
						key={index}
						className='flex flex-col space-y-3'
					>
						<img
							src={accommodation.image}
							alt={`Penginapan ${accommodation.name}`}
							className='h-96 w-full rounded-lg object-cover transition-all duration-200 hover:rotate-1'
						/>
						<div className='flex flex-col space-y-1'>
							<p className='text-lg font-bold'>{accommodation.name}</p>
							<p className='text-sm'>{accommodation.description}</p>
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

export default Explore;
