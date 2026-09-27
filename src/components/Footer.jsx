export default function Footer() {
  return (
		<footer>
			<div className='wrap foot__row'>
				<span className='foot__text'>
					© {new Date().getFullYear()} Pecherskyi Maksym — Front-End Developer
				</span>
				<button
					className='foot__top'
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					Нагору ↑
				</button>
			</div>
		</footer>
	)
}
