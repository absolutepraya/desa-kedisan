import { IconCopyright } from '@tabler/icons-react';

const Footer = () => {
	return (
		<footer className='flex h-24 w-full flex-row items-center justify-center space-x-1 bg-custred font-inter text-white shadow-xl'>
			<IconCopyright
				size={20}
				stroke={1.5}
			/>
			<p>Copyright 2024 Desa Kedisan — All rights reserved. </p>
		</footer>
	);
};

export default Footer;
