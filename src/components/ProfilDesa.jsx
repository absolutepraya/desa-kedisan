import BanjarDinasKebon from '../assets/images/BanjarDinasKebon.webp';

const ProfilDesa = () => {
	return (
		<section className='flex w-full flex-col items-center space-y-10'>
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

			<div className='flex max-w-[80%] flex-row space-x-4 rounded-xl border'>
				<div className='flex max-w-[50%] flex-col space-y-4 rounded-xl border bg-white px-6 py-6 shadow-xl'>
					<p className='text-center text-2xl font-bold'>📌 Desa Kedisan</p>
					<p className='text-justify'>Desa Kedisan adalah tujuan wisata menawan yang terkenal dengan sawah bertingkatnya yang menakjubkan, warisan budaya yang kaya, dan masyarakatnya yang ramah. Di sini, Anda dapat menikmati keindahan alam yang tenang, menjelajahi pasar tradisional, dan menikmati kesenian dan kerajinan lokal yang unik. Keramahan penduduk desa yang hangat akan membuat kunjungan Anda menjadi pengalaman yang tak terlupakan. Perpaduan antara pemandangan yang indah dan kekayaan budaya menjadikan Desa Kedisan sebagai destinasi yang unik dan menarik.</p>
				</div>
				<div className='flex flex-grow overflow-hidden rounded-xl shadow-xl'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.013374268736!2d115.3688433147849!3d-8.28370399404164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1e4b3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sDesa%20Kedisan!5e0!3m2!1sen!2sid!4v1612345678901!5m2!1sen!2sid'
						width='100%'
						height='100%'
						style={{ border: 0 }}
						allowFullScreen=''
						loading='lazy'
					></iframe>
				</div>
			</div>
			{/* Pengertian Kedisan */}

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Visi dan Misi</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>

			<div className='flex w-[80%] flex-col space-y-5'>
				<div className='flex w-full flex-row overflow-hidden rounded-xl border bg-white'>
					<div className='flex w-[20%] items-center justify-center bg-gradient-to-bl from-custred to-custorange text-3xl font-extrabold tracking-widest text-white'>Visi</div>
					<div className='flex flex-col px-12 py-6'>
						<p>Kadisan Berseri:</p>
						<li>Terwujudnya Masyarakat Desa Kedisan yang Bersih</li>
						<li>Terwujudnya Masyarakat Desa Kedisan yang Sejahtera</li>
						<li>Terwujudnya Masyarakat Desa Kedisan yang Religius</li>
					</div>
				</div>
				<div className='flex w-full flex-row overflow-hidden rounded-xl border bg-white'>
					<div className='flex flex-col px-12 py-6'>
						<li>Membangun sumber daya manusia yang berkualitas.</li>
						<li>Menumbuhkan kemandirian dan kewirausahaan masyarakat melalui pemberdayaan potensi desa.</li>
						<li>Menjaga lingkungan yang bersih dan hijau.</li>
						<li>Pemerataan pembangunan di segala bidang.</li>
					</div>
					<div className='flex w-[20%] items-center justify-center bg-gradient-to-br from-custred to-custorange text-3xl font-extrabold tracking-widest text-white'>Misi</div>
				</div>
			</div>

			<div className='flex w-full flex-col items-center space-y-2'>
				<p className='text-3xl font-bold'>Struktur Organisasi</p>
				<div className='h-1 w-[80%] bg-custred' />
			</div>
		</section>
	);
};

export default ProfilDesa;
