import NavBar from './components/NavBar';
import ProfilDesa from './components/ProfilDesa';

const App = () => {
	return (
		<div className={'relative flex flex-col space-y-12 overflow-hidden font-inter min-h-screen w-full bg-gray-200 pt-20'}>
			<NavBar />
			<ProfilDesa />
		</div>
	);
};

export default App;
