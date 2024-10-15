// Import komponen yang diperlukan
import NavBar from './NavBar';
import Footer from './Footer';
// Import gambar Island dan Pin
import Pin from '/assets/elements/Pin.webp';
import Island from '/assets/elements/Island.webp';
// Import data destinasi wisata, usaha lokal, makanan, dan penginapan
import destinasiWisata from '../data/destinasiWisata.json';
import usahaLokal from '../data/usahaLokal.json';
import makanan from '../data/makanan.json';
import penginapan from '../data/penginapan.json';
// Import elemen Swiper, modul Swiper, dan style Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
// Import Icon dari Tabler Icons
import { IconArrowBigRightLine, IconArrowBigLeftLine, IconInfoSquareRounded } from '@tabler/icons-react';

const Explore = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			{/* NavBar, mengarahkan activePage ke 'Explore' */}
			<NavBar activePage='Explore' />

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

			{/* Judul Explore */}
			<div className='flex w-[80%] flex-col space-y-2'>
				<div className='flex w-full flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0'>
					<p className='text-4xl font-extrabold md:text-5xl'>Harta Karun di Desa Kedisan</p>
					<div className='h-2 w-full bg-gradient-to-r from-custred to-custorange md:w-auto md:flex-grow' />
				</div>
				<p className='font-semibold'>Jelajahi atraksi utama mulai dari tujuan wisata hingga pilihan penginapan dan adat istiadat setempat, temukan yang terbaik dari desa kami.</p>
			</div>

			{/* Destinasi Wisata */}
			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Destinasi Wisata</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='relative w-[80%] rounded-xl bg-gray-800 px-4 py-8'>
				{/* Gambar Island dan Pin dengan posisi absolute */}
				<img
					src={Island}
					alt='Island'
					className='absolute -bottom-4 -left-8 z-40 h-16 w-16 -rotate-12 md:h-36 md:w-36'
				/>
				<img
					src={Pin}
					alt='Pin'
					className='absolute -right-4 -top-8 z-40 h-12 w-12 md:h-24 md:w-24'
				/>
				{/* Swiper untuk menampilkan destinasi wisata */}
				<Swiper
					modules={[Navigation]}
					className='relative w-full'
					slidesPerView={1}
					centeredSlides={true}
					centeredSlidesBounds={true}
					loop={true}
					// Menambahkan navigasi untuk slide secara kustom
					navigation={{
						nextEl: '.swiper-next',
						prevEl: '.swiper-prev',
					}}
				>
					{/* Iterate data destinasi wisata JSON menggunakan map, untuk setiap destinasi wisata akan ditampilkan informasi berikut */}
					{destinasiWisata.map((destination, index) => (
						<SwiperSlide key={index}>
							<div className='flex w-auto flex-col items-center justify-center space-y-4 text-white'>
								<div className='aspect-video w-full rounded-xl bg-white md:w-[80%]'>
									{/* Memasukkan gambar destinasi wisata */}
									<img
										src={destination.image}
										alt={`Destinasi Wisata ${destination.name}`}
										className='h-full w-full rounded-xl object-cover'
									/>
								</div>
								{/* Informasi destinasi wisata */}
								<div className='flex max-w-[40rem] flex-col items-center space-y-2 text-center'>
									<p className='text-xl font-bold'>{destination.name}</p>
									<div className='h-0.5 w-1/2 bg-white' />
									<p>{destination.description}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				{/* Kustomisasi tombol previous dan next */}
				<div className='swiper-prev absolute left-0 top-[20%] z-10 flex items-center justify-center rounded-r bg-custred px-1 py-6 text-white md:bottom-1/2 md:translate-y-1/2 md:px-4 md:py-12'>
					<IconArrowBigLeftLine size={30} />
				</div>
				<div className='swiper-next absolute right-0 top-[20%] z-10 flex items-center justify-center rounded-l bg-custred px-1 py-6 text-white md:bottom-1/2 md:translate-y-1/2 md:px-4 md:py-12'>
					<IconArrowBigRightLine size={30} />
				</div>
			</div>

			{/* Usaha Lokal */}
			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Usaha Lokal</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			{/* Grid Usaha Lokal */}
			<div className='grid w-[80%] grid-cols-2 gap-4 md:gap-6'>
				{/* Iterate data usaha lokal JSON menggunakan map, untuk setiap usaha lokal akan ditampilkan informasi berikut */}
				{usahaLokal.map((localBusiness, index) => (
					<div
						key={index}
						className='flex flex-col space-y-3'
					>
						{/* Memasukkan gambar usaha lokal */}
						<img
							src={localBusiness.image}
							alt={`Usaha Lokal ${localBusiness.name}`}
							className='aspect-square w-full rounded-lg object-cover transition-all duration-200 hover:rotate-1 md:h-96'
						/>
						{/* Informasi usaha lokal */}
						<div className='flex flex-col space-y-1'>
							<p className='text-lg font-bold'>{localBusiness.name}</p>
							<p className='text-sm'>{localBusiness.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* Makanan */}
			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Makanan</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			{/* Grid Makanan */}
			<div className='grid w-[80%] grid-cols-2 gap-4 md:gap-6'>
				{/* Iterate data makanan JSON menggunakan map, untuk setiap makanan akan ditampilkan informasi berikut */}
				{makanan.map((food, index) => (
					<div
						key={index}
						className='flex flex-col space-y-3'
					>
						{/* Memasukkan gambar makanan */}
						<img
							src={food.image}
							alt={`Makanan ${food.name}`}
							className='aspect-square w-full rounded-lg object-cover transition-all duration-200 hover:rotate-1 md:h-96'
						/>
						{/* Informasi makanan */}
						<div className='flex flex-col space-y-1'>
							<p className='text-lg font-bold'>{food.name}</p>
							<p className='text-sm'>{food.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* Penginapan */}
			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Penginapan</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			{/* Grid Penginapan */}
			<div className='grid w-[80%] grid-cols-2 gap-4 md:gap-6'>
				{/* Iterate data penginapan JSON menggunakan map, untuk setiap penginapan akan ditampilkan informasi berikut */}
				{penginapan.map((accommodation, index) => (
					<div
						key={index}
						className='flex flex-col space-y-3'
					>
						{/* Memasukkan gambar penginapan */}
						<img
							src={accommodation.image}
							alt={`Penginapan ${accommodation.name}`}
							className='aspect-square w-full rounded-lg object-cover transition-all duration-200 hover:rotate-1 md:h-96'
						/>
						{/* Informasi penginapan */}
						<div className='flex flex-col space-y-1'>
							<p className='text-lg font-bold'>{accommodation.name}</p>
							<p className='text-sm'>{accommodation.description}</p>
						</div>
					</div>
				))}
			</div>

			{/* Agar footer selalu berada di bawah */}
			<div className='flex flex-grow' />

			{/* Footer */}
			<Footer />
		</section>
	);
};

export default Explore;
