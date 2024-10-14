import NavBar from './NavBar';
import Footer from './Footer';

const FasKes = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar />
			<div className='flex w-[80%] flex-row items-center space-x-6'>
				<p className='text-5xl font-extrabold'>Fasilitas Kesehatan</p>
				<div className='h-2 w-auto flex-grow bg-gradient-to-r from-custred to-custorange' />
			</div>

			<div className='flex w-[80%] flex-col items-center space-y-8'>
				<div className='flex w-full rounded-lg bg-gray-200 px-16 py-8 shadow-md'>
					<div className='grid w-full grid-cols-2 gap-8'>
						<div className='flex flex-col space-y-1'>
							<p className='text-lg font-bold'>Puskesmas</p>
							<div className='w-fit rounded bg-custred px-2 text-sm text-white'>
								<p>
									Alamat: <b>Jalan Raya Kedisan, Kedisan, Tegallalang, Gianyar</b>
								</p>
							</div>
							<p>
								<b>Telepon:</b> 0812-3619-9999
							</p>
						</div>
						<div className='flex flex-col space-y-1'>
							<p className='text-lg font-bold'>Posyandu</p>
							<div className='w-fit rounded bg-custred px-2 text-sm text-white'>
								<p>
									Alamat: <b>Jalan Raya Kedisan, Kedisan, Tegallalang, Gianyar</b>
								</p>
							</div>
							<p>
								<b>Telepon:</b> 0812-3619-9999
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</section>
	);
};

export default FasKes;
