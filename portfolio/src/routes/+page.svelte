<script>
	import ChatBubble from "./ChatBubble.svelte";
	import Messages from "./Messages.json";
	import UserIcon from "$lib/images/me.png"

	async function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	let AllMessages = [];
	let isWritting = true;


	let fillMessages = async () => {
		for (let i = 0; i < Messages.length; i++) {
			isWritting = true;
			await sleep(Messages[i].data.length * 10);
			isWritting = false;
			AllMessages = [...AllMessages, Messages[i]];
			await sleep(Math.random() * 500 + 500);
		}
	}
	$: fillMessages();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="Chat">
		<div class="icons">
			<div class="gradientBorder">
				<div class="border">
					<img src={UserIcon} class="UserIcon" alt="UserIcon" />
				</div>
			</div>
			<div>
				{#each AllMessages as m}
					<ChatBubble Message={m}/>
				{/each}
				{#if isWritting}
					<div class="bubble">
						<div class="writingBubble"/>
						<div id="ball2" class="writingBubble"/>
						<div id="ball3" class="writingBubble"/>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes smooth-blink {
		from {
			filter: opacity(0);
			transform: scale(0.8);
			}
		to {filter: opacity(1);
			transform: scale(1);
		}

	}

	.bubble {
		height: 2.5em;
		background-color: var(--color-bg-1);
		filter: brightness(1.15);
		overflow: hidden;
		border-radius: 0.7em;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 5em;
		margin-top: 1em;
	}

	.writingBubble {
		min-height: 0.8em;
		min-width: 0.8em;
		margin-right: 0.5em;
		margin-left: 0.5em;
		border-radius: 50%;
		background: var(--grad-bg);
		background: var(--grad-bg-lin);
		animation: smooth-blink alternate 1s;
		animation-iteration-count: infinite;
	}
	#ball2 {
		animation-delay: 0.3s;
	}
	#ball3 {
		animation-delay: 0.6s;
	}

	.icons {
		display: flex;
		justify-content: start;
	}
	img {
		width: 85%;
		height: 85%;
		border-radius: 50%;
		overflow: hidden;
	}
	.border {
		background: var(--grad-bg);
		background: var(--grad-bg-lin);
		width: 2.5em;
		height: 2.5em;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		overflow: hidden;
	}
	.gradientBorder {
		margin-right: 0.6em;
		display: flex;
		justify-content: center;
		align-items: end;
	}

	.Chat {
		width: 60%;
	}

	@media (max-width: 500px) {
		.Chat {
			width: 90%;
		}
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	h1 {
		width: 100%;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
