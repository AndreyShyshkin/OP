import Pereverka from '../../components/Pereverka/Pereverka'

export default function PereverkaLab() {
	return (
		<Pereverka
			pereverkaText={
				<div>
					<div>
						<p className='text-sky-500'>Виконання програми Завдання 1:</p>
						<img className='py-4' src='/src/assets/lab1/p1.png' alt='p1' />
						<img
							className='py-4 w-72'
							src='/src/assets/lab1/pc1.jpg'
							alt='pc1'
						/>
					</div>
					<div>
						<p className='text-sky-500'>Виконання програми Завдання 2:</p>
						<img className='py-4' src='/src/assets/lab1/p2.png' alt='p2' />
						<p>Розраховуємо сторому ромбу:</p>
						<img
							className='py-4 w-72'
							src='/src/assets/lab1/pc21.jpg'
							alt='pc21'
						/>
						<p>
							Обчислюємо половину сторони (оскільки висота ділить сторону
							навпіл)
						</p>
						<img
							className='py-4 w-72'
							src='/src/assets/lab1/pc22.jpg'
							alt='pc22'
						/>
						<p>Обчислюємо висоту ромба за теоремою Піфагора</p>
						<img
							className='py-4 w-72'
							src='/src/assets/lab1/pc23.jpg'
							alt='pc23'
						/>
						<p>Обчислюємо меншу діагональ (це подвоєна висота)</p>
						<img
							className='py-4 w-72'
							src='/src/assets/lab1/pc24.jpg'
							alt='pc24'
						/>
					</div>
				</div>
			}
		/>
	)
}
