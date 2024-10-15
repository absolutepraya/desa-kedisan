import NavBar from './NavBar';
import Footer from './Footer';

const PusatBantuan = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar activePage={null} /> {/* Tidak ada active page karena halaman ini tidak ada di navbar */}

			{/* Contoh form pusat bantuan */}
			<div className='flex w-[80%] flex-col space-y-2'>
				<div className='flex w-full flex-row items-center space-x-6'>
					<p className='text-5xl font-extrabold'>Pusat Bantuan</p>
					<div className='h-2 w-auto flex-grow bg-gradient-to-r from-custred to-custorange' />
				</div>
				<p className='font-semibold'>Silakan mengisi form berikut untuk mendapatkan bantuan dari kami.</p>
			</div>
			<div className='flex w-[40rem] flex-col space-y-3'>
				<div className='flex w-full flex-col space-y-2'>
					<label className='text-lg font-semibold'>Nama Lengkap</label>
					<input
						type='text'
						className='w-full rounded-md border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custred'
						placeholder='Contoh: Budiarta Kusuma'
					/>
				</div>

				<div className='flex w-full flex-col space-y-2'>
					<label className='text-lg font-semibold'>Email</label>
					<input
						type='email'
						className='w-full rounded-md border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custred'
						placeholder='Contoh: budiarta.kusuma@gmail.com'
					/>
				</div>

				<div className='flex w-full flex-col space-y-2'>
					<label className='text-lg font-semibold'>Nomor Telepon</label>
					<input
						type='tel'
						className='w-full rounded-md border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custred'
						placeholder='Contoh: 081234567890'
					/>
				</div>

				<div className='flex w-full flex-col space-y-2'>
					<label className='text-lg font-semibold'>Pesan</label>
					<textarea
						className='w-full rounded-md border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custred'
						placeholder='Tuliskan pesan Anda di sini...'
					/>
				</div>

				<button className='w-full rounded-md bg-custred p-2 font-semibold text-white transition-all duration-100 hover:bg-red-700'>Kirim</button>
			</div>
			<Footer />
		</section>
	);
};

export default PusatBantuan;
