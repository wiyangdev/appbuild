import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import styles from '../styles/Home.module.css';

const CoinPrice = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=mina-protocol%2C%20bitcoin%2C%20ethereum%2C%20tether%2C%20usd-coin%2C%20binancecoin%2C%20dogecoin%2C%20matic-network%2C%20litecoin%2C%20aptos&order=market_cap_desc&per_page=10&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
		
		const interval = setInterval(() => {
			 axios.get(url).then((response) => {
				setData(response.data)
			}).catch((error) => {
				console.log(error)
			})

		}, 10000);
		
		return () => clearInterval(interval);
		
    }, [])

    // console.log(data)

    if (!data) return null

    return (
	<div>
		<div className={styles.list}>
	  
			<div className={styles.card}>
                <span className={data[0].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[0].name}</h5>
					<p className={styles.lastprice}>${data[0].current_price.toLocaleString()}</p>
				</div>

				{data[0].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[0].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[0].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[1].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[1].name}</h5>
					<p className={styles.lastprice}>${data[1].current_price.toLocaleString()}</p>
				</div>

				{data[1].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[1].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[1].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[2].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[2].name}</h5>
					<p className={styles.lastprice}>${data[2].current_price.toLocaleString()}</p>
				</div>

				{data[2].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[2].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[2].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[3].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[3].name}</h5>
					<p className={styles.lastprice}>${data[3].current_price.toLocaleString()}</p>
				</div>

				{data[3].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[3].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[3].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[4].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[4].name}</h5>
					<p className={styles.lastprice}>${data[4].current_price.toLocaleString()}</p>
				</div>

				{data[4].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[4].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[4].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[5].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[5].name}</h5>
					<p className={styles.lastprice}>${data[5].current_price.toLocaleString()}</p>
				</div>

				{data[5].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[5].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[5].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[6].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[6].name}</h5>
					<p className={styles.lastprice}>${data[6].current_price.toLocaleString()}</p>
				</div>

				{data[6].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[6].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[6].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[7].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[7].name}</h5>
					<p className={styles.lastprice}>${data[7].current_price.toLocaleString()}</p>
				</div>

				{data[7].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[7].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[7].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[8].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[8].name}</h5>
					<p className={styles.lastprice}>${data[8].current_price.toLocaleString()}</p>
				</div>

				{data[8].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[8].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[8].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>
			
			<div className={styles.card}>
                <span className={data[9].id} />
				<p></p>
				<div>
					<h5 className={styles.coinname}>{data[9].name}</h5>
					<p className={styles.lastprice}>${data[9].current_price.toLocaleString()}</p>
				</div>

				{data[9].price_change_percentage_24h < 0 ? (
					<span className={styles.red}>
						<FiArrowDown className={styles.icon} />
						{data[9].price_change_percentage_24h.toFixed(2)}%
					</span>
				) : (
						<span className={styles.green}>
							<FiArrowUpRight className={styles.icon} />
							{data[9].price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
			</div>

		</div>
	</div>
    )
}

export default CoinPrice