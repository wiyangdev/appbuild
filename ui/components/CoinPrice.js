import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import styles from '../styles/Home.module.css';

const CoinPrice = () => {

    const [coin1, setCoin1] = useState(null)
	const [coin2, setCoin2] = useState(null)
	const [coin3, setCoin3] = useState(null)
	const [coin4, setCoin4] = useState(null)
	const [coin5, setCoin5] = useState(null)
	const [coin6, setCoin6] = useState(null)
	const [coin7, setCoin7] = useState(null)
	const [coin8, setCoin8] = useState(null)
	const [coin9, setCoin9] = useState(null)
	const [coin10, setCoin10] = useState(null)

    useEffect(() => {
		
		const api1 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=mina-protocol&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api2 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api3 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api4 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=tether&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api5 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api6 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=usd-coin&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api7 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=dogecoin&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api8 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api9 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=litecoin&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		const api10 = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=aptos&order=market_cap_desc&per_page=1&page=1&sparkline=false'
		
		const getApi1 = axios.get(api1);
		const getApi2 = axios.get(api2);
		const getApi3 = axios.get(api3);
		const getApi4 = axios.get(api4);
		const getApi5 = axios.get(api5);
		const getApi6 = axios.get(api6);
		const getApi7 = axios.get(api7);
		const getApi8 = axios.get(api8);
		const getApi9 = axios.get(api9);
		const getApi10 = axios.get(api10);	
 
		const fetchData = () => {
		axios.all([getApi1, getApi2, getApi3, getApi4, getApi5, getApi6, getApi7, getApi8, getApi9, getApi10]).then(axios.spread((...responses) => {
			const dataCoin1 = responses[0]
			const dataCoin2 = responses[1]
			const dataCoin3 = responses[2]
			const dataCoin4 = responses[3]
			const dataCoin5 = responses[4]
			const dataCoin6 = responses[5]
			const dataCoin7 = responses[6]
			const dataCoin8 = responses[7]
			const dataCoin9 = responses[8]
			const dataCoin10 = responses[9]
			
			setCoin1(dataCoin1)
			setCoin2(dataCoin2)
			setCoin3(dataCoin3)
			setCoin4(dataCoin4)
			setCoin5(dataCoin5)
			setCoin6(dataCoin6)
			setCoin7(dataCoin7)
			setCoin8(dataCoin8)
			setCoin9(dataCoin9)
			setCoin10(dataCoin10)

		})).catch(errors => {
			// react on errors.
		})
		}
		
		fetchData();
		
		const interval = setInterval(() => {
			fetchData();
		}, 10000);
		
		return () => clearInterval(interval);
    }, [])

	if (!coin1) return null

    return (
	<div>
		<div className={styles.list}>
	  
			<div className={styles.card}>
                <span className={styles.img1} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin1.data[0].name}</h5>
					<p className={styles.lastprice}>${coin1.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin1.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin1.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin1.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img2} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin2.data[0].name}</h5>
					<p className={styles.lastprice}>${coin2.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin2.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin2.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin2.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img3} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin3.data[0].name}</h5>
					<p className={styles.lastprice}>${coin3.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin3.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin3.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin3.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img4} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin4.data[0].name}</h5>
					<p className={styles.lastprice}>${coin4.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin4.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin4.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin4.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img5} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin5.data[0].name}</h5>
					<p className={styles.lastprice}>${coin5.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin5.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin5.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin5.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img6} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin6.data[0].name}</h5>
					<p className={styles.lastprice}>${coin6.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin6.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin6.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin6.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img7} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin7.data[0].name}</h5>
					<p className={styles.lastprice}>${coin7.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin7.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin7.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin7.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img8} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin8.data[0].name}</h5>
					<p className={styles.lastprice}>${coin8.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin8.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin8.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin8.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img9} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin9.data[0].name}</h5>
					<p className={styles.lastprice}>${coin9.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin9.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin9.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin9.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={styles.img10} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{coin10.data[0].name}</h5>
					<p className={styles.lastprice}>${coin10.data[0].current_price.toLocaleString()}</p>
				</div>

				{coin10.data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{coin10.data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{coin10.data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>

		</div>
	</div>
    )
}

export default CoinPrice