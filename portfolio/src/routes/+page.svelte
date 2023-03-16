<script>
	import ChatBubble from "./ChatBubble.svelte";
	import Messages from "./Messages.json";
	import UserIcon from "$lib/images/me.png"
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
				{#each Messages as m}
					<ChatBubble Message={m}/>
				{/each}
				<div class="bubble">
					<div id="ball1" class="writingBubble"/>
					<div id="ball2" class="writingBubble"/>
					<div id="ball3" class="writingBubble"/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.bubble {
		height: 2.5em;
		background-color: var(--color-bg-1);
		filter: brightness(1.15);
		overflow: hidden;
		border-radius: 0.7em;
		display: flex;
		justify-content: space-between;
		gap: 0;
		align-items: center;
		width: 5em;
		margin-top: 1em;
	}

	.writingBubble {
		height: 0.8em;
		width: 0.8em;
		border-radius: 50%;
		background: var(--grad-bg);
		background: var(--grad-bg-lin);
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
		width: 100%;
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
