import ProfilDesa from './components/ProfilDesa';
import Galeri from './components/Galeri';
import Kependudukan from './components/Kependudukan';
import Explore from './components/Explore';
import Sekolah from './components/Sekolah';
import FasKes from './components/FasKes';
import PusatBantuan from './components/PusatBantuan';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/*'
					element={
						<Navigate
							to='/'
							replace
						/>
					}
				/>
				<Route
					path='/'
					element={<ProfilDesa />}
				/>
				<Route
					path='/profil-desa'
					element={<ProfilDesa />}
				/>
				<Route
					path='/galeri'
					element={<Galeri />}
				/>
				<Route
					path='/kependudukan'
					element={<Kependudukan />}
				/>
				<Route
					path='/explore'
					element={<Explore />}
				/>
				<Route
					path='/sekolah'
					element={<Sekolah />}
				/>
				<Route
					path='/fasilitas-kesehatan'
					element={<FasKes />}
				/>
				<Route
					path='/pusat-bantuan'
					element={<PusatBantuan />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
