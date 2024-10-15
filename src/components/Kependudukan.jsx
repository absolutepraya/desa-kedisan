import NavBar from './NavBar';
import Footer from './Footer';

import Kependudukan1 from '/assets/charts/Kependudukan1.webp';
import Kependudukan2 from '/assets/charts/Kependudukan2.webp';
import Kependudukan3 from '/assets/charts/Kependudukan3.webp';
import Kependudukan4 from '/assets/charts/Kependudukan4.webp';

import { IconUser, IconUsers, IconBabyCarriage, IconOld, IconFriends, IconInfoSquareRounded } from '@tabler/icons-react';

const Kependudukan = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar activePage='Kependudukan' />

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
				<p className='md:text-5xl text-4xl font-extrabold'>Statistika Kependudukan</p>
				<div className='h-2 w-full bg-gradient-to-r from-custred to-custorange md:w-auto md:flex-grow' />
			</div>

			<div className='flex w-[80%] flex-col items-center'>
				<div className='w-3/4 rounded-t-xl bg-gradient-to-br from-custred to-custorange px-8 py-2 shadow-xl md:w-fit'>
					<p className='font-bold text-white md:text-xl'>Jumlah Penduduk Menurut Kelompok Umur</p>
				</div>
				<div className='flex w-full flex-col items-center space-y-8 overflow-hidden rounded-xl bg-white pt-8'>
					<div className='flex w-[80%] flex-col rounded-lg bg-gray-200 px-4 py-4 text-sm shadow-md md:flex-row md:justify-around md:text-lg'>
						<div className='flex items-center space-x-2'>
							<IconUsers
								stroke={2}
								fill
								className='h-4 w-4 md:h-5 md:w-5'
							/>
							<p>
								<b>Jumlah Jiwa:</b> 5.868
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<IconUser
								stroke={2}
								fill
								className='h-4 w-4 md:h-5 md:w-5'
							/>
							<p>
								<b>Jumlah Kepala Keluarga:</b> 1.279
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<IconUsers
								stroke={2}
								fill
								className='h-4 w-4 md:h-5 md:w-5'
							/>
							<p>
								<b>Jumlah PUS:</b> 1.155
							</p>
						</div>
					</div>
					<img
						src={Kependudukan1}
						alt='Jumlah Penduduk Menurut Kelompok Umur'
						className='h-auto w-full'
					/>
				</div>
			</div>

			<div className='flex w-[80%] flex-col items-center'>
				<div className='w-3/4 rounded-t-xl bg-gradient-to-br from-custred to-custorange px-8 py-2 shadow-xl md:w-fit'>
					<p className='font-bold text-white md:text-xl'>Persentase Partisipasi Keluarga dalam Poktan (Kelompok Kegiatan)</p>
				</div>
				<div className='flex w-full flex-col items-center space-y-8 overflow-hidden rounded-xl bg-white pt-8'>
					<div className='flex w-[80%] flex-col justify-around rounded-lg bg-gray-200 px-4 py-4 text-sm shadow-md md:flex-row md:text-lg'>
						<div className='flex flex-col justify-around'>
							<div className='flex items-center space-x-2'>
								<IconBabyCarriage
									stroke={2}
									fill
									className='h-4 w-4 md:h-5 md:w-5'
								/>
								<p>
									<b>Keluarga Memiliki Balita:</b> 253
								</p>
							</div>
							<div className='flex items-center space-x-2'>
								<IconFriends
									stroke={2}
									fill
									className='h-4 w-4 md:h-5 md:w-5'
								/>
								<p>
									<b>Keluarga Memiliki Remaja:</b> 85
								</p>
							</div>
						</div>
						<div className='flex flex-col'>
							<div className='flex items-center space-x-2'>
								<IconOld
									stroke={2}
									fill
									className='h-4 w-4 md:h-5 md:w-5'
								/>
								<p>
									<b>Keluarga Memiliki Lansia:</b> 200
								</p>
							</div>
							<div className='flex items-center space-x-2'>
								<IconUser
									stroke={2}
									fill
									className='h-4 w-4 md:h-5 md:w-5'
								/>
								<p>
									<b>Jumlah Remaja:</b> 718
								</p>
							</div>
						</div>
					</div>
					<img
						src={Kependudukan2}
						alt='Persentase Partisipasi Keluarga dalam Poktan (Kelompok Kegiatan)'
						className='h-auto w-full'
					/>
				</div>
			</div>

			<div className='flex w-[80%] flex-col space-y-10 md:flex-row md:space-x-6'>
				<div className='flex flex-col items-center md:w-1/2'>
					<div className='w-fit rounded-t-xl bg-gradient-to-br from-custred to-custorange px-8 py-2 shadow-xl'>
						<p className='font-bold text-white md:text-xl'>PUS dan Kepesertaan Ber-KB</p>
					</div>
					<div className='flex w-full flex-col items-center space-y-8 overflow-hidden rounded-xl bg-white pt-8'>
						<div className='flex w-[80%] justify-around rounded-lg bg-gray-200 px-4 py-4 shadow-md'>
							<div className='flex items-center space-x-2'>
								<IconUsers
									size={24}
									stroke={2}
									fill
								/>
								<p className='text-lg'>
									<b>Total:</b> 979
								</p>
							</div>
						</div>
						<img
							src={Kependudukan3}
							alt='PUS dan Kepesertaan Ber-KB'
							className='h-auto w-full'
						/>
					</div>
				</div>
				<div className='flex flex-col items-center md:w-1/2'>
					<div className='w-fit rounded-t-xl bg-gradient-to-br from-custred to-custorange px-8 py-2 shadow-xl'>
						<p className='font-bold text-white md:text-xl'>PUS dan ketidaksertaan Ber-KB</p>
					</div>
					<div className='flex w-full flex-col items-center space-y-8 overflow-hidden rounded-xl bg-white pt-8'>
						<div className='flex w-[80%] justify-around rounded-lg bg-gray-200 px-4 py-4 shadow-md'>
							<div className='flex items-center space-x-2'>
								<IconUsers
									size={24}
									stroke={2}
									fill
								/>
								<p className='text-lg'>
									<b>Total:</b> 176
								</p>
							</div>
						</div>
						<img
							src={Kependudukan4}
							alt='PUS dan ketidaksertaan Ber-KB'
							className='h-auto w-full'
						/>
					</div>
				</div>
			</div>

			{/* Agar footer selalu berada di bawah */}
			<div className='flex flex-grow' />

			<Footer />
		</section>
	);
};

export default Kependudukan;
