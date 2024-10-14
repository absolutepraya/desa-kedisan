import NavBar from './NavBar';
import Footer from './Footer';

import Kependudukan1 from '/assets/charts/Kependudukan1.webp';
import Kependudukan2 from '/assets/charts/Kependudukan2.webp';
import Kependudukan3 from '/assets/charts/Kependudukan3.webp';
import Kependudukan4 from '/assets/charts/Kependudukan4.webp';

import { IconUser, IconUsers, IconBabyCarriage, IconOld, IconFriends } from '@tabler/icons-react';

const Kependudukan = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar activePage='Kependudukan' />
			<div className='flex w-[80%] flex-row items-center space-x-6'>
				<p className='text-5xl font-extrabold'>Statistika Kependudukan</p>
				<div className='h-2 w-auto flex-grow bg-gradient-to-r from-custred to-custorange' />
			</div>

			<div className='flex w-[80%] flex-col items-center'>
				<div className='w-fit rounded-t-xl bg-gradient-to-br from-custred to-custorange px-8 py-2 shadow-xl'>
					<p className='text-xl font-bold text-white'>Jumlah Penduduk Menurut Kelompok Umur</p>
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
								<b>Jumlah Jiwa:</b> 5.868
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<IconUser
								size={24}
								stroke={2}
								fill
							/>
							<p className='text-lg'>
								<b>Jumlah Kepala Keluarga:</b> 1.279
							</p>
						</div>
						<div className='flex items-center space-x-2'>
							<IconUsers
								size={24}
								stroke={2}
								fill
							/>
							<p className='text-lg'>
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
				<div className='w-fit rounded-t-xl bg-gradient-to-br from-custred to-custorange px-8 py-2 shadow-xl'>
					<p className='text-xl font-bold text-white'>Persentase Partisipasi Keluarga dalam Poktan (Kelompok Kegiatan)</p>
				</div>
				<div className='flex w-full flex-col items-center space-y-8 overflow-hidden rounded-xl bg-white pt-8'>
					<div className='flex w-[80%] flex-row justify-around rounded-lg bg-gray-200 px-4 py-4 shadow-md'>
						<div className='flex flex-col justify-around'>
							<div className='flex items-center space-x-2'>
								<IconBabyCarriage
									size={24}
									stroke={2}
									fill
								/>
								<p className='text-lg leading-6'>
									<b>Keluarga yang Memiliki Balita:</b> 253
								</p>
							</div>
							<div className='flex items-center space-x-2'>
								<IconFriends
									size={24}
									stroke={2}
									fill
								/>
								<p className='text-lg'>
									<b>Keluarga yang Memiliki Remaja:</b> 85
								</p>
							</div>
						</div>
						<div className='flex flex-col'>
							<div className='flex items-center space-x-2'>
								<IconOld
									size={24}
									stroke={2}
									fill
								/>
								<p className='text-lg'>
									<b>Keluarga yang Memiliki Lansia:</b> 200
								</p>
							</div>
							<div className='flex items-center space-x-2'>
								<IconUser
									size={24}
									stroke={2}
									fill
								/>
								<p className='text-lg'>
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

			<div className='flex w-[80%] flex-row space-x-6'>
				<div className='flex w-1/2 flex-col items-center'>
					<div className='w-fit rounded-t-xl bg-gradient-to-br from-custred to-custorange px-8 py-2 shadow-xl'>
						<p className='text-xl font-bold text-white'>PUS dan Kepesertaan Ber-KB</p>
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
				<div className='flex w-1/2 flex-col items-center'>
					<div className='w-fit rounded-t-xl bg-gradient-to-br from-custred to-custorange px-8 py-2 shadow-xl'>
						<p className='text-xl font-bold text-white'>PUS dan ketidaksertaan Ber-KB</p>
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
