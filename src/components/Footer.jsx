import { IconCopyright, IconPhone } from '@tabler/icons-react';

const Footer = () => {
	return (
		<footer className='flex h-24 w-full flex-col items-center justify-center space-y-1 bg-custred font-inter text-white shadow-xl'>
			<div className='flex flex-row space-x-1'>
				<IconPhone
					size={20}
					stroke={1.5}
				/>
				<p>0366-91500 (Pak Asem Karanganyar)</p>
			</div>
			<div className='flex flex-row space-x-1'>
				<IconCopyright
					size={20}
					stroke={1.5}
				/>
				<p>Copyright 2024 Desa Kedisan — All rights reserved. </p>
			</div>
		</footer>
	);
};

export default Footer;
