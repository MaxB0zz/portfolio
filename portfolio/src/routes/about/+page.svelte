<script>
	import Card from './Card.svelte';
	import chevronRight from '$lib/icons/leftChevron.svg';
	import { CardHandler } from './CardHandler.js';
	import {fade} from "svelte/transition";

	$: innerWidth = 0;
	$: nbCards = innerWidth > 1050 ? 3 : innerWidth > 750 ? 2 : 1;
	$: nbClicks = 0;
	let cardHandler = new CardHandler();
	$: cards = cardHandler.render(nbClicks * nbCards, nbCards);
	$: isIn = true;

	async function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Projects" />
</svelte:head>

<svelte:window bind:innerWidth />

<div class="about">
	<div class="bgtxt">
		<h2>Projects</h2>
	</div>
	<div class="aboutdesc">
		<div class="gradborder">
			<div class="text-column">
				<h1>My projects</h1>
			</div>
		</div>
	</div>
	<div class="cards">
		{#if isIn}
			<div class="transitionCards" transition:fade|local>
				{#each cards as c}
					<Card cardData={c} />
				{/each}
			</div>
		{/if}
	</div>

	<div class="nextButton">
		<div class="nextCards"
			 on:click={async () => {
			 $: isIn = false;
			 await sleep(400);
			 $: nbClicks++;
			 $: isIn = true;
		}}>
			<img src={chevronRight} alt="chevronright" />
		</div>
	</div>
</div>

<style>
	.transitionCards {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		gap: 5em;
	}
	.bgtxt {
		position: absolute;
		height: 90%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: start;
		z-index: -100;
	}

	.bgtxt h2 {
		text-align: center;
		color: white;
		font-weight: 700;
		font-size: 25vw;
		filter: opacity(0.03);
	}
	.aboutdesc {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 8em;
		width: 100%;
	}

	.gradborder {
		border-radius: 10px;
		overflow: hidden;
		height: 4em;
		width: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nextButton {
		display: flex;
		justify-content: center;
		margin-top: 3em;
		user-select: none;
	}

	.nextCards {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 4em;
		width: 4em;
		border-radius: 50%;
		overflow: hidden;
		background-color: var(--color-bg-1);
		filter: brightness(1.3);
	}

	.nextCards:hover {
		filter: brightness(1.8);
	}

	.nextCards img {
		transform: rotate(180deg);
		height: 2em;
		width: 2em;
	}

	.about {
		width: 100%;
	}

	.cards {
		display: flex;
		justify-content: center;
		gap: 5em;
		height: 34.3em;
	}

	@media (max-width: 1100px) {
		.transitionCards {
			gap: 1em;
		}

		.gradborder {
			width: 60%;
		}
	}

	p {
		text-align: center;
		color: white;
		font-weight: 700;
		font-size: 0.8rem;
	}

	h1 {
		font-weight: 700;
		font-size: 1.5rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		text-decoration: none;
		background-color: var(--color-bg-2);
		background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
		background-size: 100%;
		background-repeat: repeat;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
	}
</style>