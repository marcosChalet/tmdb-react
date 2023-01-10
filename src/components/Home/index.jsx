import { useState, useEffect } from "react"
import Main from "../template/Main"

import "./index.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

	const [topMovies, settopMovies] = useState([])

	const getTopRatedMovies = async (url) => {
		const res = await fetch(url)
		const data = await res.json()

		settopMovies(data.results)
	}

	useEffect(() => {
		const topRatedURL = `${moviesURL}top_rated?${apiKey}`
		getTopRatedMovies(topRatedURL)
	}, [])

	return (
		<Main movies={topMovies} query={"Home"} />
	)
}

export default Home