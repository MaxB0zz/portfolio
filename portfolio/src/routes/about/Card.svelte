<script>
	import openIcon from '$lib/icons/open.svg';

	export let cardData = {
		cardType: 'default',
		imgUrl: 'src/lib/images/error.png',
		title: 'Undefined',
		description: 'Undefined'
	};
	$: dotColor = cardData.cardType === 'Art' ? '1' : cardData.cardType === 'Tech' ? '2' : '3';
	$: color = '--color-theme-' + dotColor;



</script>

<div class="cards">
	<div class="card">
		<div class="cardname">
			<div class="txt">
				<div class="dot" style="background-color: var({color});" />
				<p>{cardData.cardType}</p>
			</div>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		</div>
		<div class="cardimg">
			<img src={cardData.imgUrl} alt="thumb" />
		</div>
		<div class="separator" />
		<div class="carddescriptiopn">
			<h1>{cardData.title}</h1>
			<div class="smallstep" />
			<div class="dsctxt">
				<p>{cardData.description}</p>
			</div>
		</div>
	</div>
	<div class="cardFooter">
		<div class="cardButton" on:click={console.log(1)}>
			<div class="innerButton">
				<p>View</p>
				<img src={openIcon} class="openIcon" alt="openIcon" />
			</div>
		</div>
	</div>
</div>

<style>
	@media (max-width: 350px) {
		.cards {
			width: 18em;
		}
	}

	.innerButton p {
		font-weight: 400;
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		text-decoration: none;
		transition: color 0.2s linear;
		color: white;
	}
	.innerButton:hover {
		filter: brightness(1.3);
		cursor: pointer;
	}
	.innerButton img {
		fill: var(--color-bg-0);
		width: 1.2em;
		height: 1.2em;
	}
	.innerButton {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color-bg-1);
		overflow: hidden;
		border-radius: 5px;
		width: 5.8em;
		height: 3.1em;
		gap: 0.1em;
	}
	.cardFooter {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 20em;
		height: 3.3em;
		margin-top: 1em;
	}
	.cardButton {
		width: 6em;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--grad-bg);
		background: var(--grad-bg-lin);
		overflow: hidden;
		border-radius: 5px;
	}
	.dsctxt {
		display: flex;
		width: 90%;
		margin-left: 5%;
	}
	.dsctxt p {
		font-weight: 400;
		font-size: 0.75rem;
		letter-spacing: 0.05em;
		text-decoration: none;
		transition: color 0.2s linear;
		color: var(--color-bg-2);
		filter: opacity(0.8);
	}
	.carddescriptiopn h1 {
		font-weight: 500;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		color: var(--color-bg-2);
	}

	.separator {
		height: 0.2em;
		background: var(--grad-bg);
		background: var(--grad-bg-lin);
		width: 100%;
	}
	.smallstep {
		margin-top: 0;
		height: 0.05em;
		background: var(--grad-bg);
		background: var(--color-bg-1);
		filter: brightness(150%);
		width: 80%;
		margin-left: 10%;
	}
	.cardimg {
		max-width: 20em;
		height: 15em;
		overflow: hidden;
		display: flex;
		align-items: center;
	}

	.cardimg img {
		width: 20em;
	}
	.card {
		border-radius: 5px;
		max-width: 20em;
		height: 30em;
		overflow: hidden;
		background-color: var(--color-bg-1);
		filter: brightness(1.15);
		transition: 0.2s;
	}
	.card:hover {
		filter: brightness(1.5);
		transform: scale(1.05);
	}
	.cardname {
		display: flex;
		justify-content: left;
		height: 1.5em;
		align-items: center;
	}
	.txt {
		background-color: var(--color-bg-0);
		height: 1.5em;
		width: 8em;
		display: flex;
		justify-content: left;
		align-items: center;
	}
	.txt p {
		font-weight: 900;
		font-size: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
	.dot {
		height: 0.8em;
		width: 0.8em;
		border-radius: 50%;
		margin-right: 0.2em;
		margin-left: 0.4em;
	}
	.cardname svg {
		fill: var(--color-bg-0);
		height: 1.5em;
	}
</style>
