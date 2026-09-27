import { useState } from "react";

const LINKS = [
  ["about", "Про мене"],
  ["skills", "Навички"],
  ["experience", "Досвід"],
  ["education", "Освіта"],
  ["languages", "Мови"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
		<nav className='nav'>
			<div className='nav__row'>
				<span className='nav__mark'>Pecherskyi Maksym</span>
				<ul className={'nav__links' + (open ? ' nav__links--open' : '')}>
					{LINKS.map(([id, label]) => (
						<li key={id}>
							<a
								className='nav__link'
								href={'#' + id}
								onClick={() => setOpen(false)}
							>
								{label}
							</a>
						</li>
					))}
				</ul>
				<button
					className='nav__toggle'
					onClick={() => setOpen(o => !o)}
					aria-label='Меню'
				>
					{open ? '✕' : '☰'}
				</button>
			</div>
		</nav>
	)
}
