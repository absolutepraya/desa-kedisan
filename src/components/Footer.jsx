import { IconCopyright, IconPhone } from '@tabler/icons-react';

const Footer = () => {
	return (
		<footer className='z-50 flex h-24 w-full flex-col items-center justify-center space-y-1 bg-custred font-inter text-xs text-white shadow-xl'>
			<div className='flex flex-row space-x-1 items-center'>
				<IconPhone
					stroke={1.5}
					className='md:h-5 md:w-5 w-4 h-4'
				/>
				<p>0366-91500 (Pak Asem Karanganyar)</p>
			</div>
			<div className='flex flex-row space-x-1 items-center'>
				<IconCopyright
					stroke={1.5}
					className='md:h-5 md:w-5 w-4 h-4'
				/>
				<p>Copyright 2024 Desa Kedisan — All rights reserved. </p>
			</div>
		</footer>
	);
};

export default Footer;
