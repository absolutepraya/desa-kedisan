import NavBar from './NavBar';
import Footer from './Footer';
import BanjarDinasKebon from '/assets/images/BanjarDinasKebon.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import strukturPerbekel from '../data/strukturPerbekel.json';
import strukturSekretariat from '../data/strukturSekretariat.json';
import Leaf from '/assets/elements/Leaf.webp';
import Greek from '/assets/elements/Greek.webp';
import Scroll from '/assets/elements/Scroll.webp';
import { IconUserFilled, IconArrowLeft, IconArrowRight, IconInfoSquareRounded } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const ProfilDesa = () => {
	const [slidesPerView, setSlidesPerView] = useState(5);

	const getMobileView = () => {
		return window.innerWidth <= 1024; // Adjust the width as per your requirement
	};

	useEffect(() => {
		const handleResize = () => {
			setSlidesPerView(getMobileView() ? 1 : 5);
		};

		handleResize(); // Set initial value
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar activePage={'Profil Desa'} />

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

			{/* Kotak judul dan subjudul */}
			<div
				className='relative flex min-h-48 w-[90%] flex-col justify-center space-y-1 overflow-hidden rounded-xl border px-8 py-12 text-start text-white'
				style={{
					backgroundImage: `url(${BanjarDinasKebon})`,
					backgroundSize: 'cover',
					backgroundPosition: '50% 62%',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Overlay untuk dim background */}
				<div className='absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50'></div>
				{/* Teks judul dan subjudul */}
				<p className='z-20 text-5xl font-extrabold tracking-wide'>Expore The Essence of Desa Kedisan</p>
				<p className='z-20 text-xl'>Mengetahui lebih lanjut tentang Sejarah, Visi, Misi, dan Struktur Pemerintahan</p>
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Apa itu Desa Kedisan?</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='flex max-w-[80%] flex-col space-y-4 rounded-xl md:flex-row md:space-x-4'>
				<div className='relative flex w-full flex-col space-y-4 rounded-xl border bg-white px-6 py-6 shadow-xl md:w-[50%]'>
					<img
						src={Leaf}
						alt='Leaf'
						className='absolute -left-4 -top-4 h-20 w-20'
					/>
					<p className='text-center text-2xl font-bold'>Desa Kedisan</p>
					<p className='text-justify'>Desa Kedisan adalah tujuan wisata menawan yang terkenal dengan sawah bertingkatnya yang menakjubkan, warisan budaya yang kaya, dan masyarakatnya yang ramah. Di sini, Anda dapat menikmati keindahan alam yang tenang, menjelajahi pasar tradisional, dan menikmati kesenian dan kerajinan lokal yang unik. Keramahan penduduk desa yang hangat akan membuat kunjungan Anda menjadi pengalaman yang tak terlupakan. Perpaduan antara pemandangan yang indah dan kekayaan budaya menjadikan Desa Kedisan sebagai destinasi yang unik dan menarik.</p>
				</div>
				<div className='flex h-64 flex-grow overflow-hidden rounded-xl shadow-xl md:h-auto'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.69396604829!2d115.36344219824558!3d-8.285526134139438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1f5d7449f114b%3A0x8e5f99b9dae1de9c!2sKedisan%2C%20Kintamani%2C%20Bangli%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1728914166297!5m2!1sen!2sid'
						width='100%'
						height='100%'
						style={{ border: 0 }}
						allowFullScreen=''
						loading='lazy'
					></iframe>
				</div>
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Sejarah Desa Kadisan</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div
				className='relative min-h-24 w-[80%] space-y-3 rounded-xl bg-white px-6 py-6 pb-16 text-justify shadow-xl'
				style={{ textIndent: '2rem' }}
			>
				<img
					src={Greek}
					alt='Greek'
					className='absolute -right-4 -top-4 h-16 w-16 -rotate-12'
				/>
				<img
					src={Scroll}
					alt='Scroll'
					className='absolute -bottom-4 -left-4 h-16 rotate-6'
				/>
				<p
					className='text-center text-2xl font-bold'
					style={{ textIndent: '0' }}
				>
					Sejarah Desa Kedisan
				</p>
				<p>Nama Desa Kedisan memiliki nilai historis yang cukup signifikan, meskipun rinciannya masih belum bisa dipastikan karena ketiadaan naskah kuno. Menurut legenda setempat dan lontar “Arya Wang Bang Sidemen” dari koleksi K. Sudarsana, asal-usul desa ini berawal dari I Gusti Kacang Dawa (Ida Penataran) yang menikah dengan Ni Gusti Ayu Bringkit, keturunan dari Sri Nararya Kepakisan. Mereka memiliki dua orang putra, I Gusti Ngurah Dimade dan I Gusti Ngurah Bija.</p>
				<p>Pada tahun 1523 Masehi, karena adanya konflik di Kerajaan Gelgel, I Gusti Kacang Pawos meninggalkan wilayah kekuasaannya dan tiba di Desa Aan Klungkung, di mana ia disambut oleh Ki Pasek Katrangan. Setelah tinggal di sana selama lima tahun, ia memutuskan untuk pergi dan ditemani oleh Ki Pasek Katrangan untuk mencari tempat yang lebih aman untuk bermukim. Mereka akhirnya tiba di sebuah kawasan hutan lebat yang kaya akan burung dan menamainya Kedisan, yang diambil dari kata “Kedis” (burung dalam bahasa Bali).</p>
				<p>Secara resmi didirikan pada tahun 1541 Masehi, Desa Kedisan menjadi pusat pemerintahan yang terdiri dari 7 banjar: Tangkup, Kebon, Pakudui, Bayad, Kedisan Kaja, Kedisan Kelod, dan Cebok. Penduduk Kedisan bukanlah orang Bali Mula/Bali Aga, melainkan pendatang dari Gelgel-Semarapura, yang menandai akar sejarah desa ini yang unik.</p>
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Visi dan Misi</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='flex w-[80%] flex-col space-y-5'>
				<div className='flex w-full flex-row overflow-hidden rounded-xl bg-white shadow-xl'>
					<div className='flex w-[20%] items-center justify-center bg-gradient-to-br from-custred to-custorange text-3xl font-extrabold tracking-widest text-white md:px-4'>
						<p className='-rotate-90 md:rotate-0'>Visi</p>
					</div>
					<div className='flex flex-col px-6 py-6 md:px-12'>
						<p>Kadisan Berseri:</p>
						<li>Terwujudnya Masyarakat Desa Kedisan yang Bersih</li>
						<li>Terwujudnya Masyarakat Desa Kedisan yang Sejahtera</li>
						<li>Terwujudnya Masyarakat Desa Kedisan yang Religius</li>
					</div>
				</div>
				<div className='flex w-full flex-row justify-between overflow-hidden rounded-xl bg-white shadow-xl'>
					<div className='flex flex-col px-6 py-6 md:px-12'>
						<li>Membangun sumber daya manusia yang berkualitas.</li>
						<li>Menumbuhkan kemandirian dan kewirausahaan masyarakat melalui pemberdayaan potensi desa.</li>
						<li>Menjaga lingkungan yang bersih dan hijau.</li>
						<li>Pemerataan pembangunan di segala bidang.</li>
					</div>
					<div className='flex w-[20%] items-center justify-center bg-gradient-to-br from-custred to-custorange text-3xl font-extrabold tracking-widest text-white md:px-4'>
						<p className='rotate-90 md:rotate-0'>Misi</p>
					</div>
				</div>
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Struktur Pemerintahan</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='flex w-[80%] flex-col items-center space-y-5'>
				<div className='flex h-64 w-48 flex-col items-center space-y-3 overflow-hidden rounded-xl bg-white pt-3'>
					<PersonIcon />
					<div className='flex w-full flex-grow flex-col items-center justify-center space-y-0 bg-custred px-1 text-white'>
						<p className='text-center text-sm font-bold'>{strukturPerbekel.Perbekel_Desa_Kedisan}</p>
						<p className='text-center text-xs'>Perbekel Desa Kedisan</p>
					</div>
				</div>

				<Swiper
					modules={[Navigation]}
					className='relative w-full'
					slidesPerView={slidesPerView}
					spaceBetween={20}
					centeredSlides={true}
					centeredSlidesBounds={true}
					navigation={{
						nextEl: '.swiper-next',
						prevEl: '.swiper-prev',
					}}
				>
					{Object.entries(strukturPerbekel.Kelian_Banjar_Dinas).map(([key, value]) => (
						<SwiperSlide key={key}>
							<div className='flex w-auto items-center justify-center'>
								<div className='flex h-64 w-48 flex-col items-center space-y-3 overflow-hidden rounded-xl bg-white pt-3'>
									<PersonIcon />
									<div className='flex w-full flex-grow flex-col items-center justify-center space-y-0 bg-custred px-2 text-white'>
										<p className='text-center text-sm font-bold'>{value}</p>
										<p className='text-center text-xs'>{key.replace(/_/g, ' ')}</p>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
					<div className='swiper-prev absolute bottom-1/2 left-0 z-10 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded bg-custred text-white shadow-lg'>
						<IconArrowLeft />
					</div>
					<div className='swiper-next absolute bottom-1/2 right-0 z-10 flex h-10 w-10 translate-y-1/2 items-center justify-center rounded bg-custred text-white shadow-lg'>
						<IconArrowRight />
					</div>
				</Swiper>

				<div className='!mt-12 flex h-64 w-48 flex-col items-center space-y-3 overflow-hidden rounded-xl bg-white pt-3'>
					<PersonIcon />
					<div className='flex w-full flex-grow flex-col items-center justify-center space-y-0 bg-custred px-1 text-white'>
						<p className='text-center text-sm font-bold'>{strukturSekretariat.Sekretariat_Desa_Kedisan}</p>
						<p className='text-center text-xs'>Sekretariat Desa Kedisan</p>
					</div>
				</div>

				<div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2'>
					{Object.entries(strukturSekretariat.Dinas_Sekretariat).map(([key, value]) => (
						<div
							key={key}
							className='flex flex-col items-center justify-center space-y-4 rounded-xl border bg-white px-8 py-8 md:h-[22rem] md:w-[28rem] md:px-0 md:py-0'
						>
							<p className='text-2xl font-bold'>{key.replace(/_/g, ' ')}</p>
							<div className='flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4'>
								<div className='flex h-64 w-48 flex-col items-center space-y-3 pt-3'>
									<PersonIcon />
									<div className='flex w-full flex-grow flex-col items-center justify-center space-y-0 rounded-xl bg-custred px-2 text-white'>
										<p className='text-center text-sm font-bold'>{value.Kepala}</p>
										<p className='text-center text-xs'>Kepala</p>
									</div>
								</div>
								<div className='flex h-64 w-48 flex-col items-center space-y-3 pt-3'>
									<PersonIcon />

									<div className='flex w-full flex-grow flex-col items-center justify-center space-y-0 rounded-xl bg-custred px-2 text-white'>
										<p className='text-center text-sm font-bold'>{value.Staff}</p>
										<p className='text-center text-xs'>Staff</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Agar footer selalu berada di bawah */}
			<div className='flex flex-grow' />

			<Footer />
		</section>
	);
};

const PersonIcon = () => (
	<div className='flex aspect-square w-[85%] items-center justify-center overflow-hidden rounded-full bg-gray-400'>
		<IconUserFilled
			size='70%'
			className='text-gray-200'
		/>
	</div>
);

export default ProfilDesa;
