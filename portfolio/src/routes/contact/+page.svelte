<script>
    import Messages from "../Messages.json";
    import TextBubble from "./TextBubble.svelte";
    async function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    let text_to_animate = "this is some very long text, isnt it ? but im pretty sure its still not long enough so i have top keep writing before i run out of ideas. For the mean time also just describe you my day. It was pretty boring, i first had to participate to a flew classes such as modern physics and then completed one of my assignments for saturday"
    let text = text_to_animate.split(" ")
    let text_list = []

    let fillMessages = async () => {
        for (let i = 0; i < text.length; i++) {
            await sleep(text[i].length * 10);
            text_list = [...text_list, text[i]];
        }
    }
    $: fillMessages();

</script>

<div class="contactComponent">
    <div class="bgtxt">
        <h2>Contact</h2>
    </div>
    <div class="borderGrad">
        {#each text_list as t}
            <TextBubble Message={{data:t}}/>
        {/each}
    </div>
</div>

<style>

    p, span {
        display: inline-flex;
        word-break: break-all;
    }


    .bgtxt {
        position: absolute;
        height: 100%;
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
    .contactComponent {
        width: 100%;
        display: flex;
        justify-content: center;
    }

</style>