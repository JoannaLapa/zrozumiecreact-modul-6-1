import { Recipe } from '../Recipe/Recipe'
import { Button } from '../Button/Button'
import { useContext } from 'react'
import { IsLoggedInStateContext } from '../../context/IsLoggedInStateContext'

export function Article() {
	const [isLoggedIn] = useContext(IsLoggedInStateContext)
	return (
		<article>
			<Recipe />
			{isLoggedIn ? (
				<Button onClick={() => alert('Przepis polubiony!')}>Lubię to! </Button>
			) : (
				<div>
					<p>Zaloguj się, aby polubić</p>
					<Button>Zaloguj</Button>
				</div>
			)}
		</article>
	)
}
