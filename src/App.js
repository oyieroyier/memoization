import { useState, memo, useMemo } from 'react';
import './App.css';

function Swatch({ params, onClick }) {
	console.log(`Swatch rendered ${params.color}`);
	return (
		<div
			style={{
				margin: 2,
				width: 75,
				height: 75,
				backgroundColor: params.color,
			}}
		></div>
	);
}

const MemoedSwatch = memo(Swatch);

const App = () => {
	const [appRenderIndex, setAppRenderIndex] = useState(0);
	const [color, setColor] = useState('red');

	console.log(`App rendered ${appRenderIndex} times`);

	const params = useMemo(() => ({ color }), [color]);
	return (
		<div className="App">
			<div>
				<button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
					Re-Render App
				</button>
				<button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
					Change Color
				</button>
			</div>
			<div>
				<MemoedSwatch params={params} onClick={() => {}} />
			</div>
		</div>
	);
};

export default App;
