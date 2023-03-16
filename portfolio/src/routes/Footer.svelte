<script>
	import discord from '$lib/images/discord.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import github from '$lib/images/github.svg';
	import waves from '$lib/images/layered-waves-haikei.svg';
</script>

<footer>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={discord} alt="Discord" />
		</a>
		<a href="https://www.linkedin.com/in/maximilien-bouyjou-05b686201/">
			<img src={linkedin} alt="linkedin" />
		</a>
		<a href="https://github.com/MaxB0zz?tab=repositories">
			<img src={github} class="git" alt="GitHub" />
		</a>
	</div>
</footer>

<style>
	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		fill: white;
	}
	.corner {
		width: 100%;
		height: 100%;
		display: flex;
		gap: 1em;
		justify-content: center;
		align-items: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 12em;
		background-image: url('../lib/images/layered-waves-haikei.svg');
		background-position: center bottom;
		background-size: 100% auto;
	}

	footer a {
		font-weight: bold;
	}

	@media (max-width: 1100px) {
		footer {
			height: 7em;
		}
	}
	@media (min-width: 480px) {
	}
</style>
