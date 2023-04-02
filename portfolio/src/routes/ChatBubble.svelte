<script>
    import openIcon from '$lib/icons/open.svg';
    import {slide} from "svelte/transition";
    export let Message = {
        data: "Uh i didnt load",
        redirect: null
    }
</script>

<div in:slide class="ChatBubble">
    <div class="MsgContainer">
        <div class="leftBorder"/>
        <div class="Message">
            <p>
                {Message.data}
            </p>
        </div>
        {#if Message.redirect}
            <img src={openIcon} class="openIcon" alt="openIcon" />
        {/if}
    </div>
</div>


<style>

    @media (max-width: 500px) {
        .ChatBubble {
            min-width: 3em;
            max-width: 16em;
        }
        .MsgContainer {
            min-width: 3em;
            max-width: 16em;
        }
    }
    img {
        height: 1.1em;
        width: 1.1em;
        padding-right: 0.5em;
    }

    .ChatBubble {
        display: flex;
        background-color: var(--color-bg-1);
        filter: brightness(1.3);
        margin-top: 1em;
        border-top-right-radius: 0.8em;
        overflow: hidden;
        min-width: 3em;
        max-width: 32em;
        transition: 0.3s;
    }

    .MsgContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 1.5em;
        min-width: 3em;
        max-width: 32em;
    }

    .ChatBubble:hover {
        filter: brightness(1.5);
        transform: scale(1.05);
        cursor: pointer;
    }

    .leftBorder {
        min-height: 1.5em;
        height: 100%;
        background: var(--grad-bg);
        background: var(--grad-bg-lin);
        width: 1em;

    }

    p {
        margin: 1em;
        font-weight: 600;
        font-size: 0.7rem;
        letter-spacing: 0.15em;
        text-decoration: none;
        color: white;
    }

</style>
