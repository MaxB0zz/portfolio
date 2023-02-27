<svelte:head>
	<title>Projects</title>
	<meta name="description" content="Projects" />
</svelte:head>

<script>
	import Card from "./Card.svelte";
	import chevronRight from "$lib/icons/leftChevron.svg"
	import {CardHandler} from "./CardHandler.js";

	$: innerWidth = 0;
	let click = [];
	$: nbCards = innerWidth > 1050 ? 3: innerWidth > 750 ? 2 : 1;
	$: nbClicks = 0;
	let cardHandler = new CardHandler();
	$: cardIndex = Math.min(nbCards * nbClicks, cardHandler.getNbcards()  / nbCards );


	$: cards = cardHandler.render(cardIndex, nbCards);


	function addClicks() {
		click.push(click.length + 1);
		console.log("abc");
	}

</script>

<svelte:window bind:innerWidth={innerWidth} />


<div class="about">
	<div class="aboutdesc">
		<div class="gradborder">
			<div class="textcontainer">
				<div class="text-column">
					<h1>My projects</h1>
					<p> {nbCards}</p>
				</div>
			</div>
		</div>
	</div>
	<div class="cards">
		{#each cards as c}
			<Card cardData={c} />
		{/each}
	</div>
	<div class="nextButton" on:click={() => {
		$: nbClicks++;
	}}>
		<div class="nextCards">
			<img src={chevronRight} alt="chevronright">
		</div>
	</div>

</div>

<style>
	.aboutdesc {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 8em;
		margin-bottom: 1em;
		width: 100%;
	}
	.text-column h1 {
		margin-top: 0.3em;

	}

	.gradborder {
		border-radius: 10px;
		overflow: hidden;
		height: 8em;
		width: 60%;
		background: var(--grad-bg);
		background: var(--grad-bg-lin);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.textcontainer {
		background-color: var(--color-bg-1);
		width: 99.5%;
		height: 98%;
		border-radius: 10px;
		overflow: hidden;
	}
	.nextButton {
		display: flex;
		justify-content: center;
		margin-top: 3em;
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
	}
	@media (max-width: 1100px) {
		.cards {
			gap: 1em;
		}
		.gradborder {
			width: 98%;
		}
	}
	p {
		text-align: center;
		color: white;
		font-weight: 700;
		font-size: 0.8rem;
	}

	h1 {
		background-image: var(--grad-bg-lin);
		background-size: 100%;
		background-repeat: repeat;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		font-weight: 700;
		font-size: 1.5rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		margin-top: 0em;
	}
	.separator {
		margin-top: 0em;
		height: 0.1em;
		background: var(--grad-bg);
		background: var(--grad-bg-lin);
		width: 100%;
	}
</style>
