// Import komponen yang diperlukan
import NavBar from './NavBar';
import Footer from './Footer';

const PusatBantuan = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			{/* NavBar, tidak mengaktifkan active page */}
			<NavBar activePage={null} />

			{/* Judul Pusat Bantuan */}
			<div className='flex w-[80%] flex-col space-y-2'>
				<div className='flex w-full flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0'>
					<p className='text-4xl font-extrabold md:text-5xl'>Pusat Bantuan Desa Kedisan</p>
					<div className='h-2 w-full bg-gradient-to-r from-custred to-custorange md:w-auto md:flex-grow' />
				</div>
				<p className='font-semibold'>Silakan mengisi form berikut untuk mendapatkan bantuan dari kami.</p>
			</div>

			{/* Form pusat bantuan */}
			<div className='flex w-[80%] max-w-[40rem] flex-col space-y-3'>
				{/* Input nama lengkap */}
				<div className='flex w-full flex-col space-y-2'>
					<label className='text-lg font-semibold'>Nama Lengkap</label>
					<input
						type='text'
						className='w-full rounded-md border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custred'
						placeholder='Contoh: Budiarta Kusuma'
					/>
				</div>

				{/* Input email */}
				<div className='flex w-full flex-col space-y-2'>
					<label className='text-lg font-semibold'>Email</label>
					<input
						type='email'
						className='w-full rounded-md border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custred'
						placeholder='Contoh: budiarta.kusuma@gmail.com'
					/>
				</div>

				{/* Input nomor telepon */}
				<div className='flex w-full flex-col space-y-2'>
					<label className='text-lg font-semibold'>Nomor Telepon</label>
					<input
						type='tel'
						className='w-full rounded-md border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custred'
						placeholder='Contoh: 081234567890'
					/>
				</div>

				{/* Input pesan, menggunakan textarea karena pesan bisa panjang */}
				<div className='flex w-full flex-col space-y-2'>
					<label className='text-lg font-semibold'>Pesan</label>
					<textarea
						className='w-full rounded-md border-2 border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-custred'
						placeholder='Tuliskan pesan Anda di sini...'
					/>
				</div>

				{/* Tombol kirim */}
				<button className='w-full rounded-md bg-custred p-2 font-semibold text-white transition-all duration-100 hover:bg-red-700'>Kirim</button>
			</div>

			{/* Agar footer selalu berada di bawah */}
			<div className='flex flex-grow' />

			{/* Footer */}
			<Footer />
		</section>
	);
};

export default PusatBantuan;
