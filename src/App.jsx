import ProfilDesa from './components/ProfilDesa';
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
			</Routes>
		</Router>
	);
};

export default App;
