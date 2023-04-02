<script>
    import {scale} from "svelte/transition";
    export let Message = {
        data: "Uh i didnt load",
    }
    let random_size = Math.random()/1.1 + 0.5;
</script>

<span>
    <p in:scale style="font-size: {random_size}rem;">{Message.data} </p>
</span>

<style>
    p {
        font-weight: 700;
        letter-spacing: 0.15em;
        text-decoration: none;
        color: white;
    }

    p, span {
        display: inline;
    }
    p:after, span:after {
        content: ' ';
    }
</style>