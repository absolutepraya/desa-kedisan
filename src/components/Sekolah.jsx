import NavBar from './NavBar';
import Footer from './Footer';
import sekolah from '../data/sekolah.json';

import SDBali from '/assets/images/SDBali.webp';

const Sekolah = () => {
	return (
		<section className='relative flex min-h-screen w-full flex-col items-center space-y-10 overflow-hidden bg-gray-100 pt-20 font-inter'>
			<NavBar activePage='Sekolah' />
			<div className='flex w-[80%] flex-row items-center space-x-6'>
				<p className='text-5xl font-extrabold'>Sekolah di Desa Kedisan</p>
				<div className='h-2 w-auto flex-grow bg-gradient-to-r from-custred to-custorange' />
			</div>

			<div className='flex w-[80%] flex-col items-center space-y-8'>
				<img
					src={SDBali}
					alt='SD Negeri 1 Kedisan'
					className='h-auto w-full rounded-xl'
				/>

				<div className='flex w-full rounded-lg bg-gray-200 px-16 py-8 shadow-md'>
					<div className='grid w-full grid-cols-2 gap-8'>
						{sekolah.map((school, index) => (
							<div
								key={index}
								className='flex flex-col space-y-1'
							>
								<p className='text-lg font-bold'>{school.name}</p>
								<div className='w-fit rounded bg-custred px-2 text-sm text-white'>
									<p>
										Akreditasi: <b>{school.accreditation}</b>
									</p>
								</div>
								<p>
									<b>Alamat:</b> {school.address}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Agar footer selalu berada di bawah */}
			<div className='flex flex-grow' />

			<Footer />
		</section>
	);
};

export default Sekolah;
