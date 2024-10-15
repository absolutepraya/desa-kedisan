import NavBar from './NavBar';
import Footer from './Footer';
import AskaraMedika from '/assets/images/AskaraMedika.webp';

import { IconMap2, IconPhone, IconMail, IconInfoSquareRounded } from '@tabler/icons-react';

const FasKes = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar activePage='Fasilitas Kesehatan' />

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
				<p className='text-4xl font-extrabold md:text-5xl'>Fasilitas Kesetahan</p>
				<div className='h-2 w-full bg-gradient-to-r from-custred to-custorange md:w-auto md:flex-grow' />
			</div>

			<div className='flex w-[80%] flex-col space-y-6'>
				<div className='flex w-full flex-col items-center space-y-6 md:h-[15rem] md:flex-row md:space-x-6 md:space-y-0'>
					<img
						src={AskaraMedika}
						alt='Askara Medika'
						className='max-h-[20rem] max-w-[20rem] md:h-full'
					/>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19043.680287608982!2d115.27040019740704!3d-8.403423466085096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd219fd7b21b44f%3A0xf983a031f6ee3100!2sPraktek%20Dokter%20Umum!5e0!3m2!1sen!2sid!4v1728913976083!5m2!1sen!2sid'
						style={{ border: 0 }}
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						className='h-[40rem] w-full rounded-xl md:h-full'
					/>
				</div>

				<div className='flex w-full flex-col space-y-2 rounded-lg bg-white px-4 py-4 shadow-md'>
					<div className='mb-3 w-fit rounded bg-custred px-2 text-sm text-white'>
						<p className='text-2xl font-bold'>Praktek Dokter Umum Askara Medika</p>
					</div>
					<div className='flex w-full flex-row items-center space-x-3'>
						<IconMap2
							size={20}
							stroke={2}
							className='flex-shrink-0'
						/>
						<p>Jalan Raya Pujung Kaja-Kedisan, Sebatu, Tegallalang, Gianyar, Bali 80561</p>
					</div>
					<div className='flex w-full flex-row items-center space-x-3'>
						<IconPhone
							size={20}
							stroke={2}
							className='flex-shrink-0'
						/>
						<p>082 146 788 938</p>
					</div>
					<div className='flex w-full flex-row items-center space-x-3'>
						<IconMail
							size={20}
							stroke={2}
							className='flex-shrink-0'
						/>
						<p>askaramedika@gmail.com</p>
					</div>
				</div>
			</div>

			{/* Agar footer selalu berada di bawah */}
			<div className='flex flex-grow' />

			<Footer />
		</section>
	);
};

export default FasKes;
