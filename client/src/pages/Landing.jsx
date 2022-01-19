import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css"


export default function Landing(){

	return(
		<div className={styles.landing}>
			<div>
				<button className={styles.button}>Iphone</button>
				<button className={styles.button}>Mac</button>
				<button className={styles.button}>Watch</button>
				<button className={styles.button}>Airpods</button>
				<button className={styles.button}>Macbook</button>
				<button className={styles.button}>TV and Home</button>
			</div>
			
			<div>
				
				
			</div>
			<div>
				<p>"La innovación es lo que distingue a un lider de un seguidor"<br/> Steve  Jobs</p>
			</div>

{/* 
			<h1 className={styles.h1}>Bienvenidos a e-commerce apple</h1>
			<button>Ingresar</button> */}


		</div>
		
			
		
	)
}